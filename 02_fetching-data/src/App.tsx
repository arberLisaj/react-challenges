import { useState } from "react";
import useFetchData from "./hooks/useFetchData";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const { data } = useFetchData(inputValue);

  return (
    <main>
      <h1>
        Fetching nouns that are often described by the adjective{" "}
        <span>{inputValue}</span>
      </h1>
      <input
        type="search"
        id="searchinput"
        placeholder="search"
        required
        autoFocus
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {data.length === 0 ? (
        <p>Look up a word...</p>
      ) : (
        <ul>
          {data.map((d) => (
            <li key={d.score}>{d.word}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default App;
