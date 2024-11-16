import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Games from "./components/Games";
import Gifts from "./components/Gifts";
import MemoryLane from "./components/MemoryLane";
import Home from "./components/Home";

function App() {
  if (sessionStorage.getItem("gamesSolved") === null) {
    sessionStorage.setItem("gamesSolved", "false,false,false,false,false");
  }
  const shouldRedirect = true;
  const navigate = useNavigate();
  useEffect(() => {
    if (shouldRedirect) {
      navigate("/home");
    }
  });
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
      <div className="App">
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
