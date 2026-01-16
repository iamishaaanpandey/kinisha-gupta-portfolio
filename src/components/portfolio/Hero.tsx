import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Database, Activity, ShieldCheck } from "lucide-react";

// --- ANIMATION VARIANTS ---
const fadeLeft = {
  hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } 
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1, delay: 0.2, ease: "easeOut" } 
  }
};

const float = {
  animate: {
    y: [0, -15, 0],
    rotateX: [0, 5, 0],
    rotateY: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulse = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityScroll = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#020410] transition-colors duration-300 px-6"
    >
      
      {/* --- PARALLAX BACKGROUND LAYER --- */}
      <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.4] dark:hidden"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.15] hidden dark:block"></div>
      </motion.div>
      
      {/* --- ALIVE AMBIENT ORBS (Breathing Animation) --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Right Blue Glow */}
        <motion.div 
          variants={pulse}
          animate="animate"
          className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-blue-900/10 dark:bg-blue-900/20 rounded-full blur-[80px]"
        />
        {/* Bottom Left Red Glow */}
        <motion.div 
          variants={pulse}
          animate="animate"
          transition={{ delay: 4 }} // Offset breathing
          className="absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] bg-rose-900/5 dark:bg-rose-900/10 rounded-full blur-[80px]"
        />
      </div>

      {/* --- MAIN CONTENT LAYOUT --- */}
      <div className="container relative z-10 mx-auto grid lg:grid-cols-2 gap-10 lg:gap-8 items-center h-full pt-20 lg:pt-0">
        
        {/* === LEFT COLUMN: TEXT CONTENT === */}
        <motion.div 
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0"
        >
          {/* Badge */}
          <motion.div variants={fadeLeft} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase text-slate-600 dark:text-slate-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
              </span>
              Open to Work
            </span>
          </motion.div>

          {/* Headline (Smaller Mobile Fonts) */}
          <motion.h1 
            variants={fadeLeft}
            className="font-heading text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight"
          >
            Data Intelligence. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-600 dark:from-blue-500 dark:to-rose-500">
              Engineered to Scale.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={fadeLeft}
            className="font-sans text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg font-medium"
          >
            Bridging the gap between raw data and actionable insights. Building resource-efficient AI pipelines that drive decision-making.
          </motion.p>

          {/* Buttons (Side-by-Side on Mobile, Centered on Mobile, Start on Desktop) */}
          <motion.div variants={fadeLeft} className="flex flex-row gap-3 w-full justify-center lg:justify-start">
            <button
              onClick={scrollToProjects}
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3.5 flex-1 sm:flex-none text-sm font-bold text-white bg-blue-700 dark:bg-blue-600 rounded-xl hover:bg-blue-800 dark:hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 overflow-hidden font-sans whitespace-nowrap"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2">
                View Work 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3.5 flex-1 sm:flex-none text-sm font-bold text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all font-sans whitespace-nowrap"
            >
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* === RIGHT COLUMN: VISUAL (Unchanged) === */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative w-full h-[400px] lg:h-[600px] hidden md:flex items-center justify-center lg:justify-end perspective-1000"
        >
          {/* Main Card */}
          <motion.div 
            variants={float}
            animate="animate"
            className="relative w-full max-w-[360px] aspect-[4/5] bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-2xl p-6 flex flex-col z-20 hover:shadow-blue-500/10 transition-shadow duration-500"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
              </div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">model.py</span>
            </div>

            {/* Metrics */}
            <div className="flex-1 space-y-6 lg:space-y-8 font-sans">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-200 mb-2">
                  <span>Model Accuracy</span>
                  <span className="text-blue-600 dark:text-blue-400">98.4%</span>
                </div>
                <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "98.4%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-blue-600 rounded-full" 
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-200 mb-2">
                  <span>Processing Latency</span>
                  <span className="text-rose-600 dark:text-rose-400">0.38s</span>
                </div>
                <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "35%" }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-rose-600 rounded-full" 
                  />
                </div>
              </div>

              {/* Code Area */}
              <div className="p-4 bg-slate-50 dark:bg-[#020410] rounded-lg border border-slate-100 dark:border-slate-800 font-mono text-[10px] leading-5">
                <p className="text-slate-400"># Pipeline Config</p>
                <p>
                  <span className="text-blue-600 dark:text-blue-400">def</span> <span className="text-slate-800 dark:text-slate-200">process_stream</span>(data):
                </p>
                <p className="pl-4">
                  <span className="text-slate-500">features</span> = <span className="text-rose-600 dark:text-rose-400">extract</span>(data)
                </p>
                <p className="pl-4">
                  <span className="text-blue-600 dark:text-blue-400">return</span> model.predict(features)
                </p>
              </div>
            </div>

            {/* Status Footer */}
            <div className="pt-4 mt-auto border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 font-sans">
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 dark:text-white">System Active</span>
                <span className="text-[10px] text-slate-400 font-medium">Ready for Deployment</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Icons (Parallax Enhanced) */}
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -40]) }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 right-0 md:-right-4 w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 dark:border-slate-700 z-30"
          >
            <Database className="w-6 h-6 text-blue-600" />
          </motion.div>

          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 left-0 md:-left-8 w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 dark:border-slate-700 z-30"
          >
            <ShieldCheck className="w-5 h-5 text-rose-600" />
          </motion.div>
        </motion.div>
      </div>

      {/* --- SCROLL INDICATOR (Hidden on Mobile to save space) --- */}
      <motion.div 
        style={{ opacity: opacityScroll }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none hidden md:flex"
      >
        <div className="w-[26px] h-[40px] border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;