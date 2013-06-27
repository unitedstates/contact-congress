congress-contact
================

What would it take to enable people and organizations who wish to enable the sending electronic written messages to Congress via the Web?

### Data Collection

1. **Contact form URLs.** There is no standard contact form URL for House or Senate MOCs.

  * The [congress-legislators](https://github.com/unitedstates/congress-legislators) project contains this field, but it is only actively kept up to date for the Senate. The Senate, God bless them, [publishes this URL for every member in an XML document](https://www.senate.gov/general/contact_information/senators_cfm.xml).
  * In rare cases, there may be a public email for a MOC. Right now, newly appointed Sen. Chiesa has an email of `mailto:Senator_Chiesa@Chiesa.Senate.gov` listed in the above XML.
  * The House explicitly discusses the issue of public MOC emails and contact forms on [House.gov](http://www.house.gov/representatives/find/). The answer is: there's no central listing, up to each member.

2. **How these forms are structured.** There is no standard form structure for House or Senate MOCs.

  * It is likely the forms fall into different categories based on the MOC's underlying website vendor.
  * Some forms require the submission of CAPTCHAs.
  * It's possible the forms could be described in a declarative, crowdsourced format.

3. **Ongoing maintenance.** The data collected for 1 and 2 should be expected to change at any time.

  * There need to be enough invested parties that there are eyes and hands to quickly resolve changes.
  * When a new Congress takes office in January of odd-numbered years, expect a high amount of entropy.


### Sending Messages

It's **not** proposed that this produce one central hosted service useful to any actor. Everyone's needs would be too different, and likely need to connect to existing databases, etc.

So any outcome here would be code generally useful to anyone wishing to integrate the collected data into their systems.

This could mean anything from a stand-alone application whose interface is an HTTP API, to one or more language-specific "wrappers" that make it easy to work with the data (simulate form submission, etc.).