import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What technologies do you specialize in?", a: "I specialize in React, TypeScript, Node.js, , and modern CSS frameworks. I also have extensive experience with databases like PostgreSQL and MongoDB." },
  { q: "How long does a typical project take?", a: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications can take 2-3 months. I always provide detailed timelines upfront." },
  { q: "Do you offer ongoing maintenance?", a: "Yes! All my packages include a support period, and I offer extended maintenance plans to keep your application running smoothly." },
  { q: "What is your development process?", a: "I follow an agile methodology: Research → Design → Development → Testing → Delivery. You'll be involved at every step with regular updates and demos." },
  { q: "Can you work with existing codebases?", a: "Absolutely. I have extensive experience refactoring and building upon existing projects. I can audit your current codebase and suggest improvements." },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">// FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">Common Questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass-card border-border/50 rounded-xl px-6 overflow-hidden">
                <AccordionTrigger className="text-left text-sm font-medium hover:text-primary transition-colors py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
