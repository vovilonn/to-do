import { createStore, combineReducers } from "redux";
import sidebarReducer from "./reducers/sidebar-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
    sidebar: sidebarReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
