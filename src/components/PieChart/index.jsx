import React from "react";
import { VictoryPie } from "victory-pie";

import Label from "./Label";
import { PieChartColors } from "./utils/colors";

const PieChart = ({
  innerRadius,
  radius,
  height,
  width,
  data,
  nameKey,
  valueKey
}) => {
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <VictoryPie
      height={height}
      width={width}
      radius={radius}
      innerRadius={innerRadius}
      padAngle={0.5}
      cornerRadius={3}
      animate={{ duration: 300 }}
      data={data}
      x={nameKey}
      y={valueKey}
      style={{ parent: { overflow: "visible" } }}
      labelComponent={
        <Label
          innerRadius={innerRadius}
          radius={radius}
          nameKey={nameKey}
          valueKey={valueKey}
          cx={centerX}
          cy={centerY}
        />
      }
    />
  );
};

PieChart.defaultProps = {
  height: 300,
  width: 400,
  innerRadius: 55,
  radius: 75,
  nameKey: "x",
  valueKey: "y"
};

export default PieChart;
