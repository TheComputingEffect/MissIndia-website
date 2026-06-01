import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from "lenis";
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Events from './pages/Events';
import DJServices from './pages/DJServices';
import DanceCrew from './pages/DanceCrew';
import ComingSoon from './pages/ComingSoon';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

// New Event Pages
import WeddingEngagementEvents from './pages/WeddingEngagementEvents';
import PubertyCeremonyEvents from './pages/PubertyCeremonyEvents';
import BabyShowerEvents from './pages/BabyShowerEvents';
import CollaborationModellingShoots from './pages/CollaborationModellingShoots';
import CorporateEvents from './pages/CorporateEvents';
import SurpriseEvents from './pages/SurpriseEvents';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<ComingSoon title="About Us" />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/dj-services" element={<DJServices />} />
            <Route path="/events/dance-crew" element={<DanceCrew />} />
            
            {/* Wedding & Engagement Routes */}
            <Route path="/wedding-engagement-events" element={<WeddingEngagementEvents />} />
            <Route path="/events/wedding-engagement-events" element={<WeddingEngagementEvents />} />
            
            {/* Puberty Ceremony Routes */}
            <Route path="/puberty-ceremony-events" element={<PubertyCeremonyEvents />} />
            <Route path="/events/puberty-ceremony-events" element={<PubertyCeremonyEvents />} />
            
            {/* Baby Shower Routes */}
            <Route path="/baby-shower-events" element={<BabyShowerEvents />} />
            <Route path="/events/baby-shower-events" element={<BabyShowerEvents />} />
            
            {/* Collaboration & Modelling Routes */}
            <Route path="/collaboration-modelling-shoots" element={<CollaborationModellingShoots />} />
            <Route path="/events/collaboration-modelling-shoots" element={<CollaborationModellingShoots />} />
            
            {/* Corporate Routes */}
            <Route path="/corporate-events" element={<CorporateEvents />} />
            <Route path="/events/corporate-events" element={<CorporateEvents />} />
            
            {/* Surprise Events Routes */}
            <Route path="/surprise-events-for-loved-ones" element={<SurpriseEvents />} />
            <Route path="/events/surprise-events-for-loved-ones" element={<SurpriseEvents />} />
            
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/gallery" element={<ComingSoon title="Gallery" />} />
            <Route path="/packages" element={<ComingSoon title="Packages" />} />
            <Route path="/blogs" element={<ComingSoon title="Blogs" />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
