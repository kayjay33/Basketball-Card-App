import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './components/ui/Header'
import PlayerGrid from './components/players/PlayerGrid'
import Search from './components/ui/Search'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.sportsdata.io/v3/nba/stats/json/Players/${query}?key=50f578a83283412eb84afc306cf5b3d2`)
      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <PlayerGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;


// To do

// qx* List of things to do:

// Add sort by player salary
// Fix Player Pictures
// Change background image
