import axios from 'axios';
import { GET_DOCOTRS, GET_DOCOTR } from './types';

/**
 *  GET DOCOTR ON CILINIC AND SPECIALITY
 * @param {*} data
 * @returns
 */

export const getDoctor = (data) => async (dispatch) => {
	try {
		const res = await axios.post(`/api/v1/doctor/D-C-S?`, data);
		const doctors = res.data.data;

		dispatch({ type: GET_DOCOTRS, doctors });
	} catch (error) {
		console.log(error.response.data);
		console.log(error.response.status);
		console.log(error);
	}
};

/**
 *  GET DOCTOR WITH ID
 * @param {*} id
 * @returns
 */

export const getDoctorID = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/v1/doctor/${id}`);
		const doctor = res.data.data;

		localStorage.setItem('get-DoctorID', JSON.stringify(doctor));

		dispatch({ type: GET_DOCOTR, doctor });
	} catch (error) {
		console.log(error.response.data);
		console.log(error.response.status);
		console.log(error);
	}
};
