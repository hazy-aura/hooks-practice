import React, { useState } from "react";

function App() {
  setInterval(PresentTime, 1000);

  const [nowTime, setTime] = useState("TIME");

  function PresentTime() {
    const updatedTime = new Date().toLocaleTimeString();
    setTime(updatedTime);
  }

  return (
    <div className="container">
      <h1>{nowTime}</h1>
      <button onClick={PresentTime}>Get Time</button>
    </div>
  );
}

export default App;
