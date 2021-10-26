import React from "react";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

function BodyContent(props) {
    return(
        <main>
            <div className="container-fluid">
                <div className="row">
                    <SideBar/>
                    <MainContent/>
                </div>
            </div>
        </main>
    )
}

export default BodyContent;