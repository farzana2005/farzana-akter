import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML / CSS", level: 98 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 88 },
  { name: "Node.js", level: 82 },
  { name: "WordPress", level: 96 },
 
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">// SKILLS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">My Expertise</h2>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-sm">{skill.name}</span>
                <span className="text-primary text-sm font-mono">{skill.level}%</span>
              </div>
              <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className="h-full bg-primary rounded-full neon-glow"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
