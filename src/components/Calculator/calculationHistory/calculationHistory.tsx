import React from 'react';

type CalculationHistory = {
	historyElement: string[];
};
export const CalculationHistory: React.FC<CalculationHistory> = ({
	historyElement,
}) => {
	return (
		<div className='calculator__history'>
			<h3>Historia operacji</h3>
			<ul>
				{historyElement.length > 0 &&
					historyElement.map((item, index) => <li key={index}>{item}</li>)}
			</ul>
		</div>
	);
};
