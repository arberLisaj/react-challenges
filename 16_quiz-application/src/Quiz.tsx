import { useState } from "react";

type Question = {
  prompt: string;
  correctAnswer: string;
  answers: string[];
};

const questions: Question[] = [
  {
    prompt: "What color is the sky?",
    correctAnswer: "blue",
    answers: ["blue", "red", "orange", "yellow"],
  },
  {
    prompt: "What color is the grass?",
    correctAnswer: "green",
    answers: ["gold", "green", "silver", "something else"],
  },
  {
    prompt: "What gives earth heat?",
    correctAnswer: "the sun",
    answers: ["grass", "trees", "the sun", "the moon"],
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const isGameOver = currentQuestionIndex >= questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  if (isGameOver)
    return (
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
