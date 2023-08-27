import './delete.css';
export const DeleteButtons = ({ setNumberOnDisplay, getNumberOnDisplay }) => {
	return (
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
	);
};
