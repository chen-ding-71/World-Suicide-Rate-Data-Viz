# World Suicide Rate Data Visualization Using D3.js


## Data 
Researches by World Health Organization show close to [800,000](https://www.who.int/news-room/fact-sheets/detail/suicide) people die due to suicide every year worldwide, and many more people attempts suicide every year. So far, suicide is the second leading cause of death among 15-29 year-olds. 

Suicide prevention is a critical issue that may cause many social problems. Figuring out potential factors in suicide will help the health organization design strategy to prevent suicide, which will have profound impact on human happiness and social economy.

The data I propose to visualize for the [World Suicide Rate Data](https://gist.github.com/chen-ding-71/3e4e5c6a6f9248bdece950069e3d2aae) Visualization project are originated from 
* World Health Organization: [suicide statistics](http://www.who.int/mental_health/suicide-prevention/en/)


## Visualization

### Worldwide Suicide Map Multi-views

#### Discription

A world bubble map showing suicide data provided by World Health Organization that has drop down menus used to change the year and countries that you are interested in. Together with it, an interactive bar chart shows top 15 suicide countries that year.
[![image](https://user-images.githubusercontent.com/44675613/67915085-5b649600-fb68-11e9-9a2b-9d5ea3b474e6.png)](https://beta.vizhub.com/chen-ding-71/4aaf4c8ffab748bfb821c3c2d8866d38)

#### Demo
[Click Here](https://chen-ding-71.github.io/World-Suicide-Rate-Data-Viz/Worldwide%20Suicide%20Map%20Multi-views/index.html)


#### Interaction
* Dropdown: choose the data you are interested in by Dropdown Menu.
* Tooltips: show detailed information of the bubble or bar if mouse is on
* Highlight: the country you choose is highlighted in map
* Filter and Sort: Everytime change the Year menu, the bar chart will display top 15 suicide country that year

### US Suicide from 1979 to 2015 

### Discription

A stacked bar chart showing **Suicide Trend over Years and Gender in United States**.
[![image](https://user-images.githubusercontent.com/44675613/67915307-feb5ab00-fb68-11e9-976e-1412aa913107.png)](https://beta.vizhub.com/chen-ding-71/4715333ce8964c4a9ba87de40e9b5bdb)

### Demo

[Click Here](https://chen-ding-71.github.io/World-Suicide-Rate-Data-Viz/US%20Suicide%20from%201979%20to%202015)

### Interaction
 * Hover over the bars for tool tips.
 * Hover over the legend to highlight religions.


## Data Source
**Suicide data** from [Suicide Rates dataset](https://gist.github.com/chen-ding-71/3e4e5c6a6f9248bdece950069e3d2aae).

**Country boundary** from [World Atlas TopoJSON](https://github.com/topojson/world-atlas), polished for visual style, including graticules.

**Country latitude and longitude** from [Dataset Publishing Language](developers.google.com/public-data/docs/canonical/countries_csv).

## Insights

* Male has higher suicide rate in US than female
* Suicide Number increases over years in US
* High Suicide Country: United States, Russia, Japan



