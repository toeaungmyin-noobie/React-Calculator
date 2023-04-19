import { useReducer, useState } from 'react';
import Buttons from './components/Buttons';
import Input from './components/Input';
import Output from './components/Output';
import { initialState, reducer } from './reducer';

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleCalculation = (type, value) => {
		dispatch({ type, payload: value });
	};
	return (
		<>
			<div className=' w-full h-screen bg-gray-700 flex flex-col items-center justify-center'>
				<div className=' md:w-1/3 mx-auto shadow-md'>
					<Output output={state.output} />
					<Input input={state.input} />
					<Buttons handleCalculation={handleCalculation} />
				</div>
			</div>
		</>
	);
}
export default App;
