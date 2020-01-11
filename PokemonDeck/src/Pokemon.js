import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './Pokedex.css';

class Pokemon extends Component {
    render(){
        let title;
        if(this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>
        } else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>
        }
        return(
            <div className='Pokedex'>
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className='Pokedex-card'>
                    {this.props.pokemon.map((p) => (
                        <Pokedex pokemon={p} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokemon;