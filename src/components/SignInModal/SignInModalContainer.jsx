import { connect } from "react-redux";
import {
    toggleSignInModalStatus,
    updateSignInCurrentUserNameText,
    updateSignInCurrentPasswordText,
    updateSignInCurrentRepeatedPasswordText,
    addAccount,
} from "../../reducers/actions";
import SignInModal from "./SignInModal";

const mapStateToProps = (state) => {
    return {
        isOpened: state.accounts.signInModalIsOpened,
        newUserNameText: state.accounts.signInModal.currentUserNameText,
        newPasswordText: state.accounts.signInModal.currentPasswordText,
        newRepeatedPasswordText:
            state.accounts.signInModal.currentRepeatedPasswordText,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        toggleModalStatus: (isOpened) => {
            dispatch(toggleSignInModalStatus(isOpened));
        },
        updateSignInUserNameText: (newText) => {
            dispatch(updateSignInCurrentUserNameText(newText));
        },
        updateSignInPasswordText: (newText) => {
            dispatch(updateSignInCurrentPasswordText(newText));
        },
        updateSignInRepeatedPassword: (newText) => {
            dispatch(updateSignInCurrentRepeatedPasswordText(newText));
        },
        addAccount: (userName, password) => {
            dispatch(addAccount(userName, password));
        },
    };
};

const SignInModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInModal);

export default SignInModalContainer;
