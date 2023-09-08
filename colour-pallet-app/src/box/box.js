import React from "react";
import './box.css'

export const Box = ({inputText, isDarkColor}) => {
    const divStyle = {     
        backgroundColor: inputText,
        color:isDarkColor?"#000":"#FFF"
      };
    
      return (
        <div >
            <div className="box" style={divStyle}>
              <h3 style={{marginTop:"60px", fontSize:"50px"}}>{inputText}</h3>
            </div>
        </div>
      );
};
