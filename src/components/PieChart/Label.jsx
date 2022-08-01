import React from "react";

import LabelLine from "./LabelLine";
import { getXOffset, getYOffset, getAverage } from "./utils/math";

const Label = (props) => {
  const {
    index,
    datum,
    innerRadius,
    radius,
    slice: { startAngle, endAngle },
    nameKey,
    valueKey,
    cx,
    cy
  } = props;

  // calculation
  const middleRadius = getAverage([innerRadius, radius]);
  const midAngle = getAverage([endAngle, startAngle]);
  // const labelOffset = radius + middleRadius / 2.7;
  // const x = cx + getXOffset(labelOffset, midAngle);
  // const y = cy + getYOffset(labelOffset, midAngle);

  const name = datum[nameKey];
  const value = datum[valueKey];

  const labelOffset = 2 * radius - middleRadius;
  const tempX = cx + getXOffset(labelOffset, midAngle);
  const y = cy + getYOffset(labelOffset, midAngle) - 2;

  const textAnchor = cx < tempX ? "start" : "end";
  const x = cx < tempX ? tempX + 15 : tempX - 15;

  return (
    <g>
      <text x={x} y={y} textAnchor={textAnchor} fill={"#FFF"}>
        {`${name}: ${Math.round(value)}%`}
      </text>
      <LabelLine
        cx={cx}
        cy={cy}
        middleRadius={middleRadius}
        radius={radius}
        midAngle={midAngle}
      />
    </g>
  );
};

export default Label;
