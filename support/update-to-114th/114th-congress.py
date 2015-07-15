#one-time script for getting rid of losing/retiring members from the 113th
#and adding new 114th members


#you will have to install githubpy by doing something like:
#pip install githubpy
#did not create requirements doc because this is one-time code.

import csv
import os
import argparse
import getpass
from github import GitHub

parser = argparse.ArgumentParser()
parser.add_argument("--issues", action="store_true",
        help="create github issues")
args = parser.parse_args()

members_dir = "../../members"

#find bioguide ids that need to be added and removed
new_senators = {}
departing_senators = {}
senators_114 = []

new_reps = {}
departing_reps = {}
reps_114 = []


#from source data
with open("election_results_2014.csv",'r') as results:
    for row in csv.DictReader(results):
        chamber = row["chamber"]
        district = ""
        if row["district"] != "AL":
            district = row["district"]
            if len(district) == 1:
                district = "0"+district

        if row["new_id"] != row["member_id"]:

            if chamber.lower() == "senate":
                if row["new_id"] == "":
                    print("New senator %s's bioguide ID not yet known" % row["new_member"])
                else:
                    new_senators[row["new_id"]] = row["new_member"].strip()
                
                name_title_party = " ".join(["Sen.",row["new_member"],"({0}-{1})".format(row["winner_party"],row["state_abbrev"])])
                
                senators_114.append({"bioguide_id":row["new_id"],
                                "name_title_party":name_title_party,
                                "lastname":row["new_member"].split()[-1]})
                departing_senators[row["member_id"]] = row["previous_member"].strip()

            elif chamber.lower() == "house":
                if row["new_id"] == "":
                    print("New rep %s's bioguide ID not yet known" % row["new_member"])
                else:
                    new_reps[row["new_id"]] = row["new_member"].strip()
                departing_reps[row["member_id"]] = row["previous_member"].strip()

            else:
                print("Chamber %s not recognized" % chamber)


        #add all reps to the 114th congress
        #can't do this for senate since some were not up for election
        if chamber.lower() == "house":
            info = "({0}-{1}{2})".format(row["winner_party"],row["state_abbrev"],district).strip()
            name_title_party = " ".join(["Rep.",row["new_member"],info])
            reps_114.append({"bioguide_id":row["new_id"],
                            "name_title_party":name_title_party,
                            "lastname":row["new_member"].split()[-1]})




for bioguide_id in departing_senators:
    yaml_name = "%s.yaml" % bioguide_id
    file_path = os.path.join(members_dir,yaml_name)
    if os.path.isfile(file_path):
        os.remove(file_path)
        print("removed %s" % file_path)

for bioguide_id in new_senators:
    yaml_name = "%s.yaml" % bioguide_id
    file_path = os.path.join(members_dir,yaml_name)
    #we're going to create a fresh file even if it already exists
    #because these are cases of senators becoming reps
    #we won't do this for reps because of weirdness around special election dates
    open(file_path,"w").close()
    print("added %s" % file_path)

for bioguide_id in departing_reps:
    yaml_name = "%s.yaml" % bioguide_id
    file_path = os.path.join(members_dir,yaml_name)
    if os.path.isfile(file_path):
        os.remove(file_path)
        print("removed %s" % file_path)

for bioguide_id in new_reps:
    yaml_name = "%s.yaml" % bioguide_id
    file_path = os.path.join(members_dir,yaml_name)
    if not os.path.isfile(file_path):
        open(file_path,"w").close()
        print("added %s" % file_path)




#TODO create text for new readme file

#read existing file to get existing senators

#get all of the senators who are continuing from the readme file
websites = {}
with open("../../README.md") as readme_file:
    for row in readme_file:
        if row.startswith("<!--"):
            break
        if row.startswith("| ["):
            cells = row.split("|")
            bioguide_id = cells[1].split("]")[0].strip().strip("[")
            name_title_party = cells[2].split("]")[0].strip().strip("[")
            lastname = name_title_party.split(" ")[-2]
            chamber = name_title_party.split(" ")[0]
            website = cells[2].split("(")[2].strip().strip(")")
            if bioguide_id not in departing_senators and chamber.lower() == "sen.":
                senators_114.append({"bioguide_id":bioguide_id,
                                    "name_title_party":name_title_party,
                                    "lastname":lastname})

            if (bioguide_id not in departing_senators and bioguide_id not in departing_reps) and website != "":
                websites[bioguide_id] = website


print(new_reps)


#make a sorted list of dictionaries, senators then reps
all_members = sorted(senators_114, key=lambda k: k['lastname']) + sorted(reps_114, key=lambda k: k['lastname'])

#create the part of the readme with all 114th congress reps in it

row_template = "| [{bioguide_id}](https://github.com/unitedstates/contact-congress/blob/master/members/{bioguide_id}.yaml) | [{name_title_party}](http://lofgren.house.gov) | [![{bioguide_id} status](https://congressforms.eff.org/recent-fill-image/{bioguide_id})](http://efforg.github.io/congress-forms-test/?bioguide_id={bioguide_id})\n"
row_template_no_bg = "|  | {name_title_party} | |\n"
row_template_no_web = "| [{bioguide_id}](https://github.com/unitedstates/contact-congress/blob/master/members/{bioguide_id}.yaml) | {name_title_party} | [![{bioguide_id} status](https://congressforms.eff.org/recent-fill-image/{bioguide_id})](http://efforg.github.io/congress-forms-test/?bioguide_id={bioguide_id})\n"




with open("new_readme_table.md","w") as readme:
    readme.write("| Bioguide ID | Website | Status |\n")
    readme.write("|-------------|---------|:------------:|:------------:|\n")
    for member in all_members:
        if member["bioguide_id"] == "":
            readme.write(row_template_no_bg.format(**member))
        elif member["bioguide_id"] in websites:
            member["website"] = websites[member["bioguide_id"]]
            readme.write(row_template.format(**member))
        else:
            readme.write(row_template_no_web.format(**member))

if args.issues:
    print("Only create github issues if you're sure you're ready")
    print("The line actually creating issues is commented out to protect you from yourself")
    print("So go uncomment it when you're really ready")
    username = raw_input("Github username:")
    password = getpass.getpass("Github password:")

    gh = GitHub(username=username, password=password)

    repo = gh.repos('unitedstates')('contact-congress')

    for m in new_reps:
        title = "[%s] Rep. %s" % (m, new_reps[m])
        body = "Newly elected to 114th congress"
        #repo.issues.post(title=title, body=body)

    for m in new_senators:
        title = "[%s] Sen. %s" % (m, new_reps[m])
        body = "Newly elected to 114th congress"
        #repo.issues.post(title=title, body=body)

    #do we also want to create them for existing legislators in case they change anything?
    ##the decision seems to be no for existing legislators right now.