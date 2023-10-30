import { useState } from "react";
import questions from "./questions";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const isGameOver = currentQuestionIndex >= questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      {isGameOver ? (
        <>
          <h1>Game over {score}</h1>
        </>
      ) : (
        <>
          <h1>{currentQuestion.prompt}</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (selectedAnswer === currentQuestion.correctAnswer)
                setScore((s) => s + 1);

              setCurrentQuestionIndex((q) => q + 1);
            }}
          >
            {
              // .sort(() => 0.5 - Math.random())
              currentQuestion.answers.map((a, index) => (
                <label key={index}>
                  <input
                    required
                    onChange={() => setSelectedAnswer(a)}
                    type="radio"
                    name="answer"
                    value={a}
                  />
                  {a}
                </label>
              ))
            }
            <button>submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default App;
