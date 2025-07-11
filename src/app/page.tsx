import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TechnologiesSection from '../components/TechnologiesSection';
import AppsSection from '../components/AppsSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import Newsletter from '../components/Newsletter';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFE9CF] dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <AboutSection />
      <TechnologiesSection />
      <AppsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <Newsletter />
      <ContactSection />
    </div>
  );
}
