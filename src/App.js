import React from "react";
import Header from "./components/header/HeaderContainer";
import LogInModal from "./components/LogInModal/LogInModal";
import Sidebar from "./components/sidebar/SidebarContainer";

function App() {
    return (
        <>
            <Header />
            <Sidebar />
            <LogInModal />
        </>
    );
}

export default App;
