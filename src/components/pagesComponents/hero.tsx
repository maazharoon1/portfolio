"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { scrollToSection } from "@/lib/scroll";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7 },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">

      <div className="absolute inset-x-0 top-0 h-56 bg-linear-to-r from-blue-100 via-transparent to-cyan-100 opacity-80 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center gap-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={heroVariants}
          className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200 w-max"
        >
          Creative web experiences for modern brands
        </motion.div>

        <div className="grid items-center gap-12 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={heroVariants}
              className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl"
            >
              Hi, I'm <span className="text-blue-600">Maaz Haroon</span>, building fast and modern web apps.
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={heroVariants}
              className="max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg"
            >
              I design and build responsive, accessible, and scalable websites using the latest tools,
              ensuring every project feels polished and performs smoothly on every device.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={heroVariants}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button
                type="button"
                onClick={() => scrollToSection("about")}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-200 ease-out hover:scale-[1.02] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Learn More <ArrowRight size={16} />
              </Button>
              <Button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-transparent bg-linear-to-r from-purple-100 to-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:from-cyan-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" aria-hidden />
                Let's Talk
                <ArrowRight size={14} />
              </Button>
            </motion.div>
       
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={heroVariants}
            className="relative"
          >
            <div className="pointer-events-none absolute -left-10 top-10 h-44 w-44 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-cyan-200/40 blur-3xl" />

            <div className="overflow-hidden hidden xl:flex rounded-[2rem] border bg-white/10  p-4 shadow-2xl shadow-blue-100/30 backdrop-blur-xl absolute -bottom-25">
              <Image
                src="/hero.png"
                
                width={520}
                height={520}
                alt="Hero graphic"
                className="h-auto w-full rounded-[1.5rem] object-cover "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
 