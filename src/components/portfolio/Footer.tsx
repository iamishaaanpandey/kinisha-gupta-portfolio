import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, Download, ArrowUpRight, CheckCircle, XCircle } from "lucide-react";

// ⚠️ YOUR FORMSPREE ID
const FORMSPREE_ID = "mdaandzr1"; 
  
const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // States for form handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Stop default redirect
    setIsSubmitting(true);
    setSubmissionStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus("success");
        form.reset(); // Clear form on success
      } else {
        const data = await response.json();
        setSubmissionStatus("error");
        // Try to get the specific error from Formspree, or fallback
        if (data.errors) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setErrorMessage("Oops! There was a problem submitting your form.");
        }
      }
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer id="contact" ref={ref} className="py-12 bg-white dark:bg-[#020410] border-t border-slate-200 dark:border-slate-800">
      <motion.div
        className="container mx-auto px-6 md:px-12 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* --- HEADER --- */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-600 dark:from-blue-400 dark:to-rose-400">Connect.</span>
          </h2>
          <p className="font-sans text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            Have a project in mind or want to discuss Data Science opportunities? Drop a message below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          
          {/* === LEFT: CONTACT FORM (3 Cols) === */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-[#0a0f1e] border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm text-slate-900 dark:text-white"
                />
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-[#0a0f1e] border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm text-slate-900 dark:text-white"
                />
              </div>
              <textarea 
                name="message" 
                rows={4} 
                required
                placeholder="Message..."
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-[#0a0f1e] border border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none text-sm text-slate-900 dark:text-white"
              ></textarea>
              
              <div className="flex items-center gap-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>

                {/* --- STATUS MESSAGES --- */}
                {submissionStatus === "success" && (
                  <span className="flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 animate-in fade-in slide-in-from-left-2">
                    <CheckCircle className="w-4 h-4" />
                    Sent successfully!
                  </span>
                )}
                
                {submissionStatus === "error" && (
                  <span className="flex items-center gap-2 text-sm font-bold text-rose-600 dark:text-rose-400 animate-in fade-in slide-in-from-left-2">
                    <XCircle className="w-4 h-4" />
                    Error: {errorMessage}
                  </span>
                )}
              </div>
            </form>
          </motion.div>

          {/* === RIGHT: DETAILS & LINKS (2 Cols) === */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Email Box */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0a0f1e]">
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</div>
              <a href="mailto:kinisha94@gmail.com" className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                kinisha94@gmail.com
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Socials & Resume Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <a 
                  href="https://linkedin.com/in/kinishagupta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-[#0077b5]" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/kinishagupta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Github className="w-5 h-5 text-slate-700 dark:text-white" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">GitHub</span>
                </a>
              </div>

              <a 
                href="/resume.pdf" 
                download
                className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors text-center"
              >
                <Download className="w-5 h-5" />
                <span className="text-sm font-bold">Download CV</span>
              </a>
            </div>

          </motion.div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <motion.div variants={itemVariants} className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Kinisha Gupta.</p>
          <p>Built with React & Tailwind.</p>
        </motion.div>

      </motion.div>
    </footer>
  );
};

export default Footer;