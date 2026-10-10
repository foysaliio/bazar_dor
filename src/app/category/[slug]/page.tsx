import { notFound } from "next/navigation";

import CategoryProducts from "@/components/category/CategoryProducts";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/api";

export const instant = false;

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;

  const [category, products] = await Promise.all([
    getCategoryBySlug(slug),
    getProductsByCategory(slug),
  ]);

  if (!category) {
    notFound();
  }

  const totalProducts = new Intl.NumberFormat("bn-BD").format(products.length);

  return (
    <main className="min-h-screen bg-bazar-bg">
      <div className="mx-auto w-full max-w-[1120px] px-4 py-6 lg:px-0">
        {/* Category Header */}
        <section className="mb-7 rounded-2xl border border-bazar-border bg-bazar-surface p-6">
          <div className="flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-bazar-soft text-3xl">
              {category.icon}
            </div>

            <div>
              <h1 className="text-2xl font-bold text-bazar-text">
                {category.nameBn}
              </h1>

              <p className="mt-1 text-sm text-bazar-muted">
                {totalProducts}টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>
          </div>
        </section>

        <CategoryProducts products={products} />
      </div>
    </main>
  );
};

export default CategoryPage;
