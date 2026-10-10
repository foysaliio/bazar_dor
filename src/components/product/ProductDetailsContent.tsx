import { ChevronRight } from "lucide-react";
import Link from "next/link";

import type { Product } from "@/types/bazar";

interface ProductDetailsContentProps {
  product: Product;
}

const unitLabels: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const formatBanglaNumber = (value: number) => {
  return new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 1,
  }).format(value);
};

const ProductDetailsContent = ({ product }: ProductDetailsContentProps) => {
  const unit = unitLabels[product.unit] ?? product.unit;

  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  const minimumPrice = Math.min(...product.markets.map((market) => market.min));

  const maximumPrice = Math.max(...product.markets.map((market) => market.max));

  const averagePrice =
    product.markets.reduce(
      (total, market) => total + (market.min + market.max) / 2,
      0,
    ) / product.markets.length;

  return (
    <>
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-1 text-[13px] text-bazar-muted">
        <Link href="/" className="transition-colors hover:text-bazar-primary">
          হোম
        </Link>

        <ChevronRight size={13} />

        <Link
          href={`/category/${product.category}`}
          className="transition-colors hover:text-bazar-primary"
        >
          {product.categoryNameBn}
        </Link>

        <ChevronRight size={13} />

        <span className="text-bazar-text">{product.nameBn}</span>
      </div>

      {/* Product Summary */}
      <section className="rounded-2xl border border-bazar-border bg-bazar-surface p-5 sm:p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div className="flex items-center gap-5">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-bazar-soft text-3xl">
              {product.image}
            </div>

            <div>
              <h1 className="text-2xl font-bold text-bazar-text">
                {product.nameBn}
              </h1>

              <p className="mt-1 text-sm text-bazar-muted">
                প্রতি {unit} · {product.categoryNameBn}
              </p>

              <p className="mt-2 text-[13px] text-bazar-muted">
                গতকালের তুলনায় আজ দাম{" "}
                <span
                  className={`font-semibold ${
                    isUp
                      ? "text-bazar-danger"
                      : isDown
                        ? "text-bazar-success"
                        : "text-bazar-muted"
                  }`}
                >
                  {isUp && "বেড়েছে "}
                  {isDown && "কমেছে "}
                  {!isUp && !isDown && "অপরিবর্তিত "}
                  {formatBanglaNumber(Math.abs(product.change.pct))}%
                </span>
              </p>
            </div>
          </div>

          {/* Today's Price */}
          <div className="rounded-2xl bg-bazar-soft px-5 py-4 text-center sm:min-w-[130px]">
            <p className="text-xs text-bazar-muted">আজকের দাম</p>

            <p className="mt-1 text-[22px] font-bold text-bazar-text">
              {formatBanglaNumber(product.today)}
            </p>

            <p className="text-xs text-bazar-muted">টাকা / {unit}</p>

            <p
              className={`mt-1 text-xs font-semibold ${
                isUp
                  ? "text-bazar-danger"
                  : isDown
                    ? "text-bazar-success"
                    : "text-bazar-muted"
              }`}
            >
              {isUp && "▲ "}
              {isDown && "▼ "}
              {!isUp && !isDown && "• "}
              {formatBanglaNumber(Math.abs(product.change.pct))}%
            </p>
          </div>
        </div>
      </section>

      {/* Price Details */}
      <section className="mt-5 rounded-2xl border border-bazar-border bg-bazar-surface p-5">
        <h2 className="text-lg font-bold text-bazar-text">দামের সারসংক্ষেপ</h2>

        {/* Summary Cards */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-bazar-border p-4">
            <p className="text-xs text-bazar-muted">সর্বনিম্ন দাম</p>

            <p className="mt-1 text-xl font-bold text-bazar-success">
              {formatBanglaNumber(minimumPrice)}{" "}
              <span className="text-sm font-medium">টাকা</span>
            </p>

            <p className="mt-1 text-[11px] text-bazar-muted">
              সবচেয়ে কম দামের বাজার
            </p>
          </div>

          <div className="rounded-xl border border-bazar-border p-4">
            <p className="text-xs text-bazar-muted">সর্বাধিক দাম</p>

            <p className="mt-1 text-xl font-bold text-bazar-danger">
              {formatBanglaNumber(maximumPrice)}{" "}
              <span className="text-sm font-medium">টাকা</span>
            </p>

            <p className="mt-1 text-[11px] text-bazar-muted">
              সবচেয়ে বেশি দামের বাজার
            </p>
          </div>

          <div className="rounded-xl border border-bazar-border p-4">
            <p className="text-xs text-bazar-muted">গড় দাম</p>

            <p className="mt-1 text-xl font-bold text-bazar-success">
              {formatBanglaNumber(averagePrice)}{" "}
              <span className="text-sm font-medium">টাকা</span>
            </p>

            <p className="mt-1 text-[11px] text-bazar-muted">
              প্রতি {unit}-এর হিসাবে
            </p>
          </div>
        </div>

        {/* Market Table */}
        <div className="mt-6">
          <h2 className="mb-3 text-lg font-bold text-bazar-text">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto rounded-xl border border-bazar-border">
            <table className="w-full min-w-[700px] text-[13px]">
              <thead>
                <tr className="text-bazar-muted">
                  <th className="px-4 py-3 text-left font-medium">বাজার</th>

                  <th className="px-4 py-3 text-left font-medium">বিভাগ</th>

                  <th className="px-4 py-3 text-right font-medium">
                    সর্বনিম্ন
                  </th>

                  <th className="px-4 py-3 text-right font-medium">সর্বাধিক</th>

                  <th className="px-4 py-3 text-right font-medium">গড়</th>
                </tr>
              </thead>

              <tbody>
                {product.markets.map((market, index) => {
                  const marketAverage = (market.min + market.max) / 2;

                  return (
                    <tr
                      key={`${market.market}-${index}`}
                      className={
                        index % 2 === 0
                          ? "bg-bazar-soft/60"
                          : "bg-bazar-surface"
                      }
                    >
                      <td className="px-4 py-3 text-bazar-text">
                        {market.market}
                      </td>

                      <td className="px-4 py-3 text-bazar-muted">
                        {market.division}
                      </td>

                      <td className="px-4 py-3 text-right text-bazar-text">
                        {formatBanglaNumber(market.min)} টাকা
                      </td>

                      <td className="px-4 py-3 text-right text-bazar-text">
                        {formatBanglaNumber(market.max)} টাকা
                      </td>

                      <td className="px-4 py-3 text-right font-semibold text-bazar-text">
                        {formatBanglaNumber(marketAverage)} টাকা
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Category Link */}
      <div className="mt-6">
        <Link
          href={`/category/${product.category}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-bazar-text transition-colors hover:text-bazar-primary"
        >
          <span>{product.categoryIcon}</span>
          <span>সব {product.categoryNameBn}</span>
        </Link>
      </div>
    </>
  );
};

export default ProductDetailsContent;
