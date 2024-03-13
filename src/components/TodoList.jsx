import React, { useState } from "react";

export default function TodoList() {
  const [searchValue, setSearchValue] = useState("");
  const [displayedWords, setSisplayedWords] = useState([]);
  const [list, setList] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  function filterWords() {
    if (searchValue === "") {
      setSisplayedWords(list);
      return;
    }
    setSisplayedWords(
      displayedWords.filter((word) => word.includes(searchValue))
    );
  }

  function addItem(title) {
    setList([title, ...list]);
  }

  function removeItem(title) {
    setList([list.filter((item) => item !== title)]);
  }

  function markAsCompleted(title) {
    setCompletedItems([...completedItems, title]);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={() => addItem(searchValue)}>ajouter</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <button onClick={() => markAsCompleted(item)}>cocher</button>
            <text
              style={{
                textDecorationLine: completedItems.includes(item)
                  ? "line-through"
                  : "none",
              }}
            >
              {item}
            </text>
            <button onClick={() => removeItem(item)}>supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
