#!/usr/bin/env ruby

##
# Run this file from the command line to update the list of members prior to committing.
# ANYTHING below these images in the README.md file will be truncated! It will be project
# policy to ensure this is the last block of content in the README file, but you should check
# before running this to make sure you're not deleting something.
#
# USAGE:
# contact-congress/support~$ ./update-status-bugs.png

require 'uri'
require 'yaml'

membermd = `ls ../members`.split("\n").map{|m|
  m.sub('.yaml', '')
}.map{|m|
  domain = URI(YAML.load_file("../members/#{m}.yaml")['contact_form']['steps'].first['visit']).host
  "| [#{m}](members/#{m}.yaml) | [#{domain}](http://#{domain}) | [![#{m} status bug](http://www.opencongress.org/contact_congress/status/#{m}.png)](http://www.opencongress.org/contact_congress/status/#{m}.text) |"
}.join("\n")
membermd = <<EOMD
\n\n### Member Status Log

These graphics are pulled in near-real-time from <http://opencongress.org>, based on the last letter sent to each member through OpenCongress' contact tools.

The

*Note that these are lagging indicators and should be checked against the repo's recent activity.*

| Bioguide ID | Website | Last Attempt |
|-------------|---------|:------------:|
#{membermd}

EOMD

readme = File.read('../README.md')
readme = readme.sub(/\n\n### Member Status Log.*/m, membermd)
readme += membermd unless readme =~ /### Member Status/m
File.open('../README.md', 'w+') {|f| f << readme }

puts 'README.md updated.'