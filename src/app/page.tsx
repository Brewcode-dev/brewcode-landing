import Header from '../components/Header';
import Hero from '../components/Hero';
import AppsSection from '../components/AppsSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-international-orange-50">
      <Header />
      <Hero />
      <AppsSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
