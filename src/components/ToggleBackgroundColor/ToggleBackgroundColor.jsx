import { useState } from "react";

const ToggleBackgroundColor = () => {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [btnStyle, setBtnStyle] = useState("white");

  const handleClick = () => {
    setBgColor(bgColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setBtnStyle(btnStyle === "white" ? "#1b1b1b" : "white");
  };

  return (
    <div style={{ backgroundColor: bgColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{ btnStyle, color: textColor, border: `2px solid ${textColor}` }}
      >
        {bgColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>

      <section>
        <h1>Welcome to the Toggle Background Color page</h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;
