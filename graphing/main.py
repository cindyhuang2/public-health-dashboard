import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

#load csv file
df = pd.read_csv("data/hiv.csv")

x = df["Year"]
y = df["Estimated Infections"]

plt.plot(x,y)
plt.title("Estimated HIV Infections in the United States from 2018 to 2022")
plt.xlabel("Year")
plt.xticks(np.arange(2018,2023,1))
plt.ylabel("Estimated Infections")
plt.ylim(10000,37000)
plt.show()