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
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  scope: string[];
  icon: string; // simple label used to pick an icon in ServiceIcon
};

export const services: Service[] = [
  {
    slug: "fit-out-interior-design",
    title: "Fit-Out & Interior Design",
    shortDescription:
      "End-to-end fit-out solutions from design to completion, for commercial and residential spaces.",
    description:
      "We deliver comprehensive fit-out solutions from concept to handover, covering both domestic and commercial sectors. Every project is handled with the required authority approvals, so your space is compliant from day one.",
    scope: [
      "Offices & corporate spaces",
      "Supermarkets & retail shops",
      "Restaurants & F&B outlets",
      "Warehouses & industrial units",
      "Villas & apartments",
      "Hospitals & clinics",
      "Schools & educational spaces",
      "Kiosks & pop-up units",
    ],
    icon: "fitout",
  },
  {
    slug: "drawing-technical-design",
    title: "Drawing & Technical Design",
    shortDescription:
      "CAD drawings, 2D/3D layouts, shop drawings and as-built documentation for approvals and execution.",
    description:
      "Every successful fit-out starts with accurate documentation. Our technical design team produces the drawings that take a project from idea to authority approval to on-site execution — precise, coordinated, and ready for the people who build from them.",
    scope: [
      "2D layout & space planning drawings",
      "3D modelling & visualisation",
      "Shop drawings for execution teams",
      "As-built drawings",
      "MEP coordination drawings",
      "Drawings prepared for authority submission",
    ],
    icon: "drawing",
  },
  {
    slug: "civil-maintenance",
    title: "Civil Maintenance",
    shortDescription:
      "Block works, plastering, waterproofing, cladding and general civil maintenance, done right.",
    description:
      "Our civil maintenance team is equipped with the tools and experience to handle structural and finishing works of any scale — keeping buildings sound, compliant, and well-presented.",
    scope: [
      "Block works & partition works",
      "Plastering & concreting",
      "Waterproofing",
      "Painting works",
      "Cladding works",
      "Glass partitions & gypsum works",
      "Tile works",
      "Demolition works",
    ],
    icon: "civil",
  },
  {
    slug: "carpentry-joinery",
    title: "Carpentry & Joinery Works",
    shortDescription:
      "Custom joinery and carpentry built for durability and a refined finish.",
    description:
      "From bespoke joinery to full carpentry packages, we build fixtures that are made to last and finished to match the design intent — not off-the-shelf compromises.",
    scope: [
      "Custom joinery & cabinetry",
      "Wardrobes & storage units",
      "Reception & counter joinery",
      "Doors & wood partitions",
      "Furniture works",
    ],
    icon: "joinery",
  },
  {
    slug: "mep-works",
    title: "MEP-Related Works",
    shortDescription: "A/C ducting and plumbing works integrated into every fit-out.",
    description:
      "We coordinate mechanical and plumbing works alongside the fit-out programme so building services are integrated cleanly into the finished space, not bolted on afterward.",
    scope: ["A/C ducting", "Plumbing works", "MEP coordination with drawings team"],
    icon: "mep",
  },
  {
    slug: "painting-aluminum",
    title: "Painting & Aluminum Works",
    shortDescription: "Finishing and aluminum works completed to a precise, lasting standard.",
    description:
      "Finishing touches make or break a fit-out. Our painting and aluminum teams handle the details that give a space its final, professional look.",
    scope: ["Interior & exterior painting", "Aluminum works & framing", "Glass & aluminum partitions"],
    icon: "aluminum",
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
