"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 flex justify-between p-8 lg:px-24 z-30" id="logo_address">
      <Link href="/">
        <Image
          id="logo"
          src="/lightLogo.png"
          alt=""
          width={160}
          height={80}
          className="w-[100px] lg:w-[160px]"
        ></Image>
      </Link>

      <div className="flex gap-0 lg:gap-6 ">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/resources" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  RESOURCES
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  ABOUT
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
