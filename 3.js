// React Task
// i number buttons j number button color change

// App.js
import "./styles.css";
import Buttons from "./Buttons.js";
export default function App() {
  return (
    <div className="App">
      <Buttons i={5} j={3} />
    </div>
  );
}

// Button.js
export default function Buttons({ i, j }) {
    const arr = new Array(i).fill(0);
    return (
      <div>
        {arr.map((item, index) => {
          if (index === j - 1) {
            return (
              <div>
                <button style={{ background: "red" }}>index</button>
              </div>
            );
          } else {
            return (
              <div>
                <button>index</button>
              </div>
            );
          }
        })}
      </div>
    );
  }
  