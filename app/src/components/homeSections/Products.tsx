"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductRow from "@/components/ui/ProductRow";
import { products } from "@/data/products";
import { customDev } from "@/data/customDev";

export default function Products() {
  return (
    <section id="productos" className="relative py-24 transition-colors duration-300">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-6">
        <SectionHeader
          tag="Productos"
          title="Deja atras las planillas y archivos compartidos con nuestras soluciones integrales"
          centered
          emphasize
        />
        <div className="flex flex-col gap-14">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <ProductRow
                title={product.title}
                description={product.description}
                features={product.features}
                logo={product.logo}
                href={product.href}
                ctaLabel={product.ctaLabel}
              />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: products.length * 0.15 }}
            viewport={{ once: true }}
          >
            <ProductRow
              title={customDev.title}
              description={customDev.description}
              features={customDev.features}
              logo={customDev.logo}
              href={customDev.ctaHref}
              ctaLabel={customDev.ctaLabel}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
