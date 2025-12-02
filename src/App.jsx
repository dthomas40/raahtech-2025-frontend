import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer';
import SolutionsPage from './pages/SolutionsPage';
import ExplorePage from './pages/ExplorePage';
import ContactPage from './pages/ContactPage';
import DarkModeToggle from './components/DarkModeToggle';
import BreachPage from './pages/BreachPage';
import ScrollToTop from './components/ScrollToTop';
import SolutionsUseCaseDetailedViewPage from './pages/SolutionsUseCaseDetailedViewPage';
import SolutionsPlatformDetailedViewPage from './pages/SolutionsPlatformDetailedViewPage';
import SolutionsIndustryDetailedViewPage from './pages/SolutionsIndustryDetailedViewPage';
import ExploreWhitepaperDetailedViewPage from './pages/ExploreWhitepaperDetailedViewPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ExploreNewsLetterDetailedViewPage from './pages/ExploreNewsLetterDetailedViewPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Header />
      <DarkModeToggle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/breach" element={<BreachPage />} />
        <Route path="/usecases/:id" element={<SolutionsUseCaseDetailedViewPage />} />
        <Route path="/platforms/:id" element={<SolutionsPlatformDetailedViewPage />} />
        <Route path="/industries/:id" element={<SolutionsIndustryDetailedViewPage />} />
        <Route path="/whitepapers/:id" element={<ExploreWhitepaperDetailedViewPage />} />
        <Route path="/newsletter/:id" element={<ExploreNewsLetterDetailedViewPage />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditionsPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />

        {/* Catch-all: redirect to home */}
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
