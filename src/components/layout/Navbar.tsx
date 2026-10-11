import Image from "next/image";
import { Suspense } from "react";

import { getCategories, getProducts } from "@/lib/api";

import BanglaDate from "./BanglaDate";
import CategoryNav from "./CategoryNav";
import HomeLogoLink from "./HomeLogoLink";
import NavbarAuth from "./NavbarAuth";
import PriceTicker from "./PriceTicker";

const Navbar = async () => {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-bazar-surface">
        {/* Top Navbar */}
        <div className="border-b border-[#e1e8e179]">
          <div className="mx-auto flex h-[69px] w-full max-w-[1120px] items-center justify-between px-4 lg:px-0">
            {/* Brand */}
            <HomeLogoLink>
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-bazar-primary">
                <Image
                  src="/assets/images/logo-icon.png"
                  alt="বাজার দর"
                  width={22}
                  height={22}
                  priority
                  className="size-5.5 object-contain"
                />
              </div>

              <div>
                <p className="text-[20px] leading-none font-bold text-bazar-text">
                  বাজার দর
                </p>

                <BanglaDate />
              </div>
            </HomeLogoLink>

            {/* Authentication */}
            <NavbarAuth />
          </div>
        </div>

        {/* Category Menu */}
        <Suspense fallback={<div className="h-[46px] bg-bazar-surface" />}>
          <CategoryNav categories={categories} />
        </Suspense>
      </header>

      <PriceTicker products={products} />
    </>
  );
};

export default Navbar;
