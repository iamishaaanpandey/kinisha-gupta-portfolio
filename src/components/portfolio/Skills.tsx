import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, BrainCircuit, Terminal, Cpu } from "lucide-react";

const skillCategories = [
  {
    id: "data",
    name: "Data Engineering",
    icon: Database,
    description: "Pipelines, Warehousing & Visualization logic.",
    skills: [
      "Python", "SQL", "Pandas", "Apache Spark", "Power BI", "Tableau", "Excel VBA"
    ],
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    icon: BrainCircuit,
    description: "Predictive modeling, Deep Learning & LLM tuning.",
    skills: [
      "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "OpenCV", "HuggingFace", "QLoRA"
    ],
  },
  {
    id: "dev",
    name: "Full-Stack & DevOps",
    icon: Terminal,
    description: "Scalable application development & Infrastructure.",
    skills: [
      "React", "TypeScript", "Docker", "Git/GitHub", "Linux", "FastAPI", "PostgreSQL"
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-[#020410] relative overflow-hidden">
      
      <motion.div
        className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* --- HEADER (Consistent with Projects.tsx) --- */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-600 dark:from-blue-400 dark:to-rose-400">Competencies.</span>
          </h2>
          <p className="font-sans text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            A comprehensive overview of my technical stack and engineering capabilities.
          </p>
        </motion.div>

        {/* --- FORMAL GRID LAYOUT --- */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group flex flex-col h-full bg-slate-50 dark:bg-[#0a0f1e] rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
            >
              
              {/* Card Header */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                  </div>
                  <Cpu className="w-5 h-5 text-slate-300 dark:text-slate-700" />
                </div>
                
                <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {category.name}
                </h3>
                <p className="font-sans text-sm text-slate-500 dark:text-slate-400">
                  {category.description}
                </p>
              </div>

              {/* Skills List (Technical Specs Style) */}
              <div className="px-6 pb-8 mt-auto">
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 dark:border-slate-800/50">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md select-none group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;