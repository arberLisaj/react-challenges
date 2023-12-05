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
    answers: ["blue", "green", "orange", "yellow"],
  },
  {
    prompt: "What gives earth heat?",
    correctAnswer: "the sun",
    answers: ["grass", "trees", "the sun", "the moon"],
  },
];

export default questions;
