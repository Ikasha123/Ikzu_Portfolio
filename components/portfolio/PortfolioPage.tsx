"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  Download,
  FolderKanban,
  GitBranch,
  Globe,
  GraduationCap,
  Mail,
  Menu,
  MonitorSmartphone,
  Network,
  Palette,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "2:1", label: "BSc (Hons) Computing" },
  { value: "1+ Year", label: "IT Executive Experience" },
  { value: "4", label: "Technology Areas" },
  { value: "6+", label: "Professional Certifications" },
];

const expertiseCards = [
  {
    title: "IT Support",
    description:
      "Technical troubleshooting, user support, hardware/software support, helpdesk and IT operations.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Systems & Networking",
    description:
      "Network administration, connectivity monitoring, system configuration, workstation setup, VPN and infrastructure fundamentals.",
    icon: Network,
  },
  {
    title: "Software Development",
    description:
      "Web and mobile application development using modern technologies.",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    description:
      "User-focused interface design, wireframing, prototyping and digital experiences.",
    icon: Palette,
  },
];

const experienceTimeline = [
  {
    period: "2023–2024",
    title: "IT Executive Intern",
    company: "Cellmate Technology",
    location: "Colombo, Sri Lanka",
    items: [
      {
        label: "Technical Support",
        description: "Resolved first-line support requests and documented recurring technical issues for faster follow-up.",
      },
      {
        label: "Systems Administration",
        description: "Configured desktops, maintained workstation environments, and supported day-to-day system operations.",
      },
      {
        label: "Network Support",
        description: "Assisted with connectivity checks, LAN troubleshooting, and infrastructure monitoring tasks.",
      },
      {
        label: "User & Access Management",
        description: "Prepared new accounts, supported permissions, and handled onboarding access requirements.",
      },
      {
        label: "IT Documentation",
        description: "Improved helpdesk documentation, asset records, and support procedures across internal operations.",
      },
      {
        label: "Employee Onboarding",
        description: "Prepared workstations, set up user accounts, and ensured a consistent onboarding experience.",
      },
      {
        label: "IT Asset Management",
        description: "Maintained inventory records, equipment logs, and documentation for supported assets.",
      },
      {
        label: "Stakeholder Communication",
        description: "Communicated technical updates clearly to staff and clients, improving issue resolution flow.",
      },
    ],
  },
];

const supportServices = [
  {
    title: "Hardware & Software Support",
    description:
      "Troubleshooting hardware, operating systems, applications and peripheral devices.",
    icon: Cpu,
  },
  {
    title: "Network Troubleshooting",
    description:
      "Connectivity monitoring, basic network administration and LAN/WAN fundamentals.",
    icon: Network,
  },
  {
    title: "User Support",
    description: "First-line technical assistance and stakeholder communication.",
    icon: Target,
  },
  {
    title: "User & Access Management",
    description: "Account provisioning, permissions and access management.",
    icon: BadgeCheck,
  },
  {
    title: "Workstation Setup",
    description: "Desktop, peripheral and new-starter workstation preparation.",
    icon: MonitorSmartphone,
  },
  {
    title: "Helpdesk & Ticketing",
    description: "Issue tracking, documentation and follow-up.",
    icon: FolderKanban,
  },
  {
    title: "IT Asset Management",
    description: "Asset registers, inventory tracking and equipment documentation.",
    icon: Database,
  },
  {
    title: "Remote Support",
    description: "Remote desktop support and troubleshooting.",
    icon: Globe,
  },
];

const systemSkills = [
  "Network Administration",
  "LAN/WAN Fundamentals",
  "VPN Configuration",
  "Connectivity Monitoring",
  "System Configuration",
  "Windows Administration",
  "macOS Administration",
  "Active Directory Basics",
  "Remote Desktop Support",
  "Backup & Data Management",
  "Workstation Setup",
  "Peripheral Configuration",
];

const techGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "PHP"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    title: "Databases / Backend",
    items: ["MySQL", "Firebase", "MongoDB"],
  },
];

const uiuxTools = [
  "Figma",
  "Wireframing",
  "UI Design",
  "UX Design",
  "Prototyping",
  "Canva",
  "Draw.io",
  "Lucidchart",
];

const projects = [
  {
    slug: "moodio",
    name: "Moodio",
    category: "IT SUPPORT",
    description:
      "AI mental health and wellness app supporting mood tracking, emotional support, and stress-relief features.",
    highlights: [
      "Designed and developed an accessible, user-centred interface for a cross-platform Flutter application.",
      "Integrated Firebase to manage user data securely and support real-time functionality.",
    ],
    technologies: ["Flutter", "Firebase", "Mobile UI/UX"],
    image: undefined as string | undefined,
    video: undefined as string | undefined,
    color: "from-amber-500/30 to-orange-500/10",
  },
  {
    slug: "thriftynest",
    name: "ThriftyNest",
    category: "SOFTWARE",
    description:
      "Mobile financial tracking app with dashboards, spending insights, secure authentication, and reliable financial record management.",
    highlights: [
      "Designed and developed the Flutter and Firebase application experience.",
      "Implemented secure login, account management, and structured Firebase data storage.",
    ],
    technologies: ["Flutter", "Firebase", "Authentication"],
    image: undefined as string | undefined,
    video: undefined as string | undefined,
    color: "from-sky-500/30 to-cyan-500/10",
  },
  {
    slug: "manzaneque-helpdesk",
    name: "Manzaneque Limited",
    category: "IT SUPPORT",
    description:
      "Responsive web-based helpdesk system for managing IT support requests, support tickets, and resolution workflows.",
    highlights: [
      "Built a structured MySQL database to organize support tickets and improve tracking.",
      "Created a clear interface for support staff to log, update, and resolve requests efficiently.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: undefined as string | undefined,
    video: undefined as string | undefined,
    color: "from-violet-500/30 to-indigo-500/10",
  },
  {
    slug: "sarandib",
    name: "Sarandib",
    category: "UI/UX",
    description:
      "Tourism promotion app currently in development, focused on consistent and responsive mobile experiences across Android and iOS.",
    highlights: [
      "Developing user interface components and visual designs for a cross-platform mobile application.",
      "Collaborating with the development team to maintain design consistency across devices.",
    ],
    technologies: ["Mobile UI", "Responsive Design", "Team Collaboration"],
    image: undefined as string | undefined,
    video: undefined as string | undefined,
    color: "from-emerald-500/30 to-teal-500/10",
  },
  {
    slug: "dv-platform",
    name: "DV Platform",
    category: "SOFTWARE",
    description:
      "Secure doctor engagement web app currently in development, connecting professional networking, events, groups, advertising, and registration.",
    highlights: [
      "Developing responsive frontend interfaces using the MERN stack.",
      "Building components for event management, specialty groups, advertising, and user registration.",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: undefined as string | undefined,
    video: undefined as string | undefined,
    color: "from-rose-500/30 to-pink-500/10",
  },
  {
    slug: "zyne-eventhub",
    name: "Zyne EventHub",
    category: "UI/UX",
    description:
      "Event management mobile app designed around clear user flows, interactive prototypes, and a consistent design system.",
    highlights: [
      "Designed user-centred wireframes and interactive prototypes in Figma.",
      "Defined the design system and user flows for a smooth handoff to development.",
    ],
    technologies: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
    image: undefined as string | undefined,
    video: undefined as string | undefined,
    color: "from-fuchsia-500/30 to-purple-500/10",
  },
];

const certifications = [
  {
    title: "AI Governance Certification in Security",
    provider: "SecuriIT",
    year: "2024",
  },
  {
    title: "Certified DevNet Associate",
    provider: "Cisco",
    year: "2024",
  },
  {
    title: "IT Customer Support Basics",
    provider: "Cisco",
    year: "2024",
  },
  {
    title: "Operating Systems Support",
    provider: "Cisco",
    year: "2024",
  },
  {
    title: "Security and Connectivity Support",
    provider: "Cisco",
    year: "2024",
  },
  {
    title: "Hardware and Upgrade Support",
    provider: "Cisco",
    year: "2024",
  },
];

const achievements = [
  {
    title: "BSc (Hons) Computing – Second Upper Class (2:1)",
    description: "Completed at Wrexham University with a strong academic foundation in computing systems and application development.",
    date: "2024–2026",
    organization: "Wrexham University",
    featured: true,
  },
  {
    title: "Pearson BTEC HND in Computing (Software Engineering)",
    description: "Merit Pass at LondonTec City Campus, building a strong software engineering foundation.",
    date: "2023–2024",
    organization: "LondonTec City Campus",
    featured: false,
  },
  {
    title: "Higher National Diploma in English",
    description: "Merit Pass at SLIATE, strengthening communication and professional readiness.",
    date: "2023–2024",
    organization: "SLIATE",
    featured: false,
  },
];

const educationTimeline = [
  {
    period: "2024–2026",
    title: "BSc (Hons) Computing",
    institution: "Wrexham University",
    result: "Second Upper Class",
  },
  {
    period: "2023–2024",
    title: "Pearson BTEC HND in Computing (Software Engineering)",
    institution: "LondonTec City Campus",
    result: "Merit Pass",
  },
  {
    period: "2023–2024",
    title: "Higher National Diploma in English",
    institution: "SLIATE",
    result: "Merit Pass",
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "IT Support & Systems",
    items: [
      "Technical Troubleshooting",
      "Hardware & Software Support",
      "User Account Management",
      "Access Management",
      "Windows Administration",
      "macOS Administration",
      "Active Directory Basics",
      "Remote Desktop Support",
      "Helpdesk & Ticketing",
      "IT Asset Management",
      "Inventory Management",
    ],
  },
  {
    title: "Networking",
    items: [
      "Network Administration",
      "LAN/WAN Fundamentals",
      "VPN Configuration",
      "Connectivity Monitoring",
      "Peripheral & Workstation Setup",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Microsoft 365",
      "Google Workspace",
      "Active Directory",
      "Remote Desktop",
      "Backup & Data Management",
    ],
  },
  {
    title: "Project Management",
    items: ["Jira", "Trello", "Microsoft Project", "Agile", "Scrum", "Sprint Planning"],
  },
  {
    title: "Data & Analytics",
    items: ["Oracle Analytics Cloud", "AI Analytics", "Microsoft Excel"],
  },
  {
    title: "Software",
    items: ["Flutter", "Dart", "React.js", "Node.js", "Express.js", "PHP", "MySQL", "Firebase", "MongoDB", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Design",
    items: ["Figma", "Canva", "Draw.io", "Lucidchart", "Wireframing", "UI/UX Design"],
  },
];

const exploringItems = [
  "Cloud technologies",
  "Cybersecurity",
  "Advanced UI/UX",
  "Full-stack development",
  "IT infrastructure",
  "AI technologies",
];

const blogPosts = [
  {
    title: "What good IT support looks like in a growing team",
    category: "IT Support",
    date: "May 2026",
    excerpt: "A practical look at service quality, communication, and documentation in technical support operations.",
  },
  {
    title: "Designing systems that people can actually use",
    category: "UI/UX",
    date: "June 2026",
    excerpt: "Why user-centered thinking matters when building digital tools across technical and non-technical teams.",
  },
  {
    title: "From troubleshooting to development",
    category: "Software Development",
    date: "July 2026",
    excerpt: "How hands-on IT experience shapes cleaner problem solving, better architecture, and product thinking.",
  },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-zinc-300">{description}</p>
    </div>
  );
}

export function PortfolioPage() {
  const shouldReduceMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    "Technical Support": true,
  });
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const toggleExpanded = (label: string) => {
    setExpandedItems((current) => ({ ...current, [label]: !current[label] }));
  };

  const handleFormChange = (field: keyof typeof contactForm, value: string) => {
    setContactForm((current) => ({ ...current, [field]: value }));
    setFormErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: { name?: string; email?: string; message?: string } = {};

    if (!contactForm.name.trim()) nextErrors.name = "Please enter your name.";
    if (!contactForm.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) nextErrors.email = "Please enter a valid email address.";
    if (!contactForm.message.trim()) nextErrors.message = "Please write a short message.";

    setFormErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      window.alert("Thank you. Your message has been prepared for delivery via a real email workflow when connected.");
      setContactForm({ name: "", email: "", message: "" });
    }
  };

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.5 },
      };

  return (
    <div className="min-h-screen bg-[#0b0f13] text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f13]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-amber-400/40 bg-zinc-900">
              <Image src="/fv.png" alt="Ikasha Dissanayake logo" width={40} height={40} className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.32em] text-zinc-300">Ikasha</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Dissanayake</div>
            </div>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-zinc-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="/ikasha-cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-amber-400/50 hover:bg-amber-400/10"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 lg:hidden"
            onClick={() => setMobileMenuOpen((state) => !state)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#0b0f13] px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded px-2 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/ikasha-cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(253,186,116,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_28%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:52px_52px]" />
            <div className="absolute left-10 top-24 h-44 w-44 rounded-full border border-white/10 bg-amber-400/5 blur-3xl" />
            <div className="absolute right-12 top-20 h-48 w-48 rounded-full border border-sky-500/10 bg-sky-500/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <motion.div {...motionProps} className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-amber-200">
                  <Sparkles size={12} />
                  Technology professional
                </div>

                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                  IKASHA DISSANAYAKE
                </h1>
                <p className="mt-4 text-lg font-medium uppercase tracking-[0.26em] text-zinc-300">
                  IT SUPPORT · SOFTWARE · UI/UX
                </p>
                <h2 className="mt-6 max-w-2xl text-2xl font-medium leading-snug text-zinc-100 md:text-3xl">
                  Solving technical problems. Building digital solutions. Designing better experiences.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
                  Computing graduate with hands-on experience in IT support, systems administration, networking, software development, and UI/UX design.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-amber-200"
                  >
                    View My Work
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="/ikasha-cv.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                  >
                    <Download size={16} />
                    Download CV
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-300">
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                    <Globe size={16} /> LinkedIn
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                    <GitBranch size={16} /> GitHub
                  </a>
                  <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 hover:text-white">
                    <Mail size={16} /> Email
                  </a>
                </div>
              </div>

              <motion.div {...motionProps} className="relative">
                <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                  <div className="mb-5 grid grid-cols-1 gap-3">
                    {[
                      { src: "/images/top-ee.jpg", alt: "Ikasha Dissanayake" },
                    ].map((image, index) => (
                      <div key={image.src} className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-2">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={720}
                          height={960}
                          quality={72}
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 640px) 42vw, (max-width: 1024px) 28vw, 220px"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mb-5 flex items-center gap-2">
                    {["#f87171", "#fbbf24", "#34d399"].map((color) => (
                      <span key={color} className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
                    ))}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#10151c] p-5">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">System Overview</p>
                        <h3 className="mt-2 text-xl font-semibold text-white">Technology Stack</h3>
                      </div>
                      <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                        Active
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        ["Support", "Users"],
                        ["Network", "Monitoring"],
                        ["Software", "Builds"],
                        ["UX", "Design"],
                      ].map(([title, subtitle], index) => (
                        <div key={title} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3">
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-white">{title}</p>
                            <p className="text-xs text-zinc-400">{subtitle}</p>
                          </div>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, dotIndex) => (
                              <span
                                key={dotIndex}
                                className={`h-2.5 w-2.5 rounded-full ${
                                  dotIndex <= index ? "bg-amber-300" : "bg-zinc-700"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-xl border border-dashed border-white/10 bg-zinc-900/70 p-4 text-xs text-zinc-300">
                      <div className="mb-2 flex items-center justify-between text-zinc-400">
                        <span>terminal</span>
                        <span>ready</span>
                      </div>
                      <p className="font-mono text-[11px] leading-6 text-amber-200">{"// troubleshooting + design + systems"}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} {...motionProps} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
                  <p className="text-3xl font-semibold text-white md:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="About"
              title="Technology from multiple perspectives."
              description="My background combines IT support, infrastructure, software development, and design into one practical and people-focused professional profile."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {expertiseCards.map(({ title, description, icon: Icon }, index) => (
                <motion.article
                  key={title}
                  {...motionProps}
                  transition={{ delay: index * 0.06 }}
                  className="group rounded-3xl border border-white/10 bg-[#10151c] p-6 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-[#111a23]"
                >
                  <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-zinc-800 p-3 text-amber-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{description}</p>
                </motion.article>
              ))}
            </div>

            <motion.blockquote
              {...motionProps}
              className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-lg leading-8 text-zinc-200 md:text-xl"
            >
              “I enjoy understanding how technology works behind the scenes while also thinking about how people interact with it.”
            </motion.blockquote>
          </div>
        </section>

        <section id="experience" className="bg-[#0f1419] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Experience"
              title="Career growth through hands-on support and systems work."
              description="A timeline of technical problem solving, reliable operations, and continuous learning in digital environments."
            />

            <div className="relative mt-12 space-y-10 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-white/10 md:before:left-1/2">
              {experienceTimeline.map((entry, index) => (
                <motion.article
                  key={entry.title}
                  {...motionProps}
                  transition={{ delay: index * 0.1 }}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  <div className="md:col-start-1 md:pr-10 md:text-right">
                    <div className="mb-3 text-sm font-medium uppercase tracking-[0.26em] text-amber-300">{entry.period}</div>
                    <h3 className="text-2xl font-semibold text-white">{entry.title}</h3>
                    <p className="mt-2 text-zinc-300">{entry.company}</p>
                    <p className="text-sm text-zinc-400">{entry.location}</p>
                  </div>
                  <div className="mt-6 md:col-start-2 md:mt-0 md:pl-10">
                    <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-amber-400/40 bg-[#0f1419] md:left-1/2 md:-translate-x-1/2">
                      <div className="h-3 w-3 rounded-full bg-amber-300" />
                    </div>
                    <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                      {entry.items.map((item) => (
                        <div key={item.label} className="rounded-xl border border-white/10 bg-[#121a22] p-3">
                          <button
                            type="button"
                            className="flex w-full items-center justify-between gap-3 text-left"
                            onClick={() => toggleExpanded(item.label)}
                          >
                            <span className="font-medium text-white">{item.label}</span>
                            <ChevronDown
                              size={16}
                              className={`transition ${expandedItems[item.label] ? "rotate-180" : ""}`}
                            />
                          </button>
                          {expandedItems[item.label] && (
                            <p className="mt-3 text-sm leading-6 text-zinc-300">{item.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="IT Support"
              title="IT Support & Technical Operations"
              description="Keeping people, systems and technology working reliably."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {supportServices.map(({ title, description, icon: Icon }, index) => (
                <motion.div
                  key={title}
                  {...motionProps}
                  transition={{ delay: index * 0.05 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                  className="group rounded-3xl border border-white/10 bg-[#10151c] p-6 transition hover:border-amber-400/30 hover:bg-[#111a23]"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-zinc-800 p-3 text-amber-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f1419] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Systems & Networking"
              title="Systems & Networking"
              description="Reliable infrastructure, monitoring, and configured environments that keep operations stable."
            />

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-[2rem] border border-white/10 bg-[#10151c] p-6">
                <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.08),_transparent_32%),linear-gradient(180deg,#0a0e14,#111b22)] p-5">
                  <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]" />
                  <div className="relative flex h-full items-center justify-center">
                    <div className="absolute left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-white/10 bg-sky-500/10" />
                    <div className="absolute right-12 top-16 h-20 w-20 rounded-full border border-white/10 bg-amber-500/10" />
                    <div className="absolute bottom-16 left-1/3 h-20 w-20 rounded-full border border-white/10 bg-emerald-500/10" />
                    <div className="absolute inset-x-16 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/40 bg-amber-400/10" />
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-amber-300/50 bg-[#0a1015] text-xs uppercase tracking-[0.28em] text-amber-200">
                      Core
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {systemSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    {...motionProps}
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    className="rounded-2xl border border-white/10 bg-[#10151c] p-4 text-sm text-zinc-200"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="software" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Software Development"
              title="Software Development"
              description="Practical development capability across modern frontend, backend, and mobile workflows."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {techGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  {...motionProps}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-3xl border border-white/10 bg-[#10151c] p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="design" className="bg-[#0f1419] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="UI/UX Design"
              title="UI/UX Design"
              description="User-centered design thinking, wireframes, prototyping, and interface systems for better digital experiences."
            />

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <motion.div {...motionProps} className="rounded-[2rem] border border-white/10 bg-[#10151c] p-5">
                <div className="mb-5 flex items-center gap-2">
                  {["#fbbf24", "#f97316", "#34d399"].map((color) => (
                    <span key={color} className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
                  ))}
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-4">
                    <div className="mb-4 h-40 rounded-xl border border-dashed border-white/10 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),transparent_35%),linear-gradient(135deg,#1f2937,#111827)]" />
                    <p className="text-sm font-medium text-white">Placeholder UI concept</p>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
                      <div className="mb-3 h-24 rounded-xl bg-gradient-to-r from-amber-500/20 to-sky-500/20" />
                      <p className="text-sm text-zinc-300">Wireframe placeholder</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
                      <div className="mb-3 h-20 rounded-xl bg-gradient-to-r from-violet-500/20 to-emerald-500/20" />
                      <p className="text-sm text-zinc-300">Journey map placeholder</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {uiuxTools.map((tool) => (
                  <motion.div
                    key={tool}
                    {...motionProps}
                    className="rounded-2xl border border-white/10 bg-[#10151c] p-4 text-sm text-zinc-200"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Projects"
              title="Selected project work."
              description="A selection of mobile apps, web platforms, helpdesk systems, and user experience work."
            />

            <div className="mb-8 flex flex-wrap gap-3">
              {['ALL', 'IT SUPPORT', 'SOFTWARE', 'UI/UX'].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeFilter === filter
                      ? "bg-amber-300 text-zinc-900"
                      : "border border-white/10 bg-white/[0.02] text-zinc-200 hover:border-white/20"
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.name}
                  {...motionProps}
                  transition={{ delay: index * 0.04 }}
                  className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#10151c]"
                >
                  <div className={`relative h-44 bg-gradient-to-br ${project.color} p-4`}>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    ) : null}
                    <div className="flex h-full items-end justify-between rounded-2xl border border-white/10 bg-[#0c1218]/80 p-4">
                      <div>
                        <span className="block text-[10px] uppercase tracking-[0.22em] text-zinc-400">{project.category}</span>
                        <span className="mt-2 block text-lg font-semibold text-white">{project.name}</span>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                        {project.image ? "Project image" : "Add image"}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm leading-7 text-zinc-300">{project.description}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-400">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    {project.video ? (
                      <video controls className="mt-5 w-full rounded-xl border border-white/10">
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : null}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-3">
                      <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-900">
                        View Project
                      </Link>
                      <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-100">
                        Case Study
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="bg-[#0f1419] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Certifications"
                title="Professional certifications."
                description="Technical training that supports both infrastructure knowledge and practical service operations."
              />
              <button type="button" className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200">
                + Add Certification
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {certifications.map((cert, index) => (
                <motion.article
                  key={cert.title}
                  {...motionProps}
                  transition={{ delay: index * 0.05 }}
                  className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#10151c]"
                >
                  <div className="h-36 border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.12),_transparent_35%),linear-gradient(135deg,#111827,#0b1220)] p-5">
                    <div className="flex h-full items-end justify-between">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">{cert.provider}</div>
                        <div className="mt-3 text-lg font-semibold text-white">{cert.title}</div>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                        {cert.year}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 text-sm text-zinc-300">
                    <p>Certificate image placeholder</p>
                    <a href="#" className="mt-3 inline-block text-amber-200 hover:text-amber-100">
                      Verification link placeholder
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Achievements"
              title="Academic and professional milestones."
              description="A focused section for verified accomplishments, upcoming milestones, and future additions."
            />

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  {...motionProps}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-3xl border border-white/10 bg-[#10151c] p-5"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-amber-300">{achievement.organization}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{achievement.title}</h3>
                    </div>
                    <div className="text-sm text-zinc-300">{achievement.date}</div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f1419] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Education"
              title="Education timeline."
              description="A steady academic foundation supporting both technical and communication skill development."
            />

            <div className="relative mt-12 space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-white/10 md:before:left-1/2">
              {educationTimeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...motionProps}
                  transition={{ delay: index * 0.08 }}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  <div className="md:col-start-1 md:pr-10 md:text-right">
                    <p className="text-sm uppercase tracking-[0.26em] text-amber-300">{item.period}</p>
                  </div>
                  <div className="mt-4 md:col-start-2 md:mt-0 md:pl-10">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-amber-400/40 bg-[#0f1419] md:left-1/2 md:-translate-x-1/2">
                      <GraduationCap size={14} className="text-amber-200" />
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#10151c] p-5">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-zinc-300">{item.institution}</p>
                      <p className="mt-2 text-sm text-amber-200">{item.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                { src: "/images/graduation-portrait.jpg", alt: "Ikasha Dissanayake at graduation" },
                { src: "/images/graduation-celebration.jpg", alt: "Ikasha Dissanayake celebrating graduation" },
                { src: "/images/graduation-award.jpg", alt: "Ikasha Dissanayake receiving a graduation award" },
                { src: "/images/graduation-memo.jpg", alt: "Ikasha Dissanayake graduation photo" },
              ].map((image) => (
                <div key={image.src} className="flex min-h-80 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#10151c] p-3">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={720}
                    height={960}
                    quality={72}
                    loading="lazy"
                    sizes="(max-width: 768px) 90vw, 25vw"
                    className="max-h-[34rem] w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Skills"
              title="Core capability across support, systems, software, and design."
              description="The skill set is intentionally broad, reflecting a practical technical profile rather than a single specialty."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  {...motionProps}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-[1.75rem] border border-white/10 bg-[#10151c] p-5"
                >
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f1419] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              eyebrow="Currently Exploring"
              title="Currently exploring"
              description="An evolving space for learning, experimentation, and future technical direction."
            />

            <div className="flex flex-wrap gap-3">
              {exploringItems.map((item) => (
                <motion.span
                  key={item}
                  {...motionProps}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-zinc-200"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Learning & Growth"
              title="Learning updates."
              description="Notes, insights, and practical lessons from my ongoing work across technology, design, and professional development."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  {...motionProps}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[1.75rem] border border-white/10 bg-[#10151c] p-5"
                >
                  <div className="h-36 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_35%),linear-gradient(135deg,#111827,#0b1220)]" />
                  <p className="mt-5 text-[10px] uppercase tracking-[0.24em] text-amber-300">{post.category}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
                  <p className="mt-3 text-sm text-zinc-300">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-400">
                    <span>{post.date}</span>
                    <span>Read more</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#0f1419] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let's connect."
                description="Whether you’re looking for technical support expertise, a software solution, a digital product, or a collaboration, I’d love to connect."
              />

              <div className="space-y-3 text-sm text-zinc-300">
                <p className="inline-flex items-center gap-2"><Mail size={16} className="text-amber-300" /> hello@example.com</p>
                <p className="inline-flex items-center gap-2"><Globe size={16} className="text-amber-300" /> LinkedIn</p>
                <p className="inline-flex items-center gap-2"><GitBranch size={16} className="text-amber-300" /> GitHub</p>
              </div>
            </div>

            <motion.form {...motionProps} onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-[#10151c] p-6">
              <div className="grid gap-5">
                <div>
                  <label className="mb-2 block text-sm text-zinc-300" htmlFor="name">Name</label>
                  <input
                    id="name"
                    value={contactForm.name}
                    onChange={(event) => handleFormChange("name", event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#0a0f14] px-4 py-3 text-white outline-none transition focus:border-amber-400/50"
                    placeholder="Your name"
                  />
                  {formErrors.name && <p className="mt-2 text-sm text-rose-300">{formErrors.name}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={contactForm.email}
                    onChange={(event) => handleFormChange("email", event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#0a0f14] px-4 py-3 text-white outline-none transition focus:border-amber-400/50"
                    placeholder="you@example.com"
                  />
                  {formErrors.email && <p className="mt-2 text-sm text-rose-300">{formErrors.email}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={contactForm.message}
                    onChange={(event) => handleFormChange("message", event.target.value)}
                    className="min-h-36 w-full rounded-xl border border-white/10 bg-[#0a0f14] px-4 py-3 text-white outline-none transition focus:border-amber-400/50"
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {formErrors.message && <p className="mt-2 text-sm text-rose-300">{formErrors.message}</p>}
                </div>

                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-amber-200">
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold uppercase tracking-[0.2em] text-white">IKASHA DISSANAYAKE</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-400">IT Support · Systems · Software · UI/UX</p>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-300">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="mailto:hello@example.com" className="hover:text-white">Email</a>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-7xl text-sm text-zinc-500">© 2026 Ikasha Dissanayake</p>
      </footer>
    </div>
  );
}
