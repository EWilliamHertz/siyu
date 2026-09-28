"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "perfume-1",
    name: "The Golden Elixir",
    description: "100ml / Night-blooming jasmine, crushed myrrh, dark amber.",
    price: "€65",
    image: "/100ml Bottle SiYu.JPG",
    tag: "Signature Fragrance",
  },
  {
    id: "soap-1",
    name: "Lather & Lye",
    description: "Single Bar / Cold-pressed luxury infused with botanical oils.",
    price: "€20",
    image: "/Bars of Soap.JPG",
    tag: "Tactile Ritual",
  },
  {
    id: "soap-6",
    name: "The Ritual Set",
    description: "6 Bars / A continuous supply of our signature cleansing ritual.",
    price: "€100",
    image: "/Bars of Soap.JPG",
    tag: "Curated Set",
  }
];

export default function BoutiquePage() {
  return (
    <main className="relative min-h-screen w-full bg-brand-black overflow-hidden flex flex-col pt-32 pb-24 selection:bg-brand-amber/30 selection:text-brand-amber-light">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-amber-900/10 rounded-[100%] blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center space-y-6 mb-24">
        <Link href="/">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-amber font-sans tracking-[0.2em] text-sm uppercase hover:text-brand-amber-light transition-colors mb-8 inline-block cursor-pointer"
          >
            ← Return to Sanctuary
          </motion.p>
        </Link>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-5xl md:text-7xl text-white font-light"
        >
          The Boutique
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-neutral-400 max-w-lg leading-relaxed font-light"
        >
          Acquire the elements of allure. Each piece is crafted to heighten the senses and deepen the night.
        </motion.p>
      </div>

      {/* Products Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="group flex flex-col space-y-8"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-950 border border-neutral-900 group-hover:border-brand-amber/30 transition-colors duration-500 cursor-pointer">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Sheen Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="absolute top-4 left-4">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-black bg-brand-amber/90 px-3 py-1 rounded-sm backdrop-blur-md">
                  {product.tag}
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="font-serif text-2xl text-neutral-200 font-light group-hover:text-white transition-colors">
                  {product.name}
                </h3>
                <span className="font-serif text-xl text-brand-amber">
                  {product.price}
                </span>
              </div>
              <p className="font-sans text-neutral-500 text-sm leading-relaxed font-light h-10">
                {product.description}
              </p>
              
              <button className="mt-4 w-full py-4 border border-neutral-800 text-neutral-400 font-sans text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:border-white transition-all duration-500">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Footer minimal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-32 pt-12 border-t border-neutral-900 flex justify-center">
         <p className="text-neutral-700 text-xs font-sans">
          © {new Date().getFullYear()} SI YU. All rights reserved.
        </p>
      </div>
    </main>
  );
}
