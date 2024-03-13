"use client";

import React from "react";

import { Input } from "@nextui-org/input";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { menuItems } from "@/config/menu";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      className={`border-y-2 ${isMenuOpen ? "" : "py-2 mt-1"} `}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <Dropdown>
          <NavbarItem className="hidden md:flex">
            <DropdownTrigger>
              <Button
                endContent={<IoIosArrowDown />}
                color="primary"
                variant="bordered"
              >
                courses{" "}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu color="primary" className="text-black">
            <DropdownItem key="course-one">Course one</DropdownItem>
            <DropdownItem key="course-two">Course two</DropdownItem>
            <DropdownItem key={"course-three"}>Course three</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem isActive>
          <Input
            placeholder="Search"
            endContent={<IoSearchOutline color="black" />}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarBrand className="flex sm:justify-end">
        <p className="text-xl sm:text-2xl font-bold text-inherit ">
          Course-App
        </p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex text-blue-700 font-semibold"
        justify="end"
      >
        <NavbarItem>
          <Link className="hover:opacity-80" href="/">
            Donate
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:opacity-80" href="/">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:opacity-80" href="/">
            Sign Up
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>{item}</NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
