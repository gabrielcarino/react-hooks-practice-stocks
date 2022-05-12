import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const API = "http://localhost:3001/stocks"
  const [stocks, setStocks] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilteredBy] = useState("Tech");

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(stocksArray => {
        const updatedStocks = stocksArray.map(stock => {
          return {...stock, owned: false}
        });
        setStocks(updatedStocks);
      });
  }, []);

  function handleBuySell(stock) {
    const updatedStocks = filteredStocks.map(item => {
      if(item.id === stock.id) return {...item, owned: !item.owned};
      return item;
    });
    setStocks(updatedStocks)
  };

  const sortedStocks = [...stocks].sort((stock1, stock2) => {
    if(sortBy === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name);
    } else {
      return stock1.price - stock2.price;
    }
  });

  const filteredStocks = sortedStocks.filter(stock => stock.type === filterBy);

  return (
    <div>
      <SearchBar sortBy={sortBy} onSort={setSortBy} filterBy={filterBy} onFilter={setFilteredBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onBuy={handleBuySell} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={filteredStocks} onSell={handleBuySell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
