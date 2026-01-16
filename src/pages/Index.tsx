import { useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import DRDOFeature from "@/components/portfolio/DRDOFeature";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  // Initialize dark mode by default
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (!stored) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (stored === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <Hero />
      <DRDOFeature />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
};

export default Index;
