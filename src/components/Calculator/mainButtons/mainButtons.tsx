import { mathResult } from '../functions/functions.tsx';
import './mainButtons.css';
type CalculatorButtonsType = {
	name: string;
	onClick: () => void;
	disabled: boolean;
};
type MainButtonsProps = {
	getCalculation: string[];
	getNumberOnDisplay: string;
	setCalculation: React.Dispatch<React.SetStateAction<string[]>>;
	setNumberOnDisplay: React.Dispatch<React.SetStateAction<string>>;
	historyElement: string[];
	setHistoryElement: React.Dispatch<React.SetStateAction<string[]>>;
};
export const MainButtons: React.FC<MainButtonsProps> = ({
	getCalculation,
	getNumberOnDisplay,
	setCalculation,
	setNumberOnDisplay,
	historyElement,
	setHistoryElement,
}) => {
	const addOnDisplay = (char: string): string | void => {
		if ((getNumberOnDisplay + char).length > 11) {
			console.log('Nie można dodać wiecej znaków');
			return getNumberOnDisplay;
		}
		return setNumberOnDisplay(getNumberOnDisplay + char);
	};

	const calculatorButtons: CalculatorButtonsType[] = [
		{
			name: '7',
			onClick: () => {
				console.log('Kliknięto przycisk 7');
				addOnDisplay('7');
			},
			disabled: false,
		},
		{
			name: '8',
			onClick: () => {
				console.log('Kliknięto przycisk 8');
				addOnDisplay('8');
			},
			disabled: false,
		},
		{
			name: '9',
			onClick: () => {
				console.log('Kliknięto przycisk 9');
				addOnDisplay('9');
			},
			disabled: false,
		},
		{
			name: '/',
			onClick: () => {
				console.log('Kliknięto przycisk /');
				const append = [...getCalculation, getNumberOnDisplay, '/'];
				setCalculation(append);
				setNumberOnDisplay('');
			},
			disabled: false,
		},
		{
			name: '4',
			onClick: () => {
				console.log('Kliknięto przycisk 4');
				addOnDisplay('4');
			},
			disabled: false,
		},
		{
			name: '5',
			onClick: () => {
				console.log('Kliknięto przycisk 5');
				addOnDisplay('5');
			},
			disabled: false,
		},
		{
			name: '6',
			onClick: () => {
				console.log('Kliknięto przycisk 6');
				addOnDisplay('6');
			},
			disabled: false,
		},
		{
			name: 'X',
			onClick: () => {
				console.log('Kliknięto przycisk X');
				const append = [...getCalculation, getNumberOnDisplay, 'X'];
				setCalculation(append);
				setNumberOnDisplay('');
			},
			disabled: false,
		},
		{
			name: '1',
			onClick: () => {
				console.log('Kliknięto przycisk 1');
				addOnDisplay('1');
			},
			disabled: false,
		},
		{
			name: '2',
			onClick: () => {
				console.log('Kliknięto przycisk 2');
				addOnDisplay('2');
			},
			disabled: false,
		},
		{
			name: '3',
			onClick: () => {
				console.log('Kliknięto przycisk 3');
				addOnDisplay('3');
			},
			disabled: false,
		},
		{
			name: '-',
			onClick: () => {
				console.log('Kliknięto przycisk -');
				const append = [...getCalculation, getNumberOnDisplay, '-'];
				setCalculation(append);
				setNumberOnDisplay('');
			},
			disabled: false,
		},
		{
			name: '0',
			onClick: () => {
				console.log('Kliknięto przycisk 0');
				addOnDisplay('0');
			},
			disabled: false,
		},
		{
			name: '.',
			onClick: () => {
				console.log('Kliknięto przycisk .');
				addOnDisplay('.');
			},
			disabled: false,
		},
		{
			name: '+',
			onClick: () => {
				console.log('Kliknięto przycisk +');
				const append = [...getCalculation, getNumberOnDisplay, '+'];
				setCalculation(append);
				setNumberOnDisplay('');
			},
			disabled: false,
		},
		{
			name: '=',
			onClick: () => {
				console.log('Kliknięto przycisk =');
				const append = [...getCalculation, getNumberOnDisplay];
				setCalculation(append);
				mathResult(
					append,
					setCalculation,
					setNumberOnDisplay,
					historyElement,
					setHistoryElement
				);
			},
			disabled: false,
		},
	];
	return (
		<div className='calculator__buttonsConteiner'>
			{calculatorButtons.map((item) => (
				<button
					className='calculator__button'
					key={item.name}
					disabled={
						getCalculation.some((operator) =>
							['X', '/', '+', '-'].includes(operator)
						) && ['X', '/', '+', '-'].includes(item.name)
					}
					onClick={item.onClick}
				>
					{item.name}
				</button>
			))}
		</div>
	);
};
