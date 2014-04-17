#!/usr/bin/env ruby

##
# WARNING: This file adds an old version of the badge table to the README.  Don't use it.
#
# USAGE:
# contact-congress/support~$ ./update-status-bugs.png

require 'uri'
require 'yaml'

membermd = `ls ../members`.split("\n").map{|m|
  m.sub('.yaml', '')
}.map{|m|
  domain = URI(YAML.load_file("../members/#{m}.yaml")['contact_form']['steps'].first['visit']).host
  "| [#{m}](members/#{m}.yaml) | [#{domain}](http://#{domain}) | [![#{m} status bug](https://d1l0yomkzx8y5l.cloudfront.net/contact_congress/status/#{m}.png)](http://www.opencongress.org/contact_congress/status/#{m}.text) |"
}.join("\n")
membermd = <<EOMD
\n\n### Member Status Log

These graphics are pulled in near-real-time from <http://opencongress.org>, based on the last letter sent to each member through OpenCongress' contact tools.

You can use them to see at a glance how a particular contact form's formula is doing, and click the image for a failing form to see the error it generated.
While the errors are specific to the formageddon implementation OpenCongress uses, the first line will likely contain some useful information--the form url was a 404, a selector wasn't found, etc.

_**Note:** These are lagging indicators and should be checked against the repo's recent activity, meaning sometimes a form can be fixed but either
not yet imported to OpenCongress, or just that no one has tried to contact that member since their form was fixed._

| Bioguide ID | Website | Last Attempt - OpenCongress |
|-------------|---------|:------------:|
#{membermd}

EOMD

readme = File.read('../README.md')
readme = readme.sub(/\n\n### Member Status Log.*/m, membermd)
readme += membermd unless readme =~ /### Member Status/m
File.open('../README.md', 'w+') {|f| f << readme }

puts 'README.md updated.'
