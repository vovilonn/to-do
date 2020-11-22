import { connect } from "react-redux";
import {
    toggleSignInModalStatus,
    updateSignInCurrentUserNameText,
    updateSignInCurrentPasswordText,
    updateSignInCurrentRepeatedPasswordText,
} from "../../reducers/actions";
import SignInModal from "./SignInModal";

const mapStateToProps = (state) => {
    return {
        isOpened: state.accounts.signInModalIsOpened,
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
    };
};

const SignInModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInModal);

export default SignInModalContainer;
