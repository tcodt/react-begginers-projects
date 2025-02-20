import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");

    if (e.target.id === "container_area") {
      setShowInput(false);
      setBgColor("#fff");
    }
  };

  return (
    <section
      id="container_area"
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-400 py-2 px-4 rounded text-base font-medium"
        />
      ) : (
        <FaSearch
          size={20}
          className="cursor-pointer"
          onClick={() => setShowInput(true)}
        />
      )}
    </section>
  );
};

export default HiddenSearchBar;
