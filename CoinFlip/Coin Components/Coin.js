import React, {Component} from 'react';
import '../Style/Coin.css';

class Coin extends Component {
    render() {
        const FACE_API = `https://tinyurl.com/react-coin-${this.props.face}-jpg`;
        return(
            <div>
                <img className='Coin' src={FACE_API} alt={this.props.face} />
            </div>
        );
    }
}

export default Coin;