import {configureStore} from "@reduxjs/toolkit";

import rootReducer from "../utils/reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware:
    (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })       
});

export default store;