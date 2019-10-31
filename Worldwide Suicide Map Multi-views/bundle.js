(function (React$1,d3$1,topojson,ReactDOM) {
  'use strict';

  var React$1__default = 'default' in React$1 ? React$1['default'] : React$1;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

  const useWorldAtlas = () => {
    const [data, setData] = React$1.useState(null);

    React$1.useEffect(() => {
      d3$1.json(jsonUrl).then(topology => {
        const { countries, land } = topology.objects;
        setData({
          land: topojson.feature(topology, land),
          interiors: topojson.mesh(topology, countries, (a, b) => a !== b)
        });
      });
    }, []);

    return data;
  };

  const csvUrl =
    'https://gist.githubusercontent.com/chen-ding-71/3e4e5c6a6f9248bdece950069e3d2aae/raw/7981ec970d781e2cb5abeed414bb2af18d452669/Suicide_By_Country_1979to2016.csv';

  const useData = () => {
    const [data, setData] = React$1.useState(null);

    const row = d => {
      d['Last available-Number'] = +d['Last available-Number'];
      for (var i = 2016; i >= 1979; i--) {
        d[i] = +d[i];
      }
      return d;
    };

    React$1.useEffect(() => {
      d3$1.csv(csvUrl, row).then(setData);
    }, []);
    
    return data;
  };

  const Dropdown = ({
    options,
    id,
    selectedValue,
    onSelectedValueChange
  }) => (
    React$1__default.createElement( 'select', { id: id, onChange: event => onSelectedValueChange(event.target.value) },
      options.map(({ value, label }) => (
        React$1__default.createElement( 'option', { value: value, selected: value === selectedValue },
          label
        )
      ))
    )
  );

  const yearAttributes = [
    { value: 'Last available', label: 'Most Recent Suicide Number' },
    { value: 2015, label: '2015' },
    { value: 2014, label: '2014' },
    { value: 2013, label: '2013' },
    { value: 2012, label: '2012' },
    { value: 2011, label: '2011' },
    { value: 2010, label: '2010' },
    { value: 2009, label: '2009' },
    { value: 2008, label: '2008' },
    { value: 2007, label: '2007' },
    { value: 2006, label: '2006' },
    { value: 2005, label: '2005' },
    { value: 2004, label: '2004' },
    { value: 2003, label: '2003' },
    { value: 2002, label: '2002' },
    { value: 2001, label: '2001' },
    { value: 2000, label: '2000' },
    { value: 1999, label: '1999' },
    { value: 1998, label: '1998' },
    { value: 1997, label: '1997' },
    { value: 1996, label: '1996' },
    { value: 1995, label: '1995' },
    { value: 1994, label: '1994' },
    { value: 1993, label: '1993' },
    { value: 1992, label: '1992' },
    { value: 1991, label: '1991' },
    { value: 1990, label: '1990' },
    { value: 1989, label: '1989' },
    { value: 1988, label: '1988' },
    { value: 1987, label: '1987' },
    { value: 1986, label: '1986' },
    { value: 1985, label: '1985' },
    { value: 1984, label: '1984' },
    { value: 1983, label: '1983' },
    { value: 1982, label: '1982' },
    { value: 1981, label: '1981' },
    { value: 1980, label: '1980' },
    { value: 1979, label: '1979' }
  ];

  const countryAttributes = [
    { value: 'Albania', label: 'Albania' },
    { value: 'Anguilla', label: 'Anguilla' },
    { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
    { value: 'Argentina', label: 'Argentina' },
    { value: 'Armenia', label: 'Armenia' },
    { value: 'Aruba', label: 'Aruba' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Austria', label: 'Austria' },
    { value: 'Azerbaijan', label: 'Azerbaijan' },
    { value: 'Bahamas', label: 'Bahamas' },
    { value: 'Bahrain', label: 'Bahrain' },
    { value: 'Barbados', label: 'Barbados' },
    { value: 'Belarus', label: 'Belarus' },
    { value: 'Belgium', label: 'Belgium' },
    { value: 'Belize', label: 'Belize' },
    { value: 'Bermuda', label: 'Bermuda' },
    { value: 'Bolivia', label: 'Bolivia' },
    { value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina' },
    { value: 'Brazil', label: 'Brazil' },
    { value: 'British Virgin Islands', label: 'British Virgin Islands' },
    { value: 'Brunei Darussalam', label: 'Brunei Darussalam' },
    { value: 'Bulgaria', label: 'Bulgaria' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Cabo Verde', label: 'Cabo Verde' },
    { value: 'Cayman Islands', label: 'Cayman Islands' },
    { value: 'Chile', label: 'Chile' },
    { value: 'Colombia', label: 'Colombia' },
    { value: 'Costa Rica', label: 'Costa Rica' },
    { value: 'Croatia', label: 'Croatia' },
    { value: 'Cuba', label: 'Cuba' },
    { value: 'Cyprus', label: 'Cyprus' },
    { value: 'Czech Republic', label: 'Czech Republic' },
    { value: 'Denmark', label: 'Denmark' },
    { value: 'Dominica', label: 'Dominica' },
    { value: 'Dominican Republic', label: 'Dominican Republic' },
    { value: 'Ecuador', label: 'Ecuador' },
    { value: 'Egypt', label: 'Egypt' },
    { value: 'El Salvador', label: 'El Salvador' },
    { value: 'Estonia', label: 'Estonia' },
    {
      value: 'Falkland Islands (Malvinas)',
      label: 'Falkland Islands (Malvinas)'
    },
    { value: 'Fiji', label: 'Fiji' },
    { value: 'Finland', label: 'Finland' },
    { value: 'France', label: 'France' },
    { value: 'French Guiana', label: 'French Guiana' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Germany', label: 'Germany' },
    { value: 'Greece', label: 'Greece' },
    { value: 'Grenada', label: 'Grenada' },
    { value: 'Guadeloupe', label: 'Guadeloupe' },
    { value: 'Guatemala', label: 'Guatemala' },
    { value: 'Guyana', label: 'Guyana' },
    { value: 'Haiti', label: 'Haiti' },
    { value: 'Honduras', label: 'Honduras' },
    { value: 'Hong Kong SAR', label: 'Hong Kong SAR' },
    { value: 'Hungary', label: 'Hungary' },
    { value: 'Iceland', label: 'Iceland' },
    { value: 'Iran (Islamic Rep of)', label: 'Iran (Islamic Rep of)' },
    { value: 'Iraq', label: 'Iraq' },
    { value: 'Ireland', label: 'Ireland' },
    { value: 'Israel', label: 'Israel' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Jamaica', label: 'Jamaica' },
    { value: 'Japan', label: 'Japan' },
    { value: 'Jordan', label: 'Jordan' },
    { value: 'Kazakhstan', label: 'Kazakhstan' },
    { value: 'Kiribati', label: 'Kiribati' },
    { value: 'Kuwait', label: 'Kuwait' },
    { value: 'Kyrgyzstan', label: 'Kyrgyzstan' },
    { value: 'Latvia', label: 'Latvia' },
    { value: 'Lithuania', label: 'Lithuania' },
    { value: 'Luxembourg', label: 'Luxembourg' },
    { value: 'Macau', label: 'Macau' },
    { value: 'Malaysia', label: 'Malaysia' },
    { value: 'Maldives', label: 'Maldives' },
    { value: 'Malta', label: 'Malta' },
    { value: 'Martinique', label: 'Martinique' },
    { value: 'Mauritius', label: 'Mauritius' },
    { value: 'Mayotte', label: 'Mayotte' },
    { value: 'Mexico', label: 'Mexico' },
    { value: 'Monaco', label: 'Monaco' },
    { value: 'Mongolia', label: 'Mongolia' },
    { value: 'Montenegro', label: 'Montenegro' },
    { value: 'Montserrat', label: 'Montserrat' },
    { value: 'Morocco', label: 'Morocco' },
    { value: 'Netherlands', label: 'Netherlands' },
    { value: 'Netherlands Antilles', label: 'Netherlands Antilles' },
    { value: 'New Zealand', label: 'New Zealand' },
    { value: 'Nicaragua', label: 'Nicaragua' },
    { value: 'Norway', label: 'Norway' },
    {
      value: 'Occupied Palestinian Territory',
      label: 'Occupied Palestinian Territory'
    },
    { value: 'Oman', label: 'Oman' },
    { value: 'Panama', label: 'Panama' },
    { value: 'Paraguay', label: 'Paraguay' },
    { value: 'Peru', label: 'Peru' },
    { value: 'Philippines', label: 'Philippines' },
    { value: 'Poland', label: 'Poland' },
    { value: 'Portugal', label: 'Portugal' },
    { value: 'Puerto Rico', label: 'Puerto Rico' },
    { value: 'Qatar', label: 'Qatar' },
    { value: 'Republic of Korea', label: 'Republic of Korea' },
    { value: 'Republic of Moldova', label: 'Republic of Moldova' },
    { value: 'Reunion', label: 'Reunion' },
    { value: 'Rodrigues', label: 'Rodrigues' },
    { value: 'Romania', label: 'Romania' },
    { value: 'Russian Federation', label: 'Russian Federation' },
    { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis' },
    { value: 'Saint Lucia', label: 'Saint Lucia' },
    { value: 'Saint Pierre and Miquelon', label: 'Saint Pierre and Miquelon' },
    {
      value: 'Saint Vincent and Grenadines',
      label: 'Saint Vincent and Grenadines'
    },
    { value: 'San Marino', label: 'San Marino' },
    { value: 'Sao Tome and Principe', label: 'Sao Tome and Principe' },
    { value: 'Saudi Arabia', label: 'Saudi Arabia' },
    { value: 'Serbia', label: 'Serbia' },
    { value: 'Seychelles', label: 'Seychelles' },
    { value: 'Singapore', label: 'Singapore' },
    { value: 'Slovakia', label: 'Slovakia' },
    { value: 'Slovenia', label: 'Slovenia' },
    { value: 'South Africa', label: 'South Africa' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Sri Lanka', label: 'Sri Lanka' },
    { value: 'Suriname', label: 'Suriname' },
    { value: 'Sweden', label: 'Sweden' },
    { value: 'Switzerland', label: 'Switzerland' },
    { value: 'Syrian Arab Republic', label: 'Syrian Arab Republic' },
    { value: 'Tajikistan', label: 'Tajikistan' },
    { value: 'TFYR Macedonia', label: 'TFYR Macedonia' },
    { value: 'Thailand', label: 'Thailand' },
    { value: 'Trinidad and Tobago', label: 'Trinidad and Tobago' },
    { value: 'Tunisia', label: 'Tunisia' },
    { value: 'Turkey', label: 'Turkey' },
    { value: 'Turkmenistan', label: 'Turkmenistan' },
    { value: 'Turks and Caicos Islands', label: 'Turks and Caicos Islands' },
    { value: 'Ukraine', label: 'Ukraine' },
    { value: 'United Arab Emirates', label: 'United Arab Emirates' },
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'United States of America', label: 'United States of America' },
    { value: 'Uruguay', label: 'Uruguay' },
    { value: 'Uzbekistan', label: 'Uzbekistan' },
    {
      value: 'Venezuela (Bolivarian Republic of)',
      label: 'Venezuela (Bolivarian Republic of)'
    },
    { value: 'Virgin Islands (USA)', label: 'Virgin Islands (USA)' },
    { value: 'Zimbabwe', label: 'Zimbabwe' }
  ];

  const projection = d3$1.geoNaturalEarth1();
  const path = d3$1.geoPath(projection);
  const graticule = d3$1.geoGraticule();

  const Marks = ({
    worldAtlas: { land, interiors },
    countries,
    sizeScale,
    sizeValue,
    tooltipFormat,
    highlightCountry
  }) => (
    React.createElement( 'g', { className: "marks" },
      React.createElement( 'path', { className: "sphere", d: path({ type: 'Sphere' }) }),
      React.createElement( 'path', { className: "graticules", d: path(graticule()) }),
      land.features.map(feature => (
        React.createElement( 'path', { className: "land", d: path(feature) })
      )),
      React.createElement( 'path', { className: "interiors", d: path(interiors) }),
      countries.map(d => {
        const [x, y] = projection([d.Longitude, d.Latitude]);

        if (d['Countries'] === highlightCountry) {
          return (
            React.createElement( 'circle', {
              cx: x, cy: y, r: sizeScale(sizeValue(d)), fill: '#BD2D28', opacity: 1 },
              React.createElement( 'title', null, tooltipFormat(d) )
            )
          );
        } else {
          return (
            React.createElement( 'circle', {
              cx: x, cy: y, r: sizeScale(sizeValue(d)), fill: '#C37A73', opacity: 0.5 },
              React.createElement( 'title', null, tooltipFormat(d) )
            )
          );
        }
      })
    )
  );

  const BubbleMap = ({ data, year, country, worldAtlas }) => {
    const sizeValue = d => d[year];
    const maxRadius = 30;

    const sizeScale = d3$1.scaleSqrt()
      .domain([0, d3$1.max(data, sizeValue)])
      .range([0, maxRadius]);

    const tooltipFormat = d =>
      d['Countries'] + '\n' + 'Year: ' + year + '\n' + 'Suicide: ' + d[year];

    return (
        React$1__default.createElement( Marks, {
          worldAtlas: worldAtlas, countries: data, sizeScale: sizeScale, sizeValue: sizeValue, tooltipFormat: tooltipFormat, highlightCountry: country })
    );
  };

  const AxisBottom = ({ xScale, innerHeight, tickFormat }) =>
    xScale.ticks().map(tickValue => (
      React.createElement( 'g', {
        className: "tick", key: tickValue, transform: `translate(${xScale(tickValue)},0)` },
        React.createElement( 'line', { y2: innerHeight }),
        React.createElement( 'text', { style: { textAnchor: 'middle' }, dy: "1em", y: innerHeight + 4 },
          tickFormat(tickValue)
        )
      )
    ));

  const AxisLeft = ({ yScale }) =>
    yScale.domain().map(tickValue => (
      React.createElement( 'g', { className: "tick" },
        React.createElement( 'text', {
          key: tickValue, style: { textAnchor: 'end' }, x: -3, dy: ".32em", y: yScale(tickValue) + yScale.bandwidth() / 2 },
          tickValue
        )
      )
    ));

  const Marks$1 = ({
    data,
    xScale,
    yScale,
    xValue,
    yValue,
    tooltipFormat
  }) => 
    data.map(d => (
      React.createElement( 'rect', {
        className: "mark", key: yValue(d), x: 0, y: yScale(yValue(d)), width: xScale(xValue(d)), height: yScale.bandwidth(), fill: '#C37A73' },
        React.createElement( 'title', null, tooltipFormat(xValue(d)) )
      )
    ));

  const width = 960;
  const menuHeight = 80;
  const height = 500 - menuHeight;
  const margin = { top: 20, right: 30, bottom: 80, left: 250 };
  const xAxisLabelOffset = 50;

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const Histogram = ({ data, year }) => {
    console.log(1);
    const xValue = d => d[year];
    const yValue = d => d['Countries'];
    
    const siFormat = d3$1.format('.2s');
    const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');
    const yScale = d3$1.scaleBand()
      .domain(data.map(yValue))
      .range([0, innerHeight])
      .paddingInner(0.15);

    const xScale = d3$1.scaleLinear()
      .domain([0, d3$1.max(data, xValue)])
      .range([0, innerWidth]);
    
    return (
      React.createElement( 'g', { transform: `translate(${margin.left},${margin.top})` },
        React.createElement( AxisBottom, {
          xScale: xScale, innerHeight: innerHeight, tickFormat: xAxisTickFormat, tickOffset: 5 }),
        React.createElement( AxisLeft, { yScale: yScale }),
  			React.createElement( 'text', {
          className: "axis-label", x: innerWidth / 2, y: margin.top - 40, textAnchor: "middle", 'font-size': 30 }, "Top 15 Countries With the Highest Rates of Suicide"),
        React.createElement( 'text', {
          className: "axis-label", x: innerWidth / 2, y: innerHeight + xAxisLabelOffset, textAnchor: "middle" }, "Suicide Number"),
        React.createElement( Marks$1, {
          data: data, xScale: xScale, yScale: yScale, xValue: xValue, yValue: yValue, tooltipFormat: xAxisTickFormat })
      )
        
    );
  };

  // console.log(Histogram)

  const width$1 = 960;
  const height$1 = 500;

  const App = () => {
    const initialYear = 'Last available-Number';
    var [year, setYear] = React$1.useState(initialYear);
    var [country, setCountry] = React$1.useState(null);

    if (year == 'Last available-Number') {
      year = 'Last available-Number';
    } else {
      year = +year;
    }

    const worldAtlas = useWorldAtlas();
    const data = useData();

    if (!worldAtlas || !data) {
      return React$1__default.createElement( 'pre', null, "Loading..." );
    }

    const sortData = (data, year) => {
      // const [data, setData] = useState(null);
      const sortedData = data.sort(function(x, y) {
        return d3.descending(x[year], y[year]);
      });

      return sortedData.slice(0, 15);
    };

    return (
      React$1__default.createElement( React$1__default.Fragment, null,
        React$1__default.createElement( 'div', { className: "menus-container" },
          React$1__default.createElement( 'span', { className: "dropdown-label" }, "Year:"),
          React$1__default.createElement( Dropdown, {
            options: yearAttributes, id: "x-select", value: year, onSelectedValueChange: setYear }),
          React$1__default.createElement( 'span', { className: "dropdown-label" }, "Countries:"),
          React$1__default.createElement( Dropdown, {
            options: countryAttributes, id: "x-select", value: country, onSelectedValueChange: setCountry })
        ),

        React$1__default.createElement( 'svg', { width: width$1, height: height$1 },
          React$1__default.createElement( 'g', { transform: `translate(${100}, ${20}) scale(0.9, 0.9)` },
            React$1__default.createElement( BubbleMap, {
              data: data, year: year, country: country, worldAtlas: worldAtlas })
          ),

          React$1__default.createElement( 'g', { transform: `translate(${0}, ${280}) scale(0.35, 0.35)` },
            React$1__default.createElement( Histogram, { data: sortData(data, year), year: year })
          )
        )
      )
    );
  };
  const rootElement = document.getElementById('root');
  ReactDOM.render(React$1__default.createElement( App, null ), rootElement);

}(React,d3,topojson,ReactDOM));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3VzZVdvcmxkQXRsYXMuanMiLCIuLi91c2VEYXRhLmpzIiwiLi4vRHJvcGRvd24uanMiLCIuLi9Ecm9wZG93bkF0dHIuanMiLCIuLi9CdWJibGVNYXAvTWFya3MuanMiLCIuLi9CdWJibGVNYXAvaW5kZXguanMiLCIuLi9IaXN0b2dyYW0vQXhpc0JvdHRvbS5qcyIsIi4uL0hpc3RvZ3JhbS9BeGlzTGVmdC5qcyIsIi4uL0hpc3RvZ3JhbS9NYXJrcy5qcyIsIi4uL0hpc3RvZ3JhbS9pbmRleC5qcyIsIi4uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ2QzJztcbmltcG9ydCB7IGZlYXR1cmUsIG1lc2ggfSBmcm9tICd0b3BvanNvbic7XG5cbmNvbnN0IGpzb25VcmwgPSAnaHR0cHM6Ly91bnBrZy5jb20vd29ybGQtYXRsYXNAMi4wLjIvY291bnRyaWVzLTUwbS5qc29uJztcblxuZXhwb3J0IGNvbnN0IHVzZVdvcmxkQXRsYXMgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAganNvbihqc29uVXJsKS50aGVuKHRvcG9sb2d5ID0+IHtcbiAgICAgIGNvbnN0IHsgY291bnRyaWVzLCBsYW5kIH0gPSB0b3BvbG9neS5vYmplY3RzO1xuICAgICAgc2V0RGF0YSh7XG4gICAgICAgIGxhbmQ6IGZlYXR1cmUodG9wb2xvZ3ksIGxhbmQpLFxuICAgICAgICBpbnRlcmlvcnM6IG1lc2godG9wb2xvZ3ksIGNvdW50cmllcywgKGEsIGIpID0+IGEgIT09IGIpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3YgfSBmcm9tICdkMyc7XG5cbmNvbnN0IGNzdlVybCA9XG4gICdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NoZW4tZGluZy03MS8zZTRlNWM2YTZmOTI0OGJkZWNlOTUwMDY5ZTNkMmFhZS9yYXcvNzk4MWVjOTcwZDc4MWUyY2I1YWJlZWQ0MTRiYjJhZjE4ZDQ1MjY2OS9TdWljaWRlX0J5X0NvdW50cnlfMTk3OXRvMjAxNi5jc3YnO1xuXG5jb25zdCByb3cgPSBkID0+IHtcbiAgZC5MYXRpdHVkZSA9ICtkLkxhdGl0dWRlO1xuICBkLkxvbmdpdHVkZSA9ICtkLkxvbmdpdHVkZTtcbiAgZFsnTGFzdCBhdmFpbGFibGUtTnVtYmVyJ10gPSArZFsnTGFzdCBhdmFpbGFibGUtTnVtYmVyJ107XG4gIHJldHVybiBkO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZURhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHJvdyA9IGQgPT4ge1xuICAgIGRbJ0xhc3QgYXZhaWxhYmxlLU51bWJlciddID0gK2RbJ0xhc3QgYXZhaWxhYmxlLU51bWJlciddO1xuICAgIGZvciAodmFyIGkgPSAyMDE2OyBpID49IDE5Nzk7IGktLSkge1xuICAgICAgZFtpXSA9ICtkW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZDtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNzdihjc3ZVcmwsIHJvdykudGhlbihzZXREYXRhKTtcbiAgfSwgW10pO1xuICBcbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IERyb3Bkb3duID0gKHtcbiAgb3B0aW9ucyxcbiAgaWQsXG4gIHNlbGVjdGVkVmFsdWUsXG4gIG9uU2VsZWN0ZWRWYWx1ZUNoYW5nZVxufSkgPT4gKFxuICA8c2VsZWN0IGlkPXtpZH0gb25DaGFuZ2U9e2V2ZW50ID0+IG9uU2VsZWN0ZWRWYWx1ZUNoYW5nZShldmVudC50YXJnZXQudmFsdWUpfT5cbiAgICB7b3B0aW9ucy5tYXAoKHsgdmFsdWUsIGxhYmVsIH0pID0+IChcbiAgICAgIDxvcHRpb24gdmFsdWU9e3ZhbHVlfSBzZWxlY3RlZD17dmFsdWUgPT09IHNlbGVjdGVkVmFsdWV9PlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L29wdGlvbj5cbiAgICApKX1cbiAgPC9zZWxlY3Q+XG4pO1xuIiwiZXhwb3J0IGNvbnN0IHllYXJBdHRyaWJ1dGVzID0gW1xuICB7IHZhbHVlOiAnTGFzdCBhdmFpbGFibGUnLCBsYWJlbDogJ01vc3QgUmVjZW50IFN1aWNpZGUgTnVtYmVyJyB9LFxuICB7IHZhbHVlOiAyMDE1LCBsYWJlbDogJzIwMTUnIH0sXG4gIHsgdmFsdWU6IDIwMTQsIGxhYmVsOiAnMjAxNCcgfSxcbiAgeyB2YWx1ZTogMjAxMywgbGFiZWw6ICcyMDEzJyB9LFxuICB7IHZhbHVlOiAyMDEyLCBsYWJlbDogJzIwMTInIH0sXG4gIHsgdmFsdWU6IDIwMTEsIGxhYmVsOiAnMjAxMScgfSxcbiAgeyB2YWx1ZTogMjAxMCwgbGFiZWw6ICcyMDEwJyB9LFxuICB7IHZhbHVlOiAyMDA5LCBsYWJlbDogJzIwMDknIH0sXG4gIHsgdmFsdWU6IDIwMDgsIGxhYmVsOiAnMjAwOCcgfSxcbiAgeyB2YWx1ZTogMjAwNywgbGFiZWw6ICcyMDA3JyB9LFxuICB7IHZhbHVlOiAyMDA2LCBsYWJlbDogJzIwMDYnIH0sXG4gIHsgdmFsdWU6IDIwMDUsIGxhYmVsOiAnMjAwNScgfSxcbiAgeyB2YWx1ZTogMjAwNCwgbGFiZWw6ICcyMDA0JyB9LFxuICB7IHZhbHVlOiAyMDAzLCBsYWJlbDogJzIwMDMnIH0sXG4gIHsgdmFsdWU6IDIwMDIsIGxhYmVsOiAnMjAwMicgfSxcbiAgeyB2YWx1ZTogMjAwMSwgbGFiZWw6ICcyMDAxJyB9LFxuICB7IHZhbHVlOiAyMDAwLCBsYWJlbDogJzIwMDAnIH0sXG4gIHsgdmFsdWU6IDE5OTksIGxhYmVsOiAnMTk5OScgfSxcbiAgeyB2YWx1ZTogMTk5OCwgbGFiZWw6ICcxOTk4JyB9LFxuICB7IHZhbHVlOiAxOTk3LCBsYWJlbDogJzE5OTcnIH0sXG4gIHsgdmFsdWU6IDE5OTYsIGxhYmVsOiAnMTk5NicgfSxcbiAgeyB2YWx1ZTogMTk5NSwgbGFiZWw6ICcxOTk1JyB9LFxuICB7IHZhbHVlOiAxOTk0LCBsYWJlbDogJzE5OTQnIH0sXG4gIHsgdmFsdWU6IDE5OTMsIGxhYmVsOiAnMTk5MycgfSxcbiAgeyB2YWx1ZTogMTk5MiwgbGFiZWw6ICcxOTkyJyB9LFxuICB7IHZhbHVlOiAxOTkxLCBsYWJlbDogJzE5OTEnIH0sXG4gIHsgdmFsdWU6IDE5OTAsIGxhYmVsOiAnMTk5MCcgfSxcbiAgeyB2YWx1ZTogMTk4OSwgbGFiZWw6ICcxOTg5JyB9LFxuICB7IHZhbHVlOiAxOTg4LCBsYWJlbDogJzE5ODgnIH0sXG4gIHsgdmFsdWU6IDE5ODcsIGxhYmVsOiAnMTk4NycgfSxcbiAgeyB2YWx1ZTogMTk4NiwgbGFiZWw6ICcxOTg2JyB9LFxuICB7IHZhbHVlOiAxOTg1LCBsYWJlbDogJzE5ODUnIH0sXG4gIHsgdmFsdWU6IDE5ODQsIGxhYmVsOiAnMTk4NCcgfSxcbiAgeyB2YWx1ZTogMTk4MywgbGFiZWw6ICcxOTgzJyB9LFxuICB7IHZhbHVlOiAxOTgyLCBsYWJlbDogJzE5ODInIH0sXG4gIHsgdmFsdWU6IDE5ODEsIGxhYmVsOiAnMTk4MScgfSxcbiAgeyB2YWx1ZTogMTk4MCwgbGFiZWw6ICcxOTgwJyB9LFxuICB7IHZhbHVlOiAxOTc5LCBsYWJlbDogJzE5NzknIH1cbl07XG5cbmV4cG9ydCBjb25zdCBjb3VudHJ5QXR0cmlidXRlcyA9IFtcbiAgeyB2YWx1ZTogJ0FsYmFuaWEnLCBsYWJlbDogJ0FsYmFuaWEnIH0sXG4gIHsgdmFsdWU6ICdBbmd1aWxsYScsIGxhYmVsOiAnQW5ndWlsbGEnIH0sXG4gIHsgdmFsdWU6ICdBbnRpZ3VhIGFuZCBCYXJidWRhJywgbGFiZWw6ICdBbnRpZ3VhIGFuZCBCYXJidWRhJyB9LFxuICB7IHZhbHVlOiAnQXJnZW50aW5hJywgbGFiZWw6ICdBcmdlbnRpbmEnIH0sXG4gIHsgdmFsdWU6ICdBcm1lbmlhJywgbGFiZWw6ICdBcm1lbmlhJyB9LFxuICB7IHZhbHVlOiAnQXJ1YmEnLCBsYWJlbDogJ0FydWJhJyB9LFxuICB7IHZhbHVlOiAnQXVzdHJhbGlhJywgbGFiZWw6ICdBdXN0cmFsaWEnIH0sXG4gIHsgdmFsdWU6ICdBdXN0cmlhJywgbGFiZWw6ICdBdXN0cmlhJyB9LFxuICB7IHZhbHVlOiAnQXplcmJhaWphbicsIGxhYmVsOiAnQXplcmJhaWphbicgfSxcbiAgeyB2YWx1ZTogJ0JhaGFtYXMnLCBsYWJlbDogJ0JhaGFtYXMnIH0sXG4gIHsgdmFsdWU6ICdCYWhyYWluJywgbGFiZWw6ICdCYWhyYWluJyB9LFxuICB7IHZhbHVlOiAnQmFyYmFkb3MnLCBsYWJlbDogJ0JhcmJhZG9zJyB9LFxuICB7IHZhbHVlOiAnQmVsYXJ1cycsIGxhYmVsOiAnQmVsYXJ1cycgfSxcbiAgeyB2YWx1ZTogJ0JlbGdpdW0nLCBsYWJlbDogJ0JlbGdpdW0nIH0sXG4gIHsgdmFsdWU6ICdCZWxpemUnLCBsYWJlbDogJ0JlbGl6ZScgfSxcbiAgeyB2YWx1ZTogJ0Jlcm11ZGEnLCBsYWJlbDogJ0Jlcm11ZGEnIH0sXG4gIHsgdmFsdWU6ICdCb2xpdmlhJywgbGFiZWw6ICdCb2xpdmlhJyB9LFxuICB7IHZhbHVlOiAnQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYScsIGxhYmVsOiAnQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYScgfSxcbiAgeyB2YWx1ZTogJ0JyYXppbCcsIGxhYmVsOiAnQnJhemlsJyB9LFxuICB7IHZhbHVlOiAnQnJpdGlzaCBWaXJnaW4gSXNsYW5kcycsIGxhYmVsOiAnQnJpdGlzaCBWaXJnaW4gSXNsYW5kcycgfSxcbiAgeyB2YWx1ZTogJ0JydW5laSBEYXJ1c3NhbGFtJywgbGFiZWw6ICdCcnVuZWkgRGFydXNzYWxhbScgfSxcbiAgeyB2YWx1ZTogJ0J1bGdhcmlhJywgbGFiZWw6ICdCdWxnYXJpYScgfSxcbiAgeyB2YWx1ZTogJ0NhbmFkYScsIGxhYmVsOiAnQ2FuYWRhJyB9LFxuICB7IHZhbHVlOiAnQ2FibyBWZXJkZScsIGxhYmVsOiAnQ2FibyBWZXJkZScgfSxcbiAgeyB2YWx1ZTogJ0NheW1hbiBJc2xhbmRzJywgbGFiZWw6ICdDYXltYW4gSXNsYW5kcycgfSxcbiAgeyB2YWx1ZTogJ0NoaWxlJywgbGFiZWw6ICdDaGlsZScgfSxcbiAgeyB2YWx1ZTogJ0NvbG9tYmlhJywgbGFiZWw6ICdDb2xvbWJpYScgfSxcbiAgeyB2YWx1ZTogJ0Nvc3RhIFJpY2EnLCBsYWJlbDogJ0Nvc3RhIFJpY2EnIH0sXG4gIHsgdmFsdWU6ICdDcm9hdGlhJywgbGFiZWw6ICdDcm9hdGlhJyB9LFxuICB7IHZhbHVlOiAnQ3ViYScsIGxhYmVsOiAnQ3ViYScgfSxcbiAgeyB2YWx1ZTogJ0N5cHJ1cycsIGxhYmVsOiAnQ3lwcnVzJyB9LFxuICB7IHZhbHVlOiAnQ3plY2ggUmVwdWJsaWMnLCBsYWJlbDogJ0N6ZWNoIFJlcHVibGljJyB9LFxuICB7IHZhbHVlOiAnRGVubWFyaycsIGxhYmVsOiAnRGVubWFyaycgfSxcbiAgeyB2YWx1ZTogJ0RvbWluaWNhJywgbGFiZWw6ICdEb21pbmljYScgfSxcbiAgeyB2YWx1ZTogJ0RvbWluaWNhbiBSZXB1YmxpYycsIGxhYmVsOiAnRG9taW5pY2FuIFJlcHVibGljJyB9LFxuICB7IHZhbHVlOiAnRWN1YWRvcicsIGxhYmVsOiAnRWN1YWRvcicgfSxcbiAgeyB2YWx1ZTogJ0VneXB0JywgbGFiZWw6ICdFZ3lwdCcgfSxcbiAgeyB2YWx1ZTogJ0VsIFNhbHZhZG9yJywgbGFiZWw6ICdFbCBTYWx2YWRvcicgfSxcbiAgeyB2YWx1ZTogJ0VzdG9uaWEnLCBsYWJlbDogJ0VzdG9uaWEnIH0sXG4gIHtcbiAgICB2YWx1ZTogJ0ZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKScsXG4gICAgbGFiZWw6ICdGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcyknXG4gIH0sXG4gIHsgdmFsdWU6ICdGaWppJywgbGFiZWw6ICdGaWppJyB9LFxuICB7IHZhbHVlOiAnRmlubGFuZCcsIGxhYmVsOiAnRmlubGFuZCcgfSxcbiAgeyB2YWx1ZTogJ0ZyYW5jZScsIGxhYmVsOiAnRnJhbmNlJyB9LFxuICB7IHZhbHVlOiAnRnJlbmNoIEd1aWFuYScsIGxhYmVsOiAnRnJlbmNoIEd1aWFuYScgfSxcbiAgeyB2YWx1ZTogJ0dlb3JnaWEnLCBsYWJlbDogJ0dlb3JnaWEnIH0sXG4gIHsgdmFsdWU6ICdHZXJtYW55JywgbGFiZWw6ICdHZXJtYW55JyB9LFxuICB7IHZhbHVlOiAnR3JlZWNlJywgbGFiZWw6ICdHcmVlY2UnIH0sXG4gIHsgdmFsdWU6ICdHcmVuYWRhJywgbGFiZWw6ICdHcmVuYWRhJyB9LFxuICB7IHZhbHVlOiAnR3VhZGVsb3VwZScsIGxhYmVsOiAnR3VhZGVsb3VwZScgfSxcbiAgeyB2YWx1ZTogJ0d1YXRlbWFsYScsIGxhYmVsOiAnR3VhdGVtYWxhJyB9LFxuICB7IHZhbHVlOiAnR3V5YW5hJywgbGFiZWw6ICdHdXlhbmEnIH0sXG4gIHsgdmFsdWU6ICdIYWl0aScsIGxhYmVsOiAnSGFpdGknIH0sXG4gIHsgdmFsdWU6ICdIb25kdXJhcycsIGxhYmVsOiAnSG9uZHVyYXMnIH0sXG4gIHsgdmFsdWU6ICdIb25nIEtvbmcgU0FSJywgbGFiZWw6ICdIb25nIEtvbmcgU0FSJyB9LFxuICB7IHZhbHVlOiAnSHVuZ2FyeScsIGxhYmVsOiAnSHVuZ2FyeScgfSxcbiAgeyB2YWx1ZTogJ0ljZWxhbmQnLCBsYWJlbDogJ0ljZWxhbmQnIH0sXG4gIHsgdmFsdWU6ICdJcmFuIChJc2xhbWljIFJlcCBvZiknLCBsYWJlbDogJ0lyYW4gKElzbGFtaWMgUmVwIG9mKScgfSxcbiAgeyB2YWx1ZTogJ0lyYXEnLCBsYWJlbDogJ0lyYXEnIH0sXG4gIHsgdmFsdWU6ICdJcmVsYW5kJywgbGFiZWw6ICdJcmVsYW5kJyB9LFxuICB7IHZhbHVlOiAnSXNyYWVsJywgbGFiZWw6ICdJc3JhZWwnIH0sXG4gIHsgdmFsdWU6ICdJdGFseScsIGxhYmVsOiAnSXRhbHknIH0sXG4gIHsgdmFsdWU6ICdKYW1haWNhJywgbGFiZWw6ICdKYW1haWNhJyB9LFxuICB7IHZhbHVlOiAnSmFwYW4nLCBsYWJlbDogJ0phcGFuJyB9LFxuICB7IHZhbHVlOiAnSm9yZGFuJywgbGFiZWw6ICdKb3JkYW4nIH0sXG4gIHsgdmFsdWU6ICdLYXpha2hzdGFuJywgbGFiZWw6ICdLYXpha2hzdGFuJyB9LFxuICB7IHZhbHVlOiAnS2lyaWJhdGknLCBsYWJlbDogJ0tpcmliYXRpJyB9LFxuICB7IHZhbHVlOiAnS3V3YWl0JywgbGFiZWw6ICdLdXdhaXQnIH0sXG4gIHsgdmFsdWU6ICdLeXJneXpzdGFuJywgbGFiZWw6ICdLeXJneXpzdGFuJyB9LFxuICB7IHZhbHVlOiAnTGF0dmlhJywgbGFiZWw6ICdMYXR2aWEnIH0sXG4gIHsgdmFsdWU6ICdMaXRodWFuaWEnLCBsYWJlbDogJ0xpdGh1YW5pYScgfSxcbiAgeyB2YWx1ZTogJ0x1eGVtYm91cmcnLCBsYWJlbDogJ0x1eGVtYm91cmcnIH0sXG4gIHsgdmFsdWU6ICdNYWNhdScsIGxhYmVsOiAnTWFjYXUnIH0sXG4gIHsgdmFsdWU6ICdNYWxheXNpYScsIGxhYmVsOiAnTWFsYXlzaWEnIH0sXG4gIHsgdmFsdWU6ICdNYWxkaXZlcycsIGxhYmVsOiAnTWFsZGl2ZXMnIH0sXG4gIHsgdmFsdWU6ICdNYWx0YScsIGxhYmVsOiAnTWFsdGEnIH0sXG4gIHsgdmFsdWU6ICdNYXJ0aW5pcXVlJywgbGFiZWw6ICdNYXJ0aW5pcXVlJyB9LFxuICB7IHZhbHVlOiAnTWF1cml0aXVzJywgbGFiZWw6ICdNYXVyaXRpdXMnIH0sXG4gIHsgdmFsdWU6ICdNYXlvdHRlJywgbGFiZWw6ICdNYXlvdHRlJyB9LFxuICB7IHZhbHVlOiAnTWV4aWNvJywgbGFiZWw6ICdNZXhpY28nIH0sXG4gIHsgdmFsdWU6ICdNb25hY28nLCBsYWJlbDogJ01vbmFjbycgfSxcbiAgeyB2YWx1ZTogJ01vbmdvbGlhJywgbGFiZWw6ICdNb25nb2xpYScgfSxcbiAgeyB2YWx1ZTogJ01vbnRlbmVncm8nLCBsYWJlbDogJ01vbnRlbmVncm8nIH0sXG4gIHsgdmFsdWU6ICdNb250c2VycmF0JywgbGFiZWw6ICdNb250c2VycmF0JyB9LFxuICB7IHZhbHVlOiAnTW9yb2NjbycsIGxhYmVsOiAnTW9yb2NjbycgfSxcbiAgeyB2YWx1ZTogJ05ldGhlcmxhbmRzJywgbGFiZWw6ICdOZXRoZXJsYW5kcycgfSxcbiAgeyB2YWx1ZTogJ05ldGhlcmxhbmRzIEFudGlsbGVzJywgbGFiZWw6ICdOZXRoZXJsYW5kcyBBbnRpbGxlcycgfSxcbiAgeyB2YWx1ZTogJ05ldyBaZWFsYW5kJywgbGFiZWw6ICdOZXcgWmVhbGFuZCcgfSxcbiAgeyB2YWx1ZTogJ05pY2FyYWd1YScsIGxhYmVsOiAnTmljYXJhZ3VhJyB9LFxuICB7IHZhbHVlOiAnTm9yd2F5JywgbGFiZWw6ICdOb3J3YXknIH0sXG4gIHtcbiAgICB2YWx1ZTogJ09jY3VwaWVkIFBhbGVzdGluaWFuIFRlcnJpdG9yeScsXG4gICAgbGFiZWw6ICdPY2N1cGllZCBQYWxlc3RpbmlhbiBUZXJyaXRvcnknXG4gIH0sXG4gIHsgdmFsdWU6ICdPbWFuJywgbGFiZWw6ICdPbWFuJyB9LFxuICB7IHZhbHVlOiAnUGFuYW1hJywgbGFiZWw6ICdQYW5hbWEnIH0sXG4gIHsgdmFsdWU6ICdQYXJhZ3VheScsIGxhYmVsOiAnUGFyYWd1YXknIH0sXG4gIHsgdmFsdWU6ICdQZXJ1JywgbGFiZWw6ICdQZXJ1JyB9LFxuICB7IHZhbHVlOiAnUGhpbGlwcGluZXMnLCBsYWJlbDogJ1BoaWxpcHBpbmVzJyB9LFxuICB7IHZhbHVlOiAnUG9sYW5kJywgbGFiZWw6ICdQb2xhbmQnIH0sXG4gIHsgdmFsdWU6ICdQb3J0dWdhbCcsIGxhYmVsOiAnUG9ydHVnYWwnIH0sXG4gIHsgdmFsdWU6ICdQdWVydG8gUmljbycsIGxhYmVsOiAnUHVlcnRvIFJpY28nIH0sXG4gIHsgdmFsdWU6ICdRYXRhcicsIGxhYmVsOiAnUWF0YXInIH0sXG4gIHsgdmFsdWU6ICdSZXB1YmxpYyBvZiBLb3JlYScsIGxhYmVsOiAnUmVwdWJsaWMgb2YgS29yZWEnIH0sXG4gIHsgdmFsdWU6ICdSZXB1YmxpYyBvZiBNb2xkb3ZhJywgbGFiZWw6ICdSZXB1YmxpYyBvZiBNb2xkb3ZhJyB9LFxuICB7IHZhbHVlOiAnUmV1bmlvbicsIGxhYmVsOiAnUmV1bmlvbicgfSxcbiAgeyB2YWx1ZTogJ1JvZHJpZ3VlcycsIGxhYmVsOiAnUm9kcmlndWVzJyB9LFxuICB7IHZhbHVlOiAnUm9tYW5pYScsIGxhYmVsOiAnUm9tYW5pYScgfSxcbiAgeyB2YWx1ZTogJ1J1c3NpYW4gRmVkZXJhdGlvbicsIGxhYmVsOiAnUnVzc2lhbiBGZWRlcmF0aW9uJyB9LFxuICB7IHZhbHVlOiAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJywgbGFiZWw6ICdTYWludCBLaXR0cyBhbmQgTmV2aXMnIH0sXG4gIHsgdmFsdWU6ICdTYWludCBMdWNpYScsIGxhYmVsOiAnU2FpbnQgTHVjaWEnIH0sXG4gIHsgdmFsdWU6ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJywgbGFiZWw6ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJyB9LFxuICB7XG4gICAgdmFsdWU6ICdTYWludCBWaW5jZW50IGFuZCBHcmVuYWRpbmVzJyxcbiAgICBsYWJlbDogJ1NhaW50IFZpbmNlbnQgYW5kIEdyZW5hZGluZXMnXG4gIH0sXG4gIHsgdmFsdWU6ICdTYW4gTWFyaW5vJywgbGFiZWw6ICdTYW4gTWFyaW5vJyB9LFxuICB7IHZhbHVlOiAnU2FvIFRvbWUgYW5kIFByaW5jaXBlJywgbGFiZWw6ICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnIH0sXG4gIHsgdmFsdWU6ICdTYXVkaSBBcmFiaWEnLCBsYWJlbDogJ1NhdWRpIEFyYWJpYScgfSxcbiAgeyB2YWx1ZTogJ1NlcmJpYScsIGxhYmVsOiAnU2VyYmlhJyB9LFxuICB7IHZhbHVlOiAnU2V5Y2hlbGxlcycsIGxhYmVsOiAnU2V5Y2hlbGxlcycgfSxcbiAgeyB2YWx1ZTogJ1NpbmdhcG9yZScsIGxhYmVsOiAnU2luZ2Fwb3JlJyB9LFxuICB7IHZhbHVlOiAnU2xvdmFraWEnLCBsYWJlbDogJ1Nsb3Zha2lhJyB9LFxuICB7IHZhbHVlOiAnU2xvdmVuaWEnLCBsYWJlbDogJ1Nsb3ZlbmlhJyB9LFxuICB7IHZhbHVlOiAnU291dGggQWZyaWNhJywgbGFiZWw6ICdTb3V0aCBBZnJpY2EnIH0sXG4gIHsgdmFsdWU6ICdTcGFpbicsIGxhYmVsOiAnU3BhaW4nIH0sXG4gIHsgdmFsdWU6ICdTcmkgTGFua2EnLCBsYWJlbDogJ1NyaSBMYW5rYScgfSxcbiAgeyB2YWx1ZTogJ1N1cmluYW1lJywgbGFiZWw6ICdTdXJpbmFtZScgfSxcbiAgeyB2YWx1ZTogJ1N3ZWRlbicsIGxhYmVsOiAnU3dlZGVuJyB9LFxuICB7IHZhbHVlOiAnU3dpdHplcmxhbmQnLCBsYWJlbDogJ1N3aXR6ZXJsYW5kJyB9LFxuICB7IHZhbHVlOiAnU3lyaWFuIEFyYWIgUmVwdWJsaWMnLCBsYWJlbDogJ1N5cmlhbiBBcmFiIFJlcHVibGljJyB9LFxuICB7IHZhbHVlOiAnVGFqaWtpc3RhbicsIGxhYmVsOiAnVGFqaWtpc3RhbicgfSxcbiAgeyB2YWx1ZTogJ1RGWVIgTWFjZWRvbmlhJywgbGFiZWw6ICdURllSIE1hY2Vkb25pYScgfSxcbiAgeyB2YWx1ZTogJ1RoYWlsYW5kJywgbGFiZWw6ICdUaGFpbGFuZCcgfSxcbiAgeyB2YWx1ZTogJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLCBsYWJlbDogJ1RyaW5pZGFkIGFuZCBUb2JhZ28nIH0sXG4gIHsgdmFsdWU6ICdUdW5pc2lhJywgbGFiZWw6ICdUdW5pc2lhJyB9LFxuICB7IHZhbHVlOiAnVHVya2V5JywgbGFiZWw6ICdUdXJrZXknIH0sXG4gIHsgdmFsdWU6ICdUdXJrbWVuaXN0YW4nLCBsYWJlbDogJ1R1cmttZW5pc3RhbicgfSxcbiAgeyB2YWx1ZTogJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcycsIGxhYmVsOiAnVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzJyB9LFxuICB7IHZhbHVlOiAnVWtyYWluZScsIGxhYmVsOiAnVWtyYWluZScgfSxcbiAgeyB2YWx1ZTogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJywgbGFiZWw6ICdVbml0ZWQgQXJhYiBFbWlyYXRlcycgfSxcbiAgeyB2YWx1ZTogJ1VuaXRlZCBLaW5nZG9tJywgbGFiZWw6ICdVbml0ZWQgS2luZ2RvbScgfSxcbiAgeyB2YWx1ZTogJ1VuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYScsIGxhYmVsOiAnVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhJyB9LFxuICB7IHZhbHVlOiAnVXJ1Z3VheScsIGxhYmVsOiAnVXJ1Z3VheScgfSxcbiAgeyB2YWx1ZTogJ1V6YmVraXN0YW4nLCBsYWJlbDogJ1V6YmVraXN0YW4nIH0sXG4gIHtcbiAgICB2YWx1ZTogJ1ZlbmV6dWVsYSAoQm9saXZhcmlhbiBSZXB1YmxpYyBvZiknLFxuICAgIGxhYmVsOiAnVmVuZXp1ZWxhIChCb2xpdmFyaWFuIFJlcHVibGljIG9mKSdcbiAgfSxcbiAgeyB2YWx1ZTogJ1ZpcmdpbiBJc2xhbmRzIChVU0EpJywgbGFiZWw6ICdWaXJnaW4gSXNsYW5kcyAoVVNBKScgfSxcbiAgeyB2YWx1ZTogJ1ppbWJhYndlJywgbGFiZWw6ICdaaW1iYWJ3ZScgfVxuXTtcbiIsImltcG9ydCB7IGdlb05hdHVyYWxFYXJ0aDEsIGdlb1BhdGgsIGdlb0dyYXRpY3VsZSB9IGZyb20gJ2QzJztcblxuY29uc3QgcHJvamVjdGlvbiA9IGdlb05hdHVyYWxFYXJ0aDEoKTtcbmNvbnN0IHBhdGggPSBnZW9QYXRoKHByb2plY3Rpb24pO1xuY29uc3QgZ3JhdGljdWxlID0gZ2VvR3JhdGljdWxlKCk7XG5cbmV4cG9ydCBjb25zdCBNYXJrcyA9ICh7XG4gIHdvcmxkQXRsYXM6IHsgbGFuZCwgaW50ZXJpb3JzIH0sXG4gIGNvdW50cmllcyxcbiAgc2l6ZVNjYWxlLFxuICBzaXplVmFsdWUsXG4gIHRvb2x0aXBGb3JtYXQsXG4gIGhpZ2hsaWdodENvdW50cnlcbn0pID0+IChcbiAgPGcgY2xhc3NOYW1lPVwibWFya3NcIj5cbiAgICA8cGF0aCBjbGFzc05hbWU9XCJzcGhlcmVcIiBkPXtwYXRoKHsgdHlwZTogJ1NwaGVyZScgfSl9IC8+XG4gICAgPHBhdGggY2xhc3NOYW1lPVwiZ3JhdGljdWxlc1wiIGQ9e3BhdGgoZ3JhdGljdWxlKCkpfSAvPlxuICAgIHtsYW5kLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IChcbiAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImxhbmRcIiBkPXtwYXRoKGZlYXR1cmUpfSAvPlxuICAgICkpfVxuICAgIDxwYXRoIGNsYXNzTmFtZT1cImludGVyaW9yc1wiIGQ9e3BhdGgoaW50ZXJpb3JzKX0gLz5cbiAgICB7Y291bnRyaWVzLm1hcChkID0+IHtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IHByb2plY3Rpb24oW2QuTG9uZ2l0dWRlLCBkLkxhdGl0dWRlXSk7XG5cbiAgICAgIGlmIChkWydDb3VudHJpZXMnXSA9PT0gaGlnaGxpZ2h0Q291bnRyeSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgIGN4PXt4fVxuICAgICAgICAgICAgY3k9e3l9XG4gICAgICAgICAgICByPXtzaXplU2NhbGUoc2l6ZVZhbHVlKGQpKX1cbiAgICAgICAgICAgIGZpbGw9eycjQkQyRDI4J31cbiAgICAgICAgICAgIG9wYWNpdHk9ezF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRpdGxlPnt0b29sdGlwRm9ybWF0KGQpfTwvdGl0bGU+XG4gICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgIGN4PXt4fVxuICAgICAgICAgICAgY3k9e3l9XG4gICAgICAgICAgICByPXtzaXplU2NhbGUoc2l6ZVZhbHVlKGQpKX1cbiAgICAgICAgICAgIGZpbGw9eycjQzM3QTczJ31cbiAgICAgICAgICAgIG9wYWNpdHk9ezAuNX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGl0bGU+e3Rvb2x0aXBGb3JtYXQoZCl9PC90aXRsZT5cbiAgICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KX1cbiAgPC9nPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzY2FsZVNxcnQsIG1heCB9IGZyb20gJ2QzJztcbmltcG9ydCB7IE1hcmtzIH0gZnJvbSAnLi9NYXJrcyc7XG5cbmV4cG9ydCBjb25zdCBCdWJibGVNYXAgPSAoeyBkYXRhLCB5ZWFyLCBjb3VudHJ5LCB3b3JsZEF0bGFzIH0pID0+IHtcbiAgY29uc3Qgc2l6ZVZhbHVlID0gZCA9PiBkW3llYXJdO1xuICBjb25zdCBtYXhSYWRpdXMgPSAzMDtcblxuICBjb25zdCBzaXplU2NhbGUgPSBzY2FsZVNxcnQoKVxuICAgIC5kb21haW4oWzAsIG1heChkYXRhLCBzaXplVmFsdWUpXSlcbiAgICAucmFuZ2UoWzAsIG1heFJhZGl1c10pO1xuXG4gIGNvbnN0IHRvb2x0aXBGb3JtYXQgPSBkID0+XG4gICAgZFsnQ291bnRyaWVzJ10gKyAnXFxuJyArICdZZWFyOiAnICsgeWVhciArICdcXG4nICsgJ1N1aWNpZGU6ICcgKyBkW3llYXJdO1xuXG4gIHJldHVybiAoXG4gICAgICA8TWFya3NcbiAgICAgICAgd29ybGRBdGxhcz17d29ybGRBdGxhc31cbiAgICAgICAgY291bnRyaWVzPXtkYXRhfVxuICAgICAgICBzaXplU2NhbGU9e3NpemVTY2FsZX1cbiAgICAgICAgc2l6ZVZhbHVlPXtzaXplVmFsdWV9XG4gICAgICAgIHRvb2x0aXBGb3JtYXQ9e3Rvb2x0aXBGb3JtYXR9XG4gICAgICAgIGhpZ2hsaWdodENvdW50cnk9e2NvdW50cnl9XG4gICAgICAvPlxuICApO1xufTtcbiIsImV4cG9ydCBjb25zdCBBeGlzQm90dG9tID0gKHsgeFNjYWxlLCBpbm5lckhlaWdodCwgdGlja0Zvcm1hdCB9KSA9PlxuICB4U2NhbGUudGlja3MoKS5tYXAodGlja1ZhbHVlID0+IChcbiAgICA8Z1xuICAgICAgY2xhc3NOYW1lPVwidGlja1wiXG4gICAgICBrZXk9e3RpY2tWYWx1ZX1cbiAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3hTY2FsZSh0aWNrVmFsdWUpfSwwKWB9XG4gICAgPlxuICAgICAgPGxpbmUgeTI9e2lubmVySGVpZ2h0fSAvPlxuICAgICAgPHRleHQgc3R5bGU9e3sgdGV4dEFuY2hvcjogJ21pZGRsZScgfX0gZHk9XCIxZW1cIiB5PXtpbm5lckhlaWdodCArIDR9PlxuICAgICAgICB7dGlja0Zvcm1hdCh0aWNrVmFsdWUpfVxuICAgICAgPC90ZXh0PlxuICAgIDwvZz5cbiAgKSk7IiwiZXhwb3J0IGNvbnN0IEF4aXNMZWZ0ID0gKHsgeVNjYWxlIH0pID0+XG4gIHlTY2FsZS5kb21haW4oKS5tYXAodGlja1ZhbHVlID0+IChcbiAgICA8ZyBjbGFzc05hbWU9XCJ0aWNrXCI+XG4gICAgICA8dGV4dFxuICAgICAgICBrZXk9e3RpY2tWYWx1ZX1cbiAgICAgICAgc3R5bGU9e3sgdGV4dEFuY2hvcjogJ2VuZCcgfX1cbiAgICAgICAgeD17LTN9XG4gICAgICAgIGR5PVwiLjMyZW1cIlxuICAgICAgICB5PXt5U2NhbGUodGlja1ZhbHVlKSArIHlTY2FsZS5iYW5kd2lkdGgoKSAvIDJ9XG4gICAgICA+XG4gICAgICAgIHt0aWNrVmFsdWV9XG4gICAgICA8L3RleHQ+XG4gICAgPC9nPlxuICApKTtcbiIsImV4cG9ydCBjb25zdCBNYXJrcyA9ICh7XG4gIGRhdGEsXG4gIHhTY2FsZSxcbiAgeVNjYWxlLFxuICB4VmFsdWUsXG4gIHlWYWx1ZSxcbiAgdG9vbHRpcEZvcm1hdFxufSkgPT4gXG4gIGRhdGEubWFwKGQgPT4gKFxuICAgIDxyZWN0XG4gICAgICBjbGFzc05hbWU9XCJtYXJrXCJcbiAgICAgIGtleT17eVZhbHVlKGQpfVxuICAgICAgeD17MH1cbiAgICAgIHk9e3lTY2FsZSh5VmFsdWUoZCkpfVxuICAgICAgd2lkdGg9e3hTY2FsZSh4VmFsdWUoZCkpfVxuICAgICAgaGVpZ2h0PXt5U2NhbGUuYmFuZHdpZHRoKCl9XG4gICAgICBmaWxsPXsnI0MzN0E3Myd9XG4gICAgPlxuICAgICAgPHRpdGxlPnt0b29sdGlwRm9ybWF0KHhWYWx1ZShkKSl9PC90aXRsZT5cbiAgICA8L3JlY3Q+XG4gICkpO1xuXG5cbiIsImltcG9ydCB7XG4gIHNjYWxlTGluZWFyLFxuICBzY2FsZVRpbWUsXG4gIHNjYWxlQmFuZCxcbiAgbWF4LFxuICB0aW1lRm9ybWF0LFxuICBleHRlbnQsXG4gIGhpc3RvZ3JhbSBhcyBiaW4sXG4gIHRpbWVNb250aHMsXG4gIHN1bSxcbiAgc2VsZWN0LFxuICBldmVudCxcbiAgZm9ybWF0XG59IGZyb20gJ2QzJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXhpc0JvdHRvbSB9IGZyb20gJy4vQXhpc0JvdHRvbSc7XG5pbXBvcnQgeyBBeGlzTGVmdCB9IGZyb20gJy4vQXhpc0xlZnQnO1xuaW1wb3J0IHsgTWFya3MgfSBmcm9tICcuL01hcmtzJztcblxuY29uc3Qgd2lkdGggPSA5NjA7XG5jb25zdCBtZW51SGVpZ2h0ID0gODA7XG5jb25zdCBoZWlnaHQgPSA1MDAgLSBtZW51SGVpZ2h0O1xuY29uc3QgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogMzAsIGJvdHRvbTogODAsIGxlZnQ6IDI1MCB9O1xuY29uc3QgeEF4aXNMYWJlbE9mZnNldCA9IDUwO1xuXG5jb25zdCBpbm5lckhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuY29uc3QgaW5uZXJXaWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG5cbmV4cG9ydCBjb25zdCBIaXN0b2dyYW0gPSAoeyBkYXRhLCB5ZWFyIH0pID0+IHtcbiAgY29uc29sZS5sb2coMSk7XG4gIGNvbnN0IHhWYWx1ZSA9IGQgPT4gZFt5ZWFyXTtcbiAgY29uc3QgeVZhbHVlID0gZCA9PiBkWydDb3VudHJpZXMnXTtcbiAgXG4gIGNvbnN0IHNpRm9ybWF0ID0gZm9ybWF0KCcuMnMnKTtcbiAgY29uc3QgeEF4aXNUaWNrRm9ybWF0ID0gdGlja1ZhbHVlID0+IHNpRm9ybWF0KHRpY2tWYWx1ZSkucmVwbGFjZSgnRycsICdCJyk7XG4gIGNvbnN0IHlTY2FsZSA9IHNjYWxlQmFuZCgpXG4gICAgLmRvbWFpbihkYXRhLm1hcCh5VmFsdWUpKVxuICAgIC5yYW5nZShbMCwgaW5uZXJIZWlnaHRdKVxuICAgIC5wYWRkaW5nSW5uZXIoMC4xNSk7XG5cbiAgY29uc3QgeFNjYWxlID0gc2NhbGVMaW5lYXIoKVxuICAgIC5kb21haW4oWzAsIG1heChkYXRhLCB4VmFsdWUpXSlcbiAgICAucmFuZ2UoWzAsIGlubmVyV2lkdGhdKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYH0+XG4gICAgICA8QXhpc0JvdHRvbVxuICAgICAgICB4U2NhbGU9e3hTY2FsZX1cbiAgICAgICAgaW5uZXJIZWlnaHQ9e2lubmVySGVpZ2h0fVxuICAgICAgICB0aWNrRm9ybWF0PXt4QXhpc1RpY2tGb3JtYXR9XG4gICAgICAgIHRpY2tPZmZzZXQ9ezV9XG4gICAgICAvPlxuICAgICAgPEF4aXNMZWZ0IHlTY2FsZT17eVNjYWxlfSAvPlxuXHRcdFx0PHRleHRcbiAgICAgICAgY2xhc3NOYW1lPVwiYXhpcy1sYWJlbFwiXG4gICAgICAgIHg9e2lubmVyV2lkdGggLyAyfVxuICAgICAgICB5PXttYXJnaW4udG9wIC0gNDB9XG4gICAgICAgIHRleHRBbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICBmb250LXNpemUgPSB7MzB9XG4gICAgICA+XG4gICAgICAgIFRvcCAxNSBDb3VudHJpZXMgV2l0aCB0aGUgSGlnaGVzdCBSYXRlcyBvZiBTdWljaWRlIFxuICAgICAgPC90ZXh0PlxuICAgICAgPHRleHRcbiAgICAgICAgY2xhc3NOYW1lPVwiYXhpcy1sYWJlbFwiXG4gICAgICAgIHg9e2lubmVyV2lkdGggLyAyfVxuICAgICAgICB5PXtpbm5lckhlaWdodCArIHhBeGlzTGFiZWxPZmZzZXR9XG4gICAgICAgIHRleHRBbmNob3I9XCJtaWRkbGVcIlxuICAgICAgPlxuICAgICAgICBTdWljaWRlIE51bWJlclxuICAgICAgPC90ZXh0PlxuICAgICAgPE1hcmtzXG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICB5U2NhbGU9e3lTY2FsZX1cbiAgICAgICAgeFZhbHVlPXt4VmFsdWV9XG4gICAgICAgIHlWYWx1ZT17eVZhbHVlfVxuICAgICAgICB0b29sdGlwRm9ybWF0PXt4QXhpc1RpY2tGb3JtYXR9XG4gICAgICAvPlxuICAgIDwvZz5cbiAgICAgIFxuICApO1xufTtcblxuLy8gY29uc29sZS5sb2coSGlzdG9ncmFtKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgc2NhbGVTcXJ0LCBtYXggfSBmcm9tICdkMyc7XG5pbXBvcnQgeyB1c2VXb3JsZEF0bGFzIH0gZnJvbSAnLi91c2VXb3JsZEF0bGFzJztcbmltcG9ydCB7IHVzZURhdGEgfSBmcm9tICcuL3VzZURhdGEnO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICcuL0Ryb3Bkb3duJztcbmltcG9ydCB7IHllYXJBdHRyaWJ1dGVzLCBjb3VudHJ5QXR0cmlidXRlcyB9IGZyb20gJy4vRHJvcGRvd25BdHRyJztcbmltcG9ydCB7IEJ1YmJsZU1hcCB9IGZyb20gJy4vQnViYmxlTWFwL2luZGV4LmpzJztcbmltcG9ydCB7IEhpc3RvZ3JhbSB9IGZyb20gJy4vSGlzdG9ncmFtL2luZGV4LmpzJztcblxuY29uc3Qgd2lkdGggPSA5NjA7XG5jb25zdCBoZWlnaHQgPSA1MDA7XG5cbmNvbnN0IEhpc3RvZ3JhbVNpemUgPSAwLjI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgaW5pdGlhbFllYXIgPSAnTGFzdCBhdmFpbGFibGUtTnVtYmVyJztcbiAgdmFyIFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKGluaXRpYWxZZWFyKTtcbiAgdmFyIFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGlmICh5ZWFyID09ICdMYXN0IGF2YWlsYWJsZS1OdW1iZXInKSB7XG4gICAgeWVhciA9ICdMYXN0IGF2YWlsYWJsZS1OdW1iZXInO1xuICB9IGVsc2Uge1xuICAgIHllYXIgPSAreWVhcjtcbiAgfVxuXG4gIGNvbnN0IHdvcmxkQXRsYXMgPSB1c2VXb3JsZEF0bGFzKCk7XG4gIGNvbnN0IGRhdGEgPSB1c2VEYXRhKCk7XG5cbiAgaWYgKCF3b3JsZEF0bGFzIHx8ICFkYXRhKSB7XG4gICAgcmV0dXJuIDxwcmU+TG9hZGluZy4uLjwvcHJlPjtcbiAgfVxuXG4gIGNvbnN0IHNvcnREYXRhID0gKGRhdGEsIHllYXIpID0+IHtcbiAgICAvLyBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBzb3J0ZWREYXRhID0gZGF0YS5zb3J0KGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIHJldHVybiBkMy5kZXNjZW5kaW5nKHhbeWVhcl0sIHlbeWVhcl0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNvcnRlZERhdGEuc2xpY2UoMCwgMTUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudXMtY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3Bkb3duLWxhYmVsXCI+WWVhcjo8L3NwYW4+XG4gICAgICAgIDxEcm9wZG93blxuICAgICAgICAgIG9wdGlvbnM9e3llYXJBdHRyaWJ1dGVzfVxuICAgICAgICAgIGlkPVwieC1zZWxlY3RcIlxuICAgICAgICAgIHZhbHVlPXt5ZWFyfVxuICAgICAgICAgIG9uU2VsZWN0ZWRWYWx1ZUNoYW5nZT17c2V0WWVhcn1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHJvcGRvd24tbGFiZWxcIj5Db3VudHJpZXM6PC9zcGFuPlxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICBvcHRpb25zPXtjb3VudHJ5QXR0cmlidXRlc31cbiAgICAgICAgICBpZD1cIngtc2VsZWN0XCJcbiAgICAgICAgICB2YWx1ZT17Y291bnRyeX1cbiAgICAgICAgICBvblNlbGVjdGVkVmFsdWVDaGFuZ2U9e3NldENvdW50cnl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7MTAwfSwgJHsyMH0pIHNjYWxlKDAuOSwgMC45KWB9PlxuICAgICAgICAgIDxCdWJibGVNYXBcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICB5ZWFyPXt5ZWFyfVxuICAgICAgICAgICAgY291bnRyeT17Y291bnRyeX1cbiAgICAgICAgICAgIHdvcmxkQXRsYXM9e3dvcmxkQXRsYXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuXG4gICAgICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgkezB9LCAkezI4MH0pIHNjYWxlKDAuMzUsIDAuMzUpYH0+XG4gICAgICAgICAgPEhpc3RvZ3JhbSBkYXRhPXtzb3J0RGF0YShkYXRhLCB5ZWFyKX0geWVhcj17eWVhcn0gLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgPC8+XG4gICk7XG59O1xuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIHJvb3RFbGVtZW50KTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImpzb24iLCJmZWF0dXJlIiwibWVzaCIsImNzdiIsIlJlYWN0IiwiZ2VvTmF0dXJhbEVhcnRoMSIsImdlb1BhdGgiLCJnZW9HcmF0aWN1bGUiLCJzY2FsZVNxcnQiLCJtYXgiLCJNYXJrcyIsImZvcm1hdCIsInNjYWxlQmFuZCIsInNjYWxlTGluZWFyIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7OztFQUlBLE1BQU0sT0FBTyxHQUFHLHdEQUF3RCxDQUFDOztBQUV6RSxFQUFPLE1BQU0sYUFBYSxHQUFHLE1BQU07SUFDakMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBR0EsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFFdkNDLGlCQUFTLENBQUMsTUFBTTtNQUNkQyxTQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSTtRQUM3QixNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDN0MsT0FBTyxDQUFDO1VBQ04sSUFBSSxFQUFFQyxnQkFBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7VUFDN0IsU0FBUyxFQUFFQyxhQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4RCxDQUFDLENBQUM7T0FDSixDQUFDLENBQUM7S0FDSixFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUVQLE9BQU8sSUFBSSxDQUFDO0dBQ2IsQ0FBQzs7RUNqQkYsTUFBTSxNQUFNO0lBQ1YsaUtBQWlLLENBQUM7O0FBU3BLLEVBQU8sTUFBTSxPQUFPLEdBQUcsTUFBTTtJQUMzQixNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHSixnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUV2QyxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUk7TUFDZixDQUFDLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO01BQ3pELEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2Q7TUFDRCxPQUFPLENBQUMsQ0FBQztLQUNWLENBQUM7O0lBRUZDLGlCQUFTLENBQUMsTUFBTTtNQUNkSSxRQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNoQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUVQLE9BQU8sSUFBSSxDQUFDO0dBQ2IsQ0FBQzs7RUMzQkssTUFBTSxRQUFRLEdBQUcsQ0FBQztJQUN2QixPQUFPO0lBQ1AsRUFBRTtJQUNGLGFBQWE7SUFDYixxQkFBcUI7R0FDdEI7SUFDQ0MsNENBQVEsSUFBSSxFQUFHLEVBQUMsVUFBVSxLQUFLLElBQUkscUJBQXFCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7TUFDMUUsT0FBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtRQUM1QkEsNENBQVEsT0FBTyxLQUFNLEVBQUMsVUFBVSxLQUFLLEtBQUssYUFBYTtVQUNwRCxLQUFLO1NBQ0M7T0FDVixDQUFDO0tBQ0s7R0FDVixDQUFDOztFQ2ZLLE1BQU0sY0FBYyxHQUFHO0lBQzVCLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSw0QkFBNEIsRUFBRTtJQUNoRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtHQUMvQixDQUFDOztBQUVGLEVBQU8sTUFBTSxpQkFBaUIsR0FBRztJQUMvQixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUN0QyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtJQUN4QyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUU7SUFDOUQsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7SUFDMUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDbEMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7SUFDMUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDNUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDeEMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7SUFDcEMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsS0FBSyxFQUFFLHdCQUF3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SyxFQUFFLFVBQVUsRUFBRTtJQUN4QyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTtJQUNsRCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUN0QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUN0QyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUU7SUFDbEUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7SUFDcEMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDbEMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDbEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7SUFDcEMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDNUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDeEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7SUFDcEMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDNUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7SUFDcEMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7SUFDMUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDNUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDbEMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDeEMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDeEMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDbEMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDNUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7SUFDMUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7SUFDcEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7SUFDcEMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDeEMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDNUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDNUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7SUFDOUMsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFO0lBQ2hFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFO0lBQzlDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO0lBQzFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO0lBQ3BDO01BQ0UsS0FBSyxFQUFFLGdDQUFnQztNQUN2QyxLQUFLLEVBQUUsZ0NBQWdDO0tBQ3hDO0lBQ0QsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7SUFDcEMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDeEMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDaEMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7SUFDOUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7SUFDcEMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDeEMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7SUFDOUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDbEMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFO0lBQzFELEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRTtJQUM5RCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUN0QyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtJQUMxQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUN0QyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEVBQUU7SUFDNUQsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFO0lBQ2xFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFO0lBQzlDLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFLEtBQUssRUFBRSwyQkFBMkIsRUFBRTtJQUMxRTtNQUNFLEtBQUssRUFBRSw4QkFBOEI7TUFDckMsS0FBSyxFQUFFLDhCQUE4QjtLQUN0QztJQUNELEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO0lBQzVDLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRTtJQUNsRSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtJQUNoRCxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtJQUNwQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtJQUM1QyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtJQUMxQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtJQUN4QyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtJQUN4QyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtJQUNoRCxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtJQUNsQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtJQUMxQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtJQUN4QyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtJQUNwQyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtJQUM5QyxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUU7SUFDaEUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDNUMsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFO0lBQ3BELEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0lBQ3hDLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRTtJQUM5RCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUN0QyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtJQUNwQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtJQUNoRCxFQUFFLEtBQUssRUFBRSwwQkFBMEIsRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUU7SUFDeEUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFO0lBQ2hFLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRTtJQUNwRCxFQUFFLEtBQUssRUFBRSwwQkFBMEIsRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUU7SUFDeEUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDNUM7TUFDRSxLQUFLLEVBQUUsb0NBQW9DO01BQzNDLEtBQUssRUFBRSxvQ0FBb0M7S0FDNUM7SUFDRCxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUU7SUFDaEUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7R0FDekMsQ0FBQzs7RUNqTUYsTUFBTSxVQUFVLEdBQUdDLHFCQUFnQixFQUFFLENBQUM7RUFDdEMsTUFBTSxJQUFJLEdBQUdDLFlBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztFQUNqQyxNQUFNLFNBQVMsR0FBR0MsaUJBQVksRUFBRSxDQUFDOztBQUVqQyxFQUFPLE1BQU0sS0FBSyxHQUFHLENBQUM7SUFDcEIsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUMvQixTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxhQUFhO0lBQ2IsZ0JBQWdCO0dBQ2pCO0lBQ0MsNEJBQUcsV0FBVSxPQUFPO01BQ2xCLCtCQUFNLFdBQVUsUUFBUSxFQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUM7TUFDckQsK0JBQU0sV0FBVSxZQUFZLEVBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBQztNQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPO1FBQ3hCLCtCQUFNLFdBQVUsTUFBTSxFQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUc7T0FDNUMsQ0FBQztNQUNGLCtCQUFNLFdBQVUsV0FBVyxFQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDO01BQzlDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJO1FBQ2xCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7UUFFckQsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssZ0JBQWdCLEVBQUU7VUFDdkM7WUFDRTtjQUNFLElBQUksQ0FBQyxFQUNMLElBQUksQ0FBQyxFQUNMLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxFQUMzQixNQUFNLFNBQVMsRUFDZixTQUFTLENBQUM7Y0FFVixvQ0FBUSxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQVM7YUFDMUI7WUFDVDtTQUNILE1BQU07VUFDTDtZQUNFO2NBQ0UsSUFBSSxDQUFDLEVBQ0wsSUFBSSxDQUFDLEVBQ0wsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFFLEVBQzNCLE1BQU0sU0FBUyxFQUNmLFNBQVMsR0FBRztjQUVaLG9DQUFRLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBUzthQUMxQjtZQUNUO1NBQ0g7T0FDRixDQUFDO0tBQ0E7R0FDTCxDQUFDOztFQy9DSyxNQUFNLFNBQVMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUs7SUFDaEUsTUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7O0lBRXJCLE1BQU0sU0FBUyxHQUFHQyxjQUFTLEVBQUU7T0FDMUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFQyxRQUFHLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7T0FDakMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7O0lBRXpCLE1BQU0sYUFBYSxHQUFHLENBQUM7TUFDckIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUV6RTtRQUNJTCxnQ0FBQztVQUNDLFlBQVksVUFBVSxFQUN0QixXQUFXLElBQUksRUFDZixXQUFXLFNBQVMsRUFDcEIsV0FBVyxTQUFVLEVBQ3JCLGVBQWUsYUFBYSxFQUM1QixrQkFBa0IsT0FBTyxFQUFDLENBQzFCO01BQ0o7R0FDSCxDQUFDOztFQ3pCSyxNQUFNLFVBQVUsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUU7SUFDNUQsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTO01BQzFCO1FBQ0UsV0FBVSxNQUFNLEVBQ2hCLEtBQUssU0FBVSxFQUNmLFdBQVcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUU5QywrQkFBTSxJQUFJLFdBQVcsRUFBQztRQUN0QiwrQkFBTSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxFQUFFLElBQUcsS0FBSyxFQUFDLEdBQUcsV0FBVyxHQUFHLENBQUM7VUFDL0QsVUFBVSxDQUFDLFNBQVMsQ0FBQztTQUNqQjtPQUNMO0tBQ0wsQ0FBQzs7RUNaRyxNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFO0lBQ2pDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUztNQUMzQiw0QkFBRyxXQUFVLE1BQU07UUFDakI7VUFDRSxLQUFLLFNBQVUsRUFDZixPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRyxFQUM3QixHQUFHLENBQUMsQ0FBRSxFQUNOLElBQUcsT0FBTyxFQUNWLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDO1VBRTVDLFNBQVM7U0FDTDtPQUNMO0tBQ0wsQ0FBQyxDQUFDOztFQ2JFLE1BQU1NLE9BQUssR0FBRyxDQUFDO0lBQ3BCLElBQUk7SUFDSixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sYUFBYTtHQUNkO0lBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ1I7UUFDRSxXQUFVLE1BQU0sRUFDaEIsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQ2QsR0FBRyxDQUFFLEVBQ0wsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3BCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBRSxFQUN6QixRQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFDMUIsTUFBTSxTQUFTO1FBRWYsb0NBQVEsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBRSxFQUFRO09BQ3BDO0tBQ1IsQ0FBQyxDQUFDOztFQ0RMLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztFQUNsQixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7RUFDdEIsTUFBTSxNQUFNLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQztFQUNoQyxNQUFNLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztFQUM3RCxNQUFNLGdCQUFnQixHQUFHLEVBQUUsQ0FBQzs7RUFFNUIsTUFBTSxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUN4RCxNQUFNLFVBQVUsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDOztBQUV0RCxFQUFPLE1BQU0sU0FBUyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUs7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFFbkMsTUFBTSxRQUFRLEdBQUdDLFdBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixNQUFNLGVBQWUsR0FBRyxTQUFTLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0UsTUFBTSxNQUFNLEdBQUdDLGNBQVMsRUFBRTtPQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUN4QixLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7T0FDdkIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUV0QixNQUFNLE1BQU0sR0FBR0MsZ0JBQVcsRUFBRTtPQUN6QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVKLFFBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztPQUM5QixLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQzs7SUFFMUI7TUFDRSw0QkFBRyxXQUFXLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELHFCQUFDO1VBQ0MsUUFBUSxNQUFPLEVBQ2YsYUFBYSxXQUFXLEVBQ3hCLFlBQVksZUFBZSxFQUMzQixZQUFZLENBQUMsRUFBQztRQUVoQixxQkFBQyxZQUFTLFFBQVEsTUFBTSxFQUFDO0tBQzVCO1VBQ0ssV0FBVSxZQUFZLEVBQ3RCLEdBQUcsVUFBVSxHQUFHLENBQUUsRUFDbEIsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFDbEIsWUFBVyxRQUFRLEVBQ25CLGFBQWEsRUFBRSxJQUNoQixvREFFRDtRQUNBO1VBQ0UsV0FBVSxZQUFZLEVBQ3RCLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFDakIsR0FBRyxXQUFXLEdBQUcsZ0JBQWdCLEVBQ2pDLFlBQVcsUUFBUSxJQUNwQixnQkFFRDtRQUNBLHFCQUFDQztVQUNDLE1BQU0sSUFBSSxFQUNWLFFBQVEsTUFBTSxFQUNkLFFBQVEsTUFBTSxFQUNkLFFBQVEsTUFBTyxFQUNmLFFBQVEsTUFBTSxFQUNkLGVBQWUsZUFBZSxFQUFDLENBQy9CO09BQ0E7O01BRUo7R0FDSCxDQUFDOzs7O0VDdkVGLE1BQU1JLE9BQUssR0FBRyxHQUFHLENBQUM7RUFDbEIsTUFBTUMsUUFBTSxHQUFHLEdBQUcsQ0FBQzs7RUFJbkIsTUFBTSxHQUFHLEdBQUcsTUFBTTtJQUNoQixNQUFNLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQztJQUM1QyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHakIsZ0JBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHQSxnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUUzQyxJQUFJLElBQUksSUFBSSx1QkFBdUIsRUFBRTtNQUNuQyxJQUFJLEdBQUcsdUJBQXVCLENBQUM7S0FDaEMsTUFBTTtNQUNMLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQztLQUNkOztJQUVELE1BQU0sVUFBVSxHQUFHLGFBQWEsRUFBRSxDQUFDO0lBQ25DLE1BQU0sSUFBSSxHQUFHLE9BQU8sRUFBRSxDQUFDOztJQUV2QixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxFQUFFO01BQ3hCLE9BQU9NLDZDQUFLLFlBQVUsRUFBTSxDQUFDO0tBQzlCOztJQUVELE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksS0FBSzs7TUFFL0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDMUMsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztPQUN4QyxDQUFDLENBQUM7O01BRUgsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNoQyxDQUFDOztJQUVGO01BQ0VBO1FBQ0VBLHlDQUFLLFdBQVUsaUJBQWlCO1VBQzlCQSwwQ0FBTSxXQUFVLGdCQUFnQixJQUFDLE9BQUs7VUFDdENBLGdDQUFDO1lBQ0MsU0FBUyxjQUFlLEVBQ3hCLElBQUcsVUFBVSxFQUNiLE9BQU8sSUFBSSxFQUNYLHVCQUF1QixPQUFPLEVBQUM7VUFFakNBLDBDQUFNLFdBQVUsZ0JBQWdCLElBQUMsWUFBVTtVQUMzQ0EsZ0NBQUM7WUFDQyxTQUFTLGlCQUFrQixFQUMzQixJQUFHLFVBQVUsRUFDYixPQUFPLE9BQU8sRUFDZCx1QkFBdUIsVUFBVSxFQUFDLENBQ2xDOzs7UUFHSkEseUNBQUssT0FBT1UsT0FBSyxFQUFFLFFBQVFDLFFBQU07VUFDL0JYLHVDQUFHLFdBQVcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDdERBLGdDQUFDO2NBQ0MsTUFBTSxJQUFLLEVBQ1gsTUFBTSxJQUFJLEVBQ1YsU0FBUyxPQUFPLEVBQ2hCLFlBQVksVUFBVSxFQUFDLENBQ3ZCOzs7VUFHSkEsdUNBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztZQUN2REEsZ0NBQUMsYUFBVSxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLEVBQUMsQ0FBRztXQUNuRDtTQUNBO09BQ0w7TUFDSDtHQUNILENBQUM7RUFDRixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3BELFFBQVEsQ0FBQyxNQUFNLENBQUNBLGdDQUFDLFNBQUcsRUFBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDOzs7OyJ9