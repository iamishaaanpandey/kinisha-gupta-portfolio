import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Database, Brain, Globe, Bot, 
  ShieldAlert, Lock, Terminal,
  Trophy, Lightbulb, Mic2, Star
} from "lucide-react";

// --- DATA: MAIN PROJECTS ---
const projects = [
  {
    id: 1,
    title: "Real-Time Anomaly Detection",
    description: "Distributed anomaly detection pipeline processing high-volume financial transactions. Implemented <span class='text-blue-600 dark:text-blue-400 font-bold'>SHAP values</span> to explain XGBoost decisions.",
    tags: ["Spark", "XGBoost", "SHAP", "Python"],
    icon: Database,
    span: "md:col-span-2", 
    gradient: "from-blue-500/20 to-indigo-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: 2,
    title: "Falcon-7B Chatbot",
    description: "Fine-tuned Falcon-7B LLM using <span class='text-rose-600 dark:text-rose-400 font-bold'>QLoRA</span> quantization for efficient inference on consumer hardware.",
    tags: ["LLM", "Quantization", "HuggingFace"],
    icon: Bot,
    span: "md:col-span-1", 
    gradient: "from-rose-500/20 to-orange-500/20",
    border: "group-hover:border-rose-500/50"
  },
  {
    id: 3,
    title: "Texture Classification",
    description: "Automated material analysis utilizing <span class='text-emerald-600 dark:text-emerald-400 font-bold'>GLCM</span> features for precise texture extraction.",
    tags: ["OpenCV", "Scikit-image", "GLCM"],
    icon: Brain,
    span: "md:col-span-1",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    id: 4,
    title: "University Portal",
    description: "Full-stack RBAC system for real-time student tracking and automated reporting.",
    tags: ["PHP", "MySQL", "REST API"],
    icon: Globe,
    span: "md:col-span-2",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "group-hover:border-violet-500/50"
  },
];

// --- DATA: TECHNICAL & FOUNDATIONAL ---
const foundational = [
  {
    title: "NLP Spam Classifier",
    desc: "TF-IDF + Ensemble (NB, SVM, RF) pipeline achieving <span class='text-slate-900 dark:text-white font-bold'>98.7% accuracy</span>.",
    icon: ShieldAlert,
    tech: "NLP / Python"
  },
  {
    title: "AES-256 Vault",
    desc: "Secure GUI-based vault with <span class='text-slate-900 dark:text-white font-bold'>AES-256 encryption</span> and full CRUD operations.",
    icon: Lock,
    tech: "Security / Java"
  },
  {
    title: "Mastermind CLI",
    desc: "Algorithmic logic game with automated code generation and scoring feedback.",
    icon: Terminal,
    tech: "C++ / Algorithms"
  }
];

// --- DATA: ACHIEVEMENTS ---
const achievements = [
  {
    title: "Top 3% @ IIT Kanpur",
    desc: "Ranked Top 20 of 600+ participants in 'Return Journey X' Hackathon.",
    icon: Trophy,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    title: "SIH 2025 Contributor",
    desc: "Key Contributor: AI-powered internship matching logic.",
    icon: Lightbulb,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Best Delegate (MUN)",
    desc: "Multiple awards recognizing leadership & public speaking skills.",
    icon: Mic2,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="projects" ref={ref} className="py-24 bg-white dark:bg-[#020410] relative">
      <motion.div
        className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        
        {/* =========================================
            PART 1: PROJECTS (Flagship & Foundational)
           ========================================= */}

        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-600 dark:from-blue-400 dark:to-rose-400">Impact.</span>
          </h2>
          <p className="font-sans text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Scalable systems, research implementations, and secure infrastructure tools.
          </p>
        </motion.div>

        {/* Flagship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`group relative flex flex-col justify-between p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0a0f1e] overflow-hidden transition-all duration-300 hover:shadow-xl ${project.span} ${project.border}`}
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              {/* Card Header (Icon) */}
              <div className="relative z-10 flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <project.icon className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                </div>
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p 
                  className="font-sans text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm"
                  dangerouslySetInnerHTML={{ __html: project.description }} 
                />
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-800/50">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Foundational Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {foundational.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="p-6 rounded-2xl bg-white dark:bg-[#0a0f1e] border border-slate-200 dark:border-slate-800 flex flex-col gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-slate-400 bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded border border-slate-100 dark:border-slate-800">
                  {item.tech}
                </span>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                <p 
                  className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            VISUAL SEPARATOR
           ========================================= */}
        <div className="my-32 border-t border-slate-200 dark:border-slate-800/50" />

        {/* =========================================
            PART 2: ACHIEVEMENTS
           ========================================= */}
        
        <div className="relative">
          {/* Decorative Star Icon in background */}
          <div className="absolute -top-20 -right-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
            <Star size={300} />
          </div>

          <motion.div variants={itemVariants} className="mb-12">
            {/* MATCHED COLOR THEME HERE */}
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Achievements <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-600 dark:from-blue-400 dark:to-rose-400">& Honors.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`flex items-start gap-4 p-6 rounded-2xl border ${item.border} bg-white dark:bg-[#0a0f1e] shadow-sm hover:shadow-md transition-all`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Projects;