import React from 'react';
import logo from './assets/logo.png';
import './search-bar.css';

class SearchBar extends React.Component {
  handleChange = (e) => {
    console.log('soy el input', e.target.value);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name, e);
  };
  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-md-2'>
            <img src={logo} alt='' className='logo-barra' />
          </div>
          <div className='col-md-4'>
            <form className='form-inline' onSubmit={this.handleSubmit}>
              <div className='busqueda'>
                <input
                  name='busqueda'
                  type='text'
                  id='buscar'
                  placeholder='Buscar pokemon'
                  onChange={this.handleChange}
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