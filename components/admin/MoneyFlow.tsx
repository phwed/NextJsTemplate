"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { Calendar } from "iconsax-react";
import MoneyChart from "./MoneyChart";

export default function MoneyFlow() {
  const [selected, setSelected] = React.useState("expense");

  const chartColors = (arg: string) => {
    if (arg === "expense") {
      return {
        stroke: "#FF6B6B",
        fill: "#FF6B6B",
      };
    } else {
      return {
        stroke: "#4F46E5",
        fill: "#4F46E5",
      };
    }
  };

  const expense = [
    {
      label: "4 July",
      value: 10000,
    },
    {
      label: "8 July",
      value: 2000,
    },
    {
      label: "10 July",
      value: 5700,
    },

    {
      label: "16 July",
      value: 4000,
    },
    {
      label: "20 July",
      value: 5000,
    },

    {
      label: "24 July",
      value: 16000,
    },
    {
      label: "28 July",
      value: 7000,
    },
  ];

  const income = [
    {
      label: "4 July",
      value: 1000,
    },
    {
      label: "8 July",
      value: 10000,
    },
    {
      label: "10 July",
      value: 7700,
    },

    {
      label: "16 July",
      value: 4000,
    },
    {
      label: "20 July",
      value: 5000,
    },

    {
      label: "24 July",
      value: 6000,
    },
    {
      label: "28 July",
      value: 7000,
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white dark:bg-gray-800 p-5 rounded-md flex flex-col gap-5">
        <div className="flex justify-between">
          <h2 className="text-xl">Money Flow</h2>

          <div className="flex gap-3">
            <Button
              size="sm"
              variant={selected === "expense" ? "solid" : "flat"}
              color="danger"
              onClick={() => setSelected("expense")}
            >
              expense
            </Button>

            <Button
              size="sm"
              variant={selected === "income" ? "solid" : "flat"}
              color="success"
              onClick={() => setSelected("income")}
            >
              icnome
            </Button>

            <Button
              size="sm"
              variant="flat"
              endContent={<Calendar className="text-brand-500" />}
            >
              Last Month
            </Button>
          </div>
        </div>

        <div className="w-full min-h-[30dvh]">
          <MoneyChart
            data={selected === "expense" ? expense : income}
            colors={chartColors(selected)}
          />
        </div>
      </div>
    </div>
  );
}
