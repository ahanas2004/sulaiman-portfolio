import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import RootLayout from './layouts/RootLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

// Category Pages
import PostersPage from './pages/PostersPage';
import LogosPage from './pages/LogosPage';
import BrandingPage from './pages/BrandingPage';
import FlyersPage from './pages/FlyersPage';
import MockupsPage from './pages/MockupsPage';
import SocialMediaPage from './pages/SocialMediaPage';
import AIWorksPage from './pages/AIWorksPage';
import VideosPage from './pages/VideosPage';

// ScrollToTop component to ensure pages start at top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  
  import('react').then(React => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  });
  
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          <Route path="/posters" element={<PostersPage />} />
          <Route path="/logos" element={<LogosPage />} />
          <Route path="/branding" element={<BrandingPage />} />
          <Route path="/flyers" element={<FlyersPage />} />
          <Route path="/mockups" element={<MockupsPage />} />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/ai-works" element={<AIWorksPage />} />
          <Route path="/videos" element={<VideosPage />} />
          
          <Route path="/project/:slug" element={<ProjectDetailPage />} />
          
          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}
