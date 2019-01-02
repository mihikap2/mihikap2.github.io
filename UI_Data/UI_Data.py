import pandas as pd
import matplotlib.pyplot as plt
totalUnderGrad = 33673
students = pd.read_csv("UI_Data.csv", header=11)
students.columns = ["Term","College","Dept","Degree","MajorCode","MajorName",
                    "ConcCode","Conc","Freshman","Sophomore","Junior","Senior",
                    "NondegreeU","UnderGrad","Grad1","Grad2","NondegreeM","Grad",
                    "Professional","Total","ACP"]
undergrad = students[["Degree","MajorName","UnderGrad"]]
undergrad = undergrad.dropna()
undergrad = undergrad[undergrad.Degree.str.startswith('B')]
undergrad["UnderGrad"] = pd.to_numeric(undergrad["UnderGrad"])
undergrad = undergrad.groupby(undergrad['MajorName']).aggregate({'UnderGrad': 'sum'})

undergrad["Popularity"] = undergrad["UnderGrad"] / totalUnderGrad * 100
undergrad = undergrad.sort_values(by = "UnderGrad", ascending = False)

undergrad = undergrad.iloc[:10].sample(frac = 1)

undergrad.plot.bar(y="Popularity")
plt.ylabel("Percentage of total students")
plt.show()
print(undergrad)

