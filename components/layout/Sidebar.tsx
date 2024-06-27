import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import { BRAND } from "@/contants";

interface props {
  menu: Menu[];
}

export default  function Sidebar({ menu }: props) {

  return (
    <aside className="hidden  lg:flex flex-col fixed w-64 border-r dark:border-gray-800  border-gray-200 p-3 min-h-[100dvh] dark:text-white bg-white dark:bg-background">
      <div className="mb-5 p-2 flex gap-2 items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <h1 className="text-2xl">{BRAND.TITLE}</h1>
      </div>
      <div className="flex flex-1">
        <Menu menu={menu} />
      </div>
      <div className="flex items-center justify-center py-1 mb-5">
        <ThemeSwitcher />
      </div>
    </aside>
  );
}
