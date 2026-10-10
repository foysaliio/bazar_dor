import type { Category, Product } from "@/types/bazar";

const BASE_URL = "https://api.api-store.workers.dev/api/bazardor";

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${BASE_URL}/categories`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
};

export const getCategoryBySlug = async (
  slug: string,
): Promise<Category | null> => {
  const categories = await getCategories();

  const category = categories.find((item) => item.slug === slug);

  return category ?? null;
};

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products`, {
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};

export const getProductsByCategory = async (
  slug: string,
): Promise<Product[]> => {
  const products = await getProducts();

  return products.filter((product) => product.category === slug);
};

export const getProductBySlug = async (
  slug: string,
): Promise<Product | null> => {
  const products = await getProducts();

  const product = products.find((item) => item.slug === slug);

  return product ?? null;
};
