import { useEffect, useState } from "react";
import holeImage from "./images/hole.png";
import moleImage from "./images/mole.png";

function App() {
  const [moles, setMoles] = useState(new Array(9).fill(false));
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  const delay =
    difficulty === "easy" ? 1000 : difficulty === "medium" ? 800 : 600;

  useEffect(() => {
    setScore(0);
  }, [difficulty]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * moles.length);
    const interval = setInterval(() => {
      showMole(randomIndex);
      setTimeout(() => {
        hideMole(randomIndex);
      }, delay - 200);
    }, delay);
    return () => clearInterval(interval);
  }, [moles, difficulty]);

  function showMole(index: number) {
    setMoles((currentMoles) => {
      const newMoles = [...currentMoles];
      newMoles[index] = true;
      return newMoles;
    });
  }

  function hideMole(index: number) {
    setMoles((currentMoles) => {
      const newMoles = [...currentMoles];
      newMoles[index] = false;
      return newMoles;
    });
  }

  function whackMole(index: number) {
    if (!moles[index]) return;
    hideMole(index);
    setScore((s) => s + 1);
  }

  return (
    <main>
      <header>
        <h1>score: ({score})</h1>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </header>
      <section>
        {moles.map((m, index) => (
          <img
            draggable={false}
            key={index}
            src={m ? moleImage : holeImage}
            onClick={() => whackMole(index)}
            alt="whac a mole"
          />
        ))}
      </section>
    </main>
  );
}

export default App;
