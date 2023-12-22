import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import './Search.css';
import Coin from './Coin';
import axios from 'axios';

function Search() {
  const navigate=useNavigate();
  //const [searchTerm, setSearchTerm] = useState('');
  const [search,setSearch]=useState([]);
  const [name,setName]=useState('');

  const handleSearch = () => {
    // Perform search logic here
    console.log('Searching for:', name);
  };
  const handleClick=()=>{
    //e.preventDefault();
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false?'
    )
    .then(res=>{
      setSearch(res.data);
      console.log(res.data);
    })
    .catch(error=>console.log(error));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  }
  return (
    <>
    <div className='Nav'> 
    <p className="p1"onClick={()=>navigate("about")}>About</p>
    <p className="p2" onClick={()=>navigate("images")}>Images</p>
</div>
    
    <div className="app">
      <div className="search-container">
        <img
          className="google-logo"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="Google Logo"
        />
        <div className="search-bar">
          <input
            type="text"
            placeholder='Search Google or Type Url'
            
            onChange={(e) => setName(e.target.name)}    
            onKeyDown={handleKeyPress}
                  
          />
          <div className='Nav1'>
           <FaMicrophone /> 
           <FaCamera />
          
       </div>
       </div>
        
      </div>
      {search.map(coin=>{
        return(
          <Coin 
          key={coin.id}
          name={coin.name}
          price={coin.current_price}
          symbol={coin.symbol}
          marketcap={coin.total_volume}
          volume={coin.market_cap}
          image={coin.image}
          priceChange={coin.price_change_percentage_24h}
        />
        );

      })}
    </div>
    </>
  );
}

export default Search;