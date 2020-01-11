import React, { Component } from 'react';
import '../Style/Ball.css';

class Ball extends Component {
    render() {
        return(
            <div className='Lotto-Ball'>{this.props.num}</div>
        );
    }
}

export default Ball;