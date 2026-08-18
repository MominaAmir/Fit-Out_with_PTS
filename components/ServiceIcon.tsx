type Props = {
  icon: string;
  className?: string;
};

export default function ServiceIcon({ icon, className = "h-6 w-6" }: Props) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "fitout":
      return (
        <svg {...common}>
          <path d="M3 21V9l9-6 9 6v12" />
          <path d="M9 21v-8h6v8" />
        </svg>
      );
    case "drawing":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <path d="M7 9h10M7 13h6M7 17h10" />
          <circle cx="17" cy="7" r="0.5" fill="currentColor" />
        </svg>
      );
    case "civil":
      return (
        <svg {...common}>
          <path d="M4 21h16" />
          <path d="M6 21V9l6-5 6 5v12" />
          <path d="M10 21v-6h4v6" />
        </svg>
      );
    case "joinery":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M4 9h16M9 3v18" />
        </svg>
      );
    case "mep":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h10M4 17h13" />
          <circle cx="19" cy="7" r="1.5" />
          <circle cx="16" cy="12" r="1.5" />
        </svg>
      );
    case "aluminum":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
