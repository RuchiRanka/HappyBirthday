import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Games from "./components/Games";
import Gifts from "./components/Gifts";
import MemoryLane from "./components/MemoryLane";
import Home from "./components/Home";

function App() {
  if (sessionStorage.getItem("gamesSolved") === null) {
    sessionStorage.setItem("gamesSolved", "false,false,false,false,false");
  }
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
      <div className="App">
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path={process.env.REACT_APP_FOR_PATH + "/home"}
              element={<Home />}
            ></Route>
            <Route
              path={process.env.REACT_APP_FOR_PATH + "/memory-lane"}
              element={<MemoryLane />}
            ></Route>
            <Route
              path={process.env.REACT_APP_FOR_PATH + "/games"}
              element={<Games />}
            ></Route>
            <Route
              path={process.env.REACT_APP_FOR_PATH + "/gifts"}
              element={<Gifts />}
            ></Route>
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;