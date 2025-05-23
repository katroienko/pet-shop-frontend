import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart-reducer";
import categoriesReducer from './categories/categoriesSlice'

const rootReducer = combineReducers({
    cart: cartReducer,
    categories: categoriesReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

