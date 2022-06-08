import React, { useEffect, useState } from 'react';
import Header from './Components/Header/header';
import Coin from './Components/Content/coin';
import './App.css';
import Axios from 'axios';

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWords, setSearchWords] = useState('');

  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then((response) => {
      setListOfCoins(response.data.coins);
    });
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWords.toLowerCase());
  });

  return (
    <div className="App">
      <div>
        <Header
          onChange={(event) => {
            setSearchWords(event.target.value);
          }}
        />
      </div>
      <div>
        {filteredCoins.map((coin) => {
          return <Coin key={coin.id} name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />;
        })}
      </div>
    </div>
  );
}

export default App;
