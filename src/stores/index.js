import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthStore';
import boardReducer from './BoardStore';

const store = configureStore({
  reducer: {
    board: boardReducer,
    auth: authReducer,
  },
});

export default store;
