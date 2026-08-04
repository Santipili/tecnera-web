const inputLabels = [
  "Planillas sueltas",
  "Procesos manuales",
  "Sistemas que no se conectan",
  "Información duplicada",
  "Tareas repetitivas",
];

const CENTER_Y = 238;
const OUTPUT = { x: 800, y: CENTER_Y, r: 34 };
const INPUT_X = 195;
const INPUT_SPACING = 62;

const inputY = (i: number) => CENTER_Y + (i - 2) * INPUT_SPACING;

// símbolo de Tecnera (isotipo), para dibujarlo en blanco dentro del nodo de salida
const TECNERA_ICON_PATH =
  "M282.009,1437.136c197.635,0,439.767-203.572,448.876-396.535v-70.045c0-196.181-248.29-407.691-449.731-407.691l-232.424-.094c-27.006,0-48.73-21.748-48.73-48.735V48.73C0,21.743,21.724,0,48.73,0h465.297c26.984,0,48.73,21.743,48.73,48.73v232.993c.321,211.82,236.572,436.597,440.943,436.597h241.725c13.535,0,25.766,5.575,34.618,14.548,9.109,8.85,14.861,21.104,14.861,34.706v465.495c0,27.15-21.895,48.61-48.623,48.61h-241.725c-204.371,0-440.622,224.777-440.943,436.597v232.993c0,26.987-21.746,48.73-48.73,48.73H49.585c-27.006,0-48.73-21.743-48.73-48.73v-465.305c0-26.987,21.724-48.735,48.73-48.735l232.424-.094Z";
const TECNERA_ICON_VB = { w: 1294.904, h: 2000 };

// hash determinístico (mismo resultado en servidor y cliente) para dispersar
// los nodos de la nube central sin que formen columnas prolijas
const hash = (seed: number) => {
  const s = Math.sin(seed * 12.9898) * 43758.5453;
  return s - Math.floor(s);
};

const CLOUD_COUNT = 13;
const CLOUD_X_MIN = 320;
const CLOUD_X_MAX = 750;
// alto de la base (el mismo rango vertical que ocupan los 5 inputs)
const BASE_HALF_HEIGHT = (inputY(4) - inputY(0)) / 2;

// la dispersión vertical permitida se achica a medida que nos acercamos
// al nodo de salida, para que la nube dibuje un triángulo: base ancha,
// punta angosta donde converge todo
const envelopeHalfHeight = (x: number) => {
  const t = Math.max(0, Math.min(1, (x - INPUT_X) / (OUTPUT.x - INPUT_X)));
  return BASE_HALF_HEIGHT * (1 - t);
};

const allCloudNodes = Array.from({ length: CLOUD_COUNT }).map((_, i) => {
  const hx = hash(i * 2.31 + 1);
  const hy = hash(i * 1.71 + 7);
  const hr = hash(i * 3.13 + 3);
  const x = CLOUD_X_MIN + hx * (CLOUD_X_MAX - CLOUD_X_MIN);
  const y = CENTER_Y + (hy * 2 - 1) * envelopeHalfHeight(x) * 0.92;
  const r = 3.4 + hr * 4.2;
  return { x, y, r, seed: i };
});

// conexión entre dos nodos según una probabilidad pseudo-aleatoria estable
const linkChance = (a: number, b: number) => hash(a * 7.13 + b * 5.71 + 11);

export default function DevelopmentNetworkDiagram() {
  const rawInputConnections = inputLabels.flatMap((_, i) =>
    allCloudNodes
      .filter((n) => linkChance(i, n.seed) > 0.78)
      .map((n) => ({ i, n, w: linkChance(i, n.seed) }))
  );

  // solo se muestran los nodos que efectivamente reciben una conexión de entrada:
  // así no quedan puntos sueltos que no lleven a ningún lado
  const connectedSeeds = new Set(rawInputConnections.map((c) => c.n.seed));
  const cloudNodes = allCloudNodes.filter((n) => connectedSeeds.has(n.seed));

  const inputConnections = rawInputConnections.map(({ i, n, w }) => ({
    x1: INPUT_X + 12,
    y1: inputY(i),
    x2: n.x,
    y2: n.y,
    w,
  }));

  const cloudMeshConnections = cloudNodes.flatMap((n, i) =>
    cloudNodes.slice(i + 1).flatMap((m) => {
      const dist = Math.hypot(n.x - m.x, n.y - m.y);
      if (dist > 120) return [];
      const w = linkChance(n.seed, m.seed + 100);
      if (w < 0.78) return [];
      return [{ x1: n.x, y1: n.y, x2: m.x, y2: m.y, w }];
    })
  );

  // todo nodo visible converge en la solución final, sin excepción
  const outputConnections = cloudNodes.map((n) => ({
    x1: n.x,
    y1: n.y,
    x2: OUTPUT.x - OUTPUT.r + 8,
    y2: OUTPUT.y,
    w: linkChance(n.seed, 999),
  }));

  // ícono de Tecnera centrado dentro del nodo de salida
  const iconHeight = OUTPUT.r * 1.3;
  const iconScale = iconHeight / TECNERA_ICON_VB.h;
  const iconWidth = TECNERA_ICON_VB.w * iconScale;

  return (
    <div>
      <svg
        viewBox="-160 80 1080 320"
        className="w-full"
        role="img"
        aria-label="Diagrama: las necesidades dispersas de tu organización convergen en una sola solución a medida"
      >
        {inputConnections.map((c, i) => (
          <line
            key={`ic-${i}`}
            x1={c.x1}
            y1={c.y1}
            x2={c.x2}
            y2={c.y2}
            stroke="#005647"
            strokeWidth={c.w > 0.85 ? 1.3 : 0.6}
            opacity={c.w > 0.85 ? 0.55 : 0.12 + c.w * 0.15}
          />
        ))}

        {cloudMeshConnections.map((c, i) => (
          <line
            key={`mc-${i}`}
            x1={c.x1}
            y1={c.y1}
            x2={c.x2}
            y2={c.y2}
            stroke="#0A3D35"
            strokeWidth={0.5}
            opacity={0.1 + c.w * 0.12}
          />
        ))}

        {outputConnections.map((c, i) => (
          <line
            key={`oc-${i}`}
            x1={c.x1}
            y1={c.y1}
            x2={c.x2}
            y2={c.y2}
            stroke="#005647"
            strokeWidth={c.w > 0.75 ? 1.5 : 0.6}
            opacity={c.w > 0.75 ? 0.6 : 0.15}
          />
        ))}

        {/* Halo de salida */}
        <circle cx={OUTPUT.x} cy={OUTPUT.y} r={OUTPUT.r + 18} fill="#00dba0" opacity={0.1} />
        <circle
          cx={OUTPUT.x}
          cy={OUTPUT.y}
          r={OUTPUT.r + 9}
          fill="none"
          stroke="#00dba0"
          strokeWidth={1.2}
          opacity={0.4}
        />

        {/* Nube de nodos: la red procesando, sin columnas */}
        {cloudNodes.map((n) => {
          const tone = hash(n.seed * 4.7);
          const fill = tone > 0.66 ? "#00dba0" : tone > 0.33 ? "#005647" : "#0A3D35";
          return <circle key={n.seed} cx={n.x} cy={n.y} r={n.r} fill={fill} opacity={0.85} />;
        })}

        {/* Nodos de entrada: lo que ya existe, huecos */}
        {inputLabels.map((_, i) => (
          <circle
            key={`in-${i}`}
            cx={INPUT_X}
            cy={inputY(i)}
            r={11}
            fill="#F9FAF8"
            stroke="#005647"
            strokeWidth={2.5}
          />
        ))}

        {/* Nodo de salida */}
        <circle cx={OUTPUT.x} cy={OUTPUT.y} r={OUTPUT.r} fill="#005647" />
        <g transform={`translate(${OUTPUT.x - iconWidth / 2}, ${OUTPUT.y - iconHeight / 2}) scale(${iconScale})`}>
          <path d={TECNERA_ICON_PATH} fill="#ffffff" />
        </g>

        <g className="hidden laptop:block">
          {inputLabels.map((label, i) => (
            <text
              key={label}
              x={INPUT_X - 20}
              y={inputY(i)}
              textAnchor="end"
              dominantBaseline="middle"
              fontSize={19}
              fontWeight={600}
              fill="#1C1C1C"
            >
              {label}
            </text>
          ))}

          <text
            x={OUTPUT.x}
            y={OUTPUT.y + OUTPUT.r + 30}
            textAnchor="middle"
            fontSize={21}
            fontWeight={800}
            fill="#1C1C1C"
          >
            Una sola solución
          </text>
          <text x={OUTPUT.x} y={OUTPUT.y + OUTPUT.r + 53} textAnchor="middle" fontSize={17} fill="#666666">
            a la medida de tu operación
          </text>
        </g>
      </svg>

      {/* Versión legible en pantallas chicas */}
      <div className="laptop:hidden mt-8">
        <p className="text-xs font-bold uppercase tracking-widest text-subtext">Lo que traés</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {inputLabels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-primary/15 bg-light px-4 py-2 text-base font-semibold text-neutral"
            >
              {label}
            </span>
          ))}
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-widest text-subtext">Lo que te llevás</p>
        <p className="mt-2 text-lg tablet:text-xl font-extrabold text-neutral">Una sola solución</p>
        <p className="text-base text-subtext">a la medida de tu operación</p>
      </div>
    </div>
  );
}
