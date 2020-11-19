import { connect } from "react-redux";
import { toggleSidebarStatus } from "./../../reducers/actions.js";
import Sidebar from "./Sidebar.jsx";

const mapStateToProps = (state) => {
    return {
        isOpened: state.sidebar.sidebarIsOpened,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        toggleSidebar: (open) => {
            dispatch(toggleSidebarStatus(open));
        },
    };
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
