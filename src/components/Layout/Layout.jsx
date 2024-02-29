import React, { useContext, useState } from 'react';

import Header from '../Header/Header';
import Sider from '../Sider/Sider';
import Content from '../Content/Content';

import CryptoContext from '../../context/crypto-context';
import Loader from '../Loader/Loader';

const Layout = () => {
	const { loading } = useContext(CryptoContext);

	const [assetsVisible, setAssetsVisible] = useState(false);

	if (loading) {
		return (
			<Loader />
		)
	};

	return (
		<div className='wrapper'>
			<Header {...{setAssetsVisible}}/>

			<main className="main">
				<Sider {...{assetsVisible, setAssetsVisible}} />
				<Content />
			</main>
		</div>
	)
}

export default Layout;