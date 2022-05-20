import {
	GET_ALL_HOTELS,
	CREATE_HOTEL,
	UPDATE_HOTEL,
	DELETE_HOTEL,
	SHOW_ERRORS,
} from '../../../actions/types';

const initialState = {
	cities: [],
	errors: { message: '', status: 0 },
};

const HotelsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_HOTELS:
			return { ...state, cities: action.cities };

		case CREATE_HOTEL:
			return {
				...state,
				cities: [action.cities, ...state.cities],
			};

		case DELETE_HOTEL:
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

export default HotelsReducer;
