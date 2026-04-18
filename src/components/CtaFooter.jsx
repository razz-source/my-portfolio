import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Hls from 'hls.js';
import { ArrowUpRight } from 'lucide-react';

export default function CtaFooter() {
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const isFooterInView = useInView(footerRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8';
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
    <section className="relative py-24 px-4 md:px-8 bg-black">
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
        initial={{ opacity: 0, y: 60 }}
        animate={isContentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center text-center px-4"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] mb-6"
        >
          Your next website starts here.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mb-8"
        >
          Book a free strategy call. See what AI-powered design can do. No
          commitment, no pressure. Just possibilities.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex items-center gap-4 mb-16"
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-white font-body text-sm hover:bg-white/5 transition-colors">
            Book a Call
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Footer Bar */}
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0 }}
          animate={isFooterInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-32 pt-8 border-t border-white/10 w-full max-w-4xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-white/40 text-xs font-body">
              (c) 2026 Studio. All rights reserved.
            </span>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/40 text-xs font-body hover:text-white/70 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-white/40 text-xs font-body hover:text-white/70 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-white/40 text-xs font-body hover:text-white/70 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
