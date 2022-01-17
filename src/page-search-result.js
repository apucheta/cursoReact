import React from 'react';
import SearchBar from './component/search-bar.js';
import SearchResult from './component/search-result.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class PageSearchResult extends React.Component {
  state = {
    busqueda: '',
  };
  componentWillMount(){
    console.log('component will mount');
  }
  componentDidMount(){
    console.log('component did mount');
  }
  componentWillUnmount(){
    console.log('will unmount ');
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    console.log('soy el render papa');
    return (
      <React.Fragment>
        <SearchBar onChange={this.changeHandler} />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}
export default PageSearchResult;
