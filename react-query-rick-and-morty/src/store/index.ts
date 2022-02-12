import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import CharacterReducer from "./module/character/reducers";
import { setupListeners } from "@reduxjs/toolkit/query";
import { characterApi } from "./module/character/services";
const reducer = combineReducers({
  // character: CharacterReducer,
  [characterApi.reducerPath]: characterApi.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export default store;
