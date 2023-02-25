import React, { useState } from "react";
import "./App.css";

function App() {
  const [displayText, setDisplayText] = useState("ROCK MODE");
  const [onOff, setOnOff] = useState(true);
  const [textOnOff, setTextOnOff] = useState("OFF");
  const [volumenText, setVolumenText] = useState(50);

  const [onOffToggle, setOnOffToggle] = useState(true);
  const [urlToggle, setUrlToggle] = useState("rock");

  let soundEffects = {
    q: "Bass",
    w: "Crash",
    e: "Floor Tom",
    a: "Hit-Hat Close",
    s: "Hit-Hat Open",
    d: "Med Tom",
    z: "Ride",
    x: "Small Tom",
    c: "Snare",
  };

  const onChange = (e) => {
    const a = e.target.value;
    setVolumenText(a);
  };

  const eventClick = () => {
    setOnOff((prev) => !prev);
    setDisplayText("");

    if (onOff) {
      setTextOnOff("ON");
    } else {
      setTextOnOff("OFF");
    }
  };

  const eventToggle = () => {
    setOnOffToggle((prev) => !prev);
    if (onOffToggle) {
      setDisplayText("POP MODE");
      setUrlToggle("pop");
    } else {
      setDisplayText("ROCK MODE");
      setUrlToggle("rock");
    }

    console.log(urlToggle);
    console.log(onOffToggle);
    console.log();
  };

  // AGREGAR SONIDO CON LOS BOTONES

  const onClickEvent = (e) => {
    const targetValue = e.target.value;
    const targetId = document.getElementById(targetValue);
    const vol = document.getElementById("vol");

    const volumen = vol.value / 100;
    targetId.volume = volumen;
    console.log();
    if (!onOff) {
      setDisplayText(soundEffects[targetValue]);
      targetId.currentTime = 0;
      targetId.play();
    } else {
      setDisplayText("TURN ON!");
    }
  };

  //  AGREGAR SONIDO CON EL TECLADO

  const keyChange = (e) => {
    const targetValue = e.key;
    const targetId = document.getElementById(targetValue);
    const vol = document.getElementById("vol");

    const volumen = vol.value / 100;
    targetId.volume = volumen;
    if (!onOff) {
      setDisplayText(soundEffects[targetValue]);
      targetId.currentTime = 0;
      targetId.play();
    } else {
      setDisplayText("TURN ON!");
    }
  };

  // RENDERIZADO DE COMPONENTES

  return (
    <div className="App">
      <div id="drum-machine" onKeyDown={keyChange}>
        <div id="display">
          <div className="drum-pad">
            <button id="bass" onClick={onClickEvent} value="q">
              Q
              <audio
                src={"sounds/" + urlToggle + "/bass.mp4"}
                className="clip"
                id="q"
              ></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="crash" onClick={onClickEvent} value="w">
              W
              <audio
                src={"sounds/" + urlToggle + "/crash.mp4"}
                className="clip"
                id="w"
              ></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="floor-tom" onClick={onClickEvent} value="e">
              E
              <audio
                src={"sounds/" + urlToggle + "/floor-tom.mp4"}
                className="clip"
                id="e"
              ></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="hh-close" onClick={onClickEvent} value="a">
              A
              <audio
                src={"sounds/" + urlToggle + "/hh-close.mp4"}
                className="clip"
                id="a"
              ></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="hh-open" onClick={onClickEvent} value="s">
              S
              <audio
                src={"sounds/" + urlToggle + "/hh-open.mp4"}
                className="clip"
                id="s"
              ></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="med-tom" onClick={onClickEvent} value="d">
              D
              <audio
                src={"sounds/" + urlToggle + "/med-tom.mp4"}
                className="clip"
                id="d"
              ></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="ride" onClick={onClickEvent} value="z">
              Z
              <audio
                src={"sounds/" + urlToggle + "/ride.mp4"}
                className="clip"
                id="z"
              ></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="small-tom" onClick={onClickEvent} value="x">
              X
              <audio
                src={"sounds/" + urlToggle + "/small-tom.mp4"}
                className="clip"
                id="x"
              ></audio>
            </button>
          </div>
          <div className="drum-pad">
            <button id="snare" onClick={onClickEvent} value="c">
              C
              <audio
                src={"sounds/" + urlToggle + "/snare.mp4"}
                className="clip"
                id="c"
              ></audio>
            </button>
          </div>
        </div>
        <div id="container-display">
          <div className="effect">
            <h2>{displayText}</h2>
          </div>
          <div className="volumen">
            <input
              type="range"
              id="vol"
              max="100"
              min="0"
              onChange={onChange}
            />
            <h3>volumen: {volumenText}</h3>
          </div>
          <label className="switch">
            <input type="checkbox" id="toggle" onClick={eventToggle} />
            <span className="slider round"></span>
            <p>Mode</p>
          </label>
          <label className="switch">
            <input type="checkbox" onClick={eventClick} />
            <span className="slider round"></span>
            <p>{textOnOff}</p>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
