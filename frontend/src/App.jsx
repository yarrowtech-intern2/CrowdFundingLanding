import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Investor from "./Components/Investor";
import Fundraiser from "./Components/Fundraiser";
import Security from "./Components/Security";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Floating from "./Components/Floating";

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Crowd Funding - Empowerment through Community</title>
        <meta name="description" content="A next-generation crowd funding platform connecting visionaries with investors for impactful projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Header />
      <Hero />
      <Investor />
      <Fundraiser />
      <About />
      <Security />
      <Contact />
      <Footer />
      <Floating />
    </HelmetProvider>
  );
};

export default App;
