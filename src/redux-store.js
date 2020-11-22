import { createStore, combineReducers } from "redux";
import sidebarReducer from "./reducers/sidebar-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./reducers/auth-reducer";

const reducers = combineReducers({
    sidebar: sidebarReducer,
    accounts: authReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
