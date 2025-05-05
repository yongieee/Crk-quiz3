import React from "react";
import "./css/whitelily.css";
import gifImage from './css/whitelily-imgs/lily-pic.webp'; 

export default function WhiteLily() {
  return (
    <div className="whitelily-wrapper">
      <div className="whitelily-content-row">


        <div className="whitelily-image">
          <img src={gifImage} alt="White Lily Cookie" className="whitelily-gif-image" />
        </div>


        <div className="whitelily-text-box">
          <div className="whitelily-text-scroll">
            <h1>White Lily Cookie</h1>
            <p>
              White Lily Cookie is a gentle and graceful being who radiates purity and elegance. She is known for her wisdom and nurturing personality, always willing to offer kindness and guidance to those in need.
              White Lily symbolizes grace, compassion, and peace among the Ancient Cookies.
            </p>
            <p><strong>Story:</strong></p>

            <div className="whitelily-video-preview">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hYkJGsFJUIU?si=2bA87eUNcBd4uB1A" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

