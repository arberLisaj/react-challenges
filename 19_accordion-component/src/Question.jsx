import { useState } from "react";

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="question">
      <header>
        <h1 className="question">{question}</h1>
        <button onClick={() => setIsOpen((value) => !value)}>
          <span></span>
          <span className={isOpen ? "hide" : ""}></span>
        </button>
      </header>
      {isOpen && <p className="answer">{answer}</p>}
    </section>
  );
};

export default Question;
