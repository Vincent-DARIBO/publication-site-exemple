import React, { useState } from "react";

const mots = [
  "chat",
  "chien",
  "maison",
  "ordinateur",
  "programmation",
  "plage",
  "montagne",
  "soleil",
  "lune",
  "étoile",
  "aventure",
  "livre",
  "musique",
  "film",
  "voyage",
  "cuisine",
  "restaurant",
  "vélo",
  "jardin",
  "fleur",
  "amour",
  "amitié",
  "famille",
  "bonheur",
  "rire",
  "sourire",
  "énergie",
  "paix",
  "harmonie",
  "créativité",
  "art",
  "science",
  "mathématiques",
  "histoire",
  "géographie",
  "fruits",
  "légumes",
  "mer",
  "rivière",
  "forêt",
  "hiver",
  "été",
  "automne",
  "printemps",
  "énergie",
  "électricité",
  "étoile",
  "véhicule",
];

/**
 * @param {Object} props
 * @param {string[]} props.words
 */
export default function SearchBar({ words = mots }) {
  const [searchValue, setSearchValue] = useState("");
  const [displayedWords, setSisplayedWords] = useState(words);

  function filterWords() {
    if (searchValue === "") {
      setSisplayedWords(words);
      return;
    }
    setSisplayedWords(
      displayedWords.filter((word) => word.includes(searchValue))
    );
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={filterWords}>rechercher</button>
      </div>
      <ul>
        {displayedWords.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
