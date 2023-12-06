import React from "react";
import Question from "./Question";

const questions = [
  {
    id: 0,
    question: "How many team members can I invite to this event?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: 1,
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: 2,
    question: "How do i reset my password?",
    answer:
      " Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you. ",
  },
  {
    id: 3,
    question: "Can i cancel my subscription?",
    answer:
      " Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you. ",
  },
  {
    id: 4,
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const App = () => {
  return (
    <main>
      <h1 className="main-header">Frequently Asked Questions</h1>
      <div>
        {questions.map((q) => (
          <Question key={q.id} question={q.question} answer={q.answer} />
        ))}
      </div>
    </main>
  );
};

export default App;
