import dog from "./assets/dog.jpg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";
import { Profiler } from "react";
function App() {
  console.log("render app");
  return (
    <div className="App">
      <Profiler
        id="App"
        onRender={(
          id,
          phase,
          actualDuration,
          baseDuration,
          startTime,
          commitTime
        ) => {
          console.log({
            id,
            phase,
            actualDuration,
            baseDuration,
            startTime,
            commitTime,
          });
        }}
      >
        <TodoList />
      </Profiler>
    </div>
  );
}

export default App;
