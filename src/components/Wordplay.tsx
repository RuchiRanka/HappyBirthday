import React from "react";
import Input from "./Input";

export default function Wordplay() {
  let answerString = "SRITIKQEFOURDRIIDEGOATNADMSE".split("");
  let gameSolved = false;
  function handleInputChange() {
    const inputElems = document.getElementsByTagName("input");
    let inputElemsNotDisabled = [];
    for (let i = 0; i < inputElems.length; i++) {
      if (!inputElems[i].disabled) {
        inputElemsNotDisabled.push(inputElems[i]);
      }
    }
    // console.log(inputElemsNotDisabled);
    if (inputElemsNotDisabled.length > 0) {
      for (let i = 0; i < inputElemsNotDisabled.length; i++) {
        // console.log(answerString[i] + " " + inputElemsNotDisabled[i].value);
        if (answerString[i] === inputElemsNotDisabled[i].value) {
          inputElemsNotDisabled[i].disabled = true;
          answerString.splice(i, 1);
          if (inputElemsNotDisabled.length === 5) gameSolved = true;
          break;
        }
      }
    }
    // console.log(gameSolved);
    if (gameSolved) {
      // console.log("Game solved!");
      let gamesSolved = sessionStorage.getItem("gamesSolved")?.split(",");
      // let gamesSolved = localStorage.getItem("gamesSolved")?.split(",");
      gamesSolved![0] = "true";
      sessionStorage.setItem("gamesSolved", gamesSolved!.join(","));
      // localStorage.setItem("gamesSolved", gamesSolved!.join(","));
    }
  }

  return (
    <div className="wordplay">
      <table className="wordplay-table">
        {/* 1st row */}
        <tr id="first-row">
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={false} onChange={handleInputChange} />
        </tr>
        {/* 2nd row */}
        <tr id="second-row">
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
        </tr>
        {/* 3rd row */}
        <tr id="third-row">
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
        </tr>
        {/* 4th row */}
        <tr id="fourth-row">
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
        </tr>
        {/* 5th row */}
        <tr id="fifth-row">
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
        </tr>
        {/* 6th row */}
        <tr id="sixth-row">
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
        </tr>
        {/* 7th row */}
        <tr id="seventh-row">
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
        </tr>
        {/* 8th row */}
        <tr id="eighth-row">
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
        </tr>
        {/* 9th row */}
        <tr id="ninth-row">
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={false} onChange={handleInputChange} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
          <Input isDisabled={true} />
        </tr>
      </table>
      <div className="wordplay-details">
        <h4>DOWN</h4>
        <p>1. First K-drama you ever saw!</p>
        <p>2. Friends? ____! Complete the sentence.</p>
        <h4>RIGHT</h4>
        <p>1. Birthday Boy's Name</p>
        <p>2. How many brothers you got?</p>
        <p>3. Who was your first ever pet?</p>
        <h4>ACROSS</h4>
        <p>1. Favourite color</p>
      </div>
    </div>
  );
}
