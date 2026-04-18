import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Hls from 'hls.js';

const stats = [
  { value: '20+', label: 'Sites launched' },
  { value: '100%', label: 'Client satisfaction' },
  { value: '3.2x', label: 'More conversions' },
  { value: '7 days', label: 'Average delivery' },
];

export default function Stats() {
  const videoRef = useRef(null);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = 'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8';
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
      {/* HLS Video Background (Desaturated) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'saturate(0)' }}
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

      {/* Stats Card */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={isStatsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-20"
      >
        <div className="liquid-glass rounded-3xl p-12 md:p-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 font-body font-light text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
