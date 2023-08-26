import { useState } from 'react';
import './index.css';

type CalculatorButtonsType = {
	name: string;
	onClick: () => void;
};
export const Calculator = () => {
	console.clear();
	const [getCalculation, setCalculation] = useState<string>('');
	const addOnDisplay = (char: string): string | void => {
		if ((getCalculation + char).length > 11) {
			console.log('jestem w funkcji blokującej ');
			return getCalculation;
		}
		return setCalculation(getCalculation + char);
	};
	const calculatorButtons: CalculatorButtonsType[] = [
		{
			name: '7',
			onClick: () => {
				console.log('Kliknięto przycisk 7');
				addOnDisplay('7');
			},
		},
		{
			name: '8',
			onClick: () => {
				console.log('Kliknięto przycisk 8');
				addOnDisplay('8');
			},
		},
		{
			name: '9',
			onClick: () => {
				console.log('Kliknięto przycisk 9');
				addOnDisplay('9');
			},
		},
		{
			name: '÷',
			onClick: () => {
				console.log('Kliknięto przycisk ÷');
				addOnDisplay('÷');
			},
		},
		{
			name: '4',
			onClick: () => {
				console.log('Kliknięto przycisk 4');
				addOnDisplay('4');
			},
		},
		{
			name: '5',
			onClick: () => {
				console.log('Kliknięto przycisk 5');
				addOnDisplay('5');
			},
		},
		{
			name: '6',
			onClick: () => {
				console.log('Kliknięto przycisk 6');
				addOnDisplay('6');
			},
		},
		{
			name: 'X',
			onClick: () => {
				console.log('Kliknięto przycisk X');
				addOnDisplay('X');
			},
		},
		{
			name: '1',
			onClick: () => {
				console.log('Kliknięto przycisk 1');
				addOnDisplay('1');
			},
		},
		{
			name: '2',
			onClick: () => {
				console.log('Kliknięto przycisk 2');
				addOnDisplay('2');
			},
		},
		{
			name: '3',
			onClick: () => {
				console.log('Kliknięto przycisk 3');
				addOnDisplay('3');
			},
		},
		{
			name: '-',
			onClick: () => {
				console.log('Kliknięto przycisk -');
				addOnDisplay('-');
			},
		},
		{
			name: '0',
			onClick: () => {
				console.log('Kliknięto przycisk 0');
				addOnDisplay('0');
			},
		},
		{
			name: '.',
			onClick: () => {
				console.log('Kliknięto przycisk .');
				addOnDisplay('.');
			},
		},
		{
			name: '+',
			onClick: () => {
				console.log('Kliknięto przycisk +');
				addOnDisplay('+');
			},
		},
		{
			name: '=',
			onClick: () => {
				console.log('Kliknięto przycisk =');
				addOnDisplay('=');
			},
		},
	];
	console.log(getCalculation + 'dabdab');
	return (
		<div className='calculator'>
			<div className='calculator__monitor'>
				<h3 className='calculator__monitor__calculations'>{getCalculation}</h3>
			</div>
			<div className='calculator__delateButtons'>
				<button
					className='calculator__CEButton'
					onClick={() => {
						console.log('usuwam wszystko');
						setCalculation('');
					}}
				>
					CE
				</button>
				<button
					className='calculator__CButton'
					onClick={() => {
						console.log('usuwam ostatni znak');
						setCalculation(getCalculation.slice(0, -1));
					}}
				>
					C
				</button>
			</div>
			<div className='calculator__buttonsConteiner'>
				{calculatorButtons.map((item) => (
					<button
						className='calculator__button'
						key={item.name}
						onClick={item.onClick}
					>
						{item.name}
					</button>
				))}
			</div>
		</div>
	);
};
