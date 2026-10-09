"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Category } from "@/types/bazar";

interface CategoryNavProps {
  categories: Category[];
}

const CategoryNav = ({ categories }: CategoryNavProps) => {
  const pathname = usePathname();

  return (
    <nav className="bg-bazar-surface">
      <div className="mx-auto w-full max-w-280 overflow-x-auto px-4 py-1 sm:px-6">
        <div className="flex h-11.5 min-w-max items-center gap-2">
          <Link
            href="/"
            className={`rounded-lg px-3 py-2 text-[13px] font-medium whitespace-nowrap transition-all duration-300 ${
              pathname === "/"
                ? "bg-bazar-primary text-white"
                : "text-bazar-text hover:bg-bazar-soft hover:text-bazar-primary"
            }`}
          >
            সব পণ্য
          </Link>

          {categories.map((category) => {
            const href = `/category/${category.slug}`;
            const isActive = pathname === href;

            return (
              <Link
                key={category.id}
                href={href}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-bazar-primary text-white"
                    : "text-bazar-text hover:bg-bazar-soft hover:text-bazar-primary"
                }`}
              >
                <span className="text-sm">{category.icon}</span>

                <span>{category.nameBn}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
