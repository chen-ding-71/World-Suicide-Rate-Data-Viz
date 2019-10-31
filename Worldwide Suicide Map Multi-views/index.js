import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { scaleSqrt, max } from 'd3';
import { useWorldAtlas } from './useWorldAtlas';
import { useData } from './useData';
import { Dropdown } from './Dropdown';
import { yearAttributes, countryAttributes } from './DropdownAttr';
import { BubbleMap } from './BubbleMap/index.js';
import { Histogram } from './Histogram/index.js';

const width = 960;
const height = 500;

const HistogramSize = 0.2;

const App = () => {
  const initialYear = 'Last available-Number';
  var [year, setYear] = useState(initialYear);
  var [country, setCountry] = useState(null);

  if (year == 'Last available-Number') {
    year = 'Last available-Number';
  } else {
    year = +year;
  }

  const worldAtlas = useWorldAtlas();
  const data = useData();

  if (!worldAtlas || !data) {
    return <pre>Loading...</pre>;
  }

  const sortData = (data, year) => {
    // const [data, setData] = useState(null);
    const sortedData = data.sort(function(x, y) {
      return d3.descending(x[year], y[year]);
    });

    return sortedData.slice(0, 15);
  };

  return (
    <>
      <div className="menus-container">
        <span className="dropdown-label">Year:</span>
        <Dropdown
          options={yearAttributes}
          id="x-select"
          value={year}
          onSelectedValueChange={setYear}
        />
        <span className="dropdown-label">Countries:</span>
        <Dropdown
          options={countryAttributes}
          id="x-select"
          value={country}
          onSelectedValueChange={setCountry}
        />
      </div>

      <svg width={width} height={height}>
        <g transform={`translate(${100}, ${20}) scale(0.9, 0.9)`}>
          <BubbleMap
            data={data}
            year={year}
            country={country}
            worldAtlas={worldAtlas}
          />
        </g>

        <g transform={`translate(${0}, ${280}) scale(0.35, 0.35)`}>
          <Histogram data={sortData(data, year)} year={year} />
        </g>
      </svg>
    </>
  );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
