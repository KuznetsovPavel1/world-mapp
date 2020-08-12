import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import store from "./store/store";
import Main from "./components/main/Main";
import NotFound from "./components/not-found/NotFound";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
