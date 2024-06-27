// @ts-ignore
// @ts-nocheck

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {
    label: string;
    value: number;
  }[];

  colors: {
    stroke: string;
    fill: string;
  };
}

export default function MoneyChart(props: Props) {
  // class CGV extends CartesianGrid {
  //   renderVertical(verticalPoints: number[]): JSX.Element {
  //     const element = super.renderVertical(verticalPoints);
  //     const lines = element.props.children.map(() => null);
  //     return React.cloneElement(element, [], lines);
  //   }
  // }

  // const CartesianGridNoDashVertical = new CGV()

  const yTickFormatter = (value: any) => {
    if (value >= 1000000) {
      return `${value / 1000000}m`;
    } else if (value >= 1000) {
      return `${value / 1000}k`;
    } else if (value === 0) {
      return "";
    } else {
      return value;
    }
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={props.data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        {/* <CartesianGridNoDashVertical strokeDasharray="1 1" /> */}

        <XAxis
          tickLine={false}
          dataKey={(props) => {
            return props.label;
          }}
        />
        <YAxis
          tickFormatter={yTickFormatter}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={(props) => {
            return props.value;
          }}
          stroke={props.colors.stroke}
          fill={props.colors.fill}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
