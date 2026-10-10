import Link from "next/link";

import type { Product } from "@/types/bazar";

interface ProductCardProps {
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

const ProductCard = ({ product }: ProductCardProps) => {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  return (
    <Link
      href={`/product/${product.slug}`}
      scroll={true}
      className="relative min-h-[128px] rounded-2xl border border-bazar-border bg-bazar-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-bazar-soft text-2xl">
          {product.image}
        </div>

        <div>
          <h3 className="text-[17px] leading-5 font-semibold text-bazar-text">
            {product.nameBn}
          </h3>

          <p className="mt-1 text-[13px] leading-none text-bazar-muted">
            প্রতি {unitLabels[product.unit] ?? product.unit}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[12px] text-bazar-muted">আজকের দাম</p>

        <p className="mt-0.5 text-[18px] leading-none font-semibold text-bazar-text">
          {formatBanglaNumber(product.today)} টাকা
        </p>
      </div>

      <div
        className={`absolute right-4 bottom-4 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
          isUp
            ? "bg-red-50 text-bazar-danger"
            : isDown
              ? "bg-green-50 text-bazar-success"
              : "bg-gray-100 text-bazar-muted"
        }`}
      >
        {isUp && "▲ "}
        {isDown && "▼ "}
        {!isUp && !isDown && "• "}
        {formatBanglaNumber(Math.abs(product.change.pct))}%
      </div>
    </Link>
  );
};

export default ProductCard;
