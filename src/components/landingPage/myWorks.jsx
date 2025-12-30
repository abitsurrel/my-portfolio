/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../DataContext";

function MyWorks() {


    // GET CALLBACK FUNCTION sharedCredential TO GET CREDENTIAL VALUE
    const {sharedCredential} 	= useContext(DataContext); 
    return (
        
        <div className="p-4 my-2 md:p-10 md:mx-5">
            <h1 className="title">My Works</h1>
            <p className="info-empty text-xl">Project is in development phase. </p>
            {sharedCredential ? 
            <p className="info-empty text-xl">Meanwhile, you can interact with this portfolio using <Link to="/dashboard">Dashboard</Link>.</p>
            : 
            <p className="info-empty text-xl">Meanwhile, you can interact with this portfolio using Dashboard!<Link to="/login">Login</Link> now!</p>}
            
        </div>
    );
}

export default MyWorks