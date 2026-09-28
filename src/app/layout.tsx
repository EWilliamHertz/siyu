import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased bg-black text-neutral-200 font-sans selection:bg-amber-900/30 selection:text-amber-200"
        style={{
          '--font-cormorant': '"Cormorant Garamond"',
          '--font-inter': '"Inter"',
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
