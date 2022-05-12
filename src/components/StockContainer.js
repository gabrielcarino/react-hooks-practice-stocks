import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onBuy }) {
  const cards = stocks.filter(stock => stock.owned === false).map(stock => <Stock stock={stock} key={stock.id} onBuySell={onBuy} />)
  
  return (
    <div>
      <h2>Stocks</h2>
      {cards}
    </div>
  );
}

export default StockContainer;
