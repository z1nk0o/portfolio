import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trex Dexter Reapor — Junior Programmer",
  description:
    "Junior Programmer specializing in web development and ERP systems. Full-stack with Next.js, React, TypeScript, Prisma, and PostgreSQL.",
};

// Runs before paint: applies the saved theme (or system preference) so the
// page never flashes the wrong mode. suppressHydrationWarning on <html>
// because this script may add the "dark" class before React hydrates.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="bg-zinc-50 font-sans text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
        {children}
      </body>
    </html>
  );
}
