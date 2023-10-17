import React from 'react';
import './delete.css';
interface deleteInterface {
	setNumberOnDisplay:React.Dispatch<React.SetStateAction<string>>, 
	getNumberOnDisplay: string
}
export const DeleteButtons: React.FC<deleteInterface> = ({ setNumberOnDisplay, getNumberOnDisplay }) => {
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
