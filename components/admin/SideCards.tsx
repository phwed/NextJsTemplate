"use client";
import React from "react";
import { Button, Progress } from "@nextui-org/react";
import {
  Car,
  Devices,
  Eye,
  House,
  People,
  WalletAdd,
  WalletMinus,
} from "iconsax-react";

const SideCards = () => {
  const data = [
    {
      wallet: "Main Savings",
      balance: 10000,
      card: "•••• •••• •••• 1234",
      goals: [
        {
          name: "Buy a car",
          target: 150000,
          current: 2000,
          icon: <Car size={20} />,
        },
        {
          name: "Buy a house",
          target: 10000,
          current: 500,
          icon: <House size={20} />,
        },
      ],
    },

    {
      wallet: "Investment",
      balance: 5000,
      card: "•••• •••• •••• 5678",
      goals: [
        {
          name: "Buy a phone",
          target: 5000,
          current: 2000,
          icon: <Devices />,
        },
        {
          name: "Get Married",
          target: 10000,
          current: 5000,
          icon: <People />,
        },
      ],
    },
  ];

  const [selected, setSelected] = React.useState<any>(data[1]);

  console.log(selected);

  return (
    <div className="bg-white dark:bg-gray-800 px-5 py-10 rounded-md flex flex-col items-center gap-5">
      <section className="flex gap-5">
        <Button
          size="sm"
          className="bg-brand-100 text-brand-500"
          startContent={<WalletAdd />}
        >
          Add Funds
        </Button>

        <Button
          size="sm"
          className="bg-brand-100 text-brand-500"
          startContent={<WalletMinus />}
        >
          Withdraw Funds
        </Button>
      </section>

      <section className="w-full flex flex-col gap-5">
        <div className="relative w-full flex flex-col justify-center">
          <div
            className={`
                    ${
                      selected?.wallet === "Main Savings"
                        ? "bg-brand-500"
                        : "bg-green-500"
                    }
                w-9/12 min-h-[14rem] self-center rounded-xl z-10 flex flex-col justify-between text-white p-10`}
          >
            <h1>{selected?.wallet}</h1>

            <div>
              <span className="flex gap-2 items-end">
                <h1 className="text-4xl font-medium">{selected?.balance}</h1>{" "}
                <p className="mb-1">GHS</p>
              </span>

              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm">{selected?.card}</p> <Eye size={20} />
              </div>
            </div>
          </div>
          <div
            className={`bg-blue-200 w-8/12 min-h-[12rem] self-center rounded-xl absolute right-[25px] hover:bg-brand-400 cursor-pointer`}
            onClick={() => {
              // switch between data[0] and data[1]
              if (selected?.wallet === "Main Savings") {
                setSelected(data[1]);
              } else {
                setSelected(data[0]);
              }
            }}
          />
        </div>
      </section>

      <section className="w-full flex flex-col gap-5 p-10">
        <div>
          <p className="text-lg font-medium">My Goals</p>
        </div>

        <div className="flex flex-col gap-5">
          {selected?.goals.map((goal: any, index: number) => (
            <div
              key={index}
              className="flex gap-3 items-center bg-brand-50 dark:bg-gray-700 p-2 rounded relative"
            >
              <div className="bg-white dark:bg-gray-600 p-2 rounded"> {goal.icon} </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between ">
                  <p className="text-sm font-medium text-brand-500 dark:text-white">{goal.name}</p>

                  <p className="text-brand-500 dark:text-white">
                    {/* percentage of goal and target */}
                    {Math.floor((goal.current / goal.target) * 100)}%
                  </p>
                </div>
                <div className="flex items-center gap-3 relative">
                  <Progress
                    aria-label="Loading..."
                    className="w-full"
                    value={(goal.current / goal.target) * 100}
                    color="success"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SideCards;
