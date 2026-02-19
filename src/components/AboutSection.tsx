import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Award, Users, Briefcase } from "lucide-react";

const stats = [
  { icon: Award, value: "1+", label: "Years Experience" },
  { icon: Briefcase, value: "10+", label: "Projects Completed" },
  { icon: Users, value: "10+", label: "Happy Clients" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">// ABOUT ME</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">Know Me More</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              I'm <span className="text-primary">Farzana Akter</span>, a Creative Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
             I'm a Creative Front-End Developer with extensive experience in web development. I specialize in crafting modern, responsive, and high-performance web applications that provide seamless digital experiences and drive business growth.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
             I collaborate closely with clients to understand their vision and turn ideas into reality using the latest technologies. From startups to enterprises, I deliver scalable, elegant solutions that make a real impact.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:shadow-[var(--neon-glow)] transition-all duration-500"
            >
              <Download size={18} /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="glass-card p-6 text-center hover-glow">
                <stat.icon className="mx-auto mb-3 text-primary" size={28} />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
