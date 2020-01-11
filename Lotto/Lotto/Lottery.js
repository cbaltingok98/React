import React, { Component } from 'react';
import Ball from './Ball';
import '../Style/Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numOfBalls: 6,
        maxNum: 40
    }
    state = {
        nums: Array.from({length: this.props.numOfBalls})
    };

    generateNumbers = () => {
        this.setState(curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }));
    }

    handleClick = () => {
        this.generateNumbers();
    }

    render() {
        return(
           <div className='Lottery-Card'>
                <h2>{this.props.title}</h2>
                <div>
                    {this.state.nums.map(n => <Ball num={n} />)}
                </div>
                <button className='Lottery-Card-Button' onClick={this.handleClick}>Generate</button>
           </div>
        );
    }
}

export default Lottery;