import React from 'react';

const Button = (props) => {
	const { onClick, text, className, type } = props;
	
	return (
		<button
			className={className ?
				'button ' + className :
				'button'}
			onClick={onClick}
			type={type}
		>
			{text}
		</button>
	)
}

export default Button;