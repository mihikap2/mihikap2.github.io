import pandas as pd 
import matplotlib.pyplot as plt
import numpy as np

data = pd.read_csv("majors.csv", header = 2)
data.columns = ["Degree","MajorCode","MajorName",
                    "Total","Men","Women"]

data = data.dropna()
undergrad = data[data.Degree.str.startswith('B')]
undrgrad = undergrad[["MajorName","Total","Men","Women"]]

undergrad["Total"] = pd.to_numeric(undergrad["Total"])
undergrad["Men"] = pd.to_numeric(undergrad["Men"])
undergrad["Women"] = pd.to_numeric(undergrad["Women"])
undergrad = undergrad[undergrad["Total"] > 50]
undergrad = undergrad.groupby(undergrad['MajorName']).aggregate({'Total': 'sum','Men': 'sum','Women': 'sum'})

undergrad["MaleDominated"] = (undergrad["Men"] - undergrad["Women"])* 100/undergrad["Total"]
undergrad["FemaleDominated"] = (undergrad["Women"] - undergrad["Men"])* 100/undergrad["Total"] 
#undergrad = undergrad.sort_values(by = "GenderDisparity",ascending = )
female = undergrad.sort_values(by = "FemaleDominated",ascending = False)
male = undergrad.sort_values(by = "MaleDominated",ascending = False)

female = female.iloc[:10].sample(frac=1)
male = male.iloc[:10].sample(frac = 1)

print(male)
print(female)

