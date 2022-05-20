import axios from 'axios';
import {
	GET_ALL_COUNTRIES,
	CREATE_COUNTRY,
	DELETE_COUNTRY,
	UPDATE_COUNTRY,
	SHOW_ERRORS,
} from './types';

export const getAllCountries = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/v1/country');
		const countries = res.data.countries;

		dispatch({ type: GET_ALL_COUNTRIES, countries });
	} catch (err) {
		dispatch({
			type: SHOW_ERRORS,
			errors: { message: err.response.data, status: err.response.status },
		});
	}
};

export const createCountry = (data) => async (dispatch) => {
	try {
		const res = await axios.post('/api/v1/country', data);
		const country = res.data.country;

		dispatch({ type: CREATE_COUNTRY, countries: country });
	} catch (err) {
		dispatch({
			type: SHOW_ERRORS,
			errors: { message: err.response.data, status: err.response.status },
		});
	}
};

export const updateCountry = (id, data) => async (dispatch) => {
	try {
		await axios.patch(`/api/v1/country/${id}`, data);
		// const country = res.data.country;
		// dispatch({ type: UPDATE_COUNTRY, countries: country });
	} catch (err) {
		dispatch({
			type: SHOW_ERRORS,
			errors: { message: err.response.data, status: err.response.status },
		});
	}
};

export const deleteCountry = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/v1/country/${id}`);

		dispatch({ type: DELETE_COUNTRY, id });
	} catch (err) {
		dispatch({
			type: SHOW_ERRORS,
			errors: { message: err.response.data, status: err.response.status },
		});
	}
};
