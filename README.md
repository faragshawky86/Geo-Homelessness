

```python
import requests
url = "https://www.hudexchange.info/resources/documents/2007-2018-PIT-Counts-by-State.xlsx"
resp = requests.get(url)

filename = 'data.xlsx'

output = open(filename, 'wb')
output.write(resp.content)
output.close()
```


```python
import pandas as pd
data = []

for i in range(0,13):
    df = pd.read_excel(filename,sheet_name=i)
    data.append(df)
```


```python
df = data[0][["state"]]
```


```python
#gets the second column from 2018 data on homeless totals
n = 2018
for i in range(1,len(data)):
    df[str(n)] = (list(data[i].iloc[:,2]))
    n-=1
```


```python
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>state</th>
      <th>2018</th>
      <th>2017</th>
      <th>2016</th>
      <th>2015</th>
      <th>2014</th>
      <th>2013</th>
      <th>2012</th>
      <th>2011</th>
      <th>2010</th>
      <th>2009</th>
      <th>2008</th>
      <th>2007</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>AK</td>
      <td>2016</td>
      <td>1845</td>
      <td>1940</td>
      <td>1956</td>
      <td>1784</td>
      <td>1946</td>
      <td>1913</td>
      <td>2128</td>
      <td>1863</td>
      <td>1992</td>
      <td>1646</td>
      <td>1642</td>
    </tr>
    <tr>
      <th>1</th>
      <td>AL</td>
      <td>3434</td>
      <td>3793</td>
      <td>4111</td>
      <td>3970</td>
      <td>4561</td>
      <td>4689</td>
      <td>5209</td>
      <td>5558</td>
      <td>6046</td>
      <td>6080</td>
      <td>5387</td>
      <td>5452</td>
    </tr>
    <tr>
      <th>2</th>
      <td>AR</td>
      <td>2712</td>
      <td>2467</td>
      <td>2463</td>
      <td>2560</td>
      <td>2936</td>
      <td>3812</td>
      <td>4214</td>
      <td>3424</td>
      <td>2762</td>
      <td>2852</td>
      <td>3255</td>
      <td>3836</td>
    </tr>
    <tr>
      <th>3</th>
      <td>AZ</td>
      <td>9865</td>
      <td>8947</td>
      <td>9707</td>
      <td>9896</td>
      <td>10495</td>
      <td>10562</td>
      <td>11302</td>
      <td>10504</td>
      <td>13711</td>
      <td>14721</td>
      <td>12488</td>
      <td>14646</td>
    </tr>
    <tr>
      <th>4</th>
      <td>CA</td>
      <td>129972</td>
      <td>131532</td>
      <td>118142</td>
      <td>115738</td>
      <td>113952</td>
      <td>118552</td>
      <td>120098</td>
      <td>125128</td>
      <td>123480</td>
      <td>123678</td>
      <td>136531</td>
      <td>138986</td>
    </tr>
    <tr>
      <th>5</th>
      <td>CO</td>
      <td>10857</td>
      <td>10940</td>
      <td>10550</td>
      <td>9953</td>
      <td>10028</td>
      <td>9754</td>
      <td>16768</td>
      <td>15116</td>
      <td>15482</td>
      <td>15268</td>
      <td>14747</td>
      <td>14225</td>
    </tr>
    <tr>
      <th>6</th>
      <td>CT</td>
      <td>3976</td>
      <td>3388</td>
      <td>3902</td>
      <td>4047</td>
      <td>4450</td>
      <td>4448</td>
      <td>4209</td>
      <td>4456</td>
      <td>4316</td>
      <td>4605</td>
      <td>4627</td>
      <td>4482</td>
    </tr>
    <tr>
      <th>7</th>
      <td>DC</td>
      <td>6904</td>
      <td>7473</td>
      <td>8350</td>
      <td>7298</td>
      <td>7748</td>
      <td>6865</td>
      <td>6954</td>
      <td>6546</td>
      <td>6539</td>
      <td>6228</td>
      <td>6044</td>
      <td>5320</td>
    </tr>
    <tr>
      <th>8</th>
      <td>DE</td>
      <td>1082</td>
      <td>994</td>
      <td>1070</td>
      <td>953</td>
      <td>901</td>
      <td>946</td>
      <td>1008</td>
      <td>1035</td>
      <td>982</td>
      <td>1130</td>
      <td>933</td>
      <td>1061</td>
    </tr>
    <tr>
      <th>9</th>
      <td>FL</td>
      <td>31030</td>
      <td>32190</td>
      <td>33559</td>
      <td>35900</td>
      <td>41542</td>
      <td>47862</td>
      <td>55170</td>
      <td>56687</td>
      <td>57551</td>
      <td>55599</td>
      <td>50158</td>
      <td>48069</td>
    </tr>
    <tr>
      <th>10</th>
      <td>GA</td>
      <td>9499</td>
      <td>10174</td>
      <td>12909</td>
      <td>13790</td>
      <td>16521</td>
      <td>16971</td>
      <td>20516</td>
      <td>20975</td>
      <td>19836</td>
      <td>20360</td>
      <td>19095</td>
      <td>19639</td>
    </tr>
    <tr>
      <th>11</th>
      <td>GU</td>
      <td>854</td>
      <td>852</td>
      <td>1085</td>
      <td>1280</td>
      <td>1356</td>
      <td>1271</td>
      <td>1301</td>
      <td>1745</td>
      <td>1635</td>
      <td>1088</td>
      <td>725</td>
      <td>725</td>
    </tr>
    <tr>
      <th>12</th>
      <td>HI</td>
      <td>6530</td>
      <td>7220</td>
      <td>7921</td>
      <td>7620</td>
      <td>6918</td>
      <td>6335</td>
      <td>6246</td>
      <td>6188</td>
      <td>5834</td>
      <td>5782</td>
      <td>6061</td>
      <td>6070</td>
    </tr>
    <tr>
      <th>13</th>
      <td>IA</td>
      <td>2749</td>
      <td>2756</td>
      <td>3064</td>
      <td>3081</td>
      <td>3122</td>
      <td>3084</td>
      <td>2928</td>
      <td>3134</td>
      <td>3014</td>
      <td>3380</td>
      <td>3346</td>
      <td>2734</td>
    </tr>
    <tr>
      <th>14</th>
      <td>ID</td>
      <td>2012</td>
      <td>2037</td>
      <td>2247</td>
      <td>1966</td>
      <td>2104</td>
      <td>1781</td>
      <td>1968</td>
      <td>2199</td>
      <td>2346</td>
      <td>1939</td>
      <td>1464</td>
      <td>1749</td>
    </tr>
    <tr>
      <th>15</th>
      <td>IL</td>
      <td>10643</td>
      <td>10798</td>
      <td>11590</td>
      <td>13177</td>
      <td>13107</td>
      <td>13425</td>
      <td>14144</td>
      <td>14009</td>
      <td>14395</td>
      <td>14055</td>
      <td>14724</td>
      <td>15487</td>
    </tr>
    <tr>
      <th>16</th>
      <td>IN</td>
      <td>5258</td>
      <td>5438</td>
      <td>5798</td>
      <td>5863</td>
      <td>5971</td>
      <td>6096</td>
      <td>6259</td>
      <td>6196</td>
      <td>6452</td>
      <td>6984</td>
      <td>7395</td>
      <td>7358</td>
    </tr>
    <tr>
      <th>17</th>
      <td>KS</td>
      <td>2216</td>
      <td>2287</td>
      <td>2255</td>
      <td>2588</td>
      <td>2783</td>
      <td>2693</td>
      <td>2684</td>
      <td>2511</td>
      <td>2024</td>
      <td>1892</td>
      <td>1738</td>
      <td>2111</td>
    </tr>
    <tr>
      <th>18</th>
      <td>KY</td>
      <td>3688</td>
      <td>4025</td>
      <td>4237</td>
      <td>4538</td>
      <td>5089</td>
      <td>5245</td>
      <td>5230</td>
      <td>6034</td>
      <td>6623</td>
      <td>5999</td>
      <td>8137</td>
      <td>8061</td>
    </tr>
    <tr>
      <th>19</th>
      <td>LA</td>
      <td>3059</td>
      <td>3305</td>
      <td>3994</td>
      <td>4081</td>
      <td>4606</td>
      <td>5226</td>
      <td>7772</td>
      <td>9291</td>
      <td>12482</td>
      <td>12504</td>
      <td>5481</td>
      <td>5494</td>
    </tr>
    <tr>
      <th>20</th>
      <td>MA</td>
      <td>20068</td>
      <td>17565</td>
      <td>19608</td>
      <td>21135</td>
      <td>21237</td>
      <td>19029</td>
      <td>17501</td>
      <td>16664</td>
      <td>16646</td>
      <td>15482</td>
      <td>14506</td>
      <td>15127</td>
    </tr>
    <tr>
      <th>21</th>
      <td>MD</td>
      <td>7144</td>
      <td>7247</td>
      <td>7689</td>
      <td>8390</td>
      <td>7856</td>
      <td>8205</td>
      <td>9454</td>
      <td>10208</td>
      <td>10845</td>
      <td>11698</td>
      <td>9219</td>
      <td>9628</td>
    </tr>
    <tr>
      <th>22</th>
      <td>ME</td>
      <td>2516</td>
      <td>2280</td>
      <td>2241</td>
      <td>2372</td>
      <td>2726</td>
      <td>3016</td>
      <td>2393</td>
      <td>2447</td>
      <td>2379</td>
      <td>2444</td>
      <td>2632</td>
      <td>2638</td>
    </tr>
    <tr>
      <th>23</th>
      <td>MI</td>
      <td>8351</td>
      <td>9051</td>
      <td>9316</td>
      <td>10516</td>
      <td>12227</td>
      <td>11527</td>
      <td>12592</td>
      <td>13185</td>
      <td>13058</td>
      <td>14005</td>
      <td>28248</td>
      <td>28295</td>
    </tr>
    <tr>
      <th>24</th>
      <td>MN</td>
      <td>7243</td>
      <td>7668</td>
      <td>7341</td>
      <td>7546</td>
      <td>8377</td>
      <td>8214</td>
      <td>7744</td>
      <td>7495</td>
      <td>7869</td>
      <td>7718</td>
      <td>7644</td>
      <td>7323</td>
    </tr>
    <tr>
      <th>25</th>
      <td>MO</td>
      <td>5883</td>
      <td>6037</td>
      <td>6194</td>
      <td>6482</td>
      <td>7282</td>
      <td>8581</td>
      <td>10237</td>
      <td>8989</td>
      <td>8122</td>
      <td>6959</td>
      <td>7687</td>
      <td>6247</td>
    </tr>
    <tr>
      <th>26</th>
      <td>MP</td>
      <td>1044</td>
      <td>672</td>
      <td>.</td>
      <td>.</td>
      <td>.</td>
      <td>.</td>
      <td>.</td>
      <td>.</td>
      <td>.</td>
      <td>.</td>
      <td>.</td>
      <td>.</td>
    </tr>
    <tr>
      <th>27</th>
      <td>MS</td>
      <td>1352</td>
      <td>1472</td>
      <td>1738</td>
      <td>1983</td>
      <td>2226</td>
      <td>2403</td>
      <td>2413</td>
      <td>2306</td>
      <td>2743</td>
      <td>2797</td>
      <td>1961</td>
      <td>1377</td>
    </tr>
    <tr>
      <th>28</th>
      <td>MT</td>
      <td>1405</td>
      <td>1529</td>
      <td>1418</td>
      <td>1709</td>
      <td>1745</td>
      <td>1878</td>
      <td>1833</td>
      <td>1768</td>
      <td>1615</td>
      <td>1196</td>
      <td>1417</td>
      <td>1150</td>
    </tr>
    <tr>
      <th>29</th>
      <td>NC</td>
      <td>9268</td>
      <td>8962</td>
      <td>9559</td>
      <td>10685</td>
      <td>11491</td>
      <td>12168</td>
      <td>13524</td>
      <td>12896</td>
      <td>12191</td>
      <td>12918</td>
      <td>12411</td>
      <td>11802</td>
    </tr>
    <tr>
      <th>30</th>
      <td>ND</td>
      <td>542</td>
      <td>1089</td>
      <td>923</td>
      <td>1305</td>
      <td>1258</td>
      <td>2069</td>
      <td>688</td>
      <td>603</td>
      <td>799</td>
      <td>773</td>
      <td>615</td>
      <td>636</td>
    </tr>
    <tr>
      <th>31</th>
      <td>NE</td>
      <td>2421</td>
      <td>2501</td>
      <td>2754</td>
      <td>2744</td>
      <td>3026</td>
      <td>3145</td>
      <td>3789</td>
      <td>3548</td>
      <td>3877</td>
      <td>3718</td>
      <td>3985</td>
      <td>3531</td>
    </tr>
    <tr>
      <th>32</th>
      <td>NH</td>
      <td>1450</td>
      <td>1456</td>
      <td>1366</td>
      <td>1445</td>
      <td>1376</td>
      <td>1447</td>
      <td>1496</td>
      <td>1469</td>
      <td>1574</td>
      <td>1645</td>
      <td>2019</td>
      <td>2248</td>
    </tr>
    <tr>
      <th>33</th>
      <td>NJ</td>
      <td>9398</td>
      <td>8536</td>
      <td>8895</td>
      <td>10098</td>
      <td>11671</td>
      <td>12002</td>
      <td>13025</td>
      <td>14137</td>
      <td>13737</td>
      <td>13169</td>
      <td>13832</td>
      <td>17314</td>
    </tr>
    <tr>
      <th>34</th>
      <td>NM</td>
      <td>2551</td>
      <td>2482</td>
      <td>2263</td>
      <td>2629</td>
      <td>2746</td>
      <td>2819</td>
      <td>3245</td>
      <td>3601</td>
      <td>3475</td>
      <td>3475</td>
      <td>3015</td>
      <td>3015</td>
    </tr>
    <tr>
      <th>35</th>
      <td>NV</td>
      <td>7544</td>
      <td>7833</td>
      <td>7398</td>
      <td>8743</td>
      <td>8582</td>
      <td>7039</td>
      <td>8497</td>
      <td>9150</td>
      <td>11205</td>
      <td>11089</td>
      <td>8726</td>
      <td>8642</td>
    </tr>
    <tr>
      <th>36</th>
      <td>NY</td>
      <td>91897</td>
      <td>89503</td>
      <td>86352</td>
      <td>88250</td>
      <td>80590</td>
      <td>77430</td>
      <td>69566</td>
      <td>63445</td>
      <td>65606</td>
      <td>61067</td>
      <td>61125</td>
      <td>62601</td>
    </tr>
    <tr>
      <th>37</th>
      <td>OH</td>
      <td>10249</td>
      <td>10095</td>
      <td>10404</td>
      <td>11182</td>
      <td>11823</td>
      <td>12325</td>
      <td>13977</td>
      <td>13030</td>
      <td>12569</td>
      <td>12700</td>
      <td>12912</td>
      <td>11264</td>
    </tr>
    <tr>
      <th>38</th>
      <td>OK</td>
      <td>3871</td>
      <td>4199</td>
      <td>4107</td>
      <td>3777</td>
      <td>4191</td>
      <td>4408</td>
      <td>5032</td>
      <td>4625</td>
      <td>5229</td>
      <td>4838</td>
      <td>3846</td>
      <td>4221</td>
    </tr>
    <tr>
      <th>39</th>
      <td>OR</td>
      <td>14476</td>
      <td>13953</td>
      <td>13238</td>
      <td>13226</td>
      <td>12164</td>
      <td>13822</td>
      <td>15828</td>
      <td>17254</td>
      <td>19492</td>
      <td>17309</td>
      <td>20653</td>
      <td>17590</td>
    </tr>
    <tr>
      <th>40</th>
      <td>PA</td>
      <td>13512</td>
      <td>14138</td>
      <td>15339</td>
      <td>15421</td>
      <td>15333</td>
      <td>15086</td>
      <td>14736</td>
      <td>15096</td>
      <td>14516</td>
      <td>15096</td>
      <td>15378</td>
      <td>16220</td>
    </tr>
    <tr>
      <th>41</th>
      <td>PR</td>
      <td>3182</td>
      <td>3525</td>
      <td>4418</td>
      <td>4518</td>
      <td>4132</td>
      <td>4128</td>
      <td>3212</td>
      <td>2900</td>
      <td>4149</td>
      <td>4070</td>
      <td>3012</td>
      <td>4309</td>
    </tr>
    <tr>
      <th>42</th>
      <td>RI</td>
      <td>1101</td>
      <td>1180</td>
      <td>1160</td>
      <td>1111</td>
      <td>1190</td>
      <td>1384</td>
      <td>1277</td>
      <td>1070</td>
      <td>1282</td>
      <td>1607</td>
      <td>1196</td>
      <td>1372</td>
    </tr>
    <tr>
      <th>43</th>
      <td>SC</td>
      <td>3933</td>
      <td>3916</td>
      <td>5051</td>
      <td>5354</td>
      <td>5057</td>
      <td>6544</td>
      <td>4915</td>
      <td>5093</td>
      <td>4473</td>
      <td>4473</td>
      <td>5660</td>
      <td>5660</td>
    </tr>
    <tr>
      <th>44</th>
      <td>SD</td>
      <td>1159</td>
      <td>943</td>
      <td>1072</td>
      <td>1036</td>
      <td>885</td>
      <td>1094</td>
      <td>859</td>
      <td>826</td>
      <td>731</td>
      <td>731</td>
      <td>579</td>
      <td>579</td>
    </tr>
    <tr>
      <th>45</th>
      <td>TN</td>
      <td>7883</td>
      <td>8309</td>
      <td>8779</td>
      <td>9123</td>
      <td>9415</td>
      <td>9528</td>
      <td>9426</td>
      <td>9113</td>
      <td>10276</td>
      <td>10532</td>
      <td>9705</td>
      <td>11210</td>
    </tr>
    <tr>
      <th>46</th>
      <td>TX</td>
      <td>25310</td>
      <td>23548</td>
      <td>23122</td>
      <td>23678</td>
      <td>28495</td>
      <td>29615</td>
      <td>34052</td>
      <td>36911</td>
      <td>35121</td>
      <td>36761</td>
      <td>40190</td>
      <td>39788</td>
    </tr>
    <tr>
      <th>47</th>
      <td>UT</td>
      <td>2876</td>
      <td>2852</td>
      <td>2807</td>
      <td>3025</td>
      <td>3081</td>
      <td>3277</td>
      <td>3527</td>
      <td>3130</td>
      <td>3284</td>
      <td>3795</td>
      <td>3434</td>
      <td>3011</td>
    </tr>
    <tr>
      <th>48</th>
      <td>VA</td>
      <td>5975</td>
      <td>6067</td>
      <td>6268</td>
      <td>7001</td>
      <td>7020</td>
      <td>7625</td>
      <td>8424</td>
      <td>8816</td>
      <td>9080</td>
      <td>8852</td>
      <td>8469</td>
      <td>9746</td>
    </tr>
    <tr>
      <th>49</th>
      <td>VI</td>
      <td>486</td>
      <td>381</td>
      <td>341</td>
      <td>337</td>
      <td>448</td>
      <td>482</td>
      <td>484</td>
      <td>532</td>
      <td>487</td>
      <td>471</td>
      <td>602</td>
      <td>559</td>
    </tr>
    <tr>
      <th>50</th>
      <td>VT</td>
      <td>1291</td>
      <td>1225</td>
      <td>1117</td>
      <td>1523</td>
      <td>1559</td>
      <td>1454</td>
      <td>1160</td>
      <td>1144</td>
      <td>1220</td>
      <td>1214</td>
      <td>954</td>
      <td>1035</td>
    </tr>
    <tr>
      <th>51</th>
      <td>WA</td>
      <td>22304</td>
      <td>21112</td>
      <td>20827</td>
      <td>19419</td>
      <td>18442</td>
      <td>17760</td>
      <td>20504</td>
      <td>20439</td>
      <td>22878</td>
      <td>22782</td>
      <td>21954</td>
      <td>23379</td>
    </tr>
    <tr>
      <th>52</th>
      <td>WI</td>
      <td>4907</td>
      <td>5027</td>
      <td>5685</td>
      <td>6057</td>
      <td>6055</td>
      <td>6104</td>
      <td>6027</td>
      <td>5785</td>
      <td>6333</td>
      <td>6525</td>
      <td>5449</td>
      <td>5648</td>
    </tr>
    <tr>
      <th>53</th>
      <td>WV</td>
      <td>1243</td>
      <td>1309</td>
      <td>1387</td>
      <td>1835</td>
      <td>2013</td>
      <td>2240</td>
      <td>2410</td>
      <td>2211</td>
      <td>2264</td>
      <td>1667</td>
      <td>2016</td>
      <td>2409</td>
    </tr>
    <tr>
      <th>54</th>
      <td>WY</td>
      <td>639</td>
      <td>873</td>
      <td>857</td>
      <td>798</td>
      <td>757</td>
      <td>953</td>
      <td>1813</td>
      <td>1038</td>
      <td>579</td>
      <td>515</td>
      <td>751</td>
      <td>537</td>
    </tr>
    <tr>
      <th>55</th>
      <td>Total</td>
      <td>552830</td>
      <td>550996</td>
      <td>549928</td>
      <td>564708</td>
      <td>576450</td>
      <td>590364</td>
      <td>621553</td>
      <td>623788</td>
      <td>637077</td>
      <td>630227</td>
      <td>639784</td>
      <td>647258</td>
    </tr>
  </tbody>
</table>
</div>


