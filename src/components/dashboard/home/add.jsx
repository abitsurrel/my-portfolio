/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../../DataContext";
import AboutPortfolio from './aboutPortfolio';
import Tools from './tools';

function AddHomeContent() {

    const { setSharedHomeContentData } = useContext(DataContext);
    const navigate = useNavigate();

    // STATE TO TRACK AND RE-RENDER MESSAGE
    const [hideMessage, setHideMessage] = useState(true);
    // STATE TO TRACK AND RE-RENDER ERROR MESSAGE VALUE
    const [errorMessage, setErrorMessage] = useState("");

    // STATE TO TRACK AND RE-RENDER ABOUT PORTFOLIO VALUE
    const [aboutPortfolio, setAboutPortfolio] = useState("");
    
    // STATE TO TRACK AND RE-RENDER TOOL SELECTED VALUE
    const [toolName, setToolName] = useState("");    
    // STATE TO TRACK AND RE-RENDER DESCRIPTION VALUE
    const [toolDescription, setToolDescription] = useState("");   
    // STATE TO TRACK AND RE-RENDER INPUT OTHER TOOL VALUE
    const [toolOther, setToolOther] = useState(""); 
   
    // INITIAL ADDED TOOLS LIST
    const initialTool = [{id:0, name:"", description:"", other: ""}];
    // STATE TO ADD TOOL AND DESCRIPTION IN THE ADDED TOOLS LIST
    const [tools, setTools] = useState(initialTool);
    // CURRENT TOOL WHICH IS INITIALIZED EQUAL TO initialTool.id
    const [currentToolId, setCurrentToolId] = useState(0);    
    // STATE TRACK AND RE-RENDER ADDED TOOL LIST ARRAY LENGTH
    const [toolsArrayIndex,  setToolsArrayIndex] = useState(0); 

    const handleInputHomeContentData = () => {
        
        if(aboutPortfolio === "" || tools[0].name === "") {
            setErrorMessage("About Portfolio and Tools are required!");
            setHideMessage(false);
        }
           
        else { 
            setSharedHomeContentData({
                aboutPortfolioData:aboutPortfolio,  
                tools:tools
            });

            navigate("/dashboard/home", {replace: true}); 
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };
    
    return (       
        <div>
            <h1 className="title">Add Home Content</h1>
            <div className="w-full mt-10 mx-auto md:w-4/5">    
                <div className={"message" + (errorMessage !== "" ? " error" : "")} hidden={hideMessage}>
                    {errorMessage}
                </div>
                <div className="border border-dashed w-full my-4 p-4 leading-none rounded-md">           
                    <span className="text-xs text-gray-500">Note:</span>
                    <br />  
                    <div className="ml-5 text-xs text-gray-500">
                        When you submit a new Home Content data, the new data will override the previous one.
                    </div> 
                </div>  
                <AboutPortfolio aboutPortfolio={aboutPortfolio} setAboutPortfolio={setAboutPortfolio} />
                
                <Tools toolName={toolName} setToolName={setToolName} toolDescription={toolDescription} setToolDescription={setToolDescription} toolOther={toolOther} setToolOther={setToolOther} tools={tools} setTools={setTools} currentToolId={currentToolId} setCurrentToolId={setCurrentToolId} toolsArrayIndex={toolsArrayIndex} setToolsArrayIndex={setToolsArrayIndex} initialTool={initialTool} setErrorMessage={setErrorMessage} hideMessage={hideMessage} setHideMessage={setHideMessage} />

                <div className="grid grid-cols-4 mt-10 gap-3">
                    <button className="col-start-1 col-span-2 mx-0 btn-primary" onClick={handleInputHomeContentData}>Submit</button>
                    <NavLink className="col-start-3 col-span-2 mx-0 btn-info rounded-md text-center" to="/dashboard/home">Back</NavLink>
                </div>
            </div>
        </div>
    );
}

export default AddHomeContent