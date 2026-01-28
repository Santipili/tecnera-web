        {/* NAVBAR - transparente sobre hero */}
        {/* <header className="fixed inset-x-0 top-0 z-50">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg border border-white/30 flex items-center justify-center text-[10px]">Logo</div>
              <span className="font-semibold">Tecnera</span>
            </div>
            <ul className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
              <li><a href="#soluciones" className="hover:text-white">Soluciones</a></li>
              <li><a href="#casos" className="hover:text-white">Casos</a></li>
              <li><a href="#precios" className="hover:text-white">Precios</a></li>
              <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
            </ul>
            <a href="#contacto" className="hidden md:inline-flex rounded-full bg-[#00dba0] px-4 py-2 text-sm font-medium text-[#0A3D35] hover:opacity-90">Hablar con ventas</a>
            <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/30 px-3 py-2 text-sm">Menú</button>
          </nav>
        </header> */}
// app/page.tsx (plantilla alternativa)
// Wireframe visual alternativo con paleta Tecnera
// Principal: #005647 | Secundario: #00dba0 | Secundario Oscuro: #0A3D35
// Estilo: hero a pantalla completa con gradiente, secciones en bloques alternados

import Link from "next/link";

const FirstSection = () => {
  return (
    <div>
      <section className="relative isolate min-h-[88vh] flex items-center overflow-hidden">
        {/* fondo gradiente + patrón cuadriculado sutil */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,#00dba0_0,transparent_35%),radial-gradient(circle_at_80%_30%,#00dba0_0,transparent_25%)]" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#005647] via-[#0A3D35] to-[#0A3D35]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs tracking-wide text-white/90">Soluciones de software para empresas</span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Transformamos procesos en productos digitales
              </h1>
              <p className="mt-4 text-white/80 max-w-xl">
                Desarrollo de aplicaciones web y móviles. Infraestructura, dominios y hosting administrado.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contacto" className="inline-flex items-center rounded-full bg-[#00dba0] px-5 py-3 text-[#0A3D35] text-sm font-semibold hover:opacity-90">Solicitar asesoría</a>
                <a href="#servicios" className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/5">Ver servicios</a>
              </div>
              {/* mini-logos/metricas placeholder */}
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg text-center text-xs text-white/70">
                {/* <div className="rounded-lg border border-white/10 py-3">+20 Proyectos</div> */}
                <div className="rounded-lg border border-white/10 py-3">99.9% Uptime</div>
                <div className="rounded-lg border border-white/10 py-3">ISO-ready</div>
              </div>
            </div>
            {/* <div className="lg:col-span-5">
              <div className="h-72 sm:h-96 rounded-2xl border border-white/20 bg-white/5 backdrop-blur flex items-center justify-center text-white/60 text-xs">
                Wireframe • gráfico / mock
              </div>
            </div> */}
          </div>
        </div>

        {/* franja curva inferior */}
        <svg className="absolute bottom-[-1px] left-0 right-0 w-full" viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30C240 90 480 -30 720 30C960 90 1200 -30 1440 30V90H0V30Z" fill="#0A3D35"/>
        </svg>
      </section>

    </div>
  )
}



const Services =() => {
  const list = [
              { title: "Desarrollo de paginas web a medida", description: "Next.js + React, SSR/SSG, SEO técnico y accesibilidad." },
              // { title: "SaaS y apps internas", description: "Node/NestJS, colas, caching y RBAC con mejores prácticas." },
              // { title: "Apps móviles", description: "React Native para iOS y Android, publicación y mantenimiento." },
              { title: "APIs e integraciones", description: "REST/GraphQL, auth, SSO y conexión con ERP/CRM." },
              { title: "DevOps & Hosting", description: "Dominios, SSL, monitoreo, DonWeb/AWS y observabilidad." },
              { title: "Soporte evolutivo", description: "Roadmap de mejoras, performance y seguridad continua." },
            ];
  return(
    <div>
      <section id="servicios" className="bg-[#0A3D35] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <p className="text-[#00dba0] text-sm font-semibold">Servicios</p>
            <h2 className="text-3xl font-bold tracking-tight">Qué hacemos</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Arquitecturas modernas, performance y seguridad desde el diseño.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((card, i) => (
              <div key={i} className="rounded-2xl p-6 border border-white/10 bg-white/5">
                <div className="h-10 w-10 rounded-lg border border-white/20 mb-4 flex items-center justify-center text-[10px] text-white/70">icon</div>
                <h3 className="font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-white/70">{card.description}</p>
                <button className="mt-4 text-sm font-medium text-[#00dba0] hover:underline">Saber más</button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

const Prices = () => {
  return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center">
            <p className="text-[#005647] text-sm font-semibold">Precios</p>
            <h2 className="text-3xl font-bold tracking-tight">Planes orientativos</h2>
            <p className="mt-2 text-[#0A3D35]/80 max-w-2xl mx-auto">Personalizamos cada propuesta según alcance, integraciones y soporte.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Esencial", badge: "", featured: false },
              { name: "Profesional", badge: "Recomendado", featured: true },
              { name: "Corporativo", badge: "A medida", featured: false },
            ].map((plan, i) => (
              <div key={i} className={`relative rounded-2xl p-6 border ${plan.featured ? "border-[#00dba0] shadow-[0_0_0_4px_rgba(0,219,160,0.15)]" : "border-[#005647]/20"} bg-white`}>
                {plan.badge && (
                  <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-[#00dba0] px-3 py-1 text-xs font-semibold text-[#0A3D35]">{plan.badge}</span>
                )}
                <h3 className="font-semibold">{plan.name}</h3>
                <div className="mt-2 text-3xl font-bold tracking-tight">Desde US$<span className="text-base align-top">*</span></div>
                <ul className="mt-4 space-y-2 text-sm text-[#0A3D35]/80">
                  <li>• Sitio/App + Backend</li>
                  <li>• Dominio, hosting y SSL</li>
                  <li>• Mantenimiento y soporte</li>
                </ul>
                <a href="#contacto" className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold ${plan.featured ? "bg-[#005647] text-white hover:opacity-90" : "border border-[#005647] text-[#005647] hover:bg-[#005647]/5"}`}>Solicitar presupuesto</a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#0A3D35]/60">* Valores de referencia sujetos a alcance y complejidad.</p>
        </div>
  )
}
const Contact = () =>{
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <p className="text-[#00dba0] text-sm font-semibold">Contacto</p>
            <h2 className="text-3xl font-bold tracking-tight">Hablemos de tu proyecto</h2>
            <p className="mt-2 text-white/80 max-w-2xl">Contanos brevemente qué necesitás y coordinamos una reunión.</p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-2xl p-6 border border-white/20 bg-white/5">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm placeholder:text-white/60" placeholder="Nombre y apellido" />
                <input className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm placeholder:text-white/60" placeholder="Email corporativo" />
                <input className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm md:col-span-2 placeholder:text-white/60" placeholder="Empresa (tamaño 50–200)" />
                <textarea className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm md:col-span-2 placeholder:text-white/60" rows={5} placeholder="Cuéntanos sobre el proyecto o problema" />
                <button className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-[#00dba0] px-5 py-3 text-[#0A3D35] text-sm font-semibold hover:opacity-90">Enviar consulta</button>
              </form>
            </div>
            <aside className="rounded-2xl p-6 border border-white/20 bg-white/5">
              <h3 className="font-semibold">Canales directos</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>• Email: contacto@tecnera.com</li>
                <li>• WhatsApp: +54 9 223 XXX XXXX</li>
                <li>• LinkedIn: /company/tecnera</li>
              </ul>
              <div className="mt-6 h-36 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center text-xs text-white/70">mapa</div>
            </aside>
          </div>
        </div>

  )
}

const Cases =() =>{
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <p className="text-[#00dba0] text-sm font-semibold">Casos</p>
            <h2 className="text-3xl font-bold tracking-tight">Impacto comprobado</h2>
            <p className="mt-2 text-white/80 max-w-2xl">Reemplaza estos placeholders por tus casos reales y métricas.</p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[1,2,3].map((c) => (
              <article key={c} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="h-40 w-full border-b border-white/10 bg-white/5 flex items-center justify-center text-xs text-white/70">imagen</div>
                <div className="p-5">
                  <h3 className="font-semibold">Proyecto {c}</h3>
                  <p className="mt-2 text-sm text-white/80">Descripción breve del desafío y la solución. <span className="font-semibold text-[#00dba0]">+40% eficiencia</span>.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
  )
}
export function HomePageAlt() {
  return (
    <main className="min-h-screen bg-[#0A3D35] text-white">

      {/* HERO - full viewport */}
      
        <FirstSection/> 
      {/* SERVICIOS - tarjetas sobre fondo oscuro */}
        <Services/>


      {/* SOLUCIONES - banda clara con cards lineales */}
      <section id="soluciones" className="bg-white text-[#0A3D35] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <p className="text-[#005647] text-sm font-semibold">Soluciones</p>
            <h2 className="text-3xl font-bold tracking-tight">Pensado para empresas medianas</h2>
            <p className="mt-2 text-[#0A3D35]/80 max-w-2xl">Alineamos tecnología con objetivos de negocio para escalar sin fricción.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Digitalización de procesos", "Integraciones con sistemas", "Automatización & dashboards", "CRM/ERP a medida"].map((item, i) => (
              <div key={i} className="rounded-xl p-6 border border-[#005647]/20 bg-white">
                <div className="h-16 rounded-lg border border-[#005647]/20 mb-4 flex items-center justify-center text-xs text-[#0A3D35]/60">img</div>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS - carrusel simple en grid (placeholders) */}
      <section id="casos" className="bg-[#005647] py-20">
        <Cases/>
      </section>

      {/* PRECIOS - tarjetas con destacado central */}
      <section id="precios" className="bg-white text-[#0A3D35] py-20">
            <Prices/>
      </section>

      {/* CONTACTO - banda en color principal */}
      <section id="contacto" className="bg-[#005647] py-20">
        <Contact/>
      </section>
    </main>
  );
}


export default function Home() {
  return (
    <div className="">
{/* titulo principal */}
      <section className="flex flex-col justify-center items-center bg-gradient-to-b from-primary to-tertiary h-120 px-20">
        <h1 className="text-8xl font-bold text-secondary font-nunito text-center">Convierte tu empresa al mundo digital</h1>
      </section>


    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* NAVBAR */}
     

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-teal-800">
                Convierte tu empresa al mundo digital
              </h1>
              <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-xl">
                Soluciones web y móviles robustas para empresas en crecimiento. Next.js, Node.js, NestJS, Express, React, React Native y SQL.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#contacto" className="inline-flex items-center rounded-full bg-teal-600 px-5 py-3 text-white text-sm font-semibold hover:bg-teal-700">Solicitar asesoría</a>
                <a href="#servicios" className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-semibold hover:bg-neutral-100">Ver servicios</a>
              </div>
              {/* Puntos de confianza */}
              <div className="mt-8 flex flex-wrap gap-4 text-xs text-neutral-600">
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-teal-600"></span> Entrega ágil</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-teal-600"></span> Seguridad y escalabilidad</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-teal-600"></span> Integración con sistemas</span>
              </div>
            </div>
            {/* Lado visual wireframe */}
            <div className="relative w-full h-72 sm:h-96 rounded-2xl border border-dashed border-neutral-300 bg-white"></div>
          </div>
        </div>
        {/* Fondo degradado suave */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-teal-50 via-white to-white" />
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <p className="text-teal-700 text-sm font-semibold">Servicios</p>
            <h2 className="text-3xl font-bold tracking-tight">Lo que construimos</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">Productos digitales a medida con tecnologías modernas y foco en resultados.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Desarrollo Web Profesional", d: "Sitios corporativos y plataformas internas con Next.js y React." },
              { t: "Aplicaciones Web", d: "SaaS, paneles, dashboards y sistemas de gestión con Node/NestJS." },
              { t: "Aplicaciones Móviles", d: "Apps iOS/Android con React Native y publicación en stores." },
              { t: "Integraciones & APIs", d: "APIs REST/GraphQL, Single Sign-On y conexión con sistemas existentes." },
              { t: "Infraestructura & Hosting", d: "Servidores, dominios, SSL y monitoreo. Partners: DonWeb, AWS." },
              { t: "Soporte & Mantenimiento", d: "Monitoreo, mejoras continuas y roadmap evolutivo." },
            ].map((card, i) => (
              <div key={i} className="rounded-xl p-6 border border-dashed border-neutral-300 bg-neutral-50">
                <div className="h-10 w-10 rounded-lg border border-dashed border-neutral-300 mb-4 flex items-center justify-center text-[10px]">icon</div>
                <h3 className="font-semibold">{card.t}</h3>
                <p className="mt-2 text-sm text-neutral-600">{card.d}</p>
                <button className="mt-4 text-sm font-medium text-teal-700 hover:underline">Saber más</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCIONES PARA EMPRESAS */}
      <section id="soluciones" className="py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <p className="text-teal-700 text-sm font-semibold">Soluciones</p>
            <h2 className="text-3xl font-bold tracking-tight">Pensado para empresas medianas</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">Digitalizamos procesos, integramos sistemas y creamos herramientas que escalan con tu equipo (50–200 colaboradores).</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Digitalización de procesos internos",
              "Integraciones con sistemas existentes",
              "Automatización y dashboards",
              "Sistemas de gestión (CRM/ERP) a medida",
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-6 border border-dashed border-neutral-300 bg-white">
                <div className="h-20 rounded-lg border border-dashed border-neutral-300 mb-4 flex items-center justify-center text-xs text-neutral-500">img</div>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS DE ÉXITO */}
      <section id="casos" className="py-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <p className="text-teal-700 text-sm font-semibold">Casos</p>
            <h2 className="text-3xl font-bold tracking-tight">Resultados que importan</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">Un vistazo rápido a proyectos recientes. Reemplaza estos placeholders por tus casos reales.</p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[1,2,3].map((c) => (
              <article key={c} className="rounded-xl overflow-hidden border border-dashed border-neutral-300">
                <div className="h-40 w-full bg-neutral-100 border-b border-dashed border-neutral-300 flex items-center justify-center text-xs text-neutral-500">imagen</div>
                <div className="p-5">
                  <h3 className="font-semibold">Proyecto {c}</h3>
                  <p className="mt-2 text-sm text-neutral-600">Breve descripción del desafío y la solución. <span className="font-medium text-teal-700">+40% eficiencia</span> en proceso clave.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-teal-700 text-sm font-semibold">Nosotros</p>
            <h2 className="text-3xl font-bold tracking-tight">Equipo técnico. Mirada humana.</h2>
            <p className="mt-4 text-neutral-700">Analistas, diseñadores y desarrolladores con foco en valor de negocio, seguridad y escalabilidad. Transparencia total y comunicación constante.</p>
            <div className="mt-6 flex gap-3">
              <a href="#contacto" className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-3 text-white text-sm font-semibold hover:bg-neutral-800">Agendar reunión</a>
              <Link href="/nosotros" className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-semibold hover:bg-neutral-100">Conocer más</Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 h-64 rounded-2xl border border-dashed border-neutral-300 bg-white" />
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="py-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center">
            <p className="text-teal-700 text-sm font-semibold">Precios</p>
            <h2 className="text-3xl font-bold tracking-tight">Planes orientativos</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl mx-auto">Valores de referencia. Personalizamos cada propuesta según alcance y complejidad.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Esencial", price: "Desde US$", desc: "Ideal para pequeñas empresas o primeras versiones (MVP)." },
              { name: "Profesional", price: "Desde US$", desc: "Pensado para empresas medianas: robustez y escalabilidad." },
              { name: "Corporativo", price: "A medida", desc: "Soluciones enterprise, integraciones complejas y soporte extendido." },
            ].map((plan, i) => (
              <div key={i} className="rounded-2xl p-6 border border-dashed border-neutral-300 bg-neutral-50 flex flex-col">
                <h3 className="font-semibold">{plan.name}</h3>
                <div className="mt-2 text-3xl font-bold tracking-tight">{plan.price}<span className="text-base align-top">*</span></div>
                <p className="mt-2 text-sm text-neutral-600">{plan.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  <li>• Sitio/App + Backend</li>
                  <li>• Hosting, dominio y SSL</li>
                  <li>• Mantenimiento y soporte</li>
                </ul>
                <a href="#contacto" className="mt-6 inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-3 text-white text-sm font-semibold hover:bg-teal-700">Solicitar presupuesto</a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-500">* Los precios variarán según alcance, integraciones, tiempos y soporte requerido.</p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <p className="text-teal-700 text-sm font-semibold">Contacto</p>
            <h2 className="text-3xl font-bold tracking-tight">Hablemos de tu proyecto</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">Contanos brevemente qué necesitás y coordinamos una reunión sin costo.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulario placeholder */}
            <div className="lg:col-span-2 rounded-2xl p-6 border border-dashed border-neutral-300 bg-white">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm" placeholder="Nombre y apellido" />
                <input className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm" placeholder="Email corporativo" />
                <input className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm md:col-span-2" placeholder="Empresa (tamaño 50–200)" />
                <textarea className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm md:col-span-2" rows={5} placeholder="Cuéntanos sobre el proyecto o problema a resolver" />
                <button className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-white text-sm font-semibold hover:bg-neutral-800">Enviar consulta</button>
              </form>
            </div>

            {/* Datos de contacto */}
            <aside className="rounded-2xl p-6 border border-dashed border-neutral-300 bg-neutral-50">
              <h3 className="font-semibold">Canales directos</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li>• Email: contacto@tecnera.com</li>
                <li>• WhatsApp: +54 9 223 XXX XXXX</li>
                <li>• LinkedIn: /company/tecnera</li>
              </ul>
              <div className="mt-6 h-36 rounded-xl border border-dashed border-neutral-300 bg-white flex items-center justify-center text-xs text-neutral-500">mapa</div>
            </aside>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="border-t border-neutral-200 bg-neutral-950 text-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="h-9 w-9 rounded-lg border border-dashed border-neutral-500 flex items-center justify-center text-xs">Logo</div>
            <p className="mt-3 text-sm text-neutral-400">Innovación en soluciones digitales.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Empresa</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
              <li><a href="#soluciones" className="hover:text-white">Soluciones</a></li>
              <li><a href="#casos" className="hover:text-white">Casos</a></li>
              <li><a href="#precios" className="hover:text-white">Precios</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Recursos</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/legal" className="hover:text-white">Legal</Link></li>
              <li><Link href="/privacidad" className="hover:text-white">Privacidad</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Contacto</h4>
            <p className="mt-3 text-sm text-neutral-400">contacto@tecnera.com</p>
            <p className="text-sm text-neutral-400">Mar del Plata, AR</p>
          </div>
        </div>
        <div className="border-t border-neutral-800">
          <p className="text-xs text-neutral-500 text-center py-4">© Tecnera {new Date().getFullYear()} – Todos los derechos reservados.</p>
        </div>
      </footer> */}
    </div>


    </div>
  );
}
