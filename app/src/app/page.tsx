import Header from "@/components/layout/Header";
import { Hero, Products, CustomDev, Features, FAQ } from "@/components/homeSections";

export default function Home() {
  return (
    <div className="min-h-screen bg-light transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Products />
        <CustomDev />
        <Features />
        <FAQ />
      </main>
    </div>
  );
}
