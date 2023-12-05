import { useState } from "react";
import questions from "./questions";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const isGameOver = currentQuestionIndex >= questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  if (isGameOver)
    return (
      <div className="scoreboard">
        <div className="result">
          <h1>
            You got {score} correct and {questions.length - score} wrong
          </h1>
          <button
            onClick={() => {
              setCurrentQuestionIndex(0);
              setSelectedAnswer("");
              setScore(0);
            }}
          >
            play again
          </button>
        </div>
      </div>
    );
  return (
    <main>
      <h1 className="question">{currentQuestion.prompt}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (selectedAnswer === currentQuestion.correctAnswer)
            setScore((s) => s + 1);

          setCurrentQuestionIndex((q) => q + 1);
        }}
      >
        <ul>
          {currentQuestion.answers.map((answer, index) => (
            <label key={index}>
              <input
                onChange={() => setSelectedAnswer(answer)}
                required
                type="radio"
                name="answer"
                checked={answer === selectedAnswer}
              />
              {answer}
            </label>
          ))}
        </ul>
        <button className="submitBtn">submit</button>
      </form>
    </main>
  );
};

export default Quiz;
