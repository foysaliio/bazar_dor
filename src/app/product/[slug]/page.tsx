import { notFound } from "next/navigation";

import ProductDetailsContent from "@/components/product/ProductDetailsContent";
import ScrollToTop from "@/components/product/ScrollToTop";
import { getProductBySlug } from "@/lib/api";

export const instant = false;

interface ProductDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bazar-bg">
      <ScrollToTop slug={slug} />

      <div className="mx-auto w-full max-w-[1120px] px-4 py-6 lg:px-0">
        <ProductDetailsContent product={product} />
      </div>
    </main>
  );
};

export default ProductDetailsPage;
