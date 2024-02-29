import { createContext, useState, useEffect, useContext } from "react";
import { fakeFetchCrypto, fakeFetchAssets } from '../utils/api';
import { percentDifference } from '../utils/utils';


const CryptoContext = createContext({
	assets: [],
	crypto: [],
	loading: false,
});

export const CryptoContextProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [crypto, setCrypto] = useState([]);
	const [assets, setAssets] = useState([]);

	const mapAssets = (assets, result) => {
		return assets.map((asset) => {
			const coin = result.find((c) => c.id === asset.id);

			return {
				grow: asset.price < coin.price,
				growPercent: percentDifference(asset.price, coin.price),
				totalAmount: (asset.amount * coin.price).toFixed(2),
				totalProfit: asset.amount * coin.price - asset.amount * asset.price,
				name: coin.name,
				...asset,
			};
		})
	}

	useEffect(() => {
		async function preload() {
			setLoading(true);

			const { result } = await fakeFetchCrypto();
			const assets = await fakeFetchAssets();

			setCrypto(result);
			setAssets(mapAssets(assets, result));

			setLoading(false);
		}

		preload();
	}, []);

	const addAsset = (newAsset) => {
		setAssets((prev) => mapAssets([...prev, newAsset], crypto));
	}

	return (
		<CryptoContext.Provider value={{
			loading,
			crypto,
			assets,
			addAsset
		}}>
			{children}
		</CryptoContext.Provider>
	);
}

export const useCrypto = () => {
	return useContext(CryptoContext);
};

export default CryptoContext;

