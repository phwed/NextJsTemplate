'use client'

import React from "react";
import { MENU } from "@/contants";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface props {
  children: React.ReactNode;
}

export default function Root(props: props) {
  return (
    <div className="flex min-h-[100dvh] flex-1 text-sm bg-backdrop-500 dark:bg-backdrop-600 ">
      <Sidebar menu={MENU} />
      <div className="flex-1  flex flex-col lg:ml-64">
        <Navbar menu={MENU} />
        <div className="min-h-[90.5dvh] bg-500 p-5 lg:p-10">{props.children}</div>
      </div>
    </div>
  );
}
