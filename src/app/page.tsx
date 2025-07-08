import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TechnologiesSection from '../components/TechnologiesSection';
import AppsSection from '../components/AppsSection';
import ProcessSection from '../components/ProcessSection';
import Newsletter from '../components/Newsletter';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFE9CF] dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <AboutSection />
      <TechnologiesSection />
      <AppsSection />
      <ProcessSection />
      <Newsletter />
      <ContactSection />
      <Footer />
    </div>
  );
}
