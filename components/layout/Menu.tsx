"use client";

/**
 * @file This file contains the Menu component, which is responsible for rendering the navigation menu.
 */

import React from "react";
import NavLink from "./NavLink";


/**
 * Props for the Menu component.
 */
interface MenuProps {
  handleOpen?: () => void;
  menu: Menu[];
}

/**
 * The Menu component renders the navigation menu.
 * @param handleOpen - Optional callback function to handle slider on small screens.
 * @param menu - The menu object containing the navigation routes.
 */
export default function Menu({ handleOpen, menu }: MenuProps) {
  return (
    <nav className="flex flex-col  w-full items-start px-2">
      {menu.map((route: Menu, index: number) => (
        <NavLink
          key={index}
          group={route.group as string}
          name={route.name}
          type={route.type as string}
          path={route.path}
          icon={route.icon}
          onClick={() => handleOpen && handleOpen()}
          hasSubRoutes={route?.subRoutes && route?.subRoutes?.length > 0}
          subRoutes={
            route?.subRoutes && route?.subRoutes?.length > 0
              ? route.subRoutes
              : []
          }
        />
      ))}
    </nav>
  );
}
