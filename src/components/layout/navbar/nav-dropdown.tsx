"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { type NavItem } from "@/config/navigation";

interface NavDropdownProps {
  item: NavItem;
}

export function NavDropdown({ item }: NavDropdownProps) {
  const pathname = usePathname();
  const isActive = item.items?.some((subItem) => pathname === subItem.href);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={cn(
            "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
            isActive
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-foreground hover:bg-accent"
          )}
        >
          {item.title}
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className="z-50 min-w-[200px] rounded-md border bg-card p-1 shadow-md animate-in fade-in-0 zoom-in-95"
        >
          {item.items?.map((subItem) => (
            <DropdownMenu.Item key={subItem.title} asChild>
              <Link
                href={subItem.href}
                className={cn(
                  "block select-none rounded-sm px-3 py-2 text-sm outline-none transition-colors",
                  pathname === subItem.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-accent focus:bg-accent"
                )}
              >
                {subItem.title}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
