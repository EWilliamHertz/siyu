import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SI YU 丝欲 | Modern Nordic Luxury",
  description: "A luxury sensual brand. Dark allure meets modern nordic luxury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased bg-black text-neutral-200 font-sans selection:bg-amber-900/30 selection:text-amber-200`}
      >
        {children}
      </body>
    </html>
  );
}
