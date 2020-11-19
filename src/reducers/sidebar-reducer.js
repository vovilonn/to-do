import { TOGGLE_SIDEBAR_STATUS } from "./actions";

const initialState = {
    sidebarIsOpened: false,
};

const sidebarReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case TOGGLE_SIDEBAR_STATUS:
            return newState;

        default:
            return state;
    }
};

export default sidebarReducer;
