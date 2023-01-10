import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [status, setStatus] = useState(false);
  function handleClick() {
    setStatus(!status);
  }

  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
        {!status ? "OFF" : "ON"}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {status ? "OFF" : "ON"}
      </button>
    </div>
  );
};

export default App;
