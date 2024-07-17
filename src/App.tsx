import React from "react";
import Layout from "./components/Layout";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <section id="about">
          <h2>About</h2>
          <p>Allen Aby</p>
        </section>
        <section id="services">
          <h2>Services</h2>
          <p>Details of the services you offer</p>
        </section>
        <section id="plans">
          <h2>Plan</h2>
          <p>Pricing Details</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Your contact details.</p>
        </section>
      </Layout>
    </div>
  );
};

export default App;
