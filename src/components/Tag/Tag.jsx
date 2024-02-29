import React from 'react';

const Tag = ({ text, className }) => {
	
	return (
		<span
			className={className ?
				'tag ' + className :
				'tag'}
		>
			{text}
		</span>
	)
}

export default Tag;