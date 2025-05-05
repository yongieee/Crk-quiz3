import React from "react";
import "./css/goldcheese.css";
import gifImage from './css/goldcheese-imgs/gold-pic.webp';

export default function GoldenCheese() {
  return (
    <div className="goldencheese-wrapper">
      <div className="goldencheese-content-row">
        <div className="goldencheese-image">
          <img src={gifImage} alt="Animated GIF" className="goldencheese-gif-image" />
        </div>
        <div className="goldencheese-text-box">
          <div className="goldencheese-text-scroll">
            <h1>Golden Cheese</h1>
            <p>
              Golden Cheese Cookie is the radiant ruler of the Golden Cheese Kingdom. Known for her brilliance, she commands both admiration and immense power from her citizens and treasures alike.
              She symbolizes wealth, ambition, and legacy among the Ancient Cookies.
            </p>
            <p><strong>Story:</strong></p>
            <div className="goldencheese-video-preview">
              <iframe
                width="560" height="315"
                src="https://www.youtube.com/embed/kG0LXSzS7xM?si=XoigIszK0e7AaFOB"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
