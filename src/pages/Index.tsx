import { useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import DRDOFeature from "@/components/portfolio/DRDOFeature";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Certifications from "@/components/portfolio/Certifications"; // Import the new component
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  // Initialize Light mode by default
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    
    // If no theme is stored, default to LIGHT (remove 'dark' class)
    if (!stored) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } 
    // If stored is dark, add class
    else if (stored === "dark") {
      document.documentElement.classList.add("dark");
    } 
    // If stored is light, ensure class is removed
    else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <Hero />
      <DRDOFeature />
      <Projects />
      <Skills />
      <Certifications /> {/* New Section Added Here */}
      <Footer />
    </main>
  );
};

export default Index;