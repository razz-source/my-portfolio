import { ArrowUpRight } from 'lucide-react';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3">
      <div className="flex items-center justify-between">
        {/* Navigation Links (Desktop Only) */}
        <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1">
          {[['Home', 'home'], ['Services', 'services'], ['Work', 'work'], ['Process', 'process']].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        <button
          onClick={() => scrollTo('contact')}
          className="ml-2 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium flex items-center gap-1 hover:bg-white/90 transition-colors"
        >
          Get Started
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white p-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    </nav >
  );
}