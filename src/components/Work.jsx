import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Aesthetica Dental',
    category: 'Healthcare / Web Design',
    description: 'A modern dental clinic website with patient-focused design, online booking system, and calming visual aesthetics.',
    image: '/work/aesthetica-dental.jpg',
    link: '#',
  },
];

export default function Work() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isGridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <section className="relative py-24 px-4 md:px-8 bg-black">
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-6 inline-block">
          <span className="text-xs font-medium text-white font-body">
            Selected Work
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Projects that speak for themselves.
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div ref={gridRef} className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={isGridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            className="group relative liquid-glass rounded-3xl overflow-hidden cursor-pointer"
          >
            {/* Project Image */}
            <div className="relative aspect-16/10 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
              />
              {/* Overlay - fades in on hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
            </div>

            {/* Project Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-white/60 font-body text-xs uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading italic text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 font-body font-light text-sm max-w-md">
                    {project.description}
                  </p>
                </div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isGridInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-300"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isGridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center mt-12"
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-white font-body text-sm hover:bg-white/5 transition-colors">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
