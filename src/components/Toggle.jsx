import React, { useState } from "react";
import './styles.css'
/**
 * @param {Object} props
 * @param {string[]} props.words
 */
export default function Toggle({ words = ["s", "a", "b", "c"] }) {
  const [selectedItem, setSelectedItem] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {words.map((item, index) => (
        <div
        className="toggleItem"
          key={index}
          style={{
          backgroundColor: selectedItem === item ? "purple" : "gray",

          }}
          onClick={() => setSelectedItem(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
