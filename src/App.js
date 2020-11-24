import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:id" component={MoviePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
