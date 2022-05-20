import { combineReducers } from 'redux';
import {
	cityReducer,
	HotelsReducer,
	CountryReducer,
	DoctorReducer,
	BookingReducer,
} from './reducers';

const rootReducer = combineReducers({
	cities: cityReducer,
	hotels: HotelsReducer,
	countries: CountryReducer,
	doctors: DoctorReducer,
	booking: BookingReducer,
});

export default rootReducer;
