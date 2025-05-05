import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/home.css";

import vanilla from "./css/bg-home/vanilla.jpg";
import cacao from "./css/bg-home/cacao.jpg";
import cheese from "./css/bg-home/cheese.jpg";
import berry from "./css/bg-home/berry.jpg";
import lily from "./css/bg-home/lily.jpg";

const cardImages = [vanilla, cacao, cheese, berry, lily];
const cardTitles = ["Pure Vanilla", "Dark Cacao", "Golden Cheese", "Holly Berry", "White Lily"];
const cardDescriptions = [
  "A wise and pure knight with a heart of gold. Protecting the kingdom with wisdom and strength.",
  "A mighty warrior with a dark and bold past. His strength is unmatched on the battlefield.",
  "A cunning and skilled tactician with a taste for the finer things in life. He is as sharp as his intellect.",
  "A fierce protector of the forest, her heart is as strong as the berry thorns she guards.",
  "A graceful and powerful sorceress, wielding the magic of the White Lily to protect the realm."
];

export default function Home() {
  const [showUpButton, setShowUpButton] = useState(false);

  const scrollToTop = () => {
    document.querySelector('.home-container').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="home-container">
        <h1>Welcome to my Kingdom!</h1>
        <p>
          Greetings, fellow adventurer! I am YONG, a Cookie Run Kingdom knight on a quest to bring joy and magic to the digital world!
        </p>
        <button
          className="cta-button"
          onClick={() => {
            document.querySelector('.card-section-wrapper')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Meet the Ancients
        </button>

        {/* Better Styled Down Arrow */}
        <div
          className="scroll-down"
          onClick={() => {
            document.querySelector('.card-section-wrapper')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="down-icon">↓</span>
          <p className="scroll-text">click here!</p>
        </div>
      </div>

      {/* Card Section */}
      <div className="card-section-wrapper" id="meet">
        <h2 className="card-title">Meet the Ancients Heroes</h2>
        <div className="card-section">
          {[1, 2, 3, 4, 5].map((i) => (
            <Link to={`/${cardTitles[i - 1].toLowerCase().replace(" ", "-")}`} key={i}>
              <div className="magic-card">
                <img src={cardImages[i - 1]} alt={`Magic Card ${i}`} />
                <div className="card-info">
                  <h3>{cardTitles[i - 1]}</h3>
                  <p>{cardDescriptions[i - 1]}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Up Button */}
      <div className="up-button" onClick={scrollToTop}>
        ↑
      </div>
    </>
  );
}
