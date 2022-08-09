import { configureStore } from '@reduxjs/toolkit';

import GreetingReducer from './greeting/greeting';

const store = configureStore({
  reducer: {
    greeting: GreetingReducer,
  },
});

export default store;
