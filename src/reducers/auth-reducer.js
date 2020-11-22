import {
    LOG_IN,
    TOGGLE_LOGIN_MODAL_STATUS,
    TOGGLE_SIGNIN_MODAL_STATUS,
} from "./actions";
import { getStateFromDB } from "../dataBase";

const initialState = getStateFromDB().accounts || {
    logInModalIsOpened: false,
    signInModalIsOpened: false,
    logInModal: {
        currentUserNameText: "",
        currentPasswordText: "",
    },
    signInModal: {
        currentUserNameText: "",
        currentPasswordText: "",
        currentRepeatPasswordText: "",
    },
    accounts: [
        {
            userName: "vovilonn",
            password: "12345",
        },
    ],
    currentAccount: {
        userName: "tempUser",
        password: "",
    },
};

const authReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOG_IN:
            return newState;

        case TOGGLE_LOGIN_MODAL_STATUS:
            newState.logInModalIsOpened = action.isOpened;
            return newState;

        case TOGGLE_SIGNIN_MODAL_STATUS:
            newState.signInModalIsOpened = action.isOpened;
            return newState;

        default:
            return state;
    }
};

export default authReducer;
