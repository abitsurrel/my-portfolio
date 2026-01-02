/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

function ProtectedRoutes({sharedCredential}) {
    
    
    if(!sharedCredential) {
        
        return  <Navigate to="/my-portfolio/login" replace />;
    }
    return <Dashboard />;
}

export default ProtectedRoutes