import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";

// Certificate Data
const certifications = [
  {
    id: 1,
    title: "Data Analyst 101",
    issuer: "Microsoft | Simplilearn",
    date: "Jan 2026",
    file: "/c1.pdf",
    color: "from-blue-500 to-cyan-500",
    shadow: "group-hover:shadow-blue-500/20"
  },
  {
    id: 2,
    title: "Generative AI with Databricks",
    issuer: "Databricks",
    date: "Jan 2026",
    file: "/c2.pdf",
    color: "from-orange-500 to-rose-500",
    shadow: "group-hover:shadow-orange-500/20"
  },
  {
    id: 3,
    title: "SQL Analytics & BI on Databricks",
    issuer: "Databricks",
    date: "Jan 2026",
    file: "/c3.pdf",
    color: "from-emerald-500 to-teal-500",
    shadow: "group-hover:shadow-emerald-500/20"
  },
  {
    id: 4,
    title: "Prompt Engineering with Copilot",
    issuer: "Microsoft | Simplilearn",
    date: "Jan 2026",
    file: "/c4.pdf",
    color: "from-violet-500 to-purple-500",
    shadow: "group-hover:shadow-violet-500/20"
  }
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 } 
    },
  };

  return (
    // Updated Background to match Skills/Hero (was bg-slate-50)
    <section ref={ref} className="py-24 bg-white dark:bg-[#020410] relative overflow-hidden">
      
      {/* Background decoration matching Hero/Skills style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <motion.div
        className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* --- HEADER --- */}
        <motion.div variants={cardVariants} className="mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-600 dark:from-blue-400 dark:to-rose-400">Certifications.</span>
          </h2>
          <p className="font-sans text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Verified credentials and industry-recognized qualifications validating my technical expertise.
          </p>
        </motion.div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 } 
              }}
              className={`group relative bg-slate-50 dark:bg-[#0a0f1e] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 ${cert.shadow} hover:shadow-2xl`}
            >
              
              {/* Animated Top Border Gradient */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color} opacity-80 group-hover:opacity-100 group-hover:h-1.5 transition-all duration-300`}></div>

              <div className="p-6 flex flex-col h-full relative z-10">
                
                {/* Icon Header */}
                <div className="flex items-start justify-between mb-5">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
                  >
                    <Award className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                  </motion.div>
                  
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-2.5 py-1 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 mb-6">
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    {cert.issuer}
                  </div>
                </div>

                {/* Button Action */}
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto relative overflow-hidden flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 group-hover:border-blue-500/30 dark:group-hover:border-blue-400/30 transition-all group/btn"
                >
                  <span className="relative z-10 group-hover/btn:text-blue-600 dark:group-hover/btn:text-blue-400 transition-colors">View Credential</span>
                  <ExternalLink className="w-3.5 h-3.5 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:text-blue-600 dark:group-hover/btn:text-blue-400 transition-all" />
                  
                  {/* Subtle hover fill effect */}
                  <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </a>

              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Certifications;