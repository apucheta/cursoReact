import React from "react";
import SearchBar from "./component/search-bar.js";
import SimilarArtist from "./component/similar-artist.js";
import "./page-artist.css";
import "bootstrap/dist/css/bootstrap.min.css";

class PageArtist extends React.Component {
  state = {
    busqueda: "",
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar onChange={this.changeHandler} />
        <div className="container">
          <div className="row centrar">
            <div className="col-md-6-offset-3">
              <img
                src="https://i.redd.it/aupqdbnqkfo31.jpg"
                alt=""
                className="pic-artist margenes50"
              />
              <h2>Pikachu</h2>
              <p>LOREM IPSUM</p>
            </div>
          </div>
          <div className="row centrar">
            <SimilarArtist />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default PageArtist;
