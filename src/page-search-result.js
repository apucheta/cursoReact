import React from 'react';
import SearchBar from './component/search-bar.js';
import SearchResult from './component/search-result.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class PageSearchResult extends React.Component {
  state = {
    busqueda: '',
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
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}
export default PageSearchResult;
