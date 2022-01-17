import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PageHome from "./home-page.js";
import PageArtist from "./page-artist.js";
import PageSearchResult from "./page-search-result.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/busqueda" component={PageSearchResult} />
          <Route exact path="/artista" component={PageArtist} />
          <Route path="/" component={PageHome} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
