import { combineReducers } from 'redux';
import authSignUpSlice from '../features/auth/slices/SignUpSlice';

const authReducer = combineReducers({
  signUp: authSignUpSlice.reducer,
});

export default authReducer;
