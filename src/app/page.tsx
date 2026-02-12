import Header from "@/components/Header";
import { Features, FAQ, HeroCarousel, Services, Products } from "@/components/homeSections";

export default function Home() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main>
        <HeroCarousel />
        <Features />
        {/* <Services /> */}
        <Products />
        <FAQ />
      </main>
    </div>
  );
}
