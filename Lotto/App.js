import React from 'react';
import './App.css';
import Lottery from './Lotto/Lottery';

function App() {
  return (
    <div className="App">
        <Lottery  />
        <Lottery title={"Lotto"} numOfBalls={6} maxNum={40} />
        <Lottery title={"Main"} numOfBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
