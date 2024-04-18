import { useEffect, useRef } from "react";
import gsap from "gsap";
import rnvLogo from "../assets/rnv-logo.svg";

const Logo = () => {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const logo = logoRef.current;

    if (!logo) return;

    const hoverAnimation = gsap.to(logo, {
      rotation: 360,
      duration: 1,
      ease: "power2.inOut",
    });

    const unhoverAnimation = gsap.to(logo, {
      rotation: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    const handleMouseEnter = () => {
      hoverAnimation.restart();
    };

    const handleMouseLeave = () => {
      unhoverAnimation.restart();
    };

    logo.addEventListener("mouseenter", handleMouseEnter);
    logo.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      logo.removeEventListener("mouseenter", handleMouseEnter);
      logo.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div>
      <img
        src={rnvLogo}
        className="logo"
        alt="Retreats and Venues logo"
        aria-label="Retreats and Venues logo"
        ref={logoRef}
      />
    </div>
  );
};

export default Logo;
