import React, { Component } from 'react';
import './App.css';
// import food from './foods';
// import {choice, remove} from './helpers';
// import { render } from 'react-dom';
// import Dog from './Dog';
// import Pokemon from './Pokemon';
import Pokegame from './Pokegame';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <Pokegame/>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return(
//       <div className='App'>
//         <Dog/>
//       </div>
//     );
//   }
// }

// class App extends Component {

//   render(){
//   let fruit = choice(food);
//   let remaining = remove(food, fruit);

//   return (
//       <div> 
//         <p>I would like one {fruit}, please</p>
//         <p>Here you go: {fruit}</p>
//         <p>Remaining: {remaining}</p>
//       </div>
//     );
//   }
// }



export default App;
