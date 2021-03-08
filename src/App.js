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
import { createStore, combineReducers } from "redux";
import newsReducer from "./store/reducers/newsReducer";
import { Provider } from "react-redux";
import InitialPage from "./screen/InitialPage";
const rootReducer = combineReducers({
  news: newsReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <InitialPage />
          </Route>
          <Route exact path="/add-news">
            <HomePage>
              <AddNews />
            </HomePage>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
