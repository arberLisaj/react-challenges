import { useEffect, useRef, useState } from "react";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const [enteredNumbers, setEnteredNumbers] = useState<number[]>([]);
  const [password, setPassword] = useState("1111");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (enteredNumbers.length === 4) {
      if (enteredNumbers.join("") === password) {
        alert("correct password");
        setEnteredNumbers([]);
      } else {
        alert("wrong password");
        setEnteredNumbers([]);
      }
    }
  }, [enteredNumbers]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current?.value.length == 4)
      setPassword(inputRef.current!.value);
  };
  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          ref={inputRef}
          maxLength={4}
          type="text"
          required
          placeholder="password"
        />
        <button>change password</button>
      </form>
      <h1>Password: {password}</h1>
      <h1>Entered Password {enteredNumbers.join("")}</h1>
      {numbers.map((n) => (
        <button
          onClick={() => setEnteredNumbers((value) => [...value, n])}
          key={n}
        >
          {n}
        </button>
      ))}
    </main>
  );
};

export default App;
