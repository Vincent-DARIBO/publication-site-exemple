import React, { useRef, useState } from "react";

/**
 * exemple d'utilisation de useState pour gérer un compteur
 */
export default function Counter() {
    // initialisation de l'état
  const [count, setCount] = useState(0);

  const id = useRef(null);

  function start() {
    id.current = setInterval(() => {
      setCount((prevState) => prevState + 1);
    }, 1000);
  }
  function stop() {
    clearInterval(id.current);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
}
