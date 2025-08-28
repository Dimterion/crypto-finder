import { Link } from "react-router";

const CoinCard = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="coin-card">
        <div className="coin-header">
          <img src={coin.image} alt={coin.name} className="coin-image" />
          <div>
            <h2>{coin.name}</h2>
            <p className="symbol">{coin.symbol.toUpperCase()}</p>
          </div>
        </div>
        <p>
          Price: <span>${coin.current_price.toLocaleString()}</span>
        </p>
        <p
          className={
            coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)} %
        </p>
        <p>
          Market Cap: <span>{coin.market_cap.toLocaleString()}</span>
        </p>
      </div>
    </Link>
  );
};

export default CoinCard;
