import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/menu.css";

export default function Menu() {
  const [fallingIndex, setFallingIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showJumpscare, setShowJumpscare] = useState(false);
  const location = useLocation();

  const links = [
    { name: "HOME", path: "/", img: require('./css/bg-home/home1-menu.webp') },
    { name: "PURE VANILLA", path: "/pure-vanilla", img: require('./css/pure-imgs/menu-pure.webp') },
    { name: "DARK CACAO", path: "/dark-cacao", img: require('./css/darkcacao-imgs/dark-menu.webp') },
    { name: "GOLDEN CHEESE", path: "/golden-cheese", img: require('./css/goldcheese-imgs/menu-gold.webp') },
    { name: "HOLLY BERRY", path: "/holly-berry", img: require('./css/hollyberry-imgs/menu-berry.webp') },
    { name: "WHITE LILY", path: "/white-lily", img: require('./css/whitelily-imgs/menu-white.webp') },
  ];

  const handleClick = (index) => {
    setFallingIndex(index);
    setTimeout(() => setFallingIndex(null), 2000);
    setIsOpen(false);
  };

  const triggerJumpscare = () => {
    setShowJumpscare(true);
    setTimeout(() => setShowJumpscare(false), 2000); // 2 seconds then hide
  };

  return (
    <>
      <div className={`anime-navbar ${isOpen ? "nav-open" : ""}`}>
        <div className="anime-logo" onClick={triggerJumpscare}>
          <img src={require('./cat-cute.gif')} alt="cookie gif" className="logo-gif" />
          <span>YONG</span><span className="dim">.IE</span>
        </div>

        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="anime-nav-links">
          {links.map((link, index) => (
            <Link
              id={`menu-item-${index}`}
              key={index}
              to={link.path}
              className={`anime-nav-item ${fallingIndex === index ? "fall-animation" : ""} ${
                location.pathname === link.path ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {link.name}
              <div className="hover-reveal">
                <img src={link.img} alt="hover preview" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {showJumpscare && (
        <div className="jumpscare-overlay">
          <img src={require('./jumpscare.gif')} alt="Jumpscare!" />
        </div>
      )}
    </>
  );
}
