import type { Product } from "@/types/bazar";

import ProductCard from "./ProductCard";

interface AllProductsProps {
  products: Product[];
}

const AllProducts = ({ products }: AllProductsProps) => {
  const totalProducts = new Intl.NumberFormat("bn-BD").format(products.length);

  return (
    <section
      id="সব-পণ্য"
      className="mx-auto mt-10 w-full max-w-[1120px] px-4 pb-12 lg:px-0"
    >
      <div className="mb-5">
        <h2 className="text-[20px] font-bold text-bazar-text">সব পণ্য</h2>

        <p className="mt-1 text-sm text-bazar-muted">
          মোট {totalProducts}টি পণ্য দেখানো হচ্ছে
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
