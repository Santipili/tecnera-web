"use client";
import { motion } from "framer-motion";
import { features } from "@/data/features";

export default function Features() {
  return (
    <section className="pt-20 bg-gradient-to-b from-white to-[#EAEAEA] dark:from-dark dark:to-[#0d2420] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#005647] dark:text-secondary mb-6">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="text-lg text-[#3A3A3A] dark:text-white/70 max-w-3xl mx-auto">
            Tecnera incluye todas las herramientas esenciales para gestionar tu organización
            de manera profesional y eficiente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white dark:bg-card-bg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-[#00DBA0]"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-[#005647] dark:text-secondary mb-3">{feature.title}</h3>
                <p className="text-[#3A3A3A] dark:text-white/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-[#3A3A3A] dark:text-white/70 mb-6 text-lg">
            Y mucho más: exportación de datos, búsquedas avanzadas, historial de cambios, notificaciones...
          </p>
          <div className="inline-flex flex-wrap justify-center gap-3">
            {["Sin instalación", "Actualizaciones automáticas", "Multi-dispositivo", "Backups automáticos"].map((pill) => (
              <span key={pill} className="bg-white dark:bg-card-bg px-4 py-2 rounded-full text-sm text-[#005647] dark:text-secondary shadow">
                ✓ {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-[#005647] to-[#00A478] rounded-2xl p-8 md:p-12 text-white text-center">
        <h3 className="text-2xl md:text-3xl mb-4">Es momento de modernizarse sin complicaciones</h3>
        <p className="text-lg text-gray-100 max-w-2xl mx-auto">
          Tecnera te ayuda a dar el salto digital de forma simple, segura y sin perder tu información histórica.
        </p>
      </div>
    </section>
  );
}
