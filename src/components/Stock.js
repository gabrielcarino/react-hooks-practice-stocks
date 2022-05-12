import React from "react";

function Stock({ stock, onBuySell }) {
  const { ticker, name, price } = stock

  function handleBuy() {
    onBuySell(stock)
  }

  return (
    <div>
      <div className="card" onClick={handleBuy}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
