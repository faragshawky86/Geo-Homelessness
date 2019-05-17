import requests
url = "https://www.hudexchange.info/resources/documents/2007-2018-PIT-Counts-by-State.xlsx"
resp = requests.get(url)

filename = 'data.xlsx'

output = open(filename, 'wb')
output.write(resp.content)
output.close()

import pandas as pd
data = []

for i in range(0,13):
    df = pd.read_excel(filename,sheet_name=i)
    data.append(df)
    
df = data[0][["state"]]

#gets the second column from 2018 data on homeless totals
n = 2018
for i in range(1,len(data)):
    df[str(n)] = (list(data[i].iloc[:,2]))
    n-=1

import plotly.plotly as py
import plotly.graph_objs as go

import pandas as pd

for col in df.columns:
    df[col] = df[col].astype(str)

df['text'] = df['state']

data = [go.Choropleth(
    colorscale = scl,
    autocolorscale = True,
    locations = df['state'],
    z = df['2018'].astype(float),
    locationmode = 'USA-states',
    text = df['text'],
    marker = go.choropleth.Marker(
        line = go.choropleth.marker.Line(
            color = 'rgb(255,255,255)',
            width = 2
        )),
    colorbar = go.choropleth.ColorBar(
        title = "title goes here")
)]

layout = go.Layout(
    title = go.layout.Title(
        text = 'Homelessness by State<br>(Hover for breakdown)'
    ),
    geo = go.layout.Geo(
        scope = 'usa',
        projection = go.layout.geo.Projection(type = 'albers usa'),
        showlakes = True,
        lakecolor = 'rgb(255, 255, 255)'),
)

fig = go.Figure(data = data, layout = layout)
py.iplot(fig, filename = 'd3-cloropleth-map')
