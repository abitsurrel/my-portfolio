/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

function Modal({toggleModal, title, body, button}) {

    return (
        <div className="modal">
            {/* MODAL BACKDROP */}
            <div className="modal-backdrop"></div>
            {/* CONTAINER */}
            <div className="modal-container">
                {/* HEADER */}
                <div className="modal-header">
                    {/* TITLE */}
                    <h3>{title}</h3>       
                    <span className="modal-close" onClick={toggleModal}>x</span>                    
                </div>
                {/* BODY */}
                <div className="mt-5">
                    {body}  
                    {button === "" ? "" :                    
                        <button className="
                        bg-white text-mint-950 border border-transparent hover:bg-mint-800 
                        hover:text-white  hover:border-white hover:outline hover:outline-white hover:outline-offset-2  dark:bg-orange-500 dark:text-white dark:hover:bg-white dark:hover:text-orange-500  dark:hover:border-orange-500 dark:hover:outline-orange-500 mx-0 mt-4 float-right" onClick={button}>Update</button>
                    }  
                </div>
            </div>
        </div>
    );
}

export default Modal