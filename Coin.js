import React from 'react';
const Coin = ({
   name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
  }) => {
    return(
        <>
      
        <h2>{name}</h2>
          <img src={image} alt='crypto' />
          <div>
          <p >{symbol}</p>
        </div>
        
         <div> <p >${price}</p>
          <p>${volume.toLocaleString()}</p>
</div>
          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        
      
    </>
  );
};

export default Coin;
    