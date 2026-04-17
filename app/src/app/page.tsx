import Header from "@/components/layout/Header";
import { Features, FAQ, HeroCarrousel, Products } from "@/components/homeSections";

export default function Home() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
      <Header />
      <main>
        <HeroCarrousel />
        <Features />
        {/* <Services /> */}
        <Products />
        <FAQ />
      </main>
    </div>
  );
}
