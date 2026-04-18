import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import feature1Gif from '../assets/feature-1.gif';
import feature2Gif from '../assets/feature-2.gif';

export default function FeaturesChess() {
  const headerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isRow1InView = useInView(row1Ref, { once: true, margin: "-100px" });
  const isRow2InView = useInView(row2Ref, { once: true, margin: "-100px" });

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
            Capabilities
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Pro features. Zero complexity.
        </h2>
      </motion.div>

      {/* Row 1 - Content Left / Image Right */}
      <motion.div
        ref={row1Ref}
        initial={{ opacity: 0, x: -60 }}
        animate={isRow1InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isRow1InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex-1 text-left"
        >
          <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-[0.9] mb-4">
            Designed to convert. Built to perform.
          </h3>
          <p className="text-white/60 font-body font-light text-sm md:text-base mb-6 max-w-lg">
            Every pixel is intentional. Our AI studies what works across
            thousands of top sites—then builds yours to outperform them all.
          </p>
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-white font-body text-sm hover:bg-white/5 transition-colors">
            Learn more
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isRow1InView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex-1 w-full max-w-lg"
        >
          <div className="liquid-glass rounded-2xl overflow-hidden">
            <img
              src={feature1Gif}
              alt="Feature preview 1"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Row 2 - Content Right / Image Left */}
      <motion.div
        ref={row2Ref}
        initial={{ opacity: 0, x: 60 }}
        animate={isRow2InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isRow2InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex-1 text-left"
        >
          <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-[0.9] mb-4">
            It gets smarter. Automatically.
          </h3>
          <p className="text-white/60 font-body font-light text-sm md:text-base mb-6 max-w-lg">
            Your site evolves on its own. AI monitors every click, scroll, and
            conversion—then optimizes in real time. No manual updates. Ever.
          </p>
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-white font-body text-sm hover:bg-white/5 transition-colors">
            See how it works
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isRow2InView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex-1 w-full max-w-lg"
        >
          <div className="liquid-glass rounded-2xl overflow-hidden">
            <img
              src={feature2Gif}
              alt="Feature preview 2"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
