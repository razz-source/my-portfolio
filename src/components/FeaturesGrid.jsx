import { Zap, Palette, BarChart3, Shield } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const features = [
  {
    icon: Zap,
    title: 'Days, Not Months',
    description:
      'Concept to launch at a pace that redefines fast. Because waiting isn\'t a strategy.',
  },
  {
    icon: Palette,
    title: 'Obsessively Crafted',
    description:
      'Every detail considered. Every element refined. Design so precise, it feels inevitable.',
  },
  {
    icon: BarChart3,
    title: 'Built to Convert',
    description:
      'Layouts informed by data. Decisions backed by performance. Results you can measure.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description:
      'Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.',
  },
];

export default function FeaturesGrid() {
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
            Why Us
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          The difference is everything.
        </h2>
      </motion.div>

      {/* Features Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isGridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="liquid-glass rounded-2xl p-6 flex flex-col"
          >
            {/* Icon */}
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4 text-white">
              <feature.icon className="w-5 h-5" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-heading italic text-white mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-white/60 font-body font-light text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
