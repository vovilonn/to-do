export const TOGGLE_SIDEBAR_STATUS = "TOGGLE_SIDEBAR_STATUS";
export const toggleSidebarStatus = (open) => {
    return {
        type: TOGGLE_SIDEBAR_STATUS,
        isOpened: open,
    };
};

export const LOG_IN = "LOG-IN";
export const logIn = (userName, password) => {
    return {
        type: LOG_IN,
        userName: userName,
        password: password,
    };
};

export const TOGGLE_LOGIN_MODAL_STATUS = "TOGGLE-LOGIN-MODAL-STATUS";
export const toggleLogInModalStatus = (isOpened) => {
    return {
        type: TOGGLE_LOGIN_MODAL_STATUS,
        isOpened: isOpened,
    };
};

export const TOGGLE_SIGNIN_MODAL_STATUS = "TOGGLE-SIGNIN-MODAL-STATUS";
export const toggleSignInModalStatus = (isOpened) => {
    return {
        type: TOGGLE_SIGNIN_MODAL_STATUS,
        isOpened: isOpened,
    };
};

export const UPDATE_LOGIN_CURRENT_USERNAME_TEXT =
    "UPDATE-LOGIN-CURRENT-USERNAME-TEXT";
export const updateLogInCurrentUserNameText = (text) => {
    return {
        type: UPDATE_LOGIN_CURRENT_USERNAME_TEXT,
        newText: text,
    };
};

export const UPDATE_LOGIN_CURRENT_PASSWORD_TEXT =
    "UPDATE-LOGIN-CURRENT-PASSWORD-TEXT";
export const updateLogInCurrentPasswordText = (text) => {
    return {
        type: UPDATE_LOGIN_CURRENT_PASSWORD_TEXT,
        newText: text,
    };
};

export const UPDATE_SIGNIN_CURRENT_USERNAME_TEXT =
    "UPDATE-SIGNIN-CURRENT-USERNAME-TEXT";
export const updateSignInCurrentUserNameText = (text) => {
    return {
        type: UPDATE_SIGNIN_CURRENT_USERNAME_TEXT,
        newText: text,
    };
};

export const UPDATE_SIGNIN_CURRENT_PASSWORD_TEXT =
    "UPDATE-SIGNIN-CURRENT-PASSWORD-TEXT";
export const updateSignInCurrentPasswordText = (text) => {
    return {
        type: UPDATE_SIGNIN_CURRENT_USERNAME_TEXT,
        newText: text,
    };
};

export const UPDATE_SIGNIN_CURRENT_REPEAT_PASSWORD_TEXT =
    "UPDATE-SIGNIN-CURRENT-REPEAT-PASSWORD-TEXT";
export const updateSignInCurrentRepeatedPasswordText = (text) => {
    return {
        type: UPDATE_SIGNIN_CURRENT_USERNAME_TEXT,
        newText: text,
    };
};
