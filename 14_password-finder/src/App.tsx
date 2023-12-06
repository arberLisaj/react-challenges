import { useState } from "react";

const patterns = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

const App = () => {
  const [enteredPassword, setEnteredPassword] = useState<string[]>([]);
  const [password, setPassword] = useState("javascript");

  const handleChangePassword = () => {
    const newPassword = enteredPassword.join("");
    if (newPassword.length >= 6) {
      setPassword(newPassword);
      setEnteredPassword([]);
    } else {
      alert("Bad password. Min length is 6");
    }
  };
  const handleDeletePassword = () => {
    const newArray = [...enteredPassword];
    newArray.pop();
    setEnteredPassword(newArray);
  };
  const handleSubmit = () => {
    if (enteredPassword.length >= 6) {
      if (enteredPassword.join("") === password) {
        alert("logged in");
        setEnteredPassword([]);
      } else {
        alert("wrong password");
      }
    }
  };
  return (
    <main>
      <h1>Password: {password}</h1>
      <h1 style={{ marginBottom: "5px" }}>Entered: {enteredPassword}</h1>
      <div className="buttons">
        {patterns.map((n) => (
          <button
            onClick={() => setEnteredPassword((value) => [...value, n])}
            key={n}
          >
            {n}
          </button>
        ))}
        <button className="delete" onClickCapture={handleDeletePassword}>
          del
        </button>
        <button className="span" onClick={handleChangePassword}>
          change password
        </button>
      </div>
      <button onClick={handleSubmit} className="login">
        Log in
      </button>
    </main>
  );
};

export default App;
