// App.tsx
import React from "react";
import Layout from "./components/Layout";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PlansSection from "./components/PlansSection";
import ContactSection from "./components/ContactSection";
import FAQ from "./components/FAQSection";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <AboutSection />
        <ServicesSection />
        <PlansSection />
        <ContactSection />
        <FAQ />
      </Layout>
    </div>
  );
};

export default App;
