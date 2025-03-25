import React from "react";
import ReactDom from "react-dom/client";
import { useState, useEffect, useCallback } from "react";

function PassGen() {
  const [password, setPass] = useState(" ");
  const [length, setlength] = useState(10);
  const [numberChanged, setNum] = useState(false);
  const [symbolChanged, setsym] = useState(false);

  const generator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberChanged) {
      str += "0123456789";
    }
    if (symbolChanged) {
      str += "{}[]@#$&%()";
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPass(pass);
  }, [length, numberChanged, symbolChanged]);

  useEffect(() => {
    generator();
  }, [length, numberChanged, symbolChanged]);

  return (
    <>
      <div className="container">
        <h1 id = "logo">PASSWORD GENERATOR.</h1>
        <div className="lower">
          <h1>{password}</h1>
          <div className="properties">
            <div className="len">
              <label>Length</label>
              <input
              type="range"
              min={5}
              max={20}
              value={length}
              onChange={(e) => setlength(e.target.value)}
              ></input>
              </div>

            <div className="check">
              <div>
              <input
                type="checkbox"
                defaultChecked={numberChanged}
                onChange={() => setNum(!numberChanged)}
              ></input>
              <label>Number</label>
              </div>
              <div>
              <input
                type="checkbox"
                defaultChecked={symbolChanged}
                onChange={() => setsym(!symbolChanged)}
              ></input>
              <label>Symbol</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ReactDom.createRoot(document.querySelector("#root")).render(<PassGen />);
