import type { Product } from "@/types/bazar";

import ProductCard from "./ProductCard";

interface FallingPricesProps {
  products: Product[];
}

const FallingPrices = ({ products }: FallingPricesProps) => {
  const fallingProducts = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
    .slice(0, 6);

  return (
    <section className="mx-auto mt-10 w-full max-w-[1120px] px-4 lg:px-0">
      <h2 className="mb-4 text-[22px] font-semibold text-bazar-text">
        <span className="mr-2 text-bazar-success">▼</span>
        আজ দাম কমেছে
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fallingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FallingPrices;
