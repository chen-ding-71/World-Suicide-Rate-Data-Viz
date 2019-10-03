# World Suicide Rate Data Visualization Using D3.js


## Data 
Researches by World Health Organization show close to [800,000](https://www.who.int/news-room/fact-sheets/detail/suicide) people die due to suicide every year worldwide, and many more people attempts suicide every year. So far, suicide is the second leading cause of death among 15-29 year-olds. 

Suicide prevention is a critical issue that may cause many social problems. Figuring out potential factors in suicide will help the health organization design strategy to prevent suicide, which will have profound impact on human happiness and social economy.

The data I propose to visualize for the [World Suicide Rate Data](https://gist.github.com/chen-ding-71/3e4e5c6a6f9248bdece950069e3d2aae) Visualization project are originated from 
* World Health Organization: [suicide statistics](http://www.who.int/mental_health/suicide-prevention/en/)
* World Bank: [economy statistics](http://databank.worldbank.org/data/source/world-development-indicators#)
* United Nations Development Program: [human development index](http://hdr.undp.org/en/data)

## Prototypes

I’ve created a proof of concept visualization of the suicide data. 


### Number of Suicide across Generation
[![image](https://user-images.githubusercontent.com/44675613/65652215-0c629880-dfdf-11e9-8670-12cffcf1c114.png)](https://vizhub.com/chen-ding-71/742ec7bbdd254cf9af1145077584526f)
  

### Suicide Versus Year and Age
[![image](https://user-images.githubusercontent.com/44675613/65651599-e6d48f80-dfdc-11e9-9533-8adae8961efd.png)](https://vizhub.com/chen-ding-71/b04f132ee5aa42cab1642632f9418cae)

### Suicide Versus Country and Year
[![image](https://user-images.githubusercontent.com/44675613/66099076-4c8fc100-e573-11e9-94fd-4ca09db59eef.png)](https://beta.vizhub.com/chen-ding-71/82c0a02d55f545c2be273f3d34f16e24)



## Questions & Tasks
* Are there interesting spatial patterns in suicide distribution worldwide?
* How can the economy influence suicide rate?
* How can the human development index influence suicide rate?
* How does the overall suicide rate vary over time, age and gender?

## Sketches
### Global Suicide Heat Map
![image](https://user-images.githubusercontent.com/44675613/65652643-69ab1980-dfe0-11e9-9d81-1f28c3863353.png)
The heat map will show the suicide desentity in each country with gradient luminance of color. When the audience click in each country, there will be a sum of suicide rate. 

#### Interaction
* There will be a menu to control which year's data will be presented in the map, so that users can find have an intuitive look at the change of suicide rate by time and space.
* When user click on one country, the detailed suicide number will be displayed in a small box.


### Suicide Versus Year, Age, Gender
![image](https://user-images.githubusercontent.com/44675613/65652712-ac6cf180-dfe0-11e9-98c1-022af9db8f5c.png)

The stacked bar chart presents suicide rates changing versus year, age and gender. Users can easily find the trends of year, age, gender.

#### Interaction
* When user click on bar, the detailed suicide number will be displayed in a small box.

### Suicide Versus HDI and GDP
![image](https://user-images.githubusercontent.com/44675613/65652759-d9b99f80-dfe0-11e9-81c3-9b1c0a0ea2fa.png)

The scatter plot can help researchers investigate the correlations between suicide rate and HDI, GDP. 

#### Interaction
* When user click on circle, the detailed suicide number and economy data will be displayed in a small box.


## Open Questions
* Due to the sampling method of the dataset, I am not sure what is the distribution of gender, age and country. If only fixed number of samples in each subgroups, the visualization of suicide versus Year, Age, Gender and Country will make no sense.

* The geographic shapes in D3.js are new and challenging, I am not sure whether I can fill the color of each country by suicide density in a gradient shade.

## Schedule of Deliverables

* **Step 1:** Suicide Versus Country, Year, Age, Gender Bar Chart

**Due Date:** Oct 9

**Estimated Time Cost:** 7 hours


* **Step 2:** Global Suicide Heat Map

**Due Date:** Oct 19

**Estimated Time Cost:** 10 hours


* **Step 3:** Suicide Versus HDI and GDP Scatterplot

**Due Date:** Oct 23

**Estimated Time Cost:** 4 hours


* **Step 4:** Integrate Viz into My Own Website and Summarize Insights 

**Due Date:** Oct 30

**Estimated Time Cost:** 7 hours


