import React, { useState } from "react";

interface Position {
  x: number;
  y: number;
}

const App = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [poppedItems, setPoppedItems] = useState<Position[]>([]);

  const handleClick = (e: React.MouseEvent) => {
    const pageX = e.pageX;
    const pageY = e.pageY;
    setPositions((value) => [...value, { x: pageX, y: pageY }]);
  };

  const handleUndo = () => {
    const newArray = [...positions];
    const poppedItem = newArray.pop();
    setPositions(() => newArray);
    if (poppedItem) setPoppedItems([...poppedItems, poppedItem]);
  };

  const handleRedo = () => {
    const newPoppedItems = [...poppedItems];
    const newPositions = [...positions];
    const poppedItem = newPoppedItems.pop();
    if (poppedItem) {
      newPositions.push(poppedItem);
      setPositions([...positions, poppedItem]);
      setPoppedItems(newPoppedItems);
    }
  };

  return (
    <>
      <div className="buttons">
        <button disabled={positions.length == 0} onClick={handleUndo}>
          Undo
        </button>
        <button disabled={poppedItems.length == 0} onClick={handleRedo}>
          Redo
        </button>
      </div>
      <div onClick={handleClick} className="parent">
        {positions.map((p, index) => (
          <div
            className="child"
            key={index}
            style={{ top: p.y - 8 + "px", left: p.x - 8 + "px" }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default App;
