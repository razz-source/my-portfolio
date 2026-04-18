import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Hls from 'hls.js';
import { ArrowUpRight } from 'lucide-react';

export default function StartSection() {
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = 'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8';
    let hls = null;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  return (
    <section className="relative w-full">
      {/* HLS Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Fades */}
      <div
        className="absolute top-0 left-0 right-0 h-[200px] z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, black, transparent)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, black, transparent)',
        }}
      />

      {/* Content */}
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isContentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center text-center min-h-[500px] justify-center px-4"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="liquid-glass rounded-full px-3.5 py-1 mb-6 inline-block"
        >
          <span className="text-xs font-medium text-white font-body">
            How It Works
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-4"
        >
          You dream it. We ship it.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mb-8"
        >
          Share your vision. Our AI handles the rest—wireframes, design, code,
          launch. All in days, not quarters.
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-white font-body text-sm hover:bg-white/5 transition-colors"
        >
          Get Started
          <ArrowUpRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}
