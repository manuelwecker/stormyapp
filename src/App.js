import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import InputPosition from "./components/InputPosition";
import BtnSubmitPosition from "./components/BtnSubmitPosition";
import Results from "./components/Results";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header headline="Is a storm coming or not?" />
      <aside>
        <InputPosition latt="51" long="7" />
        <BtnSubmitPosition label="Submit current position" />
      </aside>
      <main>
        <Results weatherdata="Output waiting for API"></Results>
      </main>
    </>
  );
}

export default App;
