import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onSell }) {
  const cards = stocks.filter(stock => stock.owned === true).map(stock => <Stock stock={stock} key={stock.id} onBuySell={onSell} />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {cards}
    </div>
  );
}

export default PortfolioContainer;
