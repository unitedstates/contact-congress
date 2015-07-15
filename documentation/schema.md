# Schema

This document describes how we're currently translating the process of filling
out a web form into [YAML](http://www.yaml.org/), a human-readable data
serialization format.

This schema is now fairly concrete in that it's deployed to several production systems.
To suggest a change, please file a ticket to
([the issue tracker](https://github.com/unitedstates/congress-contact/issues))
and allow time for it to be discussed with implementors prior to making changes.

You can [jump to the examples](#examples) if you just want a quick reference.

---

## Top-level attributes

The top level of a member's contact schema includes only two fields: `bioguide` and `contact_form`.

`bioguide` is the legislator's assigned [Bioguide ID](http://bioguide.congress.gov)
which can be used to connect this data to other data sources in the
[unitedstates project](https://github.com/unitedstates).

`contact_form` is a nested hash of the pertinent details of successfully
filling out and validating receipt of the member's contact form.

## Contact form fields

**method**

The HTTP method used to submit the form in all caps, most likely `GET` or `POST`

**action**

The URL the form should submit to. An empty string ('') can be used to represent
the URL the form is located at, but otherwise, this should be an absolute URL
like `http://github.com/unitedstates/congress-contact`, rather than
`/unitedstates/congress-contact`, even if that is what appears in the form.

**steps**

A list of the steps that make up a successful submission of the form. Steps are
a subset of [Capybara methods](http://rubydoc.info/github/jnicklas/capybara/master#Interacting_with_forms), one of:

- [`visit`](#visit): The act of navigating to a given url.
- [`find`](#find): Locating a selector on the page, an indication that no further 
    steps should be executed until the selector is present and visible.
- [`fill_in`](#fill_in): Entering text into a text `input` or `textarea`.
- [`select`](#select): Choosing a value from a `select` list.  If this value
    isn't found, choose an option with the text matching the value of `value`
    in the YAML file.  (This is so that we can choose options by text, since some
    forms do not include `value` attributes.)
- [`check`](#checkuncheckchoose): Ticking a checkbox `input`.
- [`uncheck`](#checkuncheckchoose) The opposite of `check`.
- [`choose`](#checkuncheckchoose) Ticking a specific item in a set of radio 
    buttons.
- [`click_on`](#click_on) Clicking a link or `button`, most likely to submit a 
    `form`.
- [`wait`](#wait): **Experimental.** Indicates that the
    specified time interval should pass before proceeding.
- [`javascript`](#javascript): Execute some javascript on current page

**success**

A basic description of what a successful HTTP response looks like. This is a
hash of `headers` and `body` content:

- `headers`  
    Any standard HTTP header can be expected here, but most implementations won't 
    need this information. `status` is provided as an example.
  - `status`: The numeric http code the response should match, eg `200`
- `body`
  - `contains`: A plain string that should be present in the body. This is 
    preferred over `matches` unless a more complex rule is necessary.
  - `matches`: A regular expression bounded by plain string delimiters ("")
    for portability. It's preferable to provide a pattern (if one is needed) that can 
    be matched case-insensitively and on one line.

**retry**

Failure, in general, can be assumed in the absence of success. But, there are
some conditions where feedback can be provided to the 'user' to correct an error.
Address validation and CAPTCHA failure are the two prime examples of scenarios
in which a retry could be prudent.

`retry` should be specified as an array of retry conditions, including a `reason`,
a `selector` or `contains` value, and a `resubmit` array, containing:

- `reason`  
    An identifier of the failure type. Currently, `captcha` is the only specified
    value.
- `selector`  
    A css selector whose presence indicates this specific type of failure.
- `content`  
    Text whose presence indicates this specific type of failure.
- `resubmit`  
    A list of field values (such as `$CAPTCHA`) that need to be resubmitted.
    The expectation is that clients will redraw whatever interface is necessary
    using the definition of that value's field in the form YAML.

---

## Types of steps

### visit

The value of a visit step is just a `string` url.

### find

The `selector` of a find step is just a string CSS selector which should
be found on the page (and should be visible) before proceeding to execute more steps.

The `value` of a find step is optional, and it may specify the markup contained
in the element that is required for this element to be found.

The `options` attribute for the `find` step may be specified as `wait: x`,
where `x` is an integer number of seconds.  If the element is not found within
this number of seconds, the form fill will be abandoned and should return an error to the caller.

### fill_in

The value of a fill_in step can be a single field, or a list of hashes
defining a batch of fields to fill in at once, but should be defined as
a list either way. Each hash describes a form field by a few attributes,
many of which are common to most steps:

- `name`: The `name` HTML attribute of the field to be filled out.
- `selector`: It's expected that a specific CSS selector will be provided in 
    addition to the `name` field, because it's possible that more than one field 
    with the same name (`email`, for example) may be present on the page.
- `value`: Either a string value to enter into the form, or a 'variable' 
    placeholder, such as `$EMAIL`. These placeholders are listed and explained in 
    [variables.yaml](../support/variables.yaml) in the support folder of this repo.
    The leading dollar sign is used to help disambiguate these special values from 
    an all-caps string value that might be intended to go directly into the form 
    field.
- `required` (ironically, optional): This field will be present if a field *must* 
    be filled out with a value in order for the form to be valid.
- `options` (fittingly, optional): This attributes meaning changes with `value`. If
    the `value` is one of the following, `options` can be specified accordingly:
  - `$EMAIL`: `allows_plus: true` or `allows_plus: false`, depending on if the form
      allows a plus sign in the `email` field.
  - `max_length`: This field will be present if a field has a maximum character length. 
    This value should be a number. It's very useful where max length is only enforced server-side.

**A note on CAPTCHAs**

Contact forms may present a captcha challenge, which of course is difficult
to deal with in an automated fashion. CAPTCHAs should be handled as `fill_in`
fields with the variable `$CAPTCHA_SOLUTION` as the value. These fields should
also describe a `captcha_selector` key for retrieving the captcha image and
returning it to a solver of the implementer's choosing.

### check/uncheck/choose

These steps can also either list one or many hashes. It should be expected
that a single form can be filled out with many steps until a `click_on` step
is encountered, at which time the form should be submitted.

The attributes of these steps are the same as those of `fill_in`, and should
be treated as such with the exception of `value`. In a checkbox or radio
button context, `value` describes the actual `value` attribute of the checkbox
that should be checked/unchecked/chosen, in case several have the same `name` attribute.

### select

Like the other input-related steps, `select`s can list either one or many hashes.
Attributes are the same as `fill_in` with the addition of `options`, a list
of the possible options which can be selected. If the `value` attributes of
the select's options are obscure abbreviations or otherwise non-human-readable,
the value of `options` can be a hash where the key is the text that appears
in the select box when the option is selected, and the value is the option's
`value` attribute. In cases where the options are common across several
members' forms, a *constant* may be used as a placeholder. Available constants
are listed in [constants.yaml](../support/constants.yaml) in this repository.
Currently the only available constants are a list of the postal codes of the
50 US states plus DC, and the full list of states and territories. The constants
encountered in options lists comprise the keys in `constants.yaml` so the resulting
constants hash can be indexed directly with them.

### click_on 

A click_on step terminates the preceding list of input-related steps, by
submitting the web form. It is a list containing a hash with only two possible
keys: `selector` and `value`. `selector` is the CSS selector for finding the
button or link to click, and `value` is the HTML value attribute if present, 
both to disambiguate and for the benefit of clients which may be POSTing
directly instead of using a headless browser, though this is not recommended.
`selector` is the only attribute you must provide/should expect to be guaranteed.

### wait

**This step should be considered experimental and subject to change**

This is not part of the capybara command set, but is in place at least
temporarily for the benefit of javascript-capable clients. It may get
folded into `find` at a later date. It indicates the integer number of seconds
that should be waited before performing the next action.

_This step is not to be confused with the `wait` option under `find`, which
denotes the maximum time that should pass while waiting for an element to appear._

### javascript

The `value` key determines what javascript to execute in this step. Note that
this instruction should only be used sparingly. It is better to mimic user
behavior as closely as possible, but if there is no way to proceed with normal
ux steps, this instruction may be used.

---

## Examples

To put it all together, let's do a google search for our last name as an example.
For some reason, this search requires that you fill out a captcha:

```YAML
bioguide: #(well, it's google, so there isn't one)
contact_form:
  method: GET
  action: http://google.com/search
  steps:
    - visit: http://google.com
    - fill_in:
      - name: q
        selector: "#gbqfq"
        value: $NAME_LAST
        required: Yes
      - name: recaptcha_response_field
        selector: "#recaptcha_response_field"
        captcha_selector: img
        captcha_id_selector: "#recaptcha_challenge_field"
        value: $CAPTCHA_SOLUTION
        required: Yes
    - click_on:
      - selector: "#gbqfba"
  success:
    body:
      contains: "results ("
  retry:
    - reason: captcha
      contains: "captcha was invalid"
      resubmit:
        - $CAPTCHA_SOLUTION

```

Here is a list of examples that may help you:
- [Handling Captchas](https://github.com/unitedstates/contact-congress/blob/master/support/recaptcha-noscript.yaml)
- [Handling non human readable options](https://github.com/unitedstates/contact-congress/blob/master/members/S000033.yaml)
- [Handling radio buttons](https://github.com/unitedstates/contact-congress/blob/master/members/H001049.yaml) - checkboxes are the same concept except with "- check"
- [Finding created forms](https://github.com/unitedstates/contact-congress/blob/master/members/I000024.yaml)
      
