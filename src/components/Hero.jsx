import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import BlurText from './BlurText';

const partners = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma'];

export default function Hero() {
  return (
    <section className="relative h-[1000px] bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          crossOrigin="anonymous"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, black)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center min-h-[1000px] pt-[150px] px-4">
        {/* Badge Pill */}
        <div className="liquid-glass rounded-full px-1 py-1 mb-8 inline-flex items-center gap-2">
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">New</span>
          <span className="text-white/90 text-sm font-body">Introducing AI-powered web design.</span>
        </div>

        {/* Heading */}
        <BlurText
          text="The Website Your Brand Deserves"
          delay={100}
          direction="bottom"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl tracking-[-4px]"
        />

        {/* Subtext */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm md:text-base text-white font-body font-light leading-tight mt-6 max-w-xl"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center gap-4 mt-8"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-white font-body text-sm hover:bg-white/5 transition-colors"
          >
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white font-body text-sm flex items-center gap-2 hover:text-white/80 transition-colors"
          >
            <Play className="w-4 h-4 fill-white" />
            Watch the Film
          </button>
        </motion.div>

        {/* Partners Bar */}
        <div className="mt-auto pb-8 pt-16 w-full">
          <div className="liquid-glass rounded-full px-4 py-1.5 mb-6 inline-block">
            <span className="text-white/70 text-xs font-body">Trusted by the teams behind</span>
          </div>
          <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap">
            {partners.map((partner) => (
              <span key={partner} className="text-2xl md:text-3xl font-heading italic text-white">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}