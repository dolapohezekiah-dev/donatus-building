import React, { useLayoutEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import QuotePage from './pages/QuotePage';
import FaqsPage from './pages/FaqsPage';
import ContactPage from './pages/ContactPage';

// FIX: Refactored ScrollToTop to be a self-contained effect component that returns null.
// This is a more idiomatic approach in React Router v6 and avoids composition issues.
const ScrollToTop = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      {/* FIX: Invoked ScrollToTop here. It will apply to all route changes. */}
      <ScrollToTop />
      <div className="bg-white text-gray-800 font-sans">
        <Header />
        <main className="pt-20">
          {/* FIX: Routes are no longer wrapped, resolving the children prop error. */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
