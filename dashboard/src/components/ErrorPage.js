import React from "react";

function ErrorPage(){
    return(
        <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">PAGE NOT FOUND</h1>
            <p className="fs-4">
            The page you are looking for does not exist. <a href="/">Back To Dashboard</a>
            </p>
        </div>
    )
}

export default ErrorPage;