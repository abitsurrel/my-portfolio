/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { useEffect, useState } from "react";

function useResizeWindow() {
    // INITIALIZE STATE TO CURRENT  WINDOW WIDTH AND HEIGHT
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});

    useEffect(() => {
        // UPDATE THE VALUES ON EVERY RESIZE
        const handleResizeWindow = () => {

            // UPDATE WIDTH AND HEIGHT WITH NEW VALUE
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // LISTEN TO WINDOW RESIZE AND CALL handleResizeWindow
        window.addEventListener('resize', handleResizeWindow);

        // CLEANUP FUNCION TO REMOVE EVENT LISTENER ON UNMOUNT
        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        };
        // EMPTY DEPENDENCY ARRAY TO ENSURE THE EFFECT ONLY RUN ONCE ON MOUNT AND UNMOUNT
    }, []);

    
    return windowSize;
}

export default useResizeWindow