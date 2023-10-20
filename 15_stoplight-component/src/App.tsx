import { useEffect, useState } from "react";

type stopLightState = "stop" | "slow" | "go";
const stopDelay = 5000;
const slowDelay = 3500;
const goDelay = 6000;

const App = () => {
  const [stoplight, setStoplight] = useState<stopLightState>("stop");

  function stoplightClass(state: string) {
    return `circle` + (stoplight === state ? ` ${state}` : "");
  }

  useEffect(() => {
    if (stoplight === "stop") {
      setTimeout(() => setStoplight("go"), stopDelay);
    } else if (stoplight === "slow") {
      setTimeout(() => setStoplight("stop"), slowDelay);
    } else {
      setTimeout(() => setStoplight("slow"), goDelay);
    }
  }, [stoplight]);

  return (
    <section>
      <div className={stoplightClass("stop")}></div>
      <div className={stoplightClass("slow")}></div>
      <div className={stoplightClass("go")}></div>
    </section>
  );
};

export default App;
