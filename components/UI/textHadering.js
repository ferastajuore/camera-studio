import React from 'react';

const textHadering = ({ children, textColor }) => {
	return (
		<div className="header-text">
			<h2 className={`header-title ${textColor}`}>{children}</h2>
		</div>
	);
};

export default textHadering;
