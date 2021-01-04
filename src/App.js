import React from "react";
import "./style.css";

export default function App() {
  function keyHandler(e) {
    console.log(e.key);
    if (
      (e.key == "a") |
      (e.key == "e") |
      (e.key == "i") |
      (e.key == "o") |
      (e.key == "u")
    ) {
      e.preventDefault();
    }
  }

  return (
    <div>
      <input onKeyDown={e => keyHandler(e)} type="text" />
    </div>
  );
}
