import React from 'react';

const ButtonClose = ({ handleClick }) => {

	return (
		<span
			className='button-close'
			onClick={handleClick}
		/>
	)
}

export default ButtonClose;