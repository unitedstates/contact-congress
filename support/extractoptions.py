'''
HOW TO USE:
  This file:
    Extracts the option "value" attributes, and creates a hash if the option's text does not match the option's value
    Extracts all input name + value, and outputs a fill_in list (note that this will output for ALL <input> tags)
  
  You should try to give this file inputs containing only the forms that you want to extract from.

  Copy this file to a separate location (so as not to send random files
    to github)

  Create a folder named "input" in the same location

  Copy the section of the HTML containing the form options that you
    want to extract (does not have to be exact, you can even copy and paste
    the entire HTML source code if you want, only there is less chance for
    errors if you only copy/paste the section containing the form)

  Paste into a text file (NOT word) and save in the "input" folder.

  Run the .py file in python 3.3, and copy/paste the resulting output.

  It is recommended to check the output for any errors. If the attribute is
  in single quotes you can change this in the regular expressions below to
  selectoptions: r'(?:<option.*?value\s*=\s*)(\'.*?\')'
  inputname: r'(?:<input.*?name\s*=\s*\')(.*?)(?:\')'
  inputselectors: r'(?:<input.*?id\s*=\s*\')(.*?)(?:\')'
'''

import os
import re

YAMLselections = []

#compile regular expressions
#select = re.compile(r'<select.*?</select>', re.DOTALL | re.IGNORECASE)
selectoptions = re.compile(r'(?:<option.*?value\s*=\s*\")(.*?)(?:\")', re.IGNORECASE)
selecttext = re.compile(r'(?:<option.*?value.*?>)(.*?)(?:</)', re.IGNORECASE)
inputname = re.compile(r'(?:<input.*?name\s*=\s*\")(.*?)(?:\")', re.IGNORECASE)
inputselectors = re.compile(r'(?:<input.*?id\s*=\s*\")(.*?)(?:\")', re.IGNORECASE)
for root,dirs,files in os.walk('.\input'):
    for file in files:
        with open('.\input\\' + file, 'r') as f:
            html = f.read()
        #limit by form
        #input search
        data = '------------\n' + file + '\n' + 'inputs:' + '\n'
        inputs = re.findall(inputname, html)
        selectors = re.findall(inputselectors, html)
        data = data + "    " + "- fill_in:\n"
        for i in range(0,len(inputs)):
            try: 
                data = data + "      " + "- name: " + inputs[i] + "\n"
                data = data + "        " + "selector: \"#" + selectors[i] + "\"\n"
                data = data + "        " + "value: "
                if inputs[i].find("first") != -1:
                    data = data + "$NAME_FIRST\n"
                elif inputs[i].find("last") != -1:
                    data = data + "$NAME_LAST\n"
                elif inputs[i].find("zip5") != -1:
                    data = data + "$ADDRESS_ZIP5\n"
                elif inputs[i].find("zip4") != -1:
                    data = data + "$ADDRESS_ZIP4\n"
                elif inputs[i].find("prefix") != -1:
                    data = data + "$NAME_PREFIX\n"
                elif inputs[i].find("address2") != -1:
                    data = data + "$ADDRESS_STREET_2\n"
                elif inputs[i].find("address") != -1:
                    data = data + "$ADDRESS_STREET\n"
                elif inputs[i].find("city") != -1:
                    data = data + "$ADDRESS_CITY\n"
                elif inputs[i].find("email") != -1:
                    data = data + "$EMAIL\n"
                elif inputs[i].find("phone") != -1:
                    data = data + "$PHONE\n"
                elif inputs[i].find("subject") != -1:
                    data = data + "$SUBJECT\n"
                elif inputs[i].find("message") != -1:
                    data = data + "$MESSAGE\n"
                else:
                    data = data + "\n"
                data = data + "        " + "required: "
                if inputs[i].find("required") != -1:
                    data = data + "Yes\n"
                else:
                    data = data + "\n"
            except IndexError:
                data = data + "\ninputs may not match selectors\n"
        data = data + "      " + "- name: \n" + "        " + "selector: \"#\n" + "        " + "value: \n" + "        " + "required: \n"
        #option search
        options = re.findall(selectoptions, html)
        text = re.findall(selecttext, html)
        data = data + '------------\n' + file + '\n' + 'options:' + '\n'
        if len(options) != len(text):
            data = data + "\nerror with text, printing option values only\n"
            for option in options:
                data = data + "          "
                data = data + "- \"" + option + "\"\n"
            YAMLselections.append(data)
        elif set(options) != set(text):
            data = data + "\noptions != text, printing hash\n"
            for i in range(0,len(options)):
                data = data + "          "
                data = data + "\"" + text[i] + "\":" + " \"" + options[i] + "\"\n"
            YAMLselections.append(data)
        else:
            for option in options:
                data = data + "          "
                data = data + "- \"" + option + "\"\n"
            YAMLselections.append(data)
            
for x in YAMLselections:
    print(x)
