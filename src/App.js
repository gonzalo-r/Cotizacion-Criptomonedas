
import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react"
import TableCoins from './components/TableCoins.jsx';


function App() {

  const [coins, setCoins] = useState([])

  const getData = async() => {

    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
    console.log(res.data)
    setCoins(res.data)

  }

  useEffect(()=>{
  getData()
}, [])
  return (
    <div className="App">
      <h1>Market Coin</h1>
      <TableCoins coins={coins} />
    </div>
  );
}

export default App;
