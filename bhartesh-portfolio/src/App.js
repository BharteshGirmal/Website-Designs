import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/Navbar.component';
import HeroSection from './Components/HeroSection.component';
import CertificationsSection from './Components/CertificateSection.component';
import TechnologySection from './Components/TechnologySection.component';
import ProjectSection from './Components/ProjectSection.component';
import ContactSection from './Components/ContactusSection.component';
import FooterSection from './Components/FooterSection.component';
import WorkSection from './Components/WorkSection.component';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <MyNavbar />
        <HeroSection />
        <WorkSection />
        <CertificationsSection />
        <TechnologySection />
        <ProjectSection />
        <ContactSection />
        <FooterSection />
      </div>
      <Routes>
        {/* Define navigable routes */}
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path="/WorkSection" element={<WorkSection />} />
        <Route path="/CertificateSection" element={<CertificationsSection />} />
        <Route path="/TechnologySection" element={<TechnologySection />} />
        <Route path="/ProjectSection" element={<ProjectSection />} />
        <Route path="/ContactSection" element={<ContactSection />} />
      </Routes>
  </>
  );
}

export default App;
