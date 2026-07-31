import Header from "@/components/layout/Header";
import { Hero, Products, Roadmap } from "@/components/homeSections";

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Products />
        <Roadmap />
      </main>
    </div>
  );
}
