import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; 
import TopSection from "../HomePage/TopSection";
import CardSectionPage from "../HomePage/CardSectionPage";
import ServicesHeader from "../HomePage/ServicesHeader";
import ClientPage from "../HomePage/ClientPage";
import SuccessPage from "../HomePage/SuccessPage";
import AskedQuestion from "../HomePage/AskedQuestion";


const Home = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
        <TopSection />
        <CardSectionPage />
        <ServicesHeader />
        <ClientPage />
      <SuccessPage />
      <AskedQuestion/>
      {showButton && (
        <button
          className="fixed top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white p-1 rounded-md"
          onClick={scrollToTop}
        >
          <FaArrowUp />
          <bdo
            dir="rtl"
            style={{ writingMode: "vertical-lr", textOrientation: "revert" }}
          >
            Scroll To Top
          </bdo>
        </button>
      )}
    </div>
  );
};

export default Home;
