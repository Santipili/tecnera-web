import { Users, BarChart3, Activity, Zap, Lock, Upload, Workflow, Link, Smartphone } from 'lucide-react';

const features = [
    {
        icon: Smartphone,
        title: 'Aplicaciones moviles',
        description: 'Tu servicio en el bolsillo de tus socios. Accesible, rapido y disponible las 24 horas.',
        color: 'from-[#005647] to-[#00A478]'
    },
    {
        icon: BarChart3,
        title: 'Dashboard y reportes',
        description: 'Visualiza métricas clave, genera reportes automáticos y toma decisiones basadas en datos reales.',
        color: 'from-[#0095C7] to-[#0095C7]/70'
    },
    {
        icon: Workflow,
        title: 'Automatizacion de procesos',
        description: 'Lo que hoy te toma horas, resolvelo en minutos. Menos tareas repetitivas, mas tiempo para lo importante..',
        color: 'from-[#00A478] to-[#00DBA0]'
    },
    {
        icon: Zap,
        title: 'Integraciones',
        description: 'Conecta con WhatsApp y email para comunicarte directamente desde la plataforma.',
        color: 'from-[#F47C20] to-[#F47C20]/70'
    },
    {
        icon: Link,
        title: 'Registro de dominios',
        description: 'Asegura la identidad digital de tu organizacion. Registro, renovacion y certificado SSL incluido.',
        color: 'from-[#0A3D35] to-[#005647]'
    },
    {
        icon: Upload,
        title: 'Migración desde CSV',
        description: 'Importa tus afiliados existentes desde archivos Excel o CSV en minutos. Sin pérdida de datos.',
        color: 'from-[#00DBA0] to-[#00A478]'
    }
];

export default function Features() {
    return (
        <section className="pt-20 bg-gradient-to-b from-white to-[#EAEAEA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    {/* este bloque tiene el celeste que queremos */}
                    {/* <span className="inline-block bg-[#0095C7] text-white px-4 py-2 rounded-full mb-4">
                        Funcionalidades
                    </span> */}

                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#005647] mb-6">
                        Todo lo que necesitas en un solo lugar
                    </h2>
                    <p className="text-lg text-[#3A3A3A] max-w-3xl mx-auto">
                        Tecnera incluye todas las herramientas esenciales para gestionar tu organización
                        de manera profesional y eficiente.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-[#00DBA0]"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl text-[#005647] mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-[#3A3A3A] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-[#3A3A3A] mb-6 text-lg">
                        Y mucho más: exportación de datos, búsquedas avanzadas, historial de cambios, notificaciones...
                    </p>
                    <div className="inline-flex flex-wrap justify-center gap-3">
                        <span className="bg-white px-4 py-2 rounded-full text-sm text-[#005647] shadow">✓ Sin instalación</span>
                        <span className="bg-white px-4 py-2 rounded-full text-sm text-[#005647] shadow">✓ Actualizaciones automáticas</span>
                        <span className="bg-white px-4 py-2 rounded-full text-sm text-[#005647] shadow">✓ Multi-dispositivo</span>
                        <span className="bg-white px-4 py-2 rounded-full text-sm text-[#005647] shadow">✓ Backups automáticos</span>
                    </div>
                </div>
            </div>
            <div className="mt-16 bg-gradient-to-r from-[#005647] to-[#00A478] rounded-2xl p-8 md:p-12 text-white text-center">
                <h3 className="text-2xl md:text-3xl mb-4">
                    Es momento de modernizarse sin complicaciones
                </h3>
                <p className="text-lg text-gray-100 max-w-2xl mx-auto">
                    Tecnera te ayuda a dar el salto digital de forma simple, segura y sin perder tu información histórica.
                </p>
            </div>
        </section>
    );
}
