import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PageHome from './home-page.js';
import PageArtist from './page-artist.js';


class App extends Component {
  render() {
    return <PageArtist />;
  }
}

export default App;
