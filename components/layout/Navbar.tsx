import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link as Linky,
  Button,
  Avatar,
} from "@nextui-org/react";
import { BRAND } from "@/contants";
import Menu from "./Menu";
import { Logout, MenuBoard, NotificationStatus } from "iconsax-react";
import User from "./User";
import Link from "next/link";

interface props {
  menu: Menu[];
}

export default function App({ menu }: props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred
      className="dark:border-gray-800 flex w-full bg-white dark:bg-background"
      maxWidth="full"
      height="4.5rem"
    >
      <NavbarContent justify="start">
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            onClick = {() => setIsMenuOpen(!isMenuOpen)}
            className='bg-brand-500'

          >
            <MenuBoard color='white'/>
          </Button>
          <NavbarBrand>
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </NavbarBrand>
        </div>

        <div className="hidden lg:flex"></div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="start"
      ></NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex items-center gap-5">
          <User
            name="Fred Adu Twum"
            role="SCM"
            initials="FAT"
            profileUrl="https://picsum.photos/200/300"
          />

          <Link href="/sign-in">
            <Logout size="32" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <Menu menu={menu} handleOpen={() => setIsMenuOpen(false)} />
      </NavbarMenu>
    </Navbar>
  );
}
