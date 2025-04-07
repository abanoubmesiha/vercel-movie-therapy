"use client";
import { ChevronUp } from "lucide-react";
import type { User } from "next-auth";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

export function UserDropdown({ user }: { user: User }) {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className=" data-[state=open]:bg-sidebar-accent bg-background text-black data-[state=open]:text-sidebar-accent-foreground h-10 hover:text-white">
          <Image
            src={`https://avatar.vercel.sh/${user.email}`}
            alt={user.email ?? "User Avatar"}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="truncate">{user?.email}</span>
          <ChevronUp className="ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="top"
        className="w-[--radix-popper-anchor-width]"
      >
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {`Toggle ${theme === "light" ? "dark" : "light"} mode`}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button
            type="button"
            className="w-full cursor-pointer"
            onClick={() => {
              signOut({
                redirectTo: "/",
              });
            }}
          >
            Sign out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
