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
  const [logo, setLogo] = useState('')
  const [bkgColor, setBkgColor] = useState('')

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
      <Search getQuery={(q) => setQuery(q)} getLogo={(l) => setLogo(l)} getBkgColor={(color) => setBkgColor(color)} />
      <PlayerGrid isLoading={isLoading} items={items} logo={logo} bkgColor={bkgColor} />
    </div>
  );
}

export default App;
