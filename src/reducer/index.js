export const initialState = { input: 0, output: 0 };

export const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'C':
			return { ...state, input: '0', output: 0 };
		case '\u2190':
			return state.input.length === 1
				? { ...state, input: '0' }
				: { ...state, input: state.input.slice(0, state.input.length - 1) };
		case '=':
			try {
				return {
					...state,
					output: eval(state.input),
					input: 0,
				};
			} catch (e) {
				return {
					...state,
					output: e.message,
					input: 0,
				};
			}
		default:
			return state.input == 0
				? { ...state, input: payload }
				: { ...state, input: state.input + payload };
	}
};
