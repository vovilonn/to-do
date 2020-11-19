import { connect } from "react-redux";
import Header from "./Header";
import { toggleSidebarStatus } from "./../../reducers/actions.js";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSidebar: (open) => {
            dispatch(toggleSidebarStatus(open));
        },
    };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
