import { useEffect, useRef, useState } from "react";

const App = () => {
  const ref = useRef(null);
  const [counter, setCounter] = useState(60);
  const [isRunning, setRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning && counter > 0) {
      interval = setInterval(() => {
        setCounter((c) => c - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ref.current.value > 0) setCounter(+ref.current.value);
    ref.current.value = "";
  };
  return (
    <section>
      <h1>{counter}s</h1>
      <div className="buttons">
        <button
          disabled={counter === 0}
          style={isRunning ? { backgroundColor: "#45c645" } : {}}
          onClick={() => setRunning(!isRunning)}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={() => setCounter(60)}>reset</button>
      </div>
      <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="secodsinput"
          type="text"
          ref={ref}
          placeholder="Enter seconds"
        />
        <button type="submit">add</button>
      </form>
    </section>
  );
};

export default App;
