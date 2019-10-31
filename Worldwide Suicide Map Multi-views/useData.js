import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/chen-ding-71/3e4e5c6a6f9248bdece950069e3d2aae/raw/7981ec970d781e2cb5abeed414bb2af18d452669/Suicide_By_Country_1979to2016.csv';

const row = d => {
  d.Latitude = +d.Latitude;
  d.Longitude = +d.Longitude;
  d['Last available-Number'] = +d['Last available-Number'];
  return d;
};

export const useData = () => {
  const [data, setData] = useState(null);

  const row = d => {
    d['Last available-Number'] = +d['Last available-Number'];
    for (var i = 2016; i >= 1979; i--) {
      d[i] = +d[i];
    }
    return d;
  };

  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);
  
  return data;
};
