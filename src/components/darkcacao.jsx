import React from "react";
import "./css/darkcacao.css";
import gifImage from './css/darkcacao-imgs/dark.webp';

export default function DarkCacao() {
  return (
    <div className="darkcacao-wrapper">
      <div className="darkcacao-content-row">
        <div className="darkcacao-image">
          <img src={gifImage} alt="Animated GIF" className="darkcacao-gif-image" />
        </div>
        <div className="darkcacao-text-box">
          <div className="darkcacao-text-scroll">
            <h1>Dark Cacao</h1>
            <p>
              Dark Cacao Cookie ang founder at hari ng Dark Cacao Kingdom. Siya rin ang ama ni Head Icon Dark Choco Cookie, pero itinakwil niya ito matapos sirain ni Dark Choco ang kaharian.
              Nasa kanya ang Light of Resolution sa kanyang Soul Jam—counterpart ito ng Light of Apathy ni Head Icon Mystic Flour Cookie.
            </p>
            <p><strong>Kuwento:</strong></p>
            <div className="darkcacao-video-preview">
              <iframe
                width="560" height="315"
                src="https://www.youtube.com/embed/UE4FPmsriCA?si=T7H79vNcICPxgf1D"
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
