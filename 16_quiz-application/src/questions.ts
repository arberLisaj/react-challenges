type Question = {
  prompt: string;
  correctAnswer: string;
  answers: string[];
};

const questions: Question[] = [
  {
    prompt: "what color is the sky",
    correctAnswer: "blue",
    answers: ["blue", "red", "orange", "yellow"],
  },
  {
    prompt: "what color is the grass",
    correctAnswer: "green",
    answers: ["blue", "green", "orange", "yellow"],
  },
];

export default questions;
