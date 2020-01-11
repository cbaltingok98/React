import React, {Component} from 'react';
import Coin from './Coin';

class Flipper extends Component {
    static defaultProps = {
        faceArr: ['heads', 'tails'],
    };
    state = {
        face: null,
        numOfFlips: 0,
        numOfHeads: 0,
        numOfTails: 0
    }

    flipCoin = () => {
        let rnd = Math.floor(Math.random() * this.props.faceArr.length);
        this.setState(curState => ({
            face: this.props.faceArr[rnd],
            numOfFlips: curState.numOfFlips + 1,
            numOfHeads: rnd ? curState.numOfHeads : curState.numOfHeads + 1,
            numOfTails: rnd ? curState.numOfTails + 1 : curState.numOfTails
        }));
    }

    clickHandler = () => {
        this.flipCoin();
    }
    render() {
        return(
            <div>
                <h1>Flipper</h1>
                {this.state.face && <Coin face={this.state.face} />}
                <button onClick={this.clickHandler}>Flip</button>
                <p>Number of Flips: {this.state.numOfFlips}</p>
                <p>Number of Heads: {this.state.numOfHeads}</p>
                <p>Number of Tails: {this.state.numOfTails}</p>
            </div>
        );
    }
}

export default Flipper;