import React from 'react';
import { CryptoContextProvider } from '../../context/crypto-context';

import Layout from '../Layout/Layout';

const App = () => {
	return (
		<CryptoContextProvider>

			<Layout />

		</ CryptoContextProvider>
	)
}

export default App;
