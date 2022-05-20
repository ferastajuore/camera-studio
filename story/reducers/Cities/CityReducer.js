import { GET_ALL_CITIES, CREATE_CITY, DELETE_CITY, SHOW_ERRORS } from '../../../actions/types';

const initialState = {
	cities: [],
	errors: { message: '', status: 0 },
};

const CitiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_CITIES:
			return { ...state, cities: action.cities };

		case CREATE_CITY:
			return {
				...state,
				cities: [action.cities, ...state.cities],
			};

		case DELETE_CITY:
			return {
				...state,
				cities: state.cities.filter((country) => country._id !== action.id),
			};

		case SHOW_ERRORS:
			return {
				...state,
				errors: { message: action.errors.message, status: action.errors.status },
			};

		default:
			return state;
	}
};

export default CitiesReducer;
