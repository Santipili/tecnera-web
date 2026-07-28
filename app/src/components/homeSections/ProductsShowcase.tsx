"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export default function ProductsShowcase() {
  return (
    <section className="bg-gray-50 px-4 py-24 tablet:px-6 laptop:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          tag="Productos"
          title="Soluciones ya armadas para públicos específicos"
          description="Además de desarrollar a medida, tenemos productos propios listos para usar."
        />
        <div className="grid grid-cols-1 gap-8 tablet:grid-cols-2">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ProductCard
                title={product.title}
                tagline={product.tagline}
                description={product.description}
                features={product.features}
                accent={product.accent}
                mockupVariant={product.mockupVariant}
                logo={product.logo}
                href={product.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
