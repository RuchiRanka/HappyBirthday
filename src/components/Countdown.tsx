import React, { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

export default function Countdown() {
  const currentTime = new Date().getTime();
  const bdayTime = new Date(2024, 10, 14, 18, 29).getTime();
  const [timeLeft, setTimeLeft] = useState(
    Math.floor((bdayTime - currentTime) / 1000)
  );

  const [timeLeftInDays, setTimeLeftInDays] = useState(0);
  const [timeLeftInHrs, setTimeLeftInHrs] = useState(0);
  const [timeLeftInMins, setTimeLeftInMins] = useState(0);
  const [timeLeftInSecs, setTimeLeftInSecs] = useState(0);

  const [bdayReached, setBdayReached] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setBdayReached(true);
      bdayReachedFn();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
      let secsLeft = timeLeft;
      setTimeLeftInDays(Math.floor(secsLeft / (60 * 60 * 24)));
      secsLeft = timeLeft % (60 * 60 * 24);
      setTimeLeftInHrs(Math.floor(secsLeft / (60 * 60)));
      secsLeft = secsLeft % (60 * 60);
      setTimeLeftInMins(Math.floor(secsLeft / 60));
      secsLeft = secsLeft % 60;
      setTimeLeftInSecs(Math.floor(secsLeft));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="countdown">
      <div
        className="beforeBday"
        style={{ display: !bdayReached ? "flex" : "none" }}
      >
        <div>{timeLeftInDays} Days</div>
        <div>{timeLeftInHrs} Hours</div>
        <div>{timeLeftInMins} Minutes</div>
        <div>{timeLeftInSecs} Seconds</div>
      </div>
      {/* {bdayReached && <Confetti></Confetti>} */}
      <div
        className="afterBday"
        style={{ display: bdayReached ? "flex" : "none" }}
      >
        <div>
          Happy Birthday Ritik!!!
          <br />
          Hope you have the best time ever!
        </div>
      </div>
    </div>
  );
}

function bdayReachedFn() {
  confetti({
    particleCount: 500,
    startVelocity: 50,
    spread: 360,
    angle: 120,
    origin: { x: 0.5, y: 0.5 },
    ticks: 10000,
  });
  // console.log(window.location);
  setInterval(() => {
    if (window.location.pathname === "/home") {
      // console.log("confetti");
      confetti({
        particleCount: 500,
        startVelocity: 50,
        spread: 360,
        angle: 120,
        origin: { x: Math.random(), y: Math.random() },
        ticks: 10000,
      });
    }
  }, 15000);
}
