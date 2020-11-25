import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import TVPage from "./pages/TVPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movie/:id" component={MoviePage} />
          <Route path="/tv/:id" component={TVPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
