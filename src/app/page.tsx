import FallingPrices from "@/components/home/FallingPrices";
import Hero from "@/components/home/Hero";
import RisingPrices from "@/components/home/RisingPrices";
import { getProducts } from "@/lib/api";

const HomePage = async () => {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-bazar-bg">
      <Hero />

      <RisingPrices products={products} />

      <FallingPrices products={products} />
    </main>
  );
};

export default HomePage;
