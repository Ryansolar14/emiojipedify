import React from "react";
import Dictionary from "./Dictionary";
import Definitions from "../definitions";

function getData(Definitions) {
  return (
    <Dictionary
      emoji={Definitions.emoji}
      title={Definitions.name}
      definition={Definitions.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Definitions.map(getData)}</dl>
    </div>
  );
}

export default App;
