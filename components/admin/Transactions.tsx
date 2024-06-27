"use client";

import React from "react";
import Title from "../shared/Title";
import { Button } from "@nextui-org/react";
import Table from "../shared/Table";
import { Add, Edit, Eye, Trash } from "iconsax-react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Transactions() {
  const [selected, setSelected] = React.useState(2);
  const theme = useTheme()

  const transactions = [
    {
      type: "income",
      description: "Monthly Salary",
      date: "1st July, 2024. 3:00pm",
      amount: "GHS 2,000",
    },
    {
      type: "income",
      description: "Monthly Salary",
      date: "1st July, 2024. 3:00pm",
      amount: "GHS 2,000",
    },
    {
      type: "income",
      description: "Monthly Salary",
      date: "1st July, 2024. 3:00pm",
      amount: "GHS 2,000",
    },
    {
      type: "income",
      description: "Monthly Salary",
      date: "1st July, 2024. 3:00pm",
      amount: "GHS 2,000",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white dark:bg-gray-800 p-5 rounded-md flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h2 className='text-xl'>Transaction History</h2>

          <div className="flex gap-3">
            <Button
              size="sm"
              color="success"
              className={`rounded-full text-white ${selected == 1 ? "bg-brand-500" : "bg-brand-200"}`}
              onClick={() => {
                setSelected(1);
              }}
            >
             All
            </Button>
            <Button
              size="sm"
              color="success"
              className={`rounded-full text-white ${selected == 2 ? "bg-brand-500" : "bg-brand-200"}`}
              onClick={() => {
                setSelected(2);
              }}
            >
              Income
            </Button>
            <Button
              size="sm"
              color="success"
              className={`rounded-full text-white ${selected == 3 ? "bg-brand-500" : "bg-brand-200"}`}
              onClick={() => {
                setSelected(3);
              }}
            >
              Expense
            </Button>
          </div>
        </div>

        <div>
          <Table
            // @ts-ignore
            data={transactions}
            // @ts-ignore
            theme = {theme}
            columns={
              [
                {
                  name: "Type",
                  selector: (row: any) => row.type,
                  cell: (row: any) => (
                    <div>
                      {row.type === "income" ? (
                        <Image
                          src="/icons/income.svg"
                          alt="income"
                          width={30}
                          height={30}
                        />
                      ) : null}
                    </div>
                  ),
                  sortable: true,
                },
                {
                  name: "Description",
                  selector: (row: any) => row.description,
                  sortable: true,
                },
                {
                  name: "Date",
                  selector: (row: any) => row.date,
                  sortable: true,
                },
                {
                  name: "Amount",
                  selector: (row: any) => row.amount,
                  cell: (row: any) => (
                    <div>
                      <h2 className="font-semibold">{row.amount}</h2>
                    </div>
                  ),
                  sortable: true,
                },
              ] as any[]
            }
          />
        </div>
      </div>
    </div>
  );
}
