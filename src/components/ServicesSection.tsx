import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Palette, Globe } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "React Project",
    description: "Building cross-platform web and mobile applications with React and React Native, delivering seamless and engaging user experiences.",
  },
  {
    icon: Palette,
    title: "Wordpress Design",
    description: "Crafting intuitive and visually stunning WordPress websites that prioritize user engagement and drive conversions.",
  },
  {
    icon: Globe,
    title: "MERN Stack Development",
    description: "Developing fast, secure, and scalable web applications using the MERN stack and modern best practices.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">// SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">What I Do</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 text-center hover-glow group cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
