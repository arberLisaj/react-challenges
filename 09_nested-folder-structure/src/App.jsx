import { useState } from "react";
import { BsCaretRightFill } from "react-icons/bs";
const App = () => {
  const files = {
    children: [
      {
        name: "node_modules",
        children: [
          {
            name: ".bin",
            children: [
              { name: "acorn" },
              { name: "esbuild" },
              { name: "eslint" },
              { name: "eslint" },
              { name: "json5" },
            ],
          },
        ],
      },
      {
        name: "src",
        children: [
          {
            name: "components",
            children: [{ name: "Hello.jsx" }, { name: "Greeting.jsx" }],
          },
          { name: "App.jsx" },
          { name: "index.css" },
          { name: "main.js" },
        ],
      },
      { name: ".gitignore" },
      { name: "package.json" },
      { name: "vite.config.js" },
    ],
  };
  const Entry = ({ entry, depth }) => {
    const [isExpanded, setExpanded] = useState(false);
    return (
      <div>
        <button className="entry" onClick={() => setExpanded(!isExpanded)}>
          {entry.children && isExpanded ? (
            <BsCaretRightFill className="icon transform" />
          ) : entry.children && !isExpanded ? (
            <BsCaretRightFill className="icon" />
          ) : (
            ""
          )}{" "}
          {entry.name}
        </button>
        {isExpanded && (
          <div style={{ paddingLeft: `${depth * 10}px` }}>
            {entry.children?.map((e, index) => (
              <Entry key={index} entry={e} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <main>
      {files.children.map((entry, index) => (
        <Entry key={index} entry={entry} depth={1} />
      ))}
    </main>
  );
};

export default App;
