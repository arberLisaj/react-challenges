import { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState("40");
  const [height, setHeight] = useState("140");
  const calculateBMI = () => {
    return weight / Math.pow(height / 100, 2);
  };
  return (
    <main>
      <h1>BMI Calculator</h1>
      <div>
        <label htmlFor="weight">weight ({weight}kg)</label>
        <input
          id="weight"
          min={40}
          max={150}
          type="range"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">height ({height}cm)</label>
        <input
          id="height"
          type="range"
          min={140}
          max={210}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <p>
        Your BMI (<span>{calculateBMI().toFixed(2)}</span>)
      </p>
    </main>
  );
};

export default App;
