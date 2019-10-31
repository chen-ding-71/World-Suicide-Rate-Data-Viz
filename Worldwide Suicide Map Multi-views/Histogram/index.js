import {
  scaleLinear,
  scaleTime,
  scaleBand,
  max,
  timeFormat,
  extent,
  histogram as bin,
  timeMonths,
  sum,
  select,
  event,
  format
} from 'd3';
import { useRef, useEffect } from 'react';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

const width = 960;
const menuHeight = 80;
const height = 500 - menuHeight;
const margin = { top: 20, right: 30, bottom: 80, left: 250 };
const xAxisLabelOffset = 50;

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

export const Histogram = ({ data, year }) => {
  console.log(1);
  const xValue = d => d[year];
  const yValue = d => d['Countries'];
  
  const siFormat = format('.2s');
  const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');
  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.15);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);
  
  return (
    <g transform={`translate(${margin.left},${margin.top})`}>
      <AxisBottom
        xScale={xScale}
        innerHeight={innerHeight}
        tickFormat={xAxisTickFormat}
        tickOffset={5}
      />
      <AxisLeft yScale={yScale} />
			<text
        className="axis-label"
        x={innerWidth / 2}
        y={margin.top - 40}
        textAnchor="middle"
        font-size = {30}
      >
        Top 15 Countries With the Highest Rates of Suicide 
      </text>
      <text
        className="axis-label"
        x={innerWidth / 2}
        y={innerHeight + xAxisLabelOffset}
        textAnchor="middle"
      >
        Suicide Number
      </text>
      <Marks
        data={data}
        xScale={xScale}
        yScale={yScale}
        xValue={xValue}
        yValue={yValue}
        tooltipFormat={xAxisTickFormat}
      />
    </g>
      
  );
};

// console.log(Histogram)