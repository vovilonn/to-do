import store from "./redux-store";

export const updateDB = () => {
    const data = JSON.stringify(store.getState());
    localStorage.setItem("state", data);
};

export const getStateFromDB = () => {
    return JSON.parse(localStorage.getItem("state")) || [];
};
