import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import { link } from "fs";

const projects = [
  { img: project1, title: "Wordpress Website", desc: "Ice Vendor Machine" ,  link: "https://geticenow.co.zw/"},
  { img: project2, title: "Life-Coach", desc: "Life-Coaching platform", link: "https://lightpink-sheep-138410.hostingersite.com/" },
  { img: project3, title: "Collectible Bag Store", desc: "Limited-edition pop culture bag brand website", link: "https://stashtoonz.com/" },
  { img: project4, title: "Social Impact Platform", desc: "Supporting vulnerable communities through real action.", link: "https://rebirth-impact.com/" },
  { img: project5, title: "Student Management System", desc: "Property listing website", link: "https://sms-front-end-xi.vercel.app/" },
  { img: project6, title: "Organization Website", desc: "Cloud platform marketing",link: "https://khoj-munalert-org-utwo.vercel.app/" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider">// PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">Recent Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="glass-card overflow-hidden group cursor-pointer hover-glow">
            <div className="relative overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    View Project <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-lg mb-1">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {project.desc}
              </p>
            </div>
          </div>
        </a>
      ) : (
        <div className="glass-card overflow-hidden group hover-glow">
          <div className="relative overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div className="p-5">
            <h3 className="font-semibold text-lg mb-1">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {project.desc}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default PortfolioSection;
