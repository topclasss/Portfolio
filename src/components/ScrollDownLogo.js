import React, { useState, useEffect, useRef } from "react";
import { ScrollDownLogoContainer, Arrow } from "../styles/styledComponents";

const ScrollDownLogo = () => {
  const scrollDownLogoRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeOutThreshold = 100;
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        const contactSectionRect = contactSection.getBoundingClientRect();

        if (
          contactSectionRect.top < window.innerHeight &&
          contactSectionRect.bottom >= 0
        ) {
          setShowArrow(false);
        }
      }

      if (scrollPosition <= fadeOutThreshold && !showArrow) {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showArrow]);

  return (
    <ScrollDownLogoContainer ref={scrollDownLogoRef} showArrow={showArrow}>
      <Arrow></Arrow>
    </ScrollDownLogoContainer>
  );
};

export default ScrollDownLogo;
