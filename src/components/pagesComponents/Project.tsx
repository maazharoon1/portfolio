"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

type PortfolioCategory =
  | "all"
  | "shopify"
  | "framer"
  | "wordpress"
  | "squarespace"

type Project = {
  id: string;
  name: string;
  description: string;
  category: PortfolioCategory;
  platform: string;
  tags: string[];
  href: string;
  image: string;
};

const categories: { key: PortfolioCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "shopify", label: "Shopify" },
  { key: "framer", label: "Framer" },
  { key: "wordpress", label: "WordPress" },
  { key: "squarespace", label: "Squarespace" },
];

const projects: Project[] = [
  {
    id: "livsn-designs",
    name: "LIVSN Designs",
    description:
      "A premium outdoor apparel eCommerce store focused on sustainable clothing with a clean shopping experience.",
    category: "shopify",
    platform: "Shopify",
    tags: ["E-Commerce", "Fashion", "Performance"],
    href: "https://www.livsndesigns.com/",
    image: "/projects/livsn-designs.jpg",
  },

  {
    id: "mitera-made",
    name: "Mitera Made",
    description:
      "A luxury jewelry eCommerce experience featuring elegant product storytelling and refined visual design.",
    category: "shopify",
    platform: "Shopify",
    tags: ["Jewelry", "Luxury", "E-Commerce"],
    href: "https://miteramade.com/",
    image: "/projects/mitera-made.webp",
  },

  {
    id: "mindful-crumb",
    name: "Mindful Crumb",
    description:
      "A modern nutrition brand with a conversion-focused shopping experience for premium protein products.",
    category: "shopify",
    platform: "Shopify",
    tags: ["Nutrition", "Protein", "Health"],
    href: "https://www.mindfulcrumb.com/",
    image: "/projects/mindful-crumb.webp",
  },

  {
    id: "wellness-mama",
    name: "Wellness Mama",
    description:
      "A content-rich health and wellness platform delivering articles, recipes, podcasts, and trusted resources for families.",
    category: "wordpress",
    platform: "WordPress",
    tags: ["Health", "Blog", "Business"],
    href: "https://wellnessmama.com/",
    image: "/projects/wellness-mama.webp",
  },

  {
    id: "titan-fitness",
    name: "Titan Fitness",
    description:
      "A high-performance fitness equipment store designed for seamless product discovery and fast online purchasing.",
    category: "shopify",
    platform: "Shopify",
    tags: ["Fitness", "Gym Equipment", "E-Commerce"],
    href: "https://titan.fitness",
    image: "/projects/titan-fitness.webp",
  },
 {
  id: "biome-secret",
  name: "Biome Secret",
  description:
    "A nutrition eCommerce store offering science-backed meal replacements and gut health supplements with a modern experience.",
  category: "shopify",
  platform: "Shopify",
  tags: ["Nutrition", "E-Commerce"],
  href: "https://biomesecret.com/",
  image: "/projects/biome-secret.webp",
},

{
  id: "jessica-wells",
  name: "Jessica Wells & Co.",
  description:
    "A visually striking creative portfolio showcasing branding, photography, and art direction through an immersive editorial-style experience.",
  category: "framer",
  platform: "Framer",
  tags: ["Portfolio", "Creative", "Photography"],
  href: "https://www.jessicawells.co/",
  image: "/projects/jessica-wells.webp",
},

{
  id: "drink-dulce-oro",
  name: "Drink Dulce Oro",
  description:
    "A premium beverage brand website focused on storytelling, product presentation, and an elegant shopping experience.",
  category: "framer",
  platform: "Framer",
  tags: ["Beverage", "Brand", "E-Commerce"],
  href: "https://drinkdulceoro.com",
  image: "/projects/drink-dulce-oro.webp",
},

{
  id: "plexapro",
  name: "PlexaPro",
  description:
    "A modern SaaS website for the construction industry featuring clean layouts, service highlights, and conversion-focused user journeys.",
  category: "framer",
  platform: "Framer",
  tags: ["SaaS", "Construction", "Business"],
  href: "https://www.plexapro.com/ ",
  image: "/projects/plexapro.webp",
},

{
  id: "costa-logistics",
  name: "Costa Logistics",
  description:
    "A professional logistics and supply chain business website designed to showcase transportation services with a clean corporate experience.",
  category: "wordpress",
  platform: "WordPress",
  tags: ["Logistics", "Business", "Corporate"],
  href: "https://www.costa.com.pk/ ",
  image: "/projects/costa-logistics.webp",
},{
  id: "village-medical",
  name: "Village Medical",
  description:
    "A professional healthcare website designed to help patients easily access primary care services, providers, and medical resources through a clean and trustworthy experience.",
  category: "wordpress",
  platform: "WordPress",
  tags: ["Healthcare", "Medical", "Business"],
  href: "https://www.villagemedical.com/",
  image: "/projects/village-medical.webp",
},

{
  id: "sage-beauty-collective",
  name: "Sage Beauty Collective",
  description:
    "A modern beauty salon website showcasing independent beauty professionals, premium services, and seamless appointment booking in an elegant experience.",
  category: "squarespace",
  platform: "Squarespace",
  tags: ["Beauty", "Salon", "Business"],
  href: "https://www.sagebeautycollective.com/",
  image: "/projects/sage-beauty-collective.webp",
},

{
  id: "forehan-construction",
  name: "Forehan Construction",
  description:
    "A professional construction company website highlighting commercial and residential services with a strong, modern, and trustworthy brand presence.",
  category: "squarespace",
  platform: "Squarespace",
  tags: ["Construction", "Business", "Corporate"],
  href: "https://www.forehanconstruction.com/  ",
  image: "/projects/forehan-construction.webp",
},

{
  id: "the-scent-social",
  name: "The Scent Social",
  description:
    "A premium fragrance brand combining elegant product storytelling with a refined eCommerce experience for luxury perfumes and lifestyle products.",
  category: "squarespace",
  platform: "Squarespace",
  tags: ["Perfume", "Luxury", "E-Commerce"],
  href: "https://www.thescentsocial.com/",
  image: "/projects/the-scent-social.webp",
},{
  id: "northstar-medical",
  name: "NorthStar Medical",
  description:
    "A modern healthcare website focused on patient-centered care, family medicine, and wellness with an intuitive experience for accessing medical services and health resources.",
  category: "wordpress",
  platform: "WordPress",
  tags: ["Healthcare", "Medical", "Business"],
  href: "https://northstarmedical.com/",
  image: "/projects/northstar-medical.webp",
},
];

const easeOutCurve = [0.22, 1, 0.36, 1] as const;
const easeInOutCurve = [0.42, 0, 0.58, 1] as const;

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.5, ease: easeOutCurve },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 140, damping: 18 },
  },
} as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOutCurve } },
};

const paginationVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOutCurve } },
};

const buttonSpring = { type: "spring" as const, stiffness: 260, damping: 22 };

const Project = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");
  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  useEffect(() => {
    const calculatePageSize = () => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        setPageSize(3);
      } else if (window.matchMedia("(max-width: 1023px)").matches) {
        setPageSize(4);
      } else {
        setPageSize(6);
      }
    };

    calculatePageSize();

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia("(max-width: 1023px)");
    const handleResize = () => calculatePageSize();

    mobileQuery.addEventListener("change", handleResize);
    tabletQuery.addEventListener("change", handleResize);

    return () => {
      mobileQuery.removeEventListener("change", handleResize);
      tabletQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / pageSize));

  useEffect(() => {
    setActivePage(1);
  }, [activeCategory]);

  useEffect(() => {
    if (activePage > totalPages) {
      setActivePage(totalPages);
    }
  }, [activePage, totalPages]);

  const paginatedProjects = useMemo(() => {
    const startIndex = (activePage - 1) * pageSize;
    return filteredProjects.slice(startIndex, startIndex + pageSize);
  }, [filteredProjects, activePage, pageSize]);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative overflow-hidden bg-white/40 backdrop-blur-2xl text-slate-900"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-105 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_35%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[30%] h-105 w-105 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_55%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-[20%] h-90 w-90 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_40%)] blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 mt-5 rounded-full border border-slate-200/80 bg-slate-50/90 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-700 shadow-sm shadow-slate-200/60">
            <Sparkles className="h-4 w-4 text-indigo-500 " />
            Projects
          </span>
          <h2 id="portfolio-heading" className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Selected Work & Creative Projects
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore a curated collection of premium web experiences crafted across modern platforms, built to deliver elegant performance and bold brand impact.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="relative z-10 mt-12 overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white/80 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.25)] backdrop-blur-xl"
        >
          <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/80 to-white/0" />
          <div className="border-b border-slate-200/70 bg-white/70 px-4 py-4 backdrop-blur-xl sm:px-6">
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((category) => {
                const isActive = activeCategory === category.key;
                return (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() => setActiveCategory(category.key)}
                    aria-pressed={isActive}
                    className={`group relative inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                      isActive
                        ? "border-indigo-400 bg-indigo-50 text-indigo-700 shadow-[0_0_0_1px_rgba(99,102,241,0.4)]"
                        : "border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:bg-indigo-50/70 hover:text-indigo-700"
                    }`}
                  >
                    <span className="pointer-events-none">{category.label}</span>
                    <span className="absolute inset-0 rounded-full opacity-0 transition duration-300 group-hover:opacity-100 bg-linear-to-r from-indigo-200/50 to-violet-200/30" />
                  </button>
                );
              })}
            </div>
          </div>
            <motion.div layout className="grid gap-5 p-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:p-6" aria-live="polite">
            <AnimatePresence mode="wait">
              {paginatedProjects.map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
  <motion.div
            initial="hidden"
            animate="visible"
            variants={paginationVariants}
            className="mt-8 border-t border-slate-200/70 bg-white/70 px-5 py-5 backdrop-blur-xl sm:px-6"
          >
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-slate-600">
                Showing <span className="font-semibold text-slate-900">{paginatedProjects.length}</span> of{' '}
                <span className="font-semibold text-slate-900">{filteredProjects.length}</span> projects
                {totalPages > 1 ? ` · Page ${activePage} of ${totalPages}` : ''}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <motion.button
                  type="button"
                  onClick={() => setActivePage((current) => Math.max(current - 1, 1)) }
                  disabled={activePage === 1}
                  whileHover={{ scale: 1.04, y: activePage === 1 ? 0 : -1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={buttonSpring}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    activePage === 1
                      ? 'cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400'
                      : 'border-slate-200 bg-white text-slate-700 shadow-[0_18px_70px_-40px_rgba(59,130,246,0.35)] hover:border-indigo-300 hover:bg-indigo-50/80 hover:text-indigo-700'
                  }`}
                >
                  <motion.span
                    whileHover={activePage === 1 ? undefined : { x: -2 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className="inline-flex"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                  </motion.span>
                  Prev
                </motion.button>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;
                    const isActive = page === activePage;
                    return (
                      <motion.button
                        key={page}
                        type="button"
                        onClick={() => setActivePage(page)}
                        aria-current={isActive ? 'page' : undefined}
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.94 }}
                        animate={{
                          scale: isActive ? 1.08 : 1,
                          backgroundColor: isActive ? 'rgba(79,70,229,1)' : 'rgba(248,250,252,1)',
                          color: isActive ? '#ffffff' : '#334155',
                          boxShadow: isActive ? '0 20px 40px rgba(79,70,229,0.2)' : '0 0 0 rgba(0,0,0,0)',
                        }}
                        transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                        className="relative inline-flex min-w-11 items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        {page}
                      </motion.button>
                    );
                  })}
                </div>

                <motion.button
                  type="button"
                  onClick={() => setActivePage((current) => Math.min(current + 1, totalPages))}
                  disabled={activePage === totalPages}
                  whileHover={{ scale: 1.04, y: activePage === totalPages ? 0 : -1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={buttonSpring}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    activePage === totalPages
                      ? 'cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400'
                      : 'border-slate-200 bg-white text-slate-700 shadow-[0_18px_70px_-40px_rgba(59,130,246,0.35)] hover:border-indigo-300 hover:bg-indigo-50/80 hover:text-indigo-700'
                  }`}
                >
                  Next
                  <motion.span
                    whileHover={activePage === totalPages ? undefined : { x: 2 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className="inline-flex"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </motion.button>
              </div>
            </div>
          </motion.div> 
        

         
        </motion.div>

        <PortfolioCTA />
      </div>
    </section>
  );
};

function PortfolioCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.2 } }}
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950/5 shadow-[0_18px_70px_-30px_rgba(59,130,246,0.35)]"
    >
      <Link href={project.href} target="_blank" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
        <div className="relative h-65 w-full overflow-hidden rounded-[2rem] bg-slate-900">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 transition-filter group-hover:blur-sm"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-90 transition duration-500 group-hover:opacity-60" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(15,23,42,0.92)_100%)] opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-black shadow-lg shadow-slate-950/20 backdrop-blur-xl transition-transform duration-500 opacity-100 group-hover:opacity-0 md:group-hover:opacity-100 ">
            {project.platform}
          </div>
          <div className="absolute bottom-5 left-5 right-5 opacity-0 transition duration-500 group-hover:opacity-100">
            <p className="mb-3 text-sm uppercase md:hidden tracking-[0.18em] text-slate-300">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-200 shadow-inner shadow-slate-950/10">
                  {tag}
                </span>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-white">
              <span>Visit Project</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200/70 bg-white/90 px-5 py-5 transition duration-300 group-hover:bg-white">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">{project.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 hidden md:flex">{project.description}</p>
            </div>
            
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function PortfolioCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative z-10 mt-12 flex flex-col items-center justify-center rounded-[2rem] border border-slate-200/60 bg-white/85 px-6 py-10 text-center shadow-[0_32px_90px_-30px_rgba(15,23,42,0.22)] backdrop-blur-xl"
    >
      <div className="absolute inset-x-0 top-0 h-2 bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-400" />
      <h3 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        Interested in working together?
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
        Let’s create a meaningful digital experience that feels polished, modern, and unmistakably premium.
      </p>
      <button onClick={()=> scrollToSection("contact")} className="group mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
        Contact Me
        <motion.span
          className="ml-3 inline-flex"
          animate={{ x: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.span>
      </button>
    </motion.div>
  );
}

export default Project;
