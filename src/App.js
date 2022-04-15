import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Coin from './Components/Coin.js';

function App() {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		axios
			.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20hedera-hashgraph%2C%20polkadot%2C%20solana%2C%20fantom%2C%20terra-luna%2C%20%20liquiddriver%2C%20tethys%2C%20scream%2C%20beethoven-x%2C%20spookyswap%2C%20tomb-shares&order=market_cap_desc%20gecko_desc%2C%20gecko_asc%2C&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C%2030d%2C%2060d%2C%201y'
			)
			.then((res) => {
				setCoins(res.data);
				console.log(res.data);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

	return (
		<div>
			<div className="navBar">
				<div className="text">
					<h1 className="coin-text">Search a currency</h1>
				</div>
				<div className="coin-search" />
				<form>
					<input className="coin-input" type="text" onChange={handleChange} placeholder="Search" />
				</form>
			</div>
			<div className="coin-app">
				{filteredCoins.map((coin) => {
					return (
						<Coin
							key={coin.id}
							name={coin.name}
							price={coin.current_price}
							volume={coin.market_cap}
							image={coin.image}
							priceChange={coin.price_change_percentage_24h}
							marketCap={coin.market_cap}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
