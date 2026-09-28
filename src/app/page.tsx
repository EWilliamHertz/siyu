"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax for hero text
  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="relative w-full overflow-hidden bg-brand-black selection:bg-brand-amber/30 selection:text-brand-amber-light">
      
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Blurred gradient background */}
        <div className="absolute inset-0 bg-brand-black z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-amber-900/20 rounded-full blur-[120px] mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black" />
        </div>

        {/* Content */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="relative z-10 flex flex-col items-center justify-center text-center"
        >
          <div className="relative">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] tracking-widest text-brand-amber-light font-light uppercase z-10 relative flex flex-col items-center">
              <span>SI YU</span>
              <span className="text-3xl md:text-5xl mt-4 font-sans tracking-[0.5em] opacity-80">丝欲</span>
            </h1>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] text-white/[0.05] font-serif whitespace-nowrap -z-10 select-none">
              丝欲
            </span>
          </div>
          
          <Link href="/boutique">
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16 px-8 py-3 border border-brand-amber/30 text-brand-amber hover:bg-brand-amber hover:text-brand-black transition-all duration-500 font-sans tracking-widest text-sm uppercase cursor-pointer"
            >
              Enter the Boutique
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* 2. The Alchemy Section */}
      <AlchemySection />

      {/* 3. The Tactile Ritual */}
      <TactileRitualSection />

      {/* 4. The Initiated */}
      <TestimonialsSection />

      {/* 5. Footer */}
      <Footer />
    </main>
  );
}

function AlchemySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.8], [1, 1.05]);
  const yText = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center py-24 md:py-0">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        {/* Image side */}
        <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mr-auto overflow-hidden group">
          <motion.div style={{ scale }} className="w-full h-full relative">
            <Image 
              src="/100ml Bottle SiYu.JPG" 
              alt="100ml Bottle SiYu" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000"
            />
            {/* Glass reflection sheen */}
            <motion.div 
              className="absolute inset-0 z-10 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full"
              whileInView={{ translateX: ['-100%', '200%'] }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            />
          </motion.div>
        </div>

        {/* Text side */}
        <motion.div style={{ y: yText }} className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <p className="text-brand-amber font-sans tracking-[0.2em] text-sm uppercase">Chapter I / Alchemy</p>
            <h2 className="font-serif text-4xl md:text-6xl text-white font-light">
              The Golden Elixir
            </h2>
          </div>
          <p className="font-sans text-neutral-400 text-lg leading-relaxed font-light max-w-lg">
            A hypnotic blend of dark amber, crushed myrrh, and raw night-blooming jasmine. Formulated to melt into your skin's natural chemistry, leaving an intoxicating sillage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TactileRitualSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-20 space-y-4">
           <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-amber font-sans tracking-[0.2em] text-sm uppercase"
          >
            Chapter II / Touch
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl text-white font-light"
          >
            Lather & Lye
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div ref={ref} className="md:col-span-5 md:col-start-2 order-2 md:order-1 space-y-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-sans text-neutral-400 text-lg leading-relaxed font-light"
            >
              Cold-pressed luxury. Infused with botanical oils, activated silk proteins, and raw honey. 
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-sans text-neutral-400 text-lg leading-relaxed font-light"
            >
              A tactile cleansing ritual that strips away the day and leaves the skin primed for touch.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 1 }}
            className="md:col-span-6 relative aspect-square md:aspect-[4/5] order-1 md:order-2"
          >
            <Image 
              src="/Bars of Soap.JPG" 
              alt="Bars of Soap" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "It doesn't just scent the skin; it becomes it. A dark, beautiful secret I wear only for myself—and for him.",
    author: "E.V."
  },
  {
    quote: "The silk against bare skin, the lingering myrrh... SI YU understands that true luxury is entirely intimate.",
    author: "M.R."
  },
  {
    quote: "A ritual I look forward to every night. It strips away the noise and leaves pure, tactile desire.",
    author: "C.L."
  }
];

function TestimonialsSection() {
  return (
    <section className="relative py-32 w-full overflow-hidden bg-brand-black">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-neutral-800/10 rounded-[100%] blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-24 space-y-6">
          <h2 className="font-serif text-3xl md:text-5xl text-white font-light">
            The Initiated
          </h2>
          <p className="font-sans text-neutral-500 tracking-widest text-sm uppercase">
            The lovely people who discovered our secret
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative p-10 backdrop-blur-sm border border-neutral-800/50 hover:border-brand-amber/30 hover:bg-neutral-900/30 transition-all duration-500 rounded-sm overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
                <p className="font-serif text-xl md:text-2xl text-neutral-400 group-hover:text-neutral-200 transition-colors duration-500 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <p className="font-sans text-brand-amber tracking-[0.2em] text-sm uppercase">
                  — {t.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full py-16 border-t border-neutral-900 bg-brand-black flex flex-col items-center justify-center space-y-10">
      <div className="font-serif text-3xl text-brand-amber-light uppercase tracking-widest flex items-center gap-4">
        <span>SI YU</span>
        <span className="font-sans text-xl opacity-80">丝欲</span>
      </div>
      
      <div className="flex items-center space-x-12 font-sans text-xs tracking-[0.2em] uppercase text-neutral-500">
        <Link href="/boutique" className="hover:text-brand-amber transition-colors">Boutique</Link>
        <a href="#" className="hover:text-brand-amber transition-colors">Philosophy</a>
        <a href="#" className="hover:text-brand-amber transition-colors">Contact</a>
      </div>
      
      <p className="text-neutral-700 text-xs font-sans">
        © {new Date().getFullYear()} SI YU. All rights reserved.
      </p>
    </footer>
  );
}
