import React from 'react';
import { scaleSqrt, max } from 'd3';
import { Marks } from './Marks';

export const BubbleMap = ({ data, year, country, worldAtlas }) => {
  const sizeValue = d => d[year];
  const maxRadius = 30;

  const sizeScale = scaleSqrt()
    .domain([0, max(data, sizeValue)])
    .range([0, maxRadius]);

  const tooltipFormat = d =>
    d['Countries'] + '\n' + 'Year: ' + year + '\n' + 'Suicide: ' + d[year];

  return (
      <Marks
        worldAtlas={worldAtlas}
        countries={data}
        sizeScale={sizeScale}
        sizeValue={sizeValue}
        tooltipFormat={tooltipFormat}
        highlightCountry={country}
      />
  );
};
