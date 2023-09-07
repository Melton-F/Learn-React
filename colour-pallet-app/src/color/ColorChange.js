import React from "react";

export const ColorChange = ({inputText}) => {
    const divStyle = {
        width: "100px",      
        height: "100px",      
        backgroundColor: inputText,
        marginLeft:"46%"
      };
    
      return (
        <div className="box">
            <div style={divStyle}></div>
        </div>
        
      );
};
