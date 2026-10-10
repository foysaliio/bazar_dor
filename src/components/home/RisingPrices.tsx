import type { Product } from "@/types/bazar";

import ProductCard from "./ProductCard";

interface RisingPricesProps {
  products: Product[];
}

const RisingPrices = ({ products }: RisingPricesProps) => {
  const risingProducts = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <section className="mx-auto w-full max-w-[1120px] px-4 lg:px-0">
      <h2 className="mb-4 text-[22px] font-semibold text-bazar-text">
        <span className="mr-2 text-bazar-danger">▲</span>
        আজ দাম বেড়েছে
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {risingProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default RisingPrices;