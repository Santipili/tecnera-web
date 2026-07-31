"use client";
import { motion } from "framer-motion";
import { upcomingModules, aiValue } from "@/data/roadmap";

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 transition-colors duration-300">
      <div className="mx-auto max-w-[105rem] px-4 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-10%" }}
            className="rounded-[2rem] border border-primary/10 bg-white p-8 lg:p-10 shadow-lg shadow-black/30 min-h-[28rem]"
          >
            <span className="block text-center text-lg tablet:text-xl font-extrabold uppercase tracking-widest text-neutral">
              Lo que viene de cara al futuro
            </span>
            <span className="mx-auto mt-2 block h-0.5 bg-neutral" style={{ maxWidth: "7.5rem" }} />
            <p className="mt-5 text-left text-base font-semibold text-neutral leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.15)]">
              Nuestras soluciones evolucionan y crecen, nosotros no dejamos de trabajar y mejorar con el objetivo de dar mejor servicio y soluciones de calidad:
            </p>
            <div className="mt-5">
              {upcomingModules.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-center gap-4 ${i > 0 ? "mt-5 pt-5 border-t border-primary/10" : ""}`}
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-neutral/8">
                      <Icon className="h-5 w-5 text-neutral" strokeWidth={2} />
                    </div>
                    <div className="flex-1 flex items-center">
                      <h3 className="font-extrabold text-neutral">{item.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true, margin: "-10%" }}
            className="rounded-[2rem] bg-primary p-8 lg:p-10 text-white shadow-lg shadow-black/30 min-h-[28rem]"
          >
            <span className="block text-center text-lg tablet:text-xl font-extrabold uppercase tracking-widest text-white">
              Integraciones y desarrollos con IA
            </span>
            <span className="mx-auto mt-2 block h-0.5 bg-white" style={{ maxWidth: "8.5rem" }} />
            <p className="mt-5 text-left text-base font-semibold text-white/90 leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]">
              En una epoca donde se quiere usar la inteligencia artificial para todo, nosotros solo te ofrecemos lo que realmente sirve para ahorrar tiempo y esfuerzo:
            </p>
            <div className="mt-5">
              {aiValue.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-center gap-4 ${i > 0 ? "mt-5 pt-5 border-t border-white/10" : ""}`}
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1 flex items-center">
                      <h3 className="font-extrabold text-white">{item.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
