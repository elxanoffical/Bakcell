import EsimSection from "@/components/eSimSection";
import FeatureCarousel from "@/components/featureCarousel";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MobileAppPromo from "@/components/mobilAppProma";
import TariffSlider from "@/components/tariffSlider";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TariffSlider />
      <EsimSection />
      <MobileAppPromo />
      <FeatureCarousel/>
      <Footer/>
    </>
  );
}
