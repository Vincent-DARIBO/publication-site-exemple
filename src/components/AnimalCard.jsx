import React from "react";
import Row from "./Row";

const fruits = [
  { nom: "Pomme", couleur: "rouge" },
  { nom: "Cerise", couleur: "rouge" },
  { nom: "Fraise", couleur: "rouge" },
  { nom: "Grenade", couleur: "rouge" },
  { nom: "Raisin", couleur: "violet" },
  { nom: "Mûre", couleur: "violette" },
  { nom: "Myrtille", couleur: "bleue" },
  { nom: "Prune", couleur: "violet" },
  { nom: "Pamplemousse rose", couleur: "rose" },
  { nom: "Figue", couleur: "violet" },
  { nom: "Raisin rouge", couleur: "rouge" },
  { nom: "Pomme grenade", couleur: "rouge" },
  { nom: "Cerise noire", couleur: "noire" },
];

export default function AnimalCard({ imageUrl, animalName, race }) {
  
  function renderFruit(fruit) {
    if (fruit.couleur !== "rouge") return null;

    return (
      <li>
        <text>{fruit.nom}</text>
        <text> {fruit.couleur}</text>
      </li>
    );
  }
  return (
    <div>
      <ul>{fruits.map(renderFruit)}</ul>
    </div>
  );
}
