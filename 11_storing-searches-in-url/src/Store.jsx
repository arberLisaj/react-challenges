import { Link, useSearchParams } from "react-router-dom";
import searches from "./searches";

const Store = () => {
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const q = searchParams.get("q");
  const filteredItems = searches.filter((s) =>
    s.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <Link to="/">Home</Link>
      <input
        type="text"
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
    </div>
  );
};

export default Store;
