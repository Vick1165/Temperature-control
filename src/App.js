import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemprature = () => {
    const newTemprature = temperatureValue + 1;
    if (newTemprature <= 30) {
      setTemperatureValue(newTemprature);
    }

    if (newTemprature >= 15) {
      setTemperatureColor("hot");
    }
  };

  const decreaseTemprature = () => {
    const newTemprature = temperatureValue - 1;
    if (newTemprature >= -30) {
      setTemperatureValue(newTemprature);
    }

    if (newTemprature < 15) {
      setTemperatureColor("cold");
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemprature}>+</button>
        <button onClick={decreaseTemprature}>-</button>
      </div>
    </div>
  );
};

export default App;
