import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3';

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

export const Marks = ({
  worldAtlas: { land, interiors },
  countries,
  sizeScale,
  sizeValue,
  tooltipFormat,
  highlightCountry
}) => (
  <g className="marks">
    <path className="sphere" d={path({ type: 'Sphere' })} />
    <path className="graticules" d={path(graticule())} />
    {land.features.map(feature => (
      <path className="land" d={path(feature)} />
    ))}
    <path className="interiors" d={path(interiors)} />
    {countries.map(d => {
      const [x, y] = projection([d.Longitude, d.Latitude]);

      if (d['Countries'] === highlightCountry) {
        return (
          <circle
            cx={x}
            cy={y}
            r={sizeScale(sizeValue(d))}
            fill={'#BD2D28'}
            opacity={1}
          >
            <title>{tooltipFormat(d)}</title>
          </circle>
        );
      } else {
        return (
          <circle
            cx={x}
            cy={y}
            r={sizeScale(sizeValue(d))}
            fill={'#C37A73'}
            opacity={0.5}
          >
            <title>{tooltipFormat(d)}</title>
          </circle>
        );
      }
    })}
  </g>
);
