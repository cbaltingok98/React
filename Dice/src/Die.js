import React, {Component} from 'react';
import './Die.css';

class Die extends Component {
    render() {
        let diceImg = this.props.num;
        return(
            <i className={`Dice-face fas fa-dice-${diceImg} ${this.props.rolling && 'shaking'}`}></i>
        );
    }
}


export default Die;