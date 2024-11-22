import React, { useState } from "react";
import GiftBox from "./GiftBox";

export default function Gifts() {
  let [giftCardClassNames, setGiftCardClassNames] = useState([
    "gift-card",
    "gift-card",
    "gift-card",
    "gift-card",
    "gift-card",
  ]);

  let giftItems = ["👕", "🧺", "🎥🎟️", "🍝😋", "💝🍫"];

  function revealGift(idx: number): any {
    let gamesSolved = sessionStorage.getItem("gamesSolved")?.split(",");
    // let gamesSolved = localStorage.getItem("gamesSolved")?.split(",");
    if (gamesSolved![idx] === "true") {
      setGiftCardClassNames((prev) =>
        prev.map((clicked, i) =>
          i === idx ? clicked + " gift-reveal" : clicked
        )
      );
    }
  }
  return (
    <div className="gifts">
      <div className="tab-page-desc">
        Play the games in the 'Games' tab to unlock your presents! Good luck!
      </div>
      <div className="gift-boxes">
        {giftCardClassNames.map((elem, idx) => (
          <div className="gift" onClick={() => revealGift(idx)}>
            <div className={elem}>{giftItems[idx]}</div>
            <GiftBox />
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
