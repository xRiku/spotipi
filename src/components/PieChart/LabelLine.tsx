import React from "react";

import { getXOffset, getYOffset } from "./utils/math";

type labelLineProps = {
  cx: number;
  cy: number;
  midAngle: number;
  middleRadius: number;
  radius: number;
};

const LabelLine = (props: labelLineProps) => {
  const { cx, cy, midAngle, middleRadius, radius } = props;
  const xStart = cx + getXOffset(middleRadius, midAngle);
  const yStart = cy + getYOffset(middleRadius, midAngle);

  const offSetMiddle = 2 * radius - middleRadius;
  const xMiddle = cx + getXOffset(offSetMiddle, midAngle);
  const yMiddle = cy + getYOffset(offSetMiddle, midAngle);

  const offSetEnd = 2.5 * radius - middleRadius;
  const xEnd = cx + getXOffset(offSetEnd, midAngle);

  return (
    <polyline
      style={{
        opacity: "0.3",
        fill: "none",
        stroke: "white",
        strokeWidth: "1px",
        strokeDasharray: "1",
      }}
      points={`${xStart},${yStart} ${xMiddle},${yMiddle} ${xEnd},${yMiddle}`}
    />
  );
};

export default LabelLine;
