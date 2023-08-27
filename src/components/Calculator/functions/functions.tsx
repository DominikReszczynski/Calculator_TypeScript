export const mathResult = (
	calculation: string[],
	setCalculation: React.Dispatch<React.SetStateAction<string[]>>,
	setNumberOnDisplay: React.Dispatch<React.SetStateAction<string>>,
	historyElement: string[],
	setHistoryElement: React.Dispatch<React.SetStateAction<string[]>>
) => {
	console.log(
		`${Number(calculation[0])}  ${Number(calculation[2])}  ${
			calculation.length
		}`
	);
	if (calculation.length === 3) {
		const [num1, operator, num2] = calculation;
		let calculatedResult: number | null | string;
		if (num1.split('.').length > 2 || num2.split('.').length > 2) {
			calculatedResult = null;
			console.log('Za dużo kropek w któreś liczbie nie mogę policzć');
			setCalculation([]);
			setNumberOnDisplay('');
		} else {
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
					calculatedResult = null;
			}
		}
		if (String(calculatedResult).length > 11) {
			if (calculatedResult !== null) {
				calculatedResult = Math.round(calculatedResult * 100) / 100;
				if (String(calculatedResult).length > 11) {
					calculatedResult = 'Too long :(';
					setTimeout(() => {
						setNumberOnDisplay('');
					}, 2000);
				}
			}
		}
		console.log('result: ' + calculatedResult);
		const append: string = `${calculation.join(' ')} = ${calculatedResult}`;
		calculatedResult !== null
			? (setHistoryElement([append, ...historyElement]),
			  setNumberOnDisplay(String(calculatedResult)))
			: setNumberOnDisplay('');
		setCalculation([]);
	}
};
