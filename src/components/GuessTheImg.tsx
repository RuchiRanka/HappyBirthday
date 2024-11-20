import React, { useEffect, useState } from "react";
import Well from "../images/well.gif";
import Firecracker from "../images/firecracker.gif";
import Pizza from "../images/pizza.gif";

export default function GuessTheImg() {
  const hints = [
    "'Let's go home!', Dad yelled",
    "It's Diwali!!",
    "You ate this for the first time in 2020!",
  ];
  const answers = ["WELL", "FIREWORK,FIRECRACKER", "PIZZA,CHEESE"];
  const answerExplanations = [
    "Your dad were searching for you in the entire village to take you home from your Nani's, but you hid in the, well, WELL!",
    "You, unintentionally, injured your brother when you were young, with a firework or firecracker(depends on what you call 'em!)",
    "Once upon a time, you went for a treat, A hot cheesy pizza, oh what a feat! But the cheese was too hot, a molten surprise, So you took it off quick, bread only, no lies!",
  ];
  const imgData = [Well, Firecracker, Pizza];

  const [hintClicked, setHintClicked] = useState([false, false, false]);
  const [ansClicked, setAnsClicked] = useState([false, false, false]);
  const [ansEntered, setAnsEntered] = useState(["", "", ""]);
  const [matchedStatus, setMatchedStatus] = useState([false, false, false]);

  function clickHint(e: any, idx: number): any {
    e.preventDefault();
    // setHintClicked((prevValue) => {
    //   prevValue[idx] = true;
    //   console.log(prevValue);
    //   return prevValue;
    // });
    setHintClicked((prev) =>
      prev.map((clicked, i) => (i === idx ? true : clicked))
    );
    console.log(hintClicked);
  }

  function submitAnswer(idx: number): any {
    setAnsClicked((prev) =>
      prev.map((clicked, i) => (i === idx ? true : clicked))
    );
    if (answers[idx].split(",").includes(ansEntered[idx])) {
      setMatchedStatus((prev) =>
        prev.map((clicked, i) => (i === idx ? true : clicked))
      );
    }
  }

  function handleChange(e: any, idx: number) {
    e.preventDefault();
    setAnsEntered((prevValue) => {
      prevValue[idx] = e.target.value.toUpperCase();
      console.log(prevValue);
      return prevValue;
    });
  }

  useEffect(() => {
    console.log(matchedStatus);
    if (!matchedStatus.includes(false)) {
      console.log("Game solved!");
      let gamesSolved = sessionStorage.getItem("gamesSolved")?.split(",");
      // let gamesSolved = localStorage.getItem("gamesSolved")?.split(",");
      gamesSolved![1] = "true";
      sessionStorage.setItem("gamesSolved", gamesSolved!.join(","));
      // localStorage.setItem("gamesSolved", gamesSolved!.join(","));
    }
  }, [matchedStatus]);

  return (
    <div>
      <p>
        Each image resembles something important from Ritik's childhood, can you
        guess them correctly? Let's find out!
      </p>
      <div className="guess-img-container">
        {answerExplanations.map((elem, idx) => (
          <div className="guess-img">
            {/* <div> */}
            <img src={imgData[idx]} alt={"img" + idx} />
            <button onClick={(e) => clickHint(e, idx)}>Hint</button>
            {/* </div>
            <div> */}
            <p>{hintClicked[idx] ? hints[idx] : ""}</p>
            <input type="text" onChange={(e) => handleChange(e, idx)} />
            <button onClick={() => submitAnswer(idx)}>Submit Answer</button>
            <p>{matchedStatus[idx] ? "Matched" : "Not Matched"}</p>
            <p>{ansClicked[idx] ? elem : ""}</p>
            {/* </div> */}
          </div>
        ))}
        {/* <div>
          <img src="" alt="img1" />
          <button onClick={clickHint(1)}>Hint</button>
          <p>{hintClicked[1] ? hints[1] : ""}</p>
          <input
            type="text"
            value={ansEntered}
            onChange={(e) => handleChange(e, 1)}
          />
          <button onClick={submitAnswer(1)}>Submit Answer</button>
          <p></p>
          <p>{ansClicked[1] ? answerExplanations[1] : ""}</p>
        </div>

        <div>
          <img src="" alt="img2" />
          <button onClick={clickHint(2)}>Hint</button>
          <p>{hintClicked[2] ? hints[2] : ""}</p>
          <input
            type="text"
            value={ansEntered}
            onChange={(e) => handleChange(e, 2)}
          />
          <button onClick={submitAnswer(2)}>Submit Answer</button>
          <p></p>
          <p>{ansClicked[2] ? answerExplanations[2] : ""}</p>
        </div>

        <div>
          <img src="" alt="img3" />
          <button onClick={clickHint(3)}>Hint</button>
          <p>{hintClicked[3] ? hints[3] : ""}</p>
          <input
            type="text"
            value={ansEntered}
            onChange={(e) => handleChange(e, 3)}
          />
          <button onClick={submitAnswer(3)}>Submit Answer</button>
          <p></p>
          <p>{ansClicked[3] ? answerExplanations[3] : ""}</p>
        </div> */}
      </div>
    </div>
  );
}