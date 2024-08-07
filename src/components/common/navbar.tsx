"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { logo } from "@/assets/images";
import Link from "next/link";
import SearchBar from "../element/search";
import { Button } from "@/components/ui/button";
import Model from "../element/model";
import Auth from "@/app/signIn/page";
export function NavbarComponent() {
  return (
    <div className="relative flex">
      <Navbar className="top-2 px-5" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "container fixed border w-full shadow-lg rounded-full top-10 inset-x-0 z-50 bg-white",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <Image
            src={logo}
            alt={"muse_logo"}
            width={100}
            height={0}
            className={"w-32 h-auto"}
          />
        </Link>
        <Link href="/explore-mentor" className="w-max h-full p-4">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Explore Mentors"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Software engineer</HoveredLink>
              <HoveredLink href="/interface-design">Data Science</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Marketing</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href="/mentor">
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Become an mentor"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Terms of service"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
            </div>
          </MenuItem>
        </Link>
        <div className="w-full">
          <SearchBar />
        </div>
        <div>
          <Model button="Login" content={<Auth />}></Model>
        </div>
      </Menu>
    </div>
  );
}
{
  /*   <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem> */
}
