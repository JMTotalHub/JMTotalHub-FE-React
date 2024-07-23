import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthStore';
import boardReducer from './BoardStore';

const store = configureStore({
  reducer: {
    board: boardReducer,
    auth: authReducer,
  },
});

console.log('Initial State:', store.getState());
console.log('Store Reducers in store:', store.reducer);
console.log('authReducer : ' + boardReducer.boardList);

export default store;
