import React, { useMemo } from "react";
import "./css/loader.css";
import gif1 from "./css/bg-home/loading1.gif";
import gif2 from "./css/bg-home/loading2.gif";
import gif3 from "./css/bg-home/loading3.gif";
import bg1 from "./css/bg-home/bg1.png";
import bg2 from "./css/bg-home/bg2.png";
import bg3 from "./css/bg-home/bg3.png";

export default function Loader() {
  const gifOptions = [gif1, gif2, gif3];
  const bgOptions = [bg1, bg2, bg3];

//taga random
  const randomGif = useMemo(() => gifOptions[Math.floor(Math.random() * gifOptions.length)], []);
  const randomBg = useMemo(() => bgOptions[Math.floor(Math.random() * bgOptions.length)], []);

  return (
    <div
      className="loader-container"
      style={{ backgroundImage: `url(${randomBg})` }}
    >
      <img src={randomGif} alt="Loading..." className="loader-gif" />
      <p className="loader-text">Loading...</p>
    </div>
  );
}

