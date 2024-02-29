import React, { useRef } from 'react';

import { useCrypto } from './../../context/crypto-context';

import Tag from '../Tag/Tag';

const Sider = ({ assetsVisible, setAssetsVisible }) => {
	const { assets } = useCrypto();
	const siderRef = useRef();

	const closeAssets = (e) => {
		if (e.target === siderRef.current) setAssetsVisible(false);
	};

	return (
		<aside
			ref={siderRef}
			className={assetsVisible ? 'sider sider--active' : 'sider'}
			onClick={closeAssets}
		>
			<div className="sider__content">
				<span
					className={assets.length > 0 ?
						'sider__placeholder' :
						'sider__placeholder sider__placeholder--active'}
				>
					No assets added
				</span>

				{assets.map((asset, index) => (
					<div className="statistic" key={index + asset.id}>
						<h3 className="statistic__title">{asset.id}</h3>

						<div className="statistic__data">
							<i
								className={asset.grow ?
									'uil uil-arrow-up statistic__data-icon color-green' :
									'uil uil-arrow-down statistic__data-icon color-red'}
							/>
							<span
								className={asset.grow ?
									'color-green' :
									'color-red'}
							>
								${asset.totalAmount}
							</span>
						</div>

						<ul className="statistic__list">

							<li className="statistic__list-item">
								<h3 className='statistic__list-title'>Total Profit</h3>
								<span className='statistic__list-icon'>
									<i
										className={asset.totalProfit > 0 ?
											'uil uil-angle-up color-green' :
											'uil uil-angle-down color-red'}
									/>
								</span>
								<p
									className={asset.totalProfit > 0 ?
										'statistic__list-data color-green' :
										'statistic__list-data color-red'}
								>
									${(Math.abs(asset.totalProfit)).toFixed(2)}
									<Tag
										text={(asset.growPercent).toFixed(2) + '%'}
										className={asset.totalProfit > 0 ?
											'tag--green' :
											'tag--red'}
									/>
								</p>
							</li>

							<li className="statistic__list-item">
								<h3 className='statistic__list-title'>Asset Amount</h3>
								<p className="statistic__list-data">{asset.amount}</p>
							</li>

						</ul>

					</div>
				))}
			</div>
		</aside>
	)
}

export default Sider;