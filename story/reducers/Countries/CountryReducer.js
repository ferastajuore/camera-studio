import {
	GET_ALL_COUNTRIES,
	CREATE_COUNTRY,
	DELETE_COUNTRY,
	SHOW_ERRORS,
} from '../../../actions/types';

const initialState = {
	countries: [],
	errors: { message: '', status: 0 },
};

const CountryReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_COUNTRIES:
			return { ...state, countries: action.countries };

		case CREATE_COUNTRY:
			return {
				...state,
				countries: [action.countries, ...state.countries],
			};

		case DELETE_COUNTRY:
			return {
				...state,
				countries: state.countries.filter((country) => country._id !== action.id),
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

export default CountryReducer;
