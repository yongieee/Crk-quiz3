import React from "react";
import "./css/hollyberry.css";
import gifImage from './css/hollyberry-imgs/berry-pic.webp';

export default function HollyBerry() {
  return (
    <div className="hollyberry-wrapper">
      <div className="hollyberry-content-row">
        <div className="hollyberry-image">
          <img src={gifImage} alt="Hollyberry Cookie" className="hollyberry-gif-image" />
        </div>
        <div className="hollyberry-text-box">
          <div className="hollyberry-text-scroll">
            <h1>Hollyberry Cookie</h1>
            <p>
              Hollyberry Cookie is a brave and noble warrior who leads her army with honor and courage. She defends the Kingdom with her indomitable will and legendary strength, ready to protect her people at all costs.
              Hollyberry symbolizes honor, loyalty, and selflessness among the Ancient Cookies.
            </p>
            <p><strong>Story:</strong></p>
            <div className="hollyberry-video-preview">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/44gfs1mBxG8?si=cHx7_9sLFB4wXIHJ"
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
