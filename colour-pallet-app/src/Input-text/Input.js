import React, { useState } from "react";

export const Input = ({ inputText, setInputText, isDarkColor, setIsDarkColor }) => {
  const buttonStyle = {
    width: "180px",
    height: "40px",
    boxShadow: "5px 10px 8px #888888"
  };

  return (
    <div>
      <br />
      <br />
      <form
        className="boxcolorForm"
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputText) return;
        }}
      > 
        <input
          autoFocus
          type="text"
          value={inputText}
          placeholder="Enter the color name"
          onChange={(element) => {
            element.preventDefault();
            setInputText(element.target.value);
          }}
        />
        <br />
        <br />
        <button
          style={buttonStyle}
          onClick={() => setIsDarkColor(!isDarkColor)}
        >
          Toggle Text Color
        </button>
      </form>
    </div>
  );
};
