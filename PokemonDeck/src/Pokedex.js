import React, { Component } from 'react';
import './Pokecard.css'

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToTHree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokedex extends Component {
    render() {
        let pokemon = this.props.pokemon;
        let imgSrc = `${POKE_API}${padToTHree(pokemon.id)}.png`;
        return(
            <div className="Pokecard">
                <h1 className='Pokecard-title'>{pokemon.name}</h1>
                <div className='Pokecard-image'>
                    <img src={imgSrc} alt={pokemon.name}/>
                </div>
                <div className='Pokecard-data'>Type: {pokemon.type}</div>
                <div className='Pokecard-data'>EXP: {pokemon.base_experience}</div>
            </div>
        );
    }
}

export default Pokedex;