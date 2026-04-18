import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const testimonials = [
  {
    quote:
      "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
  },
  {
    quote:
      "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
    name: 'Marcus Webb',
    role: 'Head of Growth, Arcline',
  },
  {
    quote:
      "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
    name: 'Elena Voss',
    role: 'Brand Director, Helix',
  },
];

export default function Testimonials() {
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
            What They Say
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Don't take our word for it.
        </h2>
      </motion.div>

      {/* Testimonials Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isGridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            className="liquid-glass rounded-2xl p-8 flex flex-col"
          >
            {/* Quote */}
            <p className="text-white/80 font-body font-light text-sm italic mb-6 grow">
              "{testimonial.quote}"
            </p>

            {/* Name */}
            <div className="text-white font-body font-medium text-sm">
              {testimonial.name}
            </div>

            {/* Role */}
            <div className="text-white/50 font-body font-light text-xs">
              {testimonial.role}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
