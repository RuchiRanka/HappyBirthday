import React, { useState } from "react";
import Countdown from "./Countdown";
import Map from "../images/map.png";
import TreasureHunt from "../images/treasure-hunt.png";
import ImageEnlarge from "./ImageEnlarge";
import TreasureCoinsSound from "../sounds/treasure-coins-sound.mp3";

export default function Home() {
  const [mapOpen, setMapOpen] = useState(false);
  function revealImg() {
    setMapOpen(true);
    new Audio(TreasureCoinsSound).play();
    // console.log(mapOpen);
  }

  function closePopup() {
    setMapOpen(false);
  }
  return (
    <div>
      <Countdown></Countdown>
      <div className="home-desc-div">
        <p className="home-desc-title">
          Many Many Happy Returns of the Day, Ritik!
        </p>
        <p className="home-desc">
          Navigate your way through these dreamy tabs to find surprises and
          unveil your gifts. Don't forget to have fun and come back to check out
          where your gifts are hidden! Click on the map below when you're ready
          to start your quest!
        </p>
        <div className="icon-secret-div-1">
          <ImageEnlarge
            revealImg={revealImg}
            closePopup={closePopup}
            secretImgClassFunc={mapOpen}
            displayImgSrc={Map}
            secretImgSrc={TreasureHunt}
            displayImgIconClass="icon-secret"
          />
        </div>
      </div>
    </div>
  );
}
