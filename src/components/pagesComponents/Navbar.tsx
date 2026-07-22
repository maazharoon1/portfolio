"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2"
    >
      <nav aria-label="Primary navigation" className="flex items-center justify-between rounded-full border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl shadow-xl">
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/logo.png"
            width={45}
            height={45}
            alt="Maaz Haroon logo"
            priority
          />
        </Link>

        {/* Desktop Menu */}
       <ul className="hidden items-center gap-8 lg:flex">
  {links.map((link) => (
    <li key={link.id}>
      <button
        onClick={() => scrollToSection(link.id)}
        className="text-sm font-medium text-zinc-700 transition hover:text-black"
      >
        {link.name}
      </button>
    </li>
  ))}
</ul>

        {/* Desktop Badge */}
        <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <motion.span
            animate={{
              scale: [1, 1.4, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgb(59_130_246)]"
          />

          <span className="text-sm font-medium text-black">
            Available for work
          </span>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="mt-3 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl lg:hidden"
          >
      <div className="flex flex-col gap-6">
  {links.map((link) => (
    <button
      key={link.id}
      onClick={() => {
        scrollToSection(link.id);
        setOpen(false);
      }}
      className="text-left text-lg font-medium text-zinc-700 transition hover:text-black"
    >
      {link.name}
    </button>
  ))}

  <div className="mt-2 flex w-fit items-center gap-2 rounded-full border border-gray-200 px-4 py-3">
    <motion.span
      animate={{
        scale: [1, 1.4, 1],
        opacity: [1, 0.5, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgb(59_130_246)]"
    />

    <span className="text-sm font-medium">
      Available for work
    </span>
  </div>
</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}