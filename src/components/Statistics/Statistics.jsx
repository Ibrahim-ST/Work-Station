import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Assignment 1",
    marks: 60,
  },
  {
    name: "Assignment 2",
    marks: 59,
  },
  {
    name: "Assignment 3",
    marks: 60,
  },
  {
    name: "Assignment 4",
    marks: 60,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Assignment 5",
    marks: 60,
  },
  {
    name: "Assignment 6",
    marks: 55,
  },
  {
    name: "Assignment 7",
    marks: 60,
  },
  {
    name: "Assignment 8",
    marks: 60,
  },
];

const Statistics = () => {
  return (
    <>
      <div className="my-container  ">
        <h3 className=" text-3xl font-bold text-center text-gray-700">Assignment Marks</h3>
      </div>
      <div className="flex justify-center py-6">
        <ComposedChart
          width={1140}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="name"
            scale="band"
            label={{
              value: "Assignment Number",
              position: "insideBottom",
              offset: -40,
            }}
          />
          <YAxis
            label={{
              value: "Assignment Marks",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Bar dataKey="marks" barSize={30} fill="#413ea0" />
          <Line type="monotone" dataKey="marks" stroke="#ff7300" />
          <Scatter dataKey="marks" fill="red" />
          <Legend />
        </ComposedChart>
      </div>
    </>
  );
};

export default Statistics;
