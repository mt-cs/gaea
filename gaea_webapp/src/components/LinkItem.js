import React from "react"
import ReadMore from "./ReadMore";
import Logo from '../logo.png';

function LinkItem(props) {
    return (          
        <div className="col-md-4 img-link">
            <div className="h-100 border text-center bg-light rounded">
            <img alt="logo" src={Logo} className="h-50 rounded-circle d-block mx-auto"/>
            <ReadMore 
                className="h-50" 
                text={props.text}
                link={props.link}
            />
            </div>
        </div>
    )
}
export default LinkItem