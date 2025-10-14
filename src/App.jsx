import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Home from './pages/Home.jsx';
import SriLanka from './pages/SriLanka.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';
import Maldives from './pages/Maldives.jsx';
import Lakshadweep from './pages/Lakshadweep.jsx';
import International from './pages/International.jsx';
import Domestic from './pages/Domestic.jsx';
import Blog from "./pages/Blog";
import BlogDetails from './pages/blogDetails.jsx';

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Page transition wrapper
function PageTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full relative">
        {/* Soft Pastel Dream Gradient */}
        <div
          className="fixed inset-0 z-0 h-full w-full"
          style={{
            background: `linear-gradient(135deg,rgb(255, 255, 255) 0%, #FDD5B4 25%, #FFF2CC 50%, #E1F5FE 75%, #BBDEFB 100%)`,
          }}
        />

        <div className="relative z-10">
          <ScrollToTop />
          <Navbar />
          <div className="pt-20">
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/srilanka" element={<SriLanka />} />
                <Route path="/maldives" element={<Maldives />} />
                <Route path="/lakshadweep" element={<Lakshadweep />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/international" element={<International />} />
                <Route path="/domestic" element={<Domestic />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
              </Routes>
            </PageTransition>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;