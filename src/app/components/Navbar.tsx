"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: scrolled ? "16px 0" : "28px 0",
                display: "flex",
                justifyContent: "center",
                pointerEvents: "none"
            }}
        >
            <div
                className="container-custom"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: scrolled ? "12px 32px" : "16px 40px",
                    background: scrolled ? "rgba(10, 10, 10, 0.7)" : "transparent",
                    backdropFilter: scrolled ? "blur(24px)" : "none",
                    borderRadius: "20px",
                    border: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
                    transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                    width: "95%",
                    maxWidth: scrolled ? "1100px" : "1400px",
                    boxShadow: scrolled ? "0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.02)" : "none",
                    pointerEvents: "auto",
                    gap: "24px"
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <motion.a
                        href="#home"
                        style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div style={{ position: "relative" }}>
                            <Image id="navbar-logo" src="/SAMIO_logo.png" alt="SAMIO" width={36} height={36} style={{ borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)" }} />
                            {scrolled && (
                                <motion.div
                                    layoutId="logo-glow"
                                    style={{ position: "absolute", inset: "-4px", background: "rgba(255,255,255,0.1)", filter: "blur(12px)", borderRadius: "12px", zIndex: -1 }}
                                />
                            )}
                        </div>
                        <span
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontWeight: 800,
                                fontSize: "1.25rem",
                                color: "#fff",
                                letterSpacing: "1.5px",
                                textTransform: "uppercase"
                            }}
                        >
                            SAMIO
                        </span>
                    </motion.a>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                    <div className="hidden md:flex items-center gap-8" style={{ marginRight: "12px" }}>
                        {/* <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Portfolio 2026</span> */}
                    </div>
                    <a
                        id="navbar-hire-me"
                        href="#contact"
                        className="btn-primary"
                        style={{
                            padding: "12px 32px",
                            fontSize: "0.9rem",
                            borderRadius: "12px",
                            boxShadow: scrolled ? "0 10px 20px rgba(255,255,255,0.05)" : "none",
                            fontWeight: 700,
                            letterSpacing: "0.5px"
                        }}
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
