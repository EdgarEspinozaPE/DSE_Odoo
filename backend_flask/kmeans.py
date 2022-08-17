import numpy as np
from sklearn.cluster import KMeans
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import re

data = pd.read_csv('https://gitlab.com/eespinozape/odoo/-/raw/main/data.csv',encoding='latin-1')
datadetails = data.describe()
datadetails.to_csv('datadetails.csv')

print (data.dtypes)
print (datadetails.columns)

#data['country_id'] = data['country_id'].apply(lambda x: [y[0] for y in x])
#data['country_id'] = data['country_id'].str[0]

#print(data['country_id'].shape)

data['country_id'] = data['country_id'].apply(lambda x: re.split(r'[\[,\]]+', x)[1]).astype(int)

data['company_type'] = data['company_type'].map({'company': 0, 'person': 1}).astype(int) 

data['trust'] = data['trust'].map( {'bad': 0, 'normal': 1, 'good': 2} ).astype(int)

data['city_id'] = data['city_id'].apply(lambda x: 0 if x == False else 1)

data['category_id'] = data['category_id'].apply(lambda x: 0 if len(x) ==2 else 1)

drop_elements = ['name', 'property_product_pricelist', 'opportunity_ids','team_id']
data = data.drop(drop_elements, axis = 1)

#print(data)

inertias = []
k_candidates = range(1, 10)
for k in k_candidates:
    k_means = KMeans(random_state=42, n_clusters=k)
    k_means.fit(data)
    inertias.append(k_means.inertia_)


sns_c = sns.color_palette(palette='deep')
fig, ax = plt.subplots(figsize=(10, 6))
sns.scatterplot(x=k_candidates, y = inertias, s=80, ax=ax)
sns.scatterplot(x=[k_candidates[2]], y = [inertias[2]], color=sns_c[3], s=150, ax=ax)
sns.lineplot(x=k_candidates, y = inertias, alpha=0.5, ax=ax)
ax.set(title='Inertia K-Means', ylabel='inertia', xlabel='k')
print(inertias)
plt.show()

k_means = KMeans(random_state=25, n_clusters=3)
k_means.fit(data)
cluster = k_means.predict(data)

cluster = ['k-means_c_' + str(c) for c in cluster]

#print(cluster)

data['clusters']=k_means.labels_
data.to_csv('dataclusters.csv')

print(data)

'''
#forma1 de plotear
sns.scatterplot(x='id', y='credit', hue='clusters', data=data)
plt.show()
'''

#forma2 de plotear
fig, ax = plt.subplots()
sns.scatterplot(x='id', y='credit', data=data.assign(cluster = cluster), hue='cluster', ax=ax)
ax.set(title='K-Means Clustering')
plt.show()
