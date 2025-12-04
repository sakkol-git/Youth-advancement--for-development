"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { mainNavigation, type NavItem } from "@/config/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const renderNavItem = (item: NavItem) => {
    const hasSubItems = item.items && item.items.length > 0;
    const isExpanded = expandedItems.includes(item.title);

    if (hasSubItems) {
      return (
        <div key={item.title} className="py-2">
          <button
            onClick={() => toggleExpand(item.title)}
            className="flex items-center justify-between w-full py-2 text-left text-foreground hover:text-primary"
          >
            <span className="font-medium">{item.title}</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isExpanded && "rotate-180"
              )}
            />
          </button>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden pl-4"
              >
                {item.items?.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    onClick={onClose}
                    className={cn(
                      "block py-2 text-sm",
                      pathname === subItem.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link
        key={item.title}
        href={item.href}
        onClick={onClose}
        className={cn(
          "block py-3 font-medium",
          pathname === item.href
            ? "text-primary"
            : "text-foreground hover:text-primary"
        )}
      >
        {item.title}
      </Link>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden overflow-hidden border-t"
        >
          <div className="py-4 space-y-1">
            {mainNavigation.map(renderNavItem)}
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link href="/donate" onClick={onClose}>
                  Support Us
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
