import React, { Component } from "react";
import logo from "./assets/logo.png";
import "./search-bar.css";

import { Link } from "react-router-dom";

class SearchBar extends Component {
  state = {
    busqueda: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("soy el input", e.target.value);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name, e);
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <img src={logo} alt="" className="logo-barra" />
            </Link>
          </div>
          <div className="col-md-4">
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.busqueda}
                  placeholder="Buscar pokemon"
                  onChange={this.props.onChange}
                />
              </div>
              {/* <button type='submit' className='btn btn-primary'>
                  Buscar
                </button> */}
            </form>
          </div>
        </div>

        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
