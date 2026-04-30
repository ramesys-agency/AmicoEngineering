import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Amico Engineering | Precision Quality & Trusted Engineering Solutions",
  description:
    "Amico Engineering is a premier ISO-9001 certified manufacturer of high-precision industrial systems. Built on a foundation of quality and trust, we deliver durable engineering solutions for global industries.",
  icons: {
    icon: "/amico_logo.png",
    apple: "/amico_logo.png",
  },
  verification: {
    google: "cg3OlscVGYVAQsoYDr06y1xjwMO-_hO4xWimCELM4vU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-display min-h-screen flex flex-col`}>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
