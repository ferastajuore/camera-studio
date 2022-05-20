import axios from 'axios';
import { CREATE_BOOKING } from './types';

export const createBooking = (data) => async (dispatch) => {
	try {
		const res = await axios.get('/api/v1/booking', data);
		const booking = res.data.data;

		dispatch({ type: CREATE_BOOKING, booking });
	} catch (err) {
		console.log(error.response.data);
	}
};
