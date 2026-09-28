"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  tag: string;
};

const products: Product[] = [
  {
    id: "perfume-1",
    name: "Night Dew (晚露)",
    tagline: "The SI YU Perfume",
    description: "An alchemy of raw Oud, Bergamot, and Vanilla absolute. Opens with a sharp, modern freshness before melting into an intimate, skin-heavy warmth. Smells like bare, clean skin in the dark.",
    price: "€65",
    image: "/100ml Bottle SiYu.JPG",
    tag: "Signature Fragrance",
  },
  {
    id: "soap-1",
    name: "Lather & Lye",
    tagline: "The SI YU Soap",
    description: "Cold-pressed glycerin and raw silk-protein. This translucent amber bar produces a slippery, deeply tactile lather—stripping away the day and preparing the skin for touch.",
    price: "€20",
    image: "/Bars of Soap.JPG",
    tag: "Tactile Ritual",
  }
];

export default function BoutiquePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="group flex flex-col space-y-8"
            onClick={() => setSelectedProduct(product)}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-neutral-950 border border-neutral-900 group-hover:border-brand-amber/30 transition-colors duration-500 cursor-pointer">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
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

            {/* Product Details - Quick View */}
            <div className="flex flex-col space-y-4 cursor-pointer">
              <div className="flex justify-between items-start">
                <h3 className="font-serif text-2xl text-neutral-200 font-light group-hover:text-white transition-colors">
                  {product.name}
                </h3>
                <span className="font-serif text-xl text-brand-amber">
                  {product.price}
                </span>
              </div>
              <p className="font-sans text-neutral-500 text-sm tracking-widest uppercase">
                {product.tagline}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Footer minimal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-32 pt-12 border-t border-neutral-900 flex justify-center space-x-4">
        <span className="text-neutral-500 font-serif tracking-widest">SI YU 丝欲</span>
        <span className="text-neutral-700 text-xs font-sans mt-1">
          © {new Date().getFullYear()} All rights reserved.
        </span>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function ProductModal({ product, onClose }: { product: Product, onClose: () => void }) {
  const [purchased, setPurchased] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl z-10"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-neutral-400 hover:text-white transition-colors"
        >
          <X size={24} strokeWidth={1} />
        </button>

        {/* Image Half */}
        <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[600px]">
          <Image 
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-neutral-950" />
        </div>

        {/* Text Half */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-8 bg-neutral-950">
          <div className="space-y-4">
            <span className="font-sans text-brand-amber tracking-[0.2em] text-xs uppercase">
              {product.tagline}
            </span>
            <div className="flex justify-between items-baseline">
              <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
                {product.name}
              </h2>
              <span className="font-serif text-2xl text-brand-amber">
                {product.price}
              </span>
            </div>
          </div>
          
          <p className="font-sans text-neutral-400 text-sm md:text-base leading-relaxed font-light">
            {product.description}
          </p>

          <div className="pt-8 flex flex-col items-center space-y-4">
            <button 
              onClick={() => setPurchased(true)}
              disabled={purchased}
              className={`w-full py-4 border font-sans text-xs uppercase tracking-[0.2em] transition-all duration-500 ${
                purchased 
                ? "border-brand-amber/30 text-brand-amber/50 bg-brand-amber/5 cursor-not-allowed" 
                : "border-neutral-700 text-neutral-300 hover:bg-white hover:text-black hover:border-white"
              }`}
            >
              Add to Cart
            </button>
            
            <AnimatePresence>
              {purchased && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-brand-amber text-xs font-serif italic tracking-wider text-center"
                >
                  The night is young. Purchasing will be available soon.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
