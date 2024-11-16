import React from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

export default function Confetti() {
  return (
    <div>
      <Fireworks
        autorun={{ speed: 3, duration: 20000 }}
        className="fireworks"
      ></Fireworks>
    </div>
  );
}
