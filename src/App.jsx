import React from "react";
import "./App.css";
import "./styles/Main.scss";
import "./styles/Card.scss";
import "./styles/CustomBtn.scss";
import "./styles/List.scss";

import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store/store";

import Main from "./components/main/Main";
import NotFound from "./components/not-found/NotFound";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
