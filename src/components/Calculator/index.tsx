import './index.css';

type CalculatorButtonsType = {
	name: string;
	onClick: () => void;
};
export const Calculator = () => {
	console.clear();
	const calculatorButtons: CalculatorButtonsType[] = [
		{
			name: '7',
			onClick: () => {
				console.log('Kliknięto przycisk 7');
			},
		},
		{
			name: '8',
			onClick: () => {
				console.log('Kliknięto przycisk 8');
			},
		},
		{
			name: '9',
			onClick: () => {
				console.log('Kliknięto przycisk 9');
			},
		},
		{
			name: '÷',
			onClick: () => {
				console.log('Kliknięto przycisk ÷');
			},
		},
		{
			name: '4',
			onClick: () => {
				console.log('Kliknięto przycisk 4');
			},
		},
		{
			name: '5',
			onClick: () => {
				console.log('Kliknięto przycisk 5');
			},
		},
		{
			name: '6',
			onClick: () => {
				console.log('Kliknięto przycisk 6');
			},
		},
		{
			name: 'X',
			onClick: () => {
				console.log('Kliknięto przycisk X');
			},
		},
		{
			name: '1',
			onClick: () => {
				console.log('Kliknięto przycisk 1');
			},
		},
		{
			name: '2',
			onClick: () => {
				console.log('Kliknięto przycisk 2');
			},
		},
		{
			name: '3',
			onClick: () => {
				console.log('Kliknięto przycisk 3');
			},
		},
		{
			name: '-',
			onClick: () => {
				console.log('Kliknięto przycisk -');
			},
		},
		{
			name: '0',
			onClick: () => {
				console.log('Kliknięto przycisk 0');
			},
		},
		{
			name: '.',
			onClick: () => {
				console.log('Kliknięto przycisk .');
			},
		},
		{
			name: '+',
			onClick: () => {
				console.log('Kliknięto przycisk +');
			},
		},
		{
			name: '=',
			onClick: () => {
				console.log('Kliknięto przycisk =');
			},
		},
	];
	return (
		<div className='calculator'>
			<div className='calculator__monitor'></div>
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
