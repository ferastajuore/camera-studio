import { GET_DOCOTRS, GET_DOCOTR } from '../../../actions/types';

const initialState = {
	doctors: [],
	doctor: {},
};

const DoctorReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DOCOTRS:
			return { ...state, doctors: action.doctors };

		case GET_DOCOTR:
			return { ...state, doctor: action.doctor };

		default:
			return state;
	}
};

export default DoctorReducer;
