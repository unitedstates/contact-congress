
# Contributing

Collecting contact information for all Senators and Representatives is a huge task, thanks so much for helping! This introduction should help you understand the project, and start you out toward contributing.

## Why we're doing this

It is not simple or cheap to send emails to members of Congress. Since members don't have an email address, the only way to contact them electronically is to fill out their contact form.

For a public campaign to send any real amount of emails to members of Congress, they need to either reverse engineer all 540-some contact forms, or to pay a campaign vendor a hefty sum of money for the service.

We're building a public domain dataset that describes how to reverse engineer each member's contact form. By creating this data publicly, and distributing its maintenance among interested organizations and the public, it will be much more feasible to operate public campaigns that email members of Congress, without having to pay a vendor or embark on a gargantuan technical investment.

## How we're doing it

We're documenting the specific steps involved in successfully filling out a member's contact form--what page(s) to visit, the names and css selectors of the fields, and how they're filled out. If the form uses a captcha, we're taking note of what type it is, and the selector for the challenge.

To codify all of this, we're using a [YAML](http://www.yaml.org) data structure that looks a little bit like [Capybara](http://jnicklas.github.io/capybara/), a Ruby testing framework. It's not important to know Capybara or Ruby to contribute, however. Just look at our [spec documentation](../documentation/schema.md) and [some examples](../members) and you'll start to get the hang of it. If you're unfamiliar with YAML, there's a quick primer below.

## What you can do

- First, read up on YAML below if you're not already familiar.
- Then, glance over the links above to familiarize yourself with what the type of data we're collecting looks like.
- Finally, pick a legislator whose form still needs codifying (the ones we've already done are in [/members](../members)), [reply to a ticket](https://github.com/unitedstates/congress-contact/issues/new) with the name and Bioguide ID of your choice, and fill out a file similar to the ones in [/members](../members) with the appropriate YAML. The YAML variable placeholders, such as  `$EMAIL` used to label the form values can be found [here](https://github.com/unitedstates/contact-congress/blob/master/support/variables.yaml).
- You can also visit the [support folder](https://github.com/unitedstates/contact-congress/blob/master/support/) for additional files that may help you.
- Once you have your YAML all ready, you can fork this repo, add it to the members folder, and submit a pull request via github.

## An introduction to YAML

We're using YAML as a serialization format, because it's easy to read and pretty friendly to approach. A YAML file describes a set of data which is easily transformed into data structures native to most programming languages. In the context of this document, we'll use Ruby names for these structures, but the principles are universal.

- **Strings:**

  A string is just a sequence of character data. Strings are used to define text that may be relevant to a contact form. A URL, like `http://google.com` or a CSS selector such as `#first_name` would be examples of strings.
  
  **Quoting Strings:** Some characters have special meaning in YAML and will require you to put quote marks around your string. You can see examples of this throughout the existing member files, but here are a few of them:

  - `#` starts an inline comment.
  - `-` creates an item in a list/array.
  - `tab` characters, if needed within a string for some strange reason, must be escaped. You should not indent your YAML file using tabs.
  - `,` commas are item separators in inline arrays and hashes.
  - `!` indicates negation.
  - `: ` a colon at the end of a word followed by a space indicates a hash.
 
  The use of a text editor that does syntax highlighting such as Sublime Text will make it much easier to spot potentially invalid constructs.
  
- **Numbers:**
  
  Numbers are expressed the same way as strings in YAML--with no special treatment whatsoever. `1` is a number, and so is `2000`. Numbers should not contain commas.

- **Booleans:**

  Booleans are binary data types that signal true or false. In YAML booleans can be expressed as the strings `Yes` and `No`.

- **Hashes:**
  
  A hash is a collection of key-value pairs with the ability to nest to an arbitrary depth. This means that the value of a key can be another hash, but it can also be any other data type. In YAML, hashes are defined with a key followed by a colon, space, and then a value. It's important to note that all keys must be unique within the same nesting level. An example of a hash could look like this:

```yaml
bioguide: L000551
```
  
  Here, the 'key' is `bioguide`, and the value is `L000551`.
  
  A nested hash could then look like this:
  
```yaml
success:
  headers:
    status: 200
  body:
    contains: Thank you
```
  
  In the structure we've defined here, the key `success` has a value that is another hash, with two keys, `headers` and `body`. Their values are hashes as well, each with a single key, `status` and `contains`, respectively. The value of `status` is the number `200`, and the value of `contains` is a string, `Thank you`

- **Arrays:**

  An array is a collection similar to a hash, only consisting of just values. You can think of it as an ordered list, which here is useful for denoting steps, since the steps don't have unique keys. In YAML, an array is expressed like this:
  
```yaml
- First item
- Second item
- Third item
```
  
  This results in an array of three strings. Each hyphen followed by a space on a new line creates a new item. You could also use hashes as the values of an array:
  
```yaml
- visit: http://google.com
- fill_in:
  - input: my_name
- click_on:
  - button: I'm feeling lucky
```
  
  Here we have an array of three values. The first is a hash with the key `visit` and value `http://google.com`. The second is a hash with the key `fill_in` and a list as a value, denoted by the indented hyphen. The nested list contains a single value, which is a hash, and the same is true of the next item. This is how we define things like lists of individual form fields to perform a certain action on, or a collection of possible options that could be chosen from a select box.
  
## Thanks for reading!

**Next Steps:** Pick out a legislator, fill out a YAML file, and submit a pull request with your file added to the `members` folder.
