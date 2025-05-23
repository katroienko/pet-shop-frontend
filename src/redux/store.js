import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // thunk уже там есть
  devTools: true,
});

export const persistor = persistStore(store);
export { store };



// import { legacy_createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { persistStore } from "redux-persist";

// import rootReducer from "./rootReducer";

// export const store = legacy_createStore(rootReducer, devToolsEnhancer());

// export const persistor = persistStore(store);

