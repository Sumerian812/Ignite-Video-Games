import React from "react";
// Components & Pages
import Home from "./pages/Home";
// Styles
import GlobalStyles from "./components/GlobalStyles";
// Rout
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
