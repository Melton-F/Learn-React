import React from "react";

export const Input = ({ inputText, setInputText }) => {
  return (
    <div>
      <br />
      <input
        type="text"
        value={inputText}
        placeholder="Enter the color name"
        onChange={(e) => {
          e.preventDefault();
          setInputText(e.target.value);
        }}
      />
    </div>
  );
};
