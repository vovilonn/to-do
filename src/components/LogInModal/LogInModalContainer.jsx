import { connect } from "react-redux";
import {
    logIn,
    toggleLogInModalStatus,
    updateLogInCurrentPasswordText,
    updateLogInCurrentUserNameText,
} from "../../reducers/actions";
import LogInModal from "./LogInModal";

const mapStateToProps = (state) => {
    return {
        isOpened: state.accounts.logInModalIsOpened,
        newUserNameText: state.accounts.logInModal.currentUserNameText,
        newPasswordText: state.accounts.logInModal.currentPasswordText,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        toggleModalStatus: (isOpened) => {
            dispatch(toggleLogInModalStatus(isOpened));
        },
        updateLogInCurrentUserNameText: (text) => {
            dispatch(updateLogInCurrentUserNameText(text));
        },
        updateLogInCurrentPasswordText: (text) => {
            dispatch(updateLogInCurrentPasswordText(text));
        },
        updateCurrentAccount: (userName, password) => {
            dispatch(logIn(userName, password));
        },
    };
};

const LogInModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInModal);

export default LogInModalContainer;
