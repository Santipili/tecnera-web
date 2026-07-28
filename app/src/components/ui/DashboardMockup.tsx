"use client";
import { motion } from "framer-motion";

export type MockupAccent = "teal" | "green" | "purple" | "yellow" | "orange" | "pink";
export type MockupVariant = "analytics" | "list" | "kanban";

interface DashboardMockupProps {
  accent?: MockupAccent;
  variant?: MockupVariant;
  className?: string;
}

const accentClasses: Record<
  MockupAccent,
  { solid: string; soft: string; text: string; ring: string }
> = {
  teal: { solid: "bg-accent-teal", soft: "bg-accent-teal/15", text: "text-accent-teal", ring: "ring-accent-teal/30" },
  green: { solid: "bg-accent-green", soft: "bg-accent-green/15", text: "text-accent-green", ring: "ring-accent-green/30" },
  purple: { solid: "bg-accent-purple", soft: "bg-accent-purple/15", text: "text-accent-purple", ring: "ring-accent-purple/30" },
  yellow: { solid: "bg-accent-yellow", soft: "bg-accent-yellow/20", text: "text-gray-900", ring: "ring-accent-yellow/30" },
  orange: { solid: "bg-accent-orange", soft: "bg-accent-orange/15", text: "text-accent-orange", ring: "ring-accent-orange/30" },
  pink: { solid: "bg-accent-pink", soft: "bg-accent-pink/15", text: "text-accent-pink", ring: "ring-accent-pink/30" },
};

const barHeights = [30, 55, 40, 70, 50, 85, 60];

function Chrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-gray-100 px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
      <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
      <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
    </div>
  );
}

function AnalyticsBody({ accent }: { accent: MockupAccent }) {
  const c = accentClasses[accent];
  return (
    <div className="p-5">
      <div className="mb-4 grid grid-cols-3 gap-3">
        {["Actividad", "Completado", "Equipo"].map((label, i) => (
          <div key={label} className="rounded-lg border border-gray-100 p-3">
            <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">{label}</p>
            <p className="mt-1 text-lg font-bold text-foreground">
              {i === 0 ? "128" : i === 1 ? "94%" : "12"}
            </p>
          </div>
        ))}
      </div>
      <div className="flex h-24 items-end gap-2 rounded-lg border border-gray-100 p-3">
        {barHeights.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-md ${i === 5 ? c.solid : "bg-gray-100"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function ListBody({ accent }: { accent: MockupAccent }) {
  const c = accentClasses[accent];
  return (
    <div className="space-y-3 p-5">
      <div className="mb-1 flex items-center justify-between">
        <div className="h-7 w-32 rounded-full bg-gray-50 border border-gray-100" />
        <div className={`h-7 w-20 rounded-full ${c.soft}`} />
      </div>
      {[80, 60, 70].map((w, i) => (
        <div key={i} className="flex items-center gap-3 rounded-lg border border-gray-100 p-3">
          <span className={`h-8 w-8 flex-shrink-0 rounded-full ${c.soft}`} />
          <div className="flex-1 space-y-1.5">
            <div className="h-2.5 rounded-full bg-gray-200" style={{ width: `${w}%` }} />
            <div className="h-2 rounded-full bg-gray-100" style={{ width: `${w - 20}%` }} />
          </div>
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${c.soft} ${c.text}`}>
            activo
          </span>
        </div>
      ))}
    </div>
  );
}

function KanbanBody({ accent }: { accent: MockupAccent }) {
  const c = accentClasses[accent];
  const columns = ["Pendiente", "En curso", "Resuelto"];
  return (
    <div className="grid grid-cols-3 gap-3 p-5">
      {columns.map((col, ci) => (
        <div key={col} className="space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">{col}</p>
          {[0, 1].map((_, i) => (
            <div key={i} className="rounded-lg border border-gray-100 p-2.5">
              <span className={`mb-2 block h-1 w-6 rounded-full ${ci === 1 ? c.solid : "bg-gray-200"}`} />
              <div className="h-2 w-full rounded-full bg-gray-200" />
              <div className="mt-1.5 h-2 w-2/3 rounded-full bg-gray-100" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function DashboardMockup({
  accent = "purple",
  variant = "analytics",
  className,
}: DashboardMockupProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className={`overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft-lg ${className ?? ""}`}
    >
      <Chrome />
      {variant === "analytics" && <AnalyticsBody accent={accent} />}
      {variant === "list" && <ListBody accent={accent} />}
      {variant === "kanban" && <KanbanBody accent={accent} />}
    </motion.div>
  );
}
