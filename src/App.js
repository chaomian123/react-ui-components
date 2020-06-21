import React, { useState } from "react";
import "./styles.css";
import { css } from "@emotion/core";
export default function App() {
  const [num, setNum] = useState("20");
  const [deg] = useState(num * 3.6);
  const [c, setC] = useState("progress-circle p10");

  return (
    <div className="App">
      <input
        type="range"
        value={num}
        onChange={e => {
          console.log(e.target.value);
          const num = e.target.value;
          setNum(num);
          if (num > 50) {
            setC(`progress-circle p${num} over50`);
          } else {
            setC(`progress-circle p${num}`);
          }
        }}
      />

      <div
        class={c}
        // css={`
        //   transform: rotate(${deg}deg);
        // `}
      >
        <span> {num}%</span>
        <div class="left-half-clipper">
          <div class="first50-bar" />
          <div class="value-bar" />
        </div>
      </div>
    </div>
  );
}
