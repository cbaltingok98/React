import React, {Component} from 'react';
import Box from './Box';
import '../Style/Box.css';

class Plate extends Component {
   static defaultProps = {
    numOfBox: 18,
    allColors: ['purple', 'magenta', 'violet', 'pink']
   };
    render() {
        const boxes = Array.from({length: this.props.numOfBox}).map(() => (
            <Box allColors={this.props.allColors}/>
        ));
        return(
            <div  className='Box-Container'>
                {boxes}
            </div>
        );
    }
}

export default Plate;