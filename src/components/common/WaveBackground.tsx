export function WaveBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
    >
      <svg
        className="w-full h-full object-cover min-w-[1000px]"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="wave-grad-teal" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#0284C7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#64748B" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Top-Left Elegant Concentric Flow Waves */}
        <path
          d="M-100 120 C 180 80, 240 280, 480 200 C 720 120, 800 240, 1100 180"
          stroke="url(#wave-grad-blue)"
          strokeWidth="1.2"
        />
        <path
          d="M-80 160 C 200 120, 260 320, 500 240 C 740 160, 820 280, 1120 220"
          stroke="url(#wave-grad-blue)"
          strokeWidth="1.2"
        />
        <path
          d="M-60 200 C 220 160, 280 360, 520 280 C 760 200, 840 320, 1140 260"
          stroke="url(#wave-grad-blue)"
          strokeWidth="1.2"
        />
        <path
          d="M-40 240 C 240 200, 300 400, 540 320 C 780 240, 860 360, 1160 300"
          stroke="url(#wave-grad-blue)"
          strokeWidth="1.2"
        />
        <path
          d="M-20 280 C 260 240, 320 440, 560 360 C 800 280, 880 400, 1180 340"
          stroke="url(#wave-grad-blue)"
          strokeWidth="1.2"
        />
        <path
          d="M0 320 C 280 280, 340 480, 580 400 C 820 320, 900 440, 1200 380"
          stroke="url(#wave-grad-blue)"
          strokeWidth="1.2"
        />

        {/* Right & Bottom Sweeping Arc Curves (flowing behind product card) */}
        <path
          d="M750 950 C 850 700, 980 550, 1500 420"
          stroke="url(#wave-grad-teal)"
          strokeWidth="1.4"
        />
        <path
          d="M780 970 C 880 730, 1010 580, 1520 460"
          stroke="url(#wave-grad-teal)"
          strokeWidth="1.4"
        />
        <path
          d="M810 990 C 910 760, 1040 610, 1540 500"
          stroke="url(#wave-grad-teal)"
          strokeWidth="1.4"
        />
        <path
          d="M840 1010 C 940 790, 1070 640, 1560 540"
          stroke="url(#wave-grad-teal)"
          strokeWidth="1.4"
        />
        <path
          d="M870 1030 C 970 820, 1100 670, 1580 580"
          stroke="url(#wave-grad-teal)"
          strokeWidth="1.4"
        />
        <path
          d="M900 1050 C 1000 850, 1130 700, 1600 620"
          stroke="url(#wave-grad-teal)"
          strokeWidth="1.4"
        />

        {/* Bottom Right Soft Sparkle / Glint (matches reference image) */}
        <g transform="translate(1310, 760)">
          <path
            d="M 0 -22 Q 0 0 22 0 Q 0 0 0 22 Q 0 0 -22 0 Q 0 0 0 -22 Z"
            fill="#FFFFFF"
            fillOpacity="0.6"
          />
        </g>
      </svg>
    </div>
  );
}
