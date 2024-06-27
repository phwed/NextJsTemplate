"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import If, { Else, Then } from "../shared/if";
import Link from "next/link";
import { cn } from "@nextui-org/react";
interface Props {
  group: string;
  name: string;
  path: string;
  icon?: JSX.Element;
  type: string;
  subRoutes: SubRoutes[];
  hasSubRoutes: boolean;
  onClick: () => void;
}

export default function Navlink(props: Props) {
  const pathname = usePathname();
  const isActive = pathname === props.path;
  const [open, setOpen] = React.useReducer((state) => !state, true);

  const linkStyle = isActive
    ? "dark:bg-brand-500 bg-brand-500 text-white w-full px-5 py-3 rounded-full cursor-pointer flex justify-start items-center gap-2 hover:text-white mb-2"
    : "w-full px-5 py-3 rounded-full cursor-pointer flex justify-start items-center gap-2 hover:bg-brand-500 hover:bg-opacity-50 dark:hover:bg-gray-500 dark:hover:bg-opacity-50  hover:text-white mb-2";


  return (
    <If condition={props.hasSubRoutes as unknown as boolean}>
      <Then>
        <div
          className={`flex items-center justify-between w-full px-3 ${
            props.group && "my-4"
          }  text-foreground-500`}
        >
          {props?.group}
        </div>
        <div className="flex flex-col w-full">
          {props.subRoutes?.map((route: SubRoutes, index) => {
            const isSubRouteActive = pathname === route.path;
            const linkStyle = isSubRouteActive ? "bg-blue-900 text-white" : "";
            return (
              <Link
                key={index}
                href={route.path}
                onClick={props.onClick}
                className={`${linkStyle}`}
              >
                {props?.icon} {route.name}
              </Link>
            );
          })}
        </div>
      </Then>
      <Else>
        <Link
          href={props.path}
          onClick={props.onClick}
          className={`${linkStyle} `}
        >
          {props.icon}
          {props.name}
        </Link>
      </Else>
    </If>
  );
}
