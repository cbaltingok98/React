import React, {Component} from 'react';
import {choice} from './helpers';
import '../Style/Box.css';

class Box extends Component {
    state = {
        color: choice(this.props.allColors) // helpers.js
    };

    changeColor = () => {
        // let r = Math.floor(Math.random() * 257);
        // let g = Math.floor(Math.random() * 257);
        // let b = Math.floor(Math.random() * 257);
        // let rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        let newColor;
        do {
            newColor = choice(this.props.allColors);
        } while(newColor === this.state.color);
        this.setState({
            color: newColor
        });
    }

    clickHandler = () => {
        this.changeColor();
    }

    render() {
        const style = {
            backgroundColor: this.state.color
        };
        return(
            <div className='Box' onClick={this.clickHandler} style={style}>
            </div>
        );
    }
}

export default Box;