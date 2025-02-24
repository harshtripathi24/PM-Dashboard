import React, { useState } from "react";
import "./ToggleButton.css"; // Import the CSS file for styling

const ToggleButton = ({ optionOne, optionTwo }) => {
  const [selected, setSelected] = useState(optionTwo);

  const toggle = () => {
    setSelected(selected === optionOne ? optionTwo : optionOne);
  };

  return (
    <div className="toggle-container">
      <span className={selected === optionOne ? "active" : ""}>
        {optionOne}{" "}
      </span>
      <div className="toggle-switch" onClick={toggle}>
        <div
          className={`toggle-circle ${
            selected === optionTwo ? "right" : "left"
          }`}
        ></div>
      </div>
      <span className={selected === optionTwo ? "active" : ""}>
        {" "}
        {optionTwo}{" "}
      </span>
    </div>
  );
};

export default ToggleButton;
