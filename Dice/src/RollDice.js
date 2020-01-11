import React, {Component} from 'react';
import './RollDice.css';
import Die from './Die';

class Rollice extends Component {
    static defaultProps = {
        sides: ['one','two','three','four','five','six']
    };
    state = {
        dice1: 'one',
        dice2: 'one',
        rolling: false
    };
    rollDice = () => {
        let rand1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        let rand2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
       
        this.setState({
            dice1: rand1,
            dice2: rand2,
            rolling: true
        });

        setTimeout(() => { // display ROlling for 1 sec
            this.setState({rolling: false});
        }, 1000);
    }
    render(){
        return(
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die num={this.state.dice1} rolling={this.state.rolling}/>
                    <Die num={this.state.dice2} rolling={this.state.rolling}/>
                </div>
                <button className='RollDice-button' onClick={this.rollDice} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        );
    }
}

export default Rollice;