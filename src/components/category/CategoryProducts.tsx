"use client";

import { Check, ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";

import ProductCard from "@/components/home/ProductCard";
import type { Product } from "@/types/bazar";

interface CategoryProductsProps {
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

const CategoryProducts = ({ products }: CategoryProductsProps) => {
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
    <>
      {/* Count + Sort */}
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-bazar-muted">
          মোট {totalProducts}টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="relative self-start sm:self-auto">
          <div className="flex items-center gap-2">
            <span className="text-sm text-bazar-muted">সাজান</span>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-9 min-w-[120px] items-center justify-between gap-2 rounded-lg border border-bazar-border bg-bazar-surface px-3 text-[13px] font-medium text-bazar-text transition-all duration-300 hover:border-bazar-primary"
            >
              <span>{selectedOption?.label}</span>

              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {isOpen && (
            <div className="absolute right-0 top-11 z-30 w-[175px] overflow-hidden rounded-xl border border-bazar-border bg-bazar-surface p-1.5 shadow-lg">
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
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] transition-colors duration-200 ${
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

      {/* Products */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default CategoryProducts;
