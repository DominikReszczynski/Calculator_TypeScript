import React from 'react';
import './monitor.css';
type Dispaly = {
	getNumberOnDisplay: string;
};
export const Monitor: React.FC<Dispaly> = ({ getNumberOnDisplay }) => {
	return (
		<div className='calculator__monitor'>
			<h3 className='calculator__monitor__calculations'>
				{getNumberOnDisplay}
			</h3>
		</div>
	);
};
