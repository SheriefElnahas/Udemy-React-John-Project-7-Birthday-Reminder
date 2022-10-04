import './App.css';

import React from "react";

import data from './data';
import Character from './Character';

function App() {
  const [characters, setCharacters ] = React.useState(data);

  const charactersElement = characters.map((character) => {
    return < Character key={character.id} name={character.name} age={character.age} img={character.image} />
  })

  return (
    <main>
      <section className="container">
        <h3>{characters.length} Birthday Today</h3>
        {charactersElement}
        <button onClick={() => setCharacters([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App

