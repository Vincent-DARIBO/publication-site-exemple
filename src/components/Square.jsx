import React from "react";
import "./styles.css";

export default function Square({ color, children }) {
  return (
    <div
      className="square"
      onClick={() => {
        console.log("bonjour");
      }}
      style={{
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  );
}
