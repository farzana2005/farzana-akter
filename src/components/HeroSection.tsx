import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import heroImg from "@/assets/heroImg.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary font-mono text-sm mb-4 tracking-wider">
              &lt; MERN Stack, React & WordPress Expert /&gt;
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
             Farzana Akter,{" "}
              <span className="gradient-text neon-text">Front-End Developer</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
              Passionate Front-End Developer specializing in MERN Stack, React, and WordPress. I build high-performance, responsive web experiences with clean code and pixel-perfect design.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-medium hover:shadow-[var(--neon-glow-strong)] transition-all duration-500"
              >
                Hire Me <ArrowRight size={18} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-primary/30 text-primary px-7 py-3.5 rounded-xl font-medium hover:bg-primary/10 transition-all duration-500"
              >
                View Portfolio <Download size={18} />
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12">
              {[
                { value: "1+", label: "Years Experience" },
                { value: "10+", label: "Projects Done" },
                { value: "10+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl animate-pulse-glow" />
              <img
                src={heroImg}
                alt="Farzana Akter - Web Developer"
                className="relative w-80 lg:w-96 rounded-3xl border-2 border-primary/20 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
