import React from 'react';
import './home-page.css';
import logo from './component/assets/logo.png';

class PageHome extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-3' />
          <div className='col-md-6'>
            <img src={logo} alt='' />
            <form className='form-inline' onSubmit={this.handleSubmit}>
              <div className='busqueda'>
                <input
                  name='busqueda'
                  type='text'
                  id='buscar'
                  value={this.busqueda}
                  placeholder='Buscar pokemon'
                  onChange={this.props.onChange}
                />
              </div>
              <div className='actions'>
                <button className='btng' type='submit'>Buscar similares</button>
                <button className='btng'>Buscar similares2</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
