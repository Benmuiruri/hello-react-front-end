import { configureStore } from '@reduxjs/toolkit';

import GreetingReducer from './greeting/greeting';

const store = configureStore({
  reducer: {
    greetings: GreetingReducer,
  },
});

export default store;
