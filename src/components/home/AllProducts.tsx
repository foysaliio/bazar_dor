"use client";

import { useMemo, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

import type { Product } from "@/types/bazar";

import ProductCard from "./ProductCard";

interface AllProductsProps {
  products: Product[];
}

type SortOption = "default" | "low-high" | "high-low";

const sortOptions: {
  value: SortOption;
  label: string;
}[] = [
  {
    value: "default",
    label: "ডিফল্ট",
  },
  {
    value: "low-high",
    label: "দাম: কম থেকে বেশি",
  },
  {
    value: "high-low",
    label: "দাম: বেশি থেকে কম",
  },
];

const AllProducts = ({ products }: AllProductsProps) => {
  const [sortOption, setSortOption] = useState<SortOption>("default");

  const [isOpen, setIsOpen] = useState(false);

  const sortedProducts = useMemo(() => {
    const productsCopy = [...products];

    if (sortOption === "low-high") {
      return productsCopy.sort((a, b) => a.today - b.today);
    }

    if (sortOption === "high-low") {
      return productsCopy.sort((a, b) => b.today - a.today);
    }

    return productsCopy;
  }, [products, sortOption]);

  const selectedOption = sortOptions.find(
    (option) => option.value === sortOption,
  );

  const totalProducts = new Intl.NumberFormat("bn-BD").format(products.length);

  return (
    <section className="mx-auto mt-10 w-full max-w-[1120px] px-4 pb-12 lg:px-0">
      <div
        id="সব-পণ্য"
        className="mb-5 scroll-mt-[130px] sm:flex sm:items-end sm:justify-between"
      >
        <div>
          <h2 className="text-[20px] font-bold text-bazar-text">সব পণ্য</h2>

          <p className="mt-1 text-sm text-bazar-muted">
            মোট {totalProducts}টি পণ্য দেখানো হচ্ছে
          </p>
        </div>

        {/* Sort */}
        <div className="relative mt-4 sm:mt-0">
          <div className="flex items-center gap-2">
            <span className="text-sm text-bazar-muted">সাজান</span>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-9 min-w-[135px] items-center justify-between gap-2 rounded-lg border border-bazar-border bg-bazar-surface px-3 text-[13px] font-medium text-bazar-text transition-colors hover:border-bazar-primary"
            >
              <span>{selectedOption?.label}</span>

              <ChevronDown
                size={15}
                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {isOpen && (
            <div className="absolute right-0 top-11 z-20 w-[175px] overflow-hidden rounded-xl border border-bazar-border bg-bazar-surface p-1.5 shadow-lg">
              {sortOptions.map((option) => {
                const isSelected = option.value === sortOption;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setSortOption(option.value);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] transition-colors ${
                      isSelected
                        ? "bg-bazar-soft font-semibold text-bazar-primary"
                        : "text-bazar-text hover:bg-bazar-soft"
                    }`}
                  >
                    <span>{option.label}</span>

                    {isSelected && <Check size={14} />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
