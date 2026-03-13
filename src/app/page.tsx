"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Chatbot from "./components/Chatbot";
import MobileTabs from "./components/MobileTabs";

// Dynamic import for 3D scene (no SSR since Three.js needs the browser)
const Scene = dynamic(() => import("./components/3d/Scene"), {
  ssr: false,
});

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 4.5 seconds loading time for a professional cinematic feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* 3D Background — fixed behind everything */}
          <Scene />

          {/* UI Content */}
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />

          {/* Interactive Chatbot & Navigation Tabs */}
          <Chatbot />
          <MobileTabs />
        </>
      )}
    </>
  );
}
