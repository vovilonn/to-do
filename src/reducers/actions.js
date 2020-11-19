export const TOGGLE_SIDEBAR_STATUS = "TOGGLE_SIDEBAR_STATUS";
export const toggleSidebarStatus = (open) => {
    return {
        type: TOGGLE_SIDEBAR_STATUS,
        isOpened: open,
    };
};
