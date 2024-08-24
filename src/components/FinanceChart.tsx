"use client";

import Image from "next/image";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3402,
    expense: 1230,
  },
  {
    name: "Mar",
    income: 4300,
    expense: 1340,
  },
  {
    name: "Apr",
    income: 5000,
    expense: 2304,
  },
  {
    name: "May",
    income: 6000,
    expense: 1234,
  },
  {
    name: "Jun",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Jul",
    income: 5000,
    expense: 4500,
  },
  {
    name: "Aug",
    income: 6000,
    expense: 7800,
  },
  {
    name: "Sep",
    income: 4000,
    expense: 3400,
  },
  {
    name: "Oct",
    income: 3800,
    expense: 4500,
  },
  {
    name: "Nov",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Dec",
    income: 6000,
    expense: 4050,
  },
];

const FinanceChart = () => {
  return (
    <div className=" bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tickMargin={20}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
