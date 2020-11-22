import { connect } from "react-redux";
import Header from "./Header";
import {
    toggleLogInModalStatus,
    toggleSignInModalStatus,
    toggleSidebarStatus,
} from "../../reducers/actions";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLogInModalStatus: (isOpened) => {
            dispatch(toggleLogInModalStatus(isOpened));
        },
        toggleSignInModalStatus: (isOpened) => {
            dispatch(toggleSignInModalStatus(isOpened));
        },
        toggleSidebar: (open) => {
            dispatch(toggleSidebarStatus(open));
        },
    };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
