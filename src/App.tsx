import { Calculator } from './components/Calculator';
import './App.css';
import Confetti from 'react-confetti';
import SnakeDetectionSound from './SnakeDetectionSound.mp3';
import { useEffect, useState } from 'react';
function App() {
	const konamiCode = [
		'ArrowUp',
		'ArrowUp',
		'ArrowDown',
		'ArrowDown',
		'ArrowLeft',
		'ArrowRight',
		'ArrowLeft',
		'ArrowRight',
		'KeyB',
		'KeyA',
	];
	const audio = new Audio(SnakeDetectionSound);
	const userInput: string[] = [];

	const [numberOfConfetti, setNUmberOfConfetti] = useState<number>(500);
	const [showConfetti, setShowConfetti] = useState<boolean>(false);
	const [generateConfetti, setGenrateConfetti] = useState<boolean>(false);

	const handleKeyPress = (event: KeyboardEvent) => {
		setShowConfetti(false);
		userInput.push(event.code);
		if (userInput.length > konamiCode.length) {
			userInput.shift();
		}
		if (userInput.join('') === konamiCode.join('')) {
			setShowConfetti(true);
			setGenrateConfetti(true);
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, []);
	useEffect(() => {
		if (showConfetti) {
			audio.play();
			setTimeout(() => {
				setNUmberOfConfetti(0);
			}, 1000);
			setTimeout(() => {
				setShowConfetti(false);
				setNUmberOfConfetti(500);
			}, 10000);
		}
	}, [showConfetti]);
	return (
		<>
			<div>
				<Calculator />
			</div>
			{showConfetti && (
				<Confetti run={generateConfetti} numberOfPieces={numberOfConfetti} />
			)}
		</>
	);
}

export default App;
