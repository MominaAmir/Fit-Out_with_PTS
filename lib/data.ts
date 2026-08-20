export const company = {
  name: "Power Point Technical Services L.L.C.",
  shortName: "PTS",
  founded: 2007,
  phone: "+971 58 931 8365",
  email: "brightvision45@gmail.com",
  location: "Dubai, United Arab Emirates",
  mission:
    "To enhance the quality of our clients' lives through excellence in interior design, personal attention and service beyond reproach.",
};

export const yearsExperience = new Date().getFullYear() - company.founded;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/drawings", label: "Drawings" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  image: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  scope: string[];
  icon: string; // simple label used to pick an icon in ServiceIcon
  features: string[]; // key features of the service, used in the Services page
};



export const services: Service[] = [
  {
    slug: "interior-fit-out",
    title: "Interior Fit-Out",
    icon: "building",
    shortDescription: "Full interior fit-out services for commercial and residential spaces.",
    description: "Complete interior fit-out solutions including partitions, ceilings, flooring, and finishes. We handle everything from concept to handover.",
    features: ["Space Planning", "Partitioning", "Ceilings", "Flooring"],
    scope: [
      "Space planning and layout design",
      "Partitioning and wall systems",
      "Suspended ceilings and drywall",
      "Flooring solutions (tiles, carpets, wood)",
      "Lighting and electrical works",
      "Finishes and decorations"
    ],
    image: "/images/services/interior-fit-out.png",
  },
  {
    slug: "mep-works",
    title: "MEP Works",
    icon: "wrench",
    shortDescription: "Mechanical, Electrical, and Plumbing works for complex projects.",
    description: "Comprehensive MEP solutions including HVAC, electrical systems, plumbing, and fire protection.",
    features: ["HVAC Systems", "Electrical Wiring", "Plumbing", "Fire Safety"],
    scope: [
      "HVAC system design and installation",
      "Electrical wiring and distribution",
      "Plumbing and drainage systems",
      "Fire protection and alarm systems",
      "Energy efficiency solutions",
      "Maintenance and servicing"
    ],
    image: "/images/services/mep-works.png",
  },
  {
    slug: "technical-drawings",
    title: "Technical Drawings",
    icon: "file-text",
    shortDescription: "Detailed technical drawings and 3D renderings for approvals.",
    description: "Precision technical drawings including floor plans, elevations, sections, and detailed construction documents.",
    features: ["Floor Plans", "3D Renderings", "Shop Drawings", "As-built Drawings"],
    scope: [
      "Architectural floor plans and elevations",
      "Detailed construction drawings",
      "3D renderings and visualizations",
      "Shop drawings for fabrication",
      "As-built drawings and documentation",
      "Authority approval submissions"
    ],
    image: "/images/services/technical-drawings.png",
  },
  {
    slug: "project-management",
    title: "Project Management",
    icon: "clipboard",
    shortDescription: "End-to-end project management from concept to handover.",
    description: "Full project management services including scheduling, budgeting, quality control, and stakeholder coordination.",
    features: ["Scheduling", "Budgeting", "Quality Control", "Stakeholder Management"],
    scope: [
      "Project planning and scheduling",
      "Budget management and cost control",
      "Quality assurance and control",
      "Stakeholder coordination",
      "Risk management",
      "Project handover and closure"
    ],
    image: "/images/services/project-management.png",
  },
  {
    slug: "fit-out-approvals",
    title: "Fit-Out Approvals",
    icon: "check-circle",
    shortDescription: "Complete approvals and permits for fit-out works in Dubai.",
    description: "Full approval management including DM, DCD, Trakhees, and all municipality approvals.",
    features: ["DM Approvals", "DCD Approvals", "Trakhees", "Municipality"],
    scope: [
      "Dubai Municipality (DM) approvals",
      "DCD (Dubai Civil Defense) approvals",
      "Trakhees approval management",
      "Municipality permit applications",
      "Documentation and submissions",
      "Approval follow-up and coordination"
    ],
    image: "/images/services/fit-out-approvals.png",
  },
  {
    slug: "joinery",
    title: "Joinery & Carpentry",
    icon: "hammer",
    shortDescription: "Custom joinery and carpentry solutions for unique requirements.",
    description: "Custom joinery including wardrobes, kitchen cabinets, reception desks, and bespoke furniture.",
    features: ["Custom Furniture", "Kitchen Cabinets", "Wardrobes", "Reception Desks"],
    scope: [
      "Custom furniture design and fabrication",
      "Kitchen cabinets and wardrobes",
      "Reception desks and counters",
      "Bespoke joinery solutions",
      "Installation and fitting",
      "Repair and restoration services"
    ],
    image: "/images/services/joinery.png",
  },
];

export const stats = [
  { value: `${yearsExperience}+`, label: "Years of Experience" },
  { value: "120+", label: "Projects Completed" },
  { value: "250+", label: "CAD Drawings Produced" },
  { value: "500+", label: "Furniture & Fit-Out Elements" },
];

export const processSteps = [
  {
    title: "Consultation & Approval",
    description:
      "We understand your brief, survey the site, and manage authority documentation from the outset.",
  },
  {
    title: "Design & Drawings",
    description:
      "Our technical design team produces layout, 3D and shop drawings — the blueprint every later stage works from.",
  },
  {
    title: "Build & Execute",
    description:
      "Civil, joinery, MEP and finishing teams execute against the approved drawings, on schedule and on budget.",
  },
];

export type Project = {
  slug: string;
  title: string;
  sector: string;
  summary: string;
};

// Placeholder entries — swap in real project names, sectors and photos once
// the client provides them. Keeping the structure here means the portfolio
// page and cards don't need to change, just this data.
export const projects: Project[] = [
  { slug: "office-fitout-1", title: "Corporate Office Fit-Out", sector: "Offices", summary: "Full design-to-handover office fit-out including partitions, joinery and MEP coordination." },
  { slug: "retail-fitout-1", title: "Retail Store Fit-Out", sector: "Retail & Supermarkets", summary: "Shop drawings through execution for a multi-unit retail fit-out." },
  { slug: "restaurant-fitout-1", title: "Restaurant Interior", sector: "Restaurants", summary: "Interior design, joinery and civil works for an F&B fit-out." },
  { slug: "villa-fitout-1", title: "Villa Interior Renovation", sector: "Villas & Apartments", summary: "Full interior renovation with custom joinery and finishing works." },
  { slug: "warehouse-fitout-1", title: "Warehouse Technical Fit-Out", sector: "Warehouses", summary: "Civil and technical works for warehouse fit-out and floor systems." },
  { slug: "clinic-fitout-1", title: "Clinic Interior Fit-Out", sector: "Hospitals & Clinics", summary: "Compliant medical interior fit-out with authority-approved drawings." },
];

export const sectors = [
  "Offices",
  "Retail & Supermarkets",
  "Restaurants",
  "Warehouses",
  "Villas & Apartments",
  "Hospitals & Clinics",
  "Schools",
  "Kiosks",
];
