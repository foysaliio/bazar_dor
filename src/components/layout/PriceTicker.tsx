"use client";

import Marquee from "react-fast-marquee";

import type { Product } from "@/types/bazar";

interface PriceTickerProps {
  products: Product[];
}

const unitLabels: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const PriceTicker = ({ products }: PriceTickerProps) => {
  const formatBanglaNumber = (value: number) => {
    return new Intl.NumberFormat("bn-BD", {
      maximumFractionDigits: 1,
    }).format(value);
  };

  return (
    <div className="border-y border-bazar-border bg-bazar-surface">
      <Marquee speed={170} pauseOnHover gradient={false}>
        {products.map((product) => {
          const isUp = product.change.dir === "up";
          const isDown = product.change.dir === "down";

          return (
            <div
              key={product.id}
              className="mr-9 flex h-8.5 items-center gap-2 whitespace-nowrap text-[12px]"
            >
              <span className="text-sm">{product.image}</span>

              <span className="font-medium text-bazar-text">
                {product.nameBn}
              </span>

              <span className="text-bazar-text">
                {formatBanglaNumber(product.today)} টাকা/
                {unitLabels[product.unit] ?? product.unit}
              </span>

              <span
                className={`font-semibold ${
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
              </span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default PriceTicker;
