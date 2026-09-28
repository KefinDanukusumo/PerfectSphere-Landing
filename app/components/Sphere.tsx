/**
 * Sphere — the brand signature.
 *
 * A precisely lit wireframe globe with a single slow orbital ring.
 * Pure SVG + CSS (no client JS); motion is ambient and respects
 * prefers-reduced-motion (see globals.css). Decorative, so hidden
 * from assistive tech.
 */
export function Sphere({ className }: { className?: string }) {
  // Latitude lines (parallels): horizontal ellipses at evenly spaced heights.
  const parallels = [-150, -110, -65, 0, 65, 110, 150];
  // Longitude lines (meridians): vertical ellipses of varying width.
  const meridians = [40, 95, 145, 185];

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Lit body: highlight upper-left → iris mid → near-black edge */}
        <radialGradient id="ps-body" cx="38%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#FFFBE0" />
          <stop offset="22%" stopColor="#FFEA00" />
          <stop offset="52%" stopColor="#E08E00" />
          <stop offset="82%" stopColor="#3A2A04" />
          <stop offset="100%" stopColor="#0B0F19" />
        </radialGradient>

        {/* Soft outer aura */}
        <radialGradient id="ps-aura" cx="50%" cy="50%" r="50%">
          <stop offset="55%" stopColor="#FFB703" stopOpacity="0" />
          <stop offset="78%" stopColor="#FFB703" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFB703" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="ps-spec" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        <clipPath id="ps-clip">
          <circle cx="200" cy="200" r="150" />
        </clipPath>
      </defs>

      {/* Ambient aura */}
      <circle
        className="ps-glow"
        cx="200"
        cy="200"
        r="195"
        fill="url(#ps-aura)"
        style={{ animation: "ps-glow 6s ease-in-out infinite" }}
      />

      {/* Sphere body */}
      <circle cx="200" cy="200" r="150" fill="url(#ps-body)" />

      {/* Wireframe, clipped to the sphere */}
      <g clipPath="url(#ps-clip)" fill="none" stroke="#FFEA00">
        <g strokeOpacity="0.16" strokeWidth="1">
          {parallels.map((dy) => {
            // Parallels narrow as they near the poles for a globe feel.
            const ry = 10 + (150 - Math.abs(dy)) * 0.06;
            return (
              <ellipse
                key={`p-${dy}`}
                cx="200"
                cy={200 + dy}
                rx={Math.sqrt(Math.max(0, 150 * 150 - dy * dy))}
                ry={ry}
              />
            );
          })}
        </g>
        <g strokeOpacity="0.13" strokeWidth="1">
          {meridians.map((rx) => (
            <ellipse key={`m-${rx}`} cx="200" cy="200" rx={rx} ry="150" />
          ))}
          <line x1="200" y1="50" x2="200" y2="350" strokeOpacity="0.18" />
        </g>
      </g>

      {/* Crisp terminator rim, lit from upper-left */}
      <circle
        cx="200"
        cy="200"
        r="150"
        fill="none"
        stroke="#FFEA00"
        strokeOpacity="0.22"
        strokeWidth="1"
      />

      {/* Specular highlight */}
      <ellipse cx="150" cy="135" rx="46" ry="34" fill="url(#ps-spec)" />

      {/* Orbital ring — tilted, slowly rotating */}
      <g transform="rotate(-18 200 200)">
        <g
          className="ps-orbit"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: "ps-orbit 28s linear infinite",
          }}
        >
          <ellipse
            cx="200"
            cy="200"
            rx="190"
            ry="62"
            fill="none"
            stroke="#FFB703"
            strokeOpacity="0.45"
            strokeWidth="1"
          />
          <circle cx="390" cy="200" r="3.5" fill="#FFEA00" />
        </g>
      </g>
    </svg>
  );
}
