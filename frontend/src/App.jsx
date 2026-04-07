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
        <title>M8-BID | Empowering Visionaries & Elite Capital</title>
        <meta name="description" content="Next-generation crowdfunding connecting global visionaries with elite strategic capital partners." />
        <meta property="og:title" content="M8-BID | Elite Crowdfunding Platform" />
        <meta property="og:description" content="Transform extraordinary sparks into market-defining landmarks through our secure, transparent platform." />
        <meta property="og:type" content="website" />
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
