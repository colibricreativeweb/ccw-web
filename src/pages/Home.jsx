import React, { useEffect } from "react";

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Showcase from "../partials/Showcase";
import ButtonUp from '../utils/ButtonUp';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';
/* import WhatsApp from "../utils/WhatsApp"; */

export default function Home() {
  useEffect(() => {
    document.title = "Colibri Creative Web - Home";
  }, []);
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Showcase />
        <Testimonials />
        <Newsletter />
        <ButtonUp />
        {/* <WhatsApp /> */}

      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />

    </div>
  );
}
