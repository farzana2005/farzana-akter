import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Research", desc: "Deep analysis of project requirements and target audience." },
  { icon: PenTool, title: "Design", desc: "Creating wireframes and high-fidelity prototypes." },
  { icon: Code, title: "Development", desc: "Building clean, scalable, and tested code." },
  { icon: TestTube, title: "Testing", desc: "Thorough QA across devices and browsers." },
  { icon: Rocket, title: "Delivery", desc: "Deployment, optimization, and ongoing support." },
];

const WorkProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">// PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">How I Work</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex-1 text-center relative"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center mb-4 animate-pulse-glow">
                <step.icon className="text-primary" size={28} />
              </div>
              <span className="text-primary font-mono text-xs">0{i + 1}</span>
              <h4 className="font-semibold mt-1 mb-2">{step.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed max-w-[180px] mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
