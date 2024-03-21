import React from "react";
import "./Error.css"
import { Link } from "react-router-dom";

const Error = () => {
    return (  
        <div className="error">
            <h1>Page Not Found</h1>
            <Link to="/"><button className="errBtn">Back to Home</button></Link>
        </div>
    );
}
 
export default Error;