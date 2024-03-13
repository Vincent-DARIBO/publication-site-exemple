import filled from "../assets/star-filled.png";
import outlined from "../assets/star-outlined.png";

import React, { useMemo, useState } from "react";

/**
 * Exemple d'afficahge conditionel
 */
export default function Ratings() {
  const stars = useMemo(() => [1, 2, 3, 4, 5], []);
  const [value, setValue] = useState(0);

  console.log("render")
  function onImagePress(s) {
    if (s === value) {
      setValue(value - 1);

    } else setValue(s);
  }

  return (
    <div className="starsRow">
      {stars.map((s) => {
        // en fonction de la valeur de l'élément "s" de mon tableau je choisis l'image à afficher
        let renderedImage = outlined;
        if (value >= s) renderedImage = filled;
        return (
          <img src={renderedImage} alt="" onClick={() => onImagePress(s)} />
        );
      })}
    </div>
  );
}
