"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import { products } from "@/data/products";

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-light transition-colors duration-300">
      {/* Bloque superior: imagen + titulo */}
      <div className="relative overflow-hidden flex flex-col items-center justify-center text-center px-4 pt-24 pb-40 tablet:pt-32 tablet:pb-52">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80"
            alt="Equipo trabajando con tecnologia y dashboards"
            fill
            priority
            className="object-cover"
          />

        </div>
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
            El salto tecnológico que tu empresa necesita
          </h1>

        </motion.div>
      </div>

      {/* Banda de transicion: tarjetas superpuestas + CTA */}
      <div className="relative bg-primary pb-10 tablet:pb-10">
        <div className="mx-auto max-w-4xl px-4 tablet:px-6 -mt-20 tablet:-mt-36 relative z-10">
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 tablet:gap-14 relative -top-10">
            {products.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <Link
                  href={product.href}
                  aria-label={product.title}
                  className="group relative block h-64 tablet:h-72 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    className="object-cover scale-110 blur-sm"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-primary/40" />
                  <div className="relative z-10 flex h-full items-center justify-center px-10">
                    <div className="relative w-full h-2/3">
                      <Image
                        src={product.logo}
                        alt={product.title}
                        fill
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center px-4">
          <p className="text-white/85 italic text-lg tablet:text-xl mb-6">
            &ldquo;Soluciones a tu medida&rdquo;
          </p>
          <PrimaryCTAButton source="hero" variant="orange" label="Solicitar demo gratuita" />
        </div>
      </div>
    </section>
  );
}
