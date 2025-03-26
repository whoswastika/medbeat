import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import HowItWorks from '../components/HowItWorks/HowItWorks';
// import ReasonsToUse from './components/ReasonsToUse/ReasonsToUse';
// import DemoSection from './components/DemoSection/DemoSection';
import Footer from '../components/Footer/Footer';
// import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function Home() {
  return (
    <div className="font-sans px-8">
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>

    </div>
  );
}

export default Home;