import { useEffect, useState } from 'react';
import './index.css';

type CalculatorButtonsType = {
	name: string;
	onClick: () => void;
	disabled: boolean;
};
export const Calculator = () => {
	const [getNumberOnDisplay, setNumberOnDisplay] = useState<string>('');
	const [getCalculation, setCalculation] = useState<string[]>([]);
	const [result, setResult] = useState<number | null>(null);
	const [historyElement, setHistoryElement] = useState<string>('');
	const addOnDisplay = (char: string): string | void => {
		if ((getNumberOnDisplay + char).length > 11) {
			console.log('jestem w funkcji blokującej ');
			return getNumberOnDisplay;
		}
		return setNumberOnDisplay(getNumberOnDisplay + char);
	};
	const mathResult = () => {
		console.log(
			`${Number(getCalculation[0])}    ${Number(getCalculation[2])}     ${
				getCalculation.length
			}`
		);
		if (getCalculation.length === 3) {
			const [num1, operator, num2] = getCalculation;
			let calculatedResult: number | undefined;

			switch (operator) {
				case '+':
					calculatedResult = Number(num1) + Number(num2);
					break;
				case '-':
					calculatedResult = Number(num1) - Number(num2);
					break;
				case 'X':
					calculatedResult = Number(num1) * Number(num2);
					break;
				case '/':
					calculatedResult = Number(num1) / Number(num2);
					break;
				default:
					calculatedResult = undefined;
			}

			setResult(calculatedResult);
			setCalculation([]);
			setNumberOnDisplay('');
		}
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
				//todo
				// const append = [...getCalculation, getNumberOnDisplay, 'X'];
				// setCalculation(append);
				// setNumberOnDisplay('');
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
				mathResult();
			},
			disabled: false,
		},
	];
	useEffect(() => {
		setTimeout(() => {
			if (getCalculation.length < 1) {
				setResult(null);
			}
		}, 1000);
	}, [getNumberOnDisplay]);
	console.log('result: ' + result);
	return (
		<div className='calculator'>
			<div className='calculator__monitor'>
				<h3 className='calculator__monitor__calculations'>
					{getNumberOnDisplay}
					{result !== null && result}
				</h3>
			</div>
			<div className='calculator__delateButtons'>
				<button
					className='calculator__CEButton'
					onClick={() => {
						console.log('usuwam wszystko');
						setNumberOnDisplay('');
					}}
				>
					CE
				</button>
				<button
					className='calculator__CButton'
					onClick={() => {
						console.log('usuwam ostatni znak');
						setNumberOnDisplay(getNumberOnDisplay.slice(0, -1));
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
		</div>
	);
};
