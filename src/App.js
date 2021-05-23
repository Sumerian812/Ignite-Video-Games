import React from "react";
// Components & Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
// Styles
import GlobalStyles from "./components/GlobalStyles";
// Router
import { Redirect, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
      <Redirect to="/"></Redirect>
    </div>
  );
}

export default App;
