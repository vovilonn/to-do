import { connect } from "react-redux";
import { toggleSignInModalStatus } from "../../reducers/actions";
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
    };
};

const SignInModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInModal);

export default SignInModalContainer;
