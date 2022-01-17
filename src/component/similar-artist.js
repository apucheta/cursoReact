import React from "react";
import PokemonCard from "./pokemon-card";
class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margenes50">
          <div className="col-md-12">
            <h5>similar artist</h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <PokemonCard
              img="https://static.wikia.nocookie.net/espokemon/images/7/77/Pikachu.png"
              titulo="ah re"
            />
          </div>
          <div className="col-md-3">
            <PokemonCard
              img="https://static.wikia.nocookie.net/espokemon/images/7/77/Pikachu.png"
              titulo="ah re"
            />
          </div>
          <div className="col-md-3">
            <PokemonCard
              img="https://static.wikia.nocookie.net/espokemon/images/7/77/Pikachu.png"
              titulo="ah re"
            />
          </div>
          <div className="col-md-3">
            <PokemonCard
              img="https://static.wikia.nocookie.net/espokemon/images/7/77/Pikachu.png"
              titulo="ah re"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
