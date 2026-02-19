import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$49",
    period: "/month",
    features: ["1 Website", "5 Pages", "Basic SEO", "Responsive Design", "1 Month Support"],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$99",
    period: "/month",
    features: ["1 Websites", "Unlimited Pages", "Advanced SEO", "Custom Animations", "6 Months Support", "CMS Integration"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$150",
    period: "/month",
    features: ["1 Websites", "Unlimited Pages", "Full SEO Suite", "Custom Development", "12 Months Support", "Priority Access"],
    highlighted: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">// PRICING</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">My Packages</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`glass-card p-8 text-center relative ${
                plan.highlighted ? "border-primary/50 neon-glow scale-105" : "hover-glow"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Popular
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="text-primary shrink-0" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-block w-full py-3 rounded-xl text-sm font-medium transition-all duration-500 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:shadow-[var(--neon-glow-strong)]"
                    : "border border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
