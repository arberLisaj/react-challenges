import { useSearchParams } from "react-router-dom";
import searches from "./searches";

const Store = () => {
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const q = searchParams.get("q");
  const filteredItems = searches.filter((s) =>
    s.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <section>
      <input
        autoFocus
        name="searchbar"
        type="search"
        onChange={(e) =>
          setSearchParams(
            (prev) => {
              prev.set("q", e.target.value);
              return prev;
            },
            { replace: true }
          )
        }
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Store;
