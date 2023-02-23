import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Drum Machine</h1>
      </div>
      <div id="drum-machine">
        <div id="display">
          <div className="drum-pad">
            <button>Q</button>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
            <button>W</button>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
            <button>E</button>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
            <button>A</button>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
            <button>S</button>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
            <button>D</button>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
            <button>Z</button>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
            <button>X</button>
            <audio src=""></audio>
          </div>
          <div className="drum-pad">
            <button>C</button>
            <audio src=""></audio>
          </div>
        </div>
        <div id="controls-box">hola</div>
      </div>
    </div>
  );
}

export default App;
