import { CREATE_BOOKING } from '../../../actions/types';

const initialState = {
	bookings: [],
	booking: {},
};

const bookingReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_BOOKING:
			return { ...state, booking: action.payload };

		default:
			return state;
	}
};

export default bookingReducer;
