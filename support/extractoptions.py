#regular expression:  (?:<option value\s*=\s*)([\'\"].*?[\'\"])

import os
import re

YAMLselections = []

#compile regular expressions
select = re.compile(r'<select.*?</select>', re.DOTALL)
selectoptions = re.compile(r'(?:<option value\s*=\s*)([\'\"].*?[\'\"])')

for root,dirs,files in os.walk('.\input'):
    for file in files:
        with open('.\input\\' + file, 'r') as f:
            html = f.read()
        selectors = re.findall(select, html)
        for selector in selectors:
            options = re.findall(selectoptions, selector)
            data = '------------\n' + file + '\n' + 'options:' + '\n'
            for option in options:
                data = data + "  "
                data = data + "- " + option + '\n'
            YAMLselections.append(data)
for x in YAMLselections:
    print(x)
