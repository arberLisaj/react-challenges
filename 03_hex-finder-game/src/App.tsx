import { useEffect, useState } from "react";
import hexGenerator from "./hexGenerator";

const App = () => {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [isRight, setRight] = useState(false);
  const [isWrong, setWrong] = useState(false);

  const generateColor = () => {
    const color = hexGenerator();
    setColor(color);
    setAnswers(
      [color, hexGenerator(), hexGenerator()].sort(() => 0.5 - Math.random())
    );
  };

  useEffect(() => {
    generateColor();
  }, []);

  const handleClick = (answer: string) => {
    if (answer === color) {
      generateColor();
      setRight(true);
      setWrong(false);
    } else {
      setRight(false);
      setWrong(true);
    }
  };

  return (
    <main>
      {isWrong && <p className="snackbar">Wrong!</p>}
      {isRight && (
        <p className="snackbar" style={{ backgroundColor: "#29AB87" }}>
          Correct!
        </p>
      )}
      <section className="container">
        <div className="box" style={{ backgroundColor: color }}></div>
        <div className="buttons-container">
          {answers.map((a) => (
            <button onClick={() => handleClick(a)} key={a}>
              {a}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
