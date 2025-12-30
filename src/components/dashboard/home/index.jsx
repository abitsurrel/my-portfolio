/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../../DataContext";
import useInView from "../../../UseInView";
import Modal from "../../../Modal";

function HomeIndex() {   

    const {sharedHomeContentData, isDarkTheme} = useContext(DataContext);

    // STATE TO TRACK AND RE-RENDER TOGGLE MODAL VALUE
    const [toggleModal, setToggleModal] = useState(false);
    // STATE TO TRACK AND RE-RENDER MODAL TITLE VALUE
    const [modalTitle, setModalTitle] = useState("");
    // STATE TO TRACK AND RE-RENDER MODAL BODY VALUE
    const [modalBody, setModalBody] = useState("");

    // HANDLE MODAL TOGGLING
    const handleToggleModal = () => {
        
        // CHECK IF MODAL IS CLOSE
        if(toggleModal === false) {    
            // OPEN  MODAL
            setToggleModal(true);
        }
        else {     
            // RESET MOMDAL VALUES  
            setModalTitle("");
            setModalBody("");
            // CLOSE MODAL
            setToggleModal(false);
        }
    }

    // GET SELECTED TOOL INFO USING INDEX
    const getTool = (index) => {

        // GET TOOL NAME AND SET TO TITLE VALUE
        const title = sharedHomeContentData.tools[index].name;
        // GET TOOL DESCRIPTION AND SET TO BODY VALUE
        const body = sharedHomeContentData.tools[index].description;

        // UPDATE MODAL TITLE
        setModalTitle(title);
        // UPDATE MODAL BODY
        setModalBody(body); 
        
        // OPEN MODAL
        setToggleModal(true);
    }
    
    // STATE TO TRACK AND RENDER IF CONTAINER IS IN VIEW
    const [aboutPortfolioRef, isAboutPortfolioVisible] = useInView({threshold: 0.1});
    const [toolsAndDescriptionRef, isToolsAndDescriptionVisible] = useInView({threshold: 0.5});

    useEffect(() => {
        const aboutPortfolioId = document.getElementById("aboutPortfolioId");
        const toolsAndDescriptionId = document.getElementById("toolsAndDescriptionId");

        // CHECK IF CONTAINER IS VISIBLE
        if(isAboutPortfolioVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            aboutPortfolioId.classList.remove("opacity-0", "translate-x-1/4");
            aboutPortfolioId.classList.add("opacity-100", "translate-x-0");
        }
          
        // CHECK IF CONTAINER IS VISIBLE
        if(isToolsAndDescriptionVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            toolsAndDescriptionId.classList.remove("opacity-0", "translate-x-1/4");
            toolsAndDescriptionId.classList.add("opacity-100", "translate-x-0");
        }
        
        // DEPENDENCIES
    }, [isAboutPortfolioVisible, isToolsAndDescriptionVisible]);

    return (
        <div>
            <h1 className="title">Home Content</h1>
            <div className="w-full md:w-4/5 md:mx-auto">
                <div className="flex justify-center items-center md:justify-end gap-2 mb-5 mx-0">
                    <NavLink className={"py-2 px-4 rounded-md text-xs md:text-base" + (isDarkTheme ? " btn-primary" : " btn-info")} to={"/dashboard/home/add-information"}>Add Information</NavLink>
                    <NavLink className={"py-2 px-4 rounded-md text-xs md:text-base" + (isDarkTheme ? " btn-primary" : " btn-info")} to={"/dashboard/home/edit-information"}>Edit Information</NavLink>
                </div>
                <h3 className="title text-center mt-5">About Portfolio</h3>   
                <p ref={aboutPortfolioRef} id="aboutPortfolioId" className="opacity-0 transform translate-x-1/4 transition-all duration-500 ease-out text-justify break-word dark:shadow-black">
                    {sharedHomeContentData.aboutPortfolioData}
                </p> 
                <h3 className="title text-center mt-5">Development Tools</h3>
                {toggleModal && <Modal toggleModal={handleToggleModal} title={modalTitle} button={""} body={modalBody} />}
                <div ref={toolsAndDescriptionRef} id="toolsAndDescriptionId" className="flex flex-wrap gap-10 justify-center w-full my-5 opacity-0 transform translate-x-1/4 transition-opacity duration-500 ease-linear">    
                    {sharedHomeContentData.tools.map((data, index) => (
                        <div key={index} className="mt-4">
                            {data.name === "" ? 
                                <p className="info-empty">
                                    Input Web Development Tools
                                </p> 
                                :       
                                <div className="w-full rounded-xl shadow-lg shadow-mint-300 md:w-70 dark:shadow-black">
                                    <div className="w-full rounded-xl bg-mint-300 md:w-70 dark:bg-white dark:text-mint-800">
                                        <div className="relative w-full h-50 transition duration-200 ease-linear md:h-80 hover:scale-95">                                
                                            <div className="absolute w-full h-full opacity-0 transition duration-200 ease-linear hover:scale-95 hover:opacity-100 cursor-pointer">
                                                <div className="flex justify-center items-center w-full h-full">
                                                    <button className="btn-info dark:bg-mint-800 dark:text-white dark:hover:bg-white dark:hover:border-mint-800 dark:hover:outline-mint-800 dark:hover:text-mint-800" onClick={() => {getTool(index)}}>Read more</button>
                                                </div>
                                            </div>
                                            <div className="h-50 p-5 text-justify break-word md:h-80">
                                                <div className="h-full overflow-hidden">
                                                    <p className="italic font-bold">{data.name}</p>
                                                    <p>
                                                        {data.description} 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default HomeIndex