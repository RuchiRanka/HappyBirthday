import React, { useEffect, useState } from "react";
import MemoryGameData from "../models/MemoryGameData";

type Card = {
  id: number;
  name: string;
  img: string;
  matched: boolean;
};

export default function MemoryGame() {
  const [won, setWon] = useState<number>(0);
  const [firstCard, setFirstCard] = useState<Card | null>(null);
  const [secondCard, setSecondCard] = useState<Card | null>(null);
  const [cardsArray, setCardsArray] = useState<Card[]>([]);
  const [stopFlip, setStopFlip] = useState<boolean>(false);

  useEffect(() => {
    newGame();
  }, []);

  useEffect(() => {
    if (firstCard && secondCard) {
      setStopFlip(true);
      if (firstCard.name === secondCard.name) {
        setCardsArray((prevArray) =>
          prevArray.map((unit) =>
            unit.name === firstCard.name ? { ...unit, matched: true } : unit
          )
        );
        setWon((prevVal) => prevVal + 1);
        removeSelection();
      } else {
        setTimeout(() => {
          removeSelection();
        }, 1000);
      }
    }

    if (won !== 0 && won === cardsArray.length / 2) {
      // console.log("Game solved!");
      let gamesSolved = sessionStorage.getItem("gamesSolved")?.split(",");
      gamesSolved![2] = "true";
      sessionStorage.setItem("gamesSolved", gamesSolved!.join(","));
    }
  }, [firstCard, secondCard, won]);

  function removeSelection() {
    setFirstCard(null);
    setSecondCard(null);
    setStopFlip(false);
  }

  function newGame() {
    const shuffledCards = [...MemoryGameData].sort(() => Math.random() - 0.5);
    setCardsArray(shuffledCards);
    setFirstCard(null);
    setSecondCard(null);
    setWon(0);
  }

  function handleSelectedItem(item: Card): void {
    if (!stopFlip) {
      if (!firstCard) {
        setFirstCard(item);
      } else if (firstCard.id !== item.id) {
        setSecondCard(item);
      }
    }
  }

  return (
    <div className="memory-game">
      {cardsArray.map((item) => (
        <div
          className="card"
          key={item.id}
          onClick={() => handleSelectedItem(item)}
        >
          <div
            className={`card-inner ${
              item === firstCard || item === secondCard || item.matched
                ? "flipped"
                : ""
            }`}
          >
            <div className="card-front">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="card-back"></div>
          </div>
        </div>
      ))}
      {won === cardsArray.length / 2 && <p>You won!</p>}
    </div>
  );
}
