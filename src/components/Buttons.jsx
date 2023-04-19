import React from 'react';

function Buttons({ handleCalculation }) {
	return (
		<div className='w-full bg-gray-800 grid grid-cols-4'>
			<button
				onClick={e => handleCalculation('C', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				C
			</button>
			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				(
			</button>
			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				)
			</button>
			<button
				onClick={e => handleCalculation('\u2190', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				&larr;
			</button>

			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				1
			</button>
			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				2
			</button>
			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				3
			</button>
			<button
				onClick={e => handleCalculation('+', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				+
			</button>

			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				4
			</button>
			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				5
			</button>
			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				6
			</button>
			<button
				onClick={e => handleCalculation('-', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				-
			</button>

			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				7
			</button>
			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				8
			</button>
			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				9
			</button>
			<button
				onClick={e => handleCalculation('*', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				*
			</button>

			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				.
			</button>
			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				0
			</button>
			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				00
			</button>
			<button
				onClick={e => handleCalculation('default', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				&divide;
			</button>

			<button
				onClick={e => handleCalculation('%', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-gray-600 '>
				%
			</button>
			<button
				onClick={e => handleCalculation('=', e.target.innerText)}
				className='text-white p-4 transition duration-150 hover:bg-amber-600  col-span-3 bg-amber-700'>
				=
			</button>
		</div>
	);
}

export default Buttons;
