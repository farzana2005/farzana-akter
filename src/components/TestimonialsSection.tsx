import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const team = [
  { img: team1, name: "Sara Chen", role: "UI/UX Designer" },
  { img: team2, name: "Jake Wilson", role: "Backend Developer" },
  { img: team3, name: "Emily Davis", role: "Project Manager" },
];

const testimonials = [
  { name: "Michael Johnson", role: "CEO, TechStart", text: "Farzana delivered an exceptional product that exceeded our expectations. His attention to detail and technical expertise are unmatched.", rating: 5 },
  { name: "Lisa Park", role: "Founder, DesignCo", text: "Working with Farzana was a game-changer for our business. He transformed our vision into a stunning web application.", rating: 5 },
  { name: "David Brown", role: "CTO, CloudBase", text: "Professional, responsive, and incredibly talented. Farzana is the go-to developer for any serious web project.", rating: 5 },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const next = () => setActiveTestimonial((p) => (p + 1) % testimonials.length);
  const prev = () => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        {/* Team
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">// TEAM</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">My Team</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-24">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 text-center hover-glow"
            >
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary/20" />
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-muted-foreground text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div> */}

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm tracking-wider">// TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">Client Reviews</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto glass-card p-8 md:p-12 relative">
          <Quote className="text-primary/20 absolute top-6 left-6" size={40} />
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                <Star key={i} className="text-primary fill-primary" size={18} />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 italic">
              "{testimonials[activeTestimonial].text}"
            </p>
            <h4 className="font-semibold">{testimonials[activeTestimonial].name}</h4>
            <p className="text-primary text-sm">{testimonials[activeTestimonial].role}</p>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
