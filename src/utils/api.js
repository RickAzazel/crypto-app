import { cryptoData, cryptoAssets } from "./cryptoData";

export const fakeFetchCrypto = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(cryptoData);
		}, 2000);
	});
}

export const fakeFetchAssets = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(cryptoAssets);
		}, 2000);
	});
}