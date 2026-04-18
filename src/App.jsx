import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StartSection from './components/StartSection';
import FeaturesChess from './components/FeaturesChess';
import FeaturesGrid from './components/FeaturesGrid';
import Work from './components/Work';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CtaFooter from './components/CtaFooter';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="services"><StartSection /></div>
      <div id="work"><Work /><FeaturesChess /><FeaturesGrid /></div>
      <div id="process"><Stats /><Testimonials /></div>
      <div id="contact"><CtaFooter /></div>
    </div>
  );
}

export default App;