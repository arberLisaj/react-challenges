import { useEffect, useState } from "react";
import hexGenerator from "./hexGenerator";

const App = () => {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);

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
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <main>
      {isCorrect === false && <p className="snackbar">Wrong !</p>}
      {isCorrect === true && (
        <p className="snackbar" style={{ background: "#29AB87" }}>
          Correct !
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
