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
