import { useState } from 'react';
import './index.css';
import { Monitor } from './monitor/monitor';
import { DeleteButtons } from './deleteButtons/delete';
import { CalculationHistory } from './calculationHistory/calculationHistory';
import { MainButtons } from './mainButtons/mainButtons';

export const Calculator = () => {
	const [getNumberOnDisplay, setNumberOnDisplay] = useState<string>('');
	const [getCalculation, setCalculation] = useState<string[]>([]);
	const [historyElement, setHistoryElement] = useState<string[]>([]);

	return (
		<>
			<div className='calculator'>
				<Monitor getNumberOnDisplay={getNumberOnDisplay} />
				<DeleteButtons
					setNumberOnDisplay={setNumberOnDisplay}
					getNumberOnDisplay={getNumberOnDisplay}
				/>
				<MainButtons
					getCalculation={getCalculation}
					getNumberOnDisplay={getNumberOnDisplay}
					setCalculation={setCalculation}
					setNumberOnDisplay={setNumberOnDisplay}
					historyElement={historyElement}
					setHistoryElement={setHistoryElement}
				/>
			</div>
			<CalculationHistory historyElement={historyElement} />
		</>
	);
};
