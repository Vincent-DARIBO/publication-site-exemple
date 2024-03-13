import React from "react";

// JSX -> syntax pour coder en react (un composant commencer par une majuscule)
// Un composant accepte des props (pour la customisation)
// La déstructuration permet d'expliciter les props qu'accepte mon composant

export default function ComponentWithProps({title, description}) {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}
