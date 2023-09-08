import React from "react";

export const Box = ({inputText, isDarkColor}) => {
    const divStyle = {
        width: "180px",      
        height: "180px",      
        backgroundColor: inputText,
        marginLeft:"43%",
        border: "3px solid black",
        boxShadow: "5px 5px 8px 8px #888888",
        color:isDarkColor?"#000":"#FFF"
      };
    
      return (
        <div >
            <div style={divStyle}>
              <h3 style={{marginTop:"60px", fontSize:"50px"}}>{inputText}</h3>
            </div>
        </div>
      );
};
