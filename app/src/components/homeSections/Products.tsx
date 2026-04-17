"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section id="productos" className="py-24 bg-[#EAEAEA] dark:bg-dark transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 tablet:px-6 laptop:px-6">
        <SectionHeader
          tag="Productos"
          title="Soluciones listas para tu organizacion"
          description="Herramientas probadas que se adaptan a tu realidad. Implementacion rapida, resultados desde el primer dia."
          centered
        />
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 max-w-4xl laptop:max-w-5xl desktop:max-w-7xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <ProductCard
                title={product.title}
                description={product.description}
                features={product.features}
                image={product.image}
                href={product.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
