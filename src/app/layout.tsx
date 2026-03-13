import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samio Hasan | Full-Stack Web Developer",
  description:
    "Portfolio of Samio Hasan — Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies. CS student at AIUB.",
  keywords: [
    "Samio Hasan",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Web Developer",
    "AIUB",
  ],
  openGraph: {
    title: "Samio Hasan | Full-Stack Web Developer",
    description:
      "Portfolio of Samio Hasan — Full-Stack Web Developer specializing in React, Next.js, Node.js & modern web technologies.",
    type: "website",
  },
  icons: {
    icon: "person.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable}`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
