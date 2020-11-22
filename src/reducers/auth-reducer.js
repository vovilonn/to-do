import {
    LOG_IN,
    TOGGLE_LOGIN_MODAL_STATUS,
    TOGGLE_SIGNIN_MODAL_STATUS,
    UPDATE_LOGIN_CURRENT_USERNAME_TEXT,
    UPDATE_LOGIN_CURRENT_PASSWORD_TEXT,
    UPDATE_SIGNIN_CURRENT_USERNAME_TEXT,
    UPDATE_SIGNIN_CURRENT_PASSWORD_TEXT,
    UPDATE_SIGNIN_CURRENT_REPEAT_PASSWORD_TEXT,
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
        currentRepeatedPasswordText: "",
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
    // newState.logInModal = { ...state.logInModal };
    // newState.signInModal = { ...state.signInModal };
    switch (action.type) {
        case LOG_IN:
            return newState;

        case TOGGLE_LOGIN_MODAL_STATUS:
            newState.logInModalIsOpened = action.isOpened;
            return newState;

        case TOGGLE_SIGNIN_MODAL_STATUS:
            newState.signInModalIsOpened = action.isOpened;
            return newState;

        case UPDATE_LOGIN_CURRENT_USERNAME_TEXT:
            newState.logInModal.currentUserNameText = action.newText;
            return newState;

        case UPDATE_LOGIN_CURRENT_PASSWORD_TEXT:
            newState.logInModal.currentPasswordText = action.newText;
            return newState;

        case UPDATE_SIGNIN_CURRENT_USERNAME_TEXT:
            newState.signInModal.currentUserNameText = action.newText;
            return newState;

        case UPDATE_SIGNIN_CURRENT_PASSWORD_TEXT:
            newState.signInModal.currentPasswordText = action.newText;
            return newState;

        case UPDATE_SIGNIN_CURRENT_REPEAT_PASSWORD_TEXT:
            newState.signInModal.currentRepeatedPasswordText = action.newText;
            return newState;

        default:
            return state;
    }
};

export default authReducer;
