import React, { useState } from 'react';
import { Hand } from './Hand';
import './App.css';

function App() {
  const [hand, setHand] = useState([
    {rank: 'J', suit: 'S'},
    {rank: '4', suit: 'H'},
  ]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const handRegex = new RegExp("^([A2-9JKQ][CDHS] *)+$");
    const input = event.target.value; 
    if(handRegex.test(input)) {
      const cards = input.split(" ").map((cardstr: string) => {
        return {rank: cardstr[0], suit: cardstr[1]}
      }).filter((card: {rank: string, suit: string}) => {
        return (card.rank && card.suit);
      })
      console.log(JSON.stringify(cards));
      setHand(cards);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input type="text" defaultValue='JS 4H' onChange={handleChange}></input>
        </form>
      </header>
        <Hand cards={hand} />
    </div>
  );
}

export default App;
