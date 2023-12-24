import { useEffect, useRef, useState } from "react";
import { states } from "../states";

const StateDropdown = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStates, setSelectedState] = useState<Record<string, boolean>>(
    states.reduce((obj, state) => ({ ...obj, [state.abbreviation]: false }), {})
  );
  const numberOfSelectedStates =
    Object.values(selectedStates).filter(Boolean).length;

  const handleClick = (e: any) => {
    if (e.target !== dropdownRef.current) {
      setIsOpen(false);``
      console.log("hi mom");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <fieldset onClick={(e) => e.stopPropagation()}>
      <button onClick={() => setIsOpen((prevState) => !prevState)}>
        {numberOfSelectedStates === 0 ? (
          <span>-- select your states --</span>
        ) : (
          <span>{numberOfSelectedStates} states selected</span>
        )}
      </button>

      {isOpen && (
        <div ref={dropdownRef}>
          {states.map((state) => (
            <label key={state.abbreviation} htmlFor={state.name}>
              <input
                type="checkbox"
                id={state.name}
                onChange={(e) => {
                  setSelectedState({
                    ...selectedStates,
                    [state.abbreviation]: e.target.checked,
                  });
                }}
              />
              <p>{state.name}</p>
            </label>
          ))}
        </div>
      )}
    </fieldset>
  );
};

export default StateDropdown;
