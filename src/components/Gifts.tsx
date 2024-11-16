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
      {/* <div className="gift" onClick={() => revealGift(0)}>
        <div className={giftCardClassNames[0]}>Shirts</div>
        <GiftBox />
      </div> */}
      {giftCardClassNames.map((elem, idx) => (
        <div className="gift" onClick={() => revealGift(idx)}>
          <div className={elem}>{giftItems[idx]}</div>
          <GiftBox />
        </div>
      ))}
      ;
    </div>
  );
}
