#one-time script for getting rid of losing/retiring members from the 113th
#and adding new 114th members

import csv
import os


members_dir = "../../members_test"

#find bioguide ids that need to be added and removed
new_senators = {}
departing_senators = {}

new_reps = {}
departing_reps = {}


#from source data
with open("election_results_2014.csv",'r') as results:
    for row in csv.DictReader(results):
        chamber = row["chamber"]

        if row["new_id"] != row["member_id"]:

            if chamber.lower() == "senate":
                if row["new_id"] == "":
                    print("New senator %s's bioguide ID not yet known" % row["new_member"])
                else:
                    new_senators[row["new_id"]] = row["new_member"].strip()
                departing_senators[row["member_id"]] = row["previous_member"].strip()

            elif chamber.lower() == "house":
                if row["new_id"] == "":
                    print("New rep %s's bioguide ID not yet known" % row["new_member"])
                else:
                    new_reps[row["new_id"]] = row["new_member"].strip()
                departing_reps[row["member_id"]] = row["previous_member"].strip()

            else:
                print("Chamber %s not recognized" % chamber)



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