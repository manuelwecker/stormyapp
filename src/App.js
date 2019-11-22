import React from "react";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <header>
        <h1>Is a storm coming?</h1>
      </header>
      <aside>
        <input
          type="number"
          class="search__latt"
          value="51"
          placeholder="Please enter Latitude"
        />
        <input
          type="number"
          class="search__long"
          value="7"
          placeholder="Please enter Longitude"
        />
        <button class="search__submit">Submit your position</button>
      </aside>
      <main>
        <div class="results">Output from API</div>
      </main>
    </>
  );
}

export default App;
