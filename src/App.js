import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import dummyData from "./contents/dummy-data";
import AddNews from "./components/AddNews";

import InitialPage from "./screen/InitialPage";
import AddPage from "./components/AddPage";
import DetailScreen from "./components/DetailScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <InitialPage />
        </Route>
        <Route exact path="/add-news">
          <AddPage>
            <AddNews />
          </AddPage>
        </Route>
        <Route exact path="/edit-news/:id">
          <AddPage>
            <AddNews />
          </AddPage>
        </Route>
        <Route exact path="/details/:id">
          <DetailScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
