import Image from "next/image";
import Link from "next/link";

import { getCategories, getProducts } from "@/lib/api";

import BanglaDate from "./BanglaDate";
import CategoryNav from "./CategoryNav";
import PriceTicker from "./PriceTicker";

const Navbar = async () => {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <header className="bg-bazar-surface">
      {/* Top Navbar */}
      <div className="border-b border-[#e1e8e179]">
        <div className="mx-auto flex h-[69px] w-full max-w-[1120px] items-center justify-between px-4 lg:px-0">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
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
          </Link>

          {/* Auth */}
          <div className="flex items-center gap-3">
            <Link
              href="/signin"
              className="rounded-lg px-4 py-2 text-sm font-medium text-bazar-text transition-all duration-300 hover:bg-bazar-soft hover:text-bazar-primary"
            >
              সাইন ইন
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-bazar-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-bazar-primary-hover hover:shadow-md"
            >
              সাইন আপ
            </Link>
          </div>
        </div>
      </div>

      <CategoryNav categories={categories} />

      <PriceTicker products={products} />
    </header>
  );
};

export default Navbar;
