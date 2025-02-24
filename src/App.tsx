import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Calculator, ChevronRight, Clock, IndianRupee, Percent, ShieldCheck, Wallet } from "lucide-react";
import LoanCalculator from "./components/LoanCalculator";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import EligibilitySection from "./components/EligibilitySection";
import DocumentsSection from "./components/DocumentsSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm"; // Import ApplicationForm

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <LoanCalculator />
              <Features />
              <EligibilitySection />
              <DocumentsSection />
              <Footer />  
            </>
          } />
          <Route path="/application-form" element={<ApplicationForm />} /> {/* Correctly placed */}
          <Route path="/apply" element={<ApplicationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
