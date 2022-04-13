import React from 'react';
import './Coin.css';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketCap }) => {
	return (
		<div className="coinContainer">
			<div className="coinRow">
				<div className="coin">
					<img src={image} alt="crypto" />
				</div>
				<div className="coinData">
					<a className="coin_name" href={`/${name}`}>
						{name}
					</a>
					<p className="coinSymbol">{symbol}</p>
					<p className="coinPrice">${price.toLocaleString()}</p>
					<p className="coinVolume">${volume.toLocaleString()}</p>
					{priceChange < 0 ? (
						<p className="coinPercent red">{priceChange.toFixed(2)}%</p>
					) : (
						<p className="coinPercent green">{priceChange.toFixed(2)}%</p>
					)}
					<p className="coinMarketCap">Mkt Cap: ${marketCap.toLocaleString()}</p>
				</div>
			</div>
		</div>
	);
};

export default Coin;
