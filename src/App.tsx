import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import SampleNotes from './components/SampleNotes';
import MobileNotes from './components/MobileNotes';
import Roadmap from './components/Roadmap';
import Offer from './components/Offer';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <SampleNotes />
        <MobileNotes />
        <Roadmap />
        <Offer />
      </main>
      <Footer />
    </div>
  );
}
