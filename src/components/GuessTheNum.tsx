import React, { useState } from "react";

export default function GuessTheNum() {
  let guessedNum: number;
  let setGuessedNum: any;
  [guessedNum, setGuessedNum] = useState(0);
  const [generatedNum, setGeneratedNum] = useState(
    Math.floor(Math.random() * 11)
  );

  let [guessStatus, setGuessStatus] = useState("");

  function onClickMatchGuess() {
    if (Number(guessedNum) === generatedNum) {
      setGuessStatus("Matched. You've entered new game!");
      // console.log(guessedNum + " " + generatedNum + "number is matched");
      // console.log("Game solved!");
      let gamesSolved = sessionStorage.getItem("gamesSolved")?.split(",");
      // let gamesSolved = localStorage.getItem("gamesSolved")?.split(",");
      gamesSolved![3] = "true";
      sessionStorage.setItem("gamesSolved", gamesSolved!.join(","));
      // localStorage.setItem("gamesSolved", gamesSolved!.join(","));
      newGame();
    } else if (Number(guessedNum) < generatedNum) {
      setGuessStatus("Guess a greater number!");
      // console.log(guessedNum + " " + generatedNum + "Warmer");
    } else {
      setGuessStatus("Guess a smaller number!");
      // console.log(guessedNum + " " + generatedNum + "Colder");
    }
  }

  function newGame() {
    setGuessedNum(0);
    setGeneratedNum(Math.floor(Math.random() * 101));
  }

  function handleChange(e: any) {
    e.preventDefault();
    setGuessedNum(e.target.value);
  }

  return (
    <div>
      <div>Guess the Number</div>
      <p>Between 0 to 100</p>
      <input type="number" value={guessedNum} onChange={handleChange} />

      <button onClick={onClickMatchGuess}>Submit Guess</button>
      <div>{guessStatus}</div>
    </div>
  );
}
