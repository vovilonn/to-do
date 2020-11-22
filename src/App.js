import React from "react";
import Header from "./components/header/HeaderContainer";
import LogInModal from "./components/LogInModal/LogInModalContainer";
import Sidebar from "./components/sidebar/SidebarContainer";
import SignInModal from "./components/SignInModal/SignInModalContainer";

function App() {
    return (
        <>
            <Header />
            <Sidebar />
            <LogInModal />
            <SignInModal />
        </>
    );
}

export default App;
