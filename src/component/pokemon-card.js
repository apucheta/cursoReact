import React from 'react';
import './pokemon-card.css';

class PokemonCard extends React.Component {
  render() {
    return (
      <div className='col-3'>
        <div className='item'>
          <img
            src={this.props.img}
            alt={this.props.titulo}
            className='imagen img-fluid'
          />
          <p className='titulo'>{this.props.titulo}</p>
        </div>
      </div>
    );
  }
}
export default PokemonCard;
