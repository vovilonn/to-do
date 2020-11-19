import { createStore, combineReducers } from "redux";
import sidebarReducer from "./reducers/sidebar-reducer";

const reducers = combineReducers({
    sidebar: sidebarReducer,
});

const store = createStore(reducers);

export default store;
