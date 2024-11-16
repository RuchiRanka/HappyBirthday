import React from "react";
import Wordplay from "./Wordplay";
import QuizMCQ from "./QuizMCQ";
import GuessTheImg from "./GuessTheImg";
import MemoryGame from "./MemoryGame";
import GuessTheNum from "./GuessTheNum";
import RockPaperScissor from "./RockPaperScissor";

export default function Games() {
  return (
    <div className="games">
      <div className="game-div">
        <Wordplay />
      </div>
      <div className="game-div">
        <GuessTheImg />
      </div>
      <div className="game-div">
        <MemoryGame />
      </div>
      <div className="game-div">
        <GuessTheNum />
      </div>
      <div className="game-div">
        <RockPaperScissor />
      </div>
      {/* <QuizMCQ /> */}
      {/* <MemoryGame /> */}
    </div>
  );
}
