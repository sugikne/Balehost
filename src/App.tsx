import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import GoogleBusiness from './components/GoogleBusiness';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle manual navigation clicking
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset scrolling for sticky header height
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scroll listener to auto-highlight active section in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'pricing', 'process', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 120; // threshold offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-white">
      {/* Dynamic Main Radial Blur Orbs behind overall page */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] left-0 w-[400px] h-[400px] rounded-full bg-brand-soft/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      {/* 1. Header Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Section Content blocks in requested sequential order */}
      <main>
        {/* 2. Premium Hero Section with floating elements */}
        <Hero onNavigate={handleNavigate} />

        {/* 3. About BaleHost (Mission, stats, local context) */}
        <About />

        {/* 4. Services list (Website development, Landing pages, UIUX, Hosting, SEO) */}
        <Services />

        {/* 5. Website Packages + Quote cost calculator */}
        <Packages />

        {/* 6. Development Timeline Roadmap */}
        <Timeline />

        {/* 7. Portfolio dynamic category display */}
        <Portfolio />

        {/* 8. Why Choose Us benefits matrix */}
        <WhyChooseUs />

        {/* 9. Testimonials slide carousel */}
        <Testimonials />

        {/* 10. Serving Area coordinates, Google Business Review indicators */}
        <GoogleBusiness />

        {/* 11. FAQ Accordion questions */}
        <FAQ />

        {/* 12. Modern localized Blog preview & Article readers */}
        <Blog />

        {/* 13. High-conversion contact forms with WA triggers */}
        <Contact />
      </main>

      {/* 14. Footer with JSON-LD dynamic head scripts */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Modern iOS WhatsApp Widget */}
      <WhatsAppFloating />
    </div>
  );
}
