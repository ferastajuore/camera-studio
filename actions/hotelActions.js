import axios from 'axios';
import { GET_ALL_HOTELS, CREATE_HOTEL, UPDATE_HOTEL, DELETE_HOTEL } from './types';

export const getHotel = () => async (dispatch) => {
	try {
		const res = await axios.get(`/api/v1/hotel`);
		const clinics = res.data.clinics;

		dispatch({ type: GET_ALL_HOTELS, clinics });
	} catch (err) {
		console.log(err.message);
	}
};

export const createHotel = (data) => async (dispatch) => {
	try {
		const res = await axios.post('/api/v1/hotel', data);
		const city = res.data.data;

		dispatch({ type: CREATE_HOTEL, cities: city });
	} catch (err) {
		dispatch({
			type: SHOW_ERRORS,
			errors: { message: err.response.data, status: err.response.status },
		});
	}
};

export const updateHotel = (id, data) => async (dispatch) => {
	try {
		await axios.patch(`/api/v1/hotel/${id}`, data);
		// const city = res.data.city;
		// dispatch({ type: UPDATE_HOTEL, countries: city });
	} catch (err) {
		dispatch({
			type: SHOW_ERRORS,
			errors: { message: err.response.data, status: err.response.status },
		});
	}
};

export const deleteHotel = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/v1/hotel/${id}`);

		dispatch({ type: DELETE_HOTEL, id });
	} catch (err) {
		dispatch({
			type: SHOW_ERRORS,
			errors: { message: err.response.data, status: err.response.status },
		});
	}
};
