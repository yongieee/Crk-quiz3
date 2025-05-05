import React from "react";
import "./css/PureVanilla.css"; // Create this CSS file or add styles below
import gifImage from './css/pure-imgs/pure1.webp';

export default function PureVanilla() {
  return (
    <div className="pv-wrapper">
      <div className="pv-content-row">
        
        <div className="pv-image">
          <img src={gifImage} alt="Animated GIF" className="gif-image" />
        </div>
        
        <div className="pv-text-box">
          <div className="pv-text-scroll">
            <h1>Pure Vanilla</h1>
            <p>
            Pure Vanilla Cookie is the founder and former king of the Vanilla Kingdom, appearing prominently in the Castle in the Sky and Timeless Kingdom Episodes of World Exploration, in Cookie Odyssey as the ambassador of his kingdom,
             and in Secrets of the Silver Kingdom as an explorer of Beast-Yeast. 
            He carries the Light of Truth in his Soul Jam, and is the counterpart to Head Icon Shadow Milk Cookie's Light of Deceit.
            </p>
            <p>
              <strong>Story:</strong>
            </p>
            

            <div className="video-preview">
            <iframe 
                width="560" height="315" src="https://www.youtube.com/embed/4G0v07GNHPo?si=Vfw2rco6oMKPY92I" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
