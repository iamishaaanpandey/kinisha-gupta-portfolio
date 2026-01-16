import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, TrendingDown, Brain, Calendar, ShieldCheck } from "lucide-react";

const metrics = [
  {
    value: "0.38s",
    label: "Inference Latency",
    icon: Zap,
    color: "text-yellow-500 dark:text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    value: "68%",
    label: "Compression",
    icon: TrendingDown,
    color: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  },
  {
    value: "INT8",
    label: "Quantization",
    icon: Brain,
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    value: "3 Mos",
    label: "Duration",
    icon: Calendar,
    color: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20"
  },
];

const DRDOFeature = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" ref={ref} className="py-20 relative overflow-hidden bg-slate-50 dark:bg-[#020410]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container - WIDE */}
      <motion.div
        className="container mx-auto px-6 max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header - Left Aligned */}
        <motion.div variants={itemVariants} className="flex flex-col items-start text-left mb-8">
          <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
              Flagship Experience
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-600 dark:from-blue-400 dark:to-rose-400">Excellence</span>
          </h2>
        </motion.div>

        {/* Main Glass Card - Medium Padding */}
        <motion.div
          variants={itemVariants}
          className="relative w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0a0f1e]/80 backdrop-blur-xl shadow-xl"
        >
          {/* Grid Layout */}
          <div className="p-8 md:p-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Col: Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Header Group */}
              <div className="flex items-start gap-5">
                <div className="relative shrink-0 p-3 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <img 
                    src="/DRDO-logo.png" 
                    alt="DRDO Logo" 
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                    Defence Research & <br className="hidden md:block" /> Development Org.
                  </h3>
                  <p className="font-sans text-base md:text-lg font-bold text-blue-600 dark:text-blue-400 mt-1">
                    Machine Learning Intern
                  </p>
                </div>
              </div>

              {/* Description - Medium Text */}
              <div className="prose dark:prose-invert max-w-none">
                <p className="font-sans text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                  Architected a <span className="font-bold text-slate-900 dark:text-white">CPU-optimized Satellite Captioning Model</span> (ResNet-18 + LSTM) 
                  for real-time defense applications.
                </p>
                <p className="font-sans text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mt-3">
                   Implemented advanced quantization techniques to compress the model by 
                  <span className="font-bold text-emerald-600 dark:text-emerald-400"> 68%</span> while maintaining critical accuracy for edge deployment scenarios.
                </p>
              </div>

              {/* Tech Stack Pills - Medium Size */}
              <div className="flex flex-wrap gap-2 mt-2">
                {["PyTorch", "ONNX", "Edge AI", "Computer Vision", "ResNet-18", "LSTM"].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1.5 text-xs font-sans font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Col: Metrics Grid (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className={`p-5 rounded-2xl border ${metric.border} ${metric.bg} dark:bg-opacity-5 transition-all`}
                >
                  <metric.icon className={`w-6 h-6 mb-3 ${metric.color}`} />
                  <div className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="font-sans text-[10px] font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default DRDOFeature;