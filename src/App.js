import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const onClickEvent = (e) => {
    const targetValue = e.target.value;
    const Q = document.getElementById(targetValue);
    Q.currentTime = "0";
    Q.play();
  };

  document.addEventListener("keyup", function (e) {
    const ka = e.key;
    if (
      e.key === "q" ||
      e.key === "w" ||
      e.key === "e" ||
      e.key === "a" ||
      e.key === "s" ||
      e.key === "d" ||
      e.key === "z" ||
      e.key === "x" ||
      e.key === "c"
    ) {
      const q = document.getElementById(ka);
      q.currentTime = "0";
      q.play();
    }
  });

  return (
    <div className="App">
      <div className="title">
        <h1>Drum Machine</h1>
      </div>
      <div id="drum-machine">
        <div id="display">
          <div className="drum-pad">
            <button id="bass" onClick={onClickEvent} value="q">
              Q<audio src="sounds/bass.mp4" className="clip" id="q"></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="crash" onClick={onClickEvent} value="w">
              W<audio src="sounds/crash.mp4" className="clip" id="w"></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="floor-tom" onClick={onClickEvent} value="e">
              E
              <audio src="sounds/floor-tom.mp4" className="clip" id="e"></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="hh-close" onClick={onClickEvent} value="a">
              A<audio src="sounds/hh-close.mp4" className="clip" id="a"></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="hh-open" onClick={onClickEvent} value="s">
              S<audio src="sounds/hh-open.mp4" className="clip" id="s"></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="med-tom" onClick={onClickEvent} value="d">
              D<audio src="sounds/med-tom.mp4" className="clip" id="d"></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="ride" onClick={onClickEvent} value="z">
              Z<audio src="sounds/ride.mp4" className="clip" id="z"></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="small-tom" onClick={onClickEvent} value="x">
              X
              <audio src="sounds/small-tom.mp4" className="clip" id="x"></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="snare" onClick={onClickEvent} value="c">
              C<audio src="sounds/snare.mp4" className="clip" id="c"></audio>
            </button>
          </div>
        </div>
        <div id="controls-box">
          <h2>Snare</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
