import axios from 'axios';
import { GET_ALL_CITIES, CREATE_CITY, DELETE_CITY, SHOW_ERRORS } from './types';

export const getCities = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/v1/city/${id}`);
		const cities = res.data.cities;

		dispatch({ type: GET_ALL_CITIES, cities });
	} catch (err) {
		dispatch({
			type: SHOW_ERRORS,
			errors: { message: err.response.data, status: err.response.status },
		});
	}
};

export const createCity = (data) => async (dispatch) => {
	try {
		const res = await axios.post(`/api/v1/city/${data.country}`, data);
		const city = res.data.data;

		dispatch({ type: CREATE_CITY, cities: city });
	} catch (err) {
		dispatch({
			type: SHOW_ERRORS,
			errors: { message: err.response.data, status: err.response.status },
		});
	}
};

export const updateCity = (id, data) => async (dispatch) => {
	try {
		await axios.patch(`/api/v1/city/${id}`, data);
		// const city = res.data.city;
		// dispatch({ type: UPDATE_city, countries: city });
	} catch (err) {
		dispatch({
			type: SHOW_ERRORS,
			errors: { message: err.response.data, status: err.response.status },
		});
	}
};

export const deleteCity = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/v1/city/${id}`);

		dispatch({ type: DELETE_CITY, id });
	} catch (err) {
		dispatch({
			type: SHOW_ERRORS,
			errors: { message: err.response.data, status: err.response.status },
		});
	}
};
