import React, { useState } from "react";
import Rock from "../images/rock.png";
import Paper from "../images/paper.png";
import Scissor from "../images/scissor.png";
import RPSTitleImg from "../images/RPSTitleImg.png";

export default function RockPaperScissor() {
  // let [guessedItem, setGuessedItem] = useState("");
  const [generatedItem, setGeneratedItem] = useState(
    Math.floor(Math.random() * 3)
  );

  let [guessStatus, setGuessStatus] = useState("");
  let [generatedImg, setGeneratedImg] = useState(RPSTitleImg);

  function submitGuessedItem(guessedItem: number) {
    if (generatedItem === 0) {
      setGeneratedImg(Rock);
    } else if (generatedItem === 1) {
      setGeneratedImg(Paper);
    } else {
      setGeneratedImg(Scissor);
    }
    if (
      (guessedItem === 0 && generatedItem === 2) ||
      (guessedItem === 1 && generatedItem === 0) ||
      (guessedItem === 2 && generatedItem === 1)
    ) {
      setGuessStatus("You won!");
      // console.log(guessedItem + " " + generatedItem + "is matched.");
      // console.log("Game solved!");
      let gamesSolved = sessionStorage.getItem("gamesSolved")?.split(",");
      // let gamesSolved = localStorage.getItem("gamesSolved")?.split(",");
      gamesSolved![4] = "true";
      sessionStorage.setItem("gamesSolved", gamesSolved!.join(","));
      // localStorage.setItem("gamesSolved", gamesSolved!.join(","));
    } else if (
      (guessedItem === 0 && generatedItem === 0) ||
      (guessedItem === 1 && generatedItem === 1) ||
      (guessedItem === 2 && generatedItem === 2)
    ) {
      // console.log(guessedItem + " " + generatedItem + "is tied.");
      setGuessStatus("You're tied!");
    } else {
      // console.log(guessedItem + " " + generatedItem + "is not matched.");
      setGuessStatus("You lost!");
    }
    newGame();
  }

  function newGame() {
    // setGuessedItem(-1);
    setGeneratedItem(Math.floor(Math.random() * 3));
  }

  // function handleChange(e: any) {
  //   e.preventDefault();
  //   // setGuessedItem(e.target.value.toUpperCase());
  // }

  return (
    <div>
      <div>Rock, Paper & Scissor</div>
      <div className="rock-paper-scissor">
        <div>
          <img
            src={generatedImg}
            alt="generatedItem"
            className="generated-item"
          />
        </div>
        <p>Enter 'Rock', 'Paper' or 'Scissor'</p>
        {/* <input type="button" value={guessedItem} onChange={handleChange} /> */}
        <div className="guess-rps-btns">
          <button onClick={() => submitGuessedItem(0)}>Rock</button>
          <button onClick={() => submitGuessedItem(1)}>Paper</button>
          <button onClick={() => submitGuessedItem(2)}>Scissor</button>
        </div>
        <div>{guessStatus}</div>
      </div>
    </div>
  );
}
