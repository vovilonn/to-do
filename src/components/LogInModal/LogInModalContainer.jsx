import { connect } from "react-redux";
import { toggleLogInModalStatus } from "../../reducers/actions";
import LogInModal from "./LogInModal";

const mapStateToProps = (state) => {
    return {
        isOpened: state.accounts.logInModalIsOpened,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        toggleModalStatus: (isOpened) => {
            dispatch(toggleLogInModalStatus(isOpened));
        },
    };
};

const LogInModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInModal);

export default LogInModalContainer;
