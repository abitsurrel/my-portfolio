/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { useState } from "react";
import Modal from "../../../Modal";
import Select from "../../../Select";

function WebDevTools({toolName, setToolName, toolMastery, setToolMastery, toolOther, setToolOther, tools, setTools, currentToolId, setCurrentToolId, toolsArrayIndex, setToolsArrayIndex, initialTool}) {

    // STATE TO TRACK AND RE-RENDER ERROR MESSAGE VALUE
    const [errorMessage, setErrorMessage] = useState("");
    // STATE TO TRACK AND RE-RENDER HIDE MESSAGE STATUS
    const [hideMessage, setHideMessage] = useState(true);

    // STATE TO TRACK AND RE-RENDER MODAL TITLE VALUE
    const [modalTitle, setModalTitle] = useState("");
    // STATE TO TRACK AND RE-RENDER MODAL BUTTON HANDLER VALUE
    const [modalButtonHandler, setModalButtonHandler] = useState("");
    // STATE TO TRACK AND RE-RENDER TOGGLE MODAL VALUE
    const [toggleModal, setToggleModal] = useState(false);

    // HANDLE MODAL TOGGLING
    const handleToggleModal = () => {

        // CHECK IF MESSAGE IS SHOWING
        if(!hideMessage) {
            // HIDE MESSAGE
            setHideMessage(true);
        }

        // CHECK IF MODAL IS CLOSE
        if(toggleModal === false){

            if(modalTitle === "") {
                // UPDATE MODAL TITLE
                setModalTitle("Add Web Development Tool Information");
            }
            if(modalButtonHandler === "") {                
                // UPDATE MODAL BUTTON HANDLER
                setModalButtonHandler("handleAddToolInfo");
            }

            // UPDATE HIDE MESSAGE STATUS
            setHideMessage(true);
            // OPEN MODAL
            setToggleModal(true);
        }
        else{
            
            // RESET INPUT VALUES
            reset();

            // CLOSE MODAL
            setToggleModal(false);
        }
    };

    const selectOptions = [
        {
            val:    "",
            option: "Select Tool"
        },
        {
            val:    "C",
            option: "C"
        },
        {
            val:    "C#",
            option: "C#"
        },
        {
            val:    "C++",
            option: "C++"
        },
        {
            val:    "Java",
            option: "Java"
        },
        {
            val:    "Javascript",
            option: "Javascript"
        },
        {
            val:    "PHP",
            option: "PHP: PHP Hypertext Preprocessor"
        },
        {
            val:    "Python",
            option: "Python"
        },
        {
            val:    "Ruby",
            option: "Ruby"
        },
        {
            val:    "MarianDB",
            option: "MarianDB"
        },
        {
            val:    "MongoDB",
            option: "MongoDB"
        },
        {
            val:    "MySQL",
            option: "MySQL"
        },
        {
            val:    "Oracle Database",
            option: "Oracle Database"
        },
        {
            val:    "PostgreSQL",
            option: "PostgreSQL"
        },
        {
            val:    "Laravel Framework",
            option: "Laravel Framework"
        },
        {
            val:    "CodeIgniter Framework",
            option: "CodeIgniter Framework"
        },
        {
            val:    "Vanilla PHP",
            option: "Vanilla PHP"
        },
        {
            val:    "Ruby On Rails",
            option: "Ruby On Rails"
        },
        {
            val:    "React JS",
            option: "React JS"
        },
        {
            val:    "Tailwiind CSS",
            option: "Tailwind CSS"
        },
        {
            val:    "Bootstrap CSS",
            option: "Bootstrap CSS"
        },
        {
            val:    "HTML: Hypertext Markup Language",
            option: "HTML: Hypertext Markup Language"
        },
        {
            val:    "Cascading Style Sheets",
            option: "Cascading Style Sheets"
        },
        {
            val:    "Git",
            option: "Git"
        }
        
    ];    

    // CAPITALIZED FIRST CHAR OF EACH WORD
    const capitalizedValue = (value) => {

        return value
                // .toLowerCase() // LOWERCASE ALL LETTERS
                .split(' ')    // SPLIT WORD BY ' '
                // LOOP THRU SPLIT WORD
                // CAPITALIZE FIRST CHAR
                // CONCAT REST OF WORD'S CHARS
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                //CONCAT ALL UPDATED WORDS
                .join(' ');
    };

    // HANDLE INPUT TOOL NAME VALUE
    const handleToolName = (event) => {

        // UPDATE TOOL NAME VALUE ON CHANGE
        setToolName(event.target.value);
    };
    
    // HANDLE INPUT TOOL MASTERY VALUE
    const handleToolMastery = (event) => {

        // UPDATE TOOL MASTERY VALUE ON CHANGE
        setToolMastery(event.target.value);
    };

    // HANDLE INPUT OTHER TOOL VALUE
    const handleToolOther = (event) => {

        // UPDATE OTHER TOOL VALUE ON CHANGE
        setToolOther(event.target.value);
    };

    // HANDLE ADD PROG LANG INPUT
    const handleAddToolInfo = () => {
        
        // CHECK IF LANGUAGE IS EMPTY
        if(toolName === "" && toolOther === "") {
            // RESET INPUT VALUES
            reset();
            // SET ERROR MESSAGE
            setErrorMessage("Web Development Tool is required!");
            // SHOW ERROR MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
        }
        else {
            
            var updatedToolOther = "";
            var updatedToolName = "";
            
            // CHECK IF TOOL NAME IS EMPTY
            if(toolName === "") {     
                // CAPITALIZED FIRST LETTER OF WORDS OF INPUT VALUES    
                // UPDATE OTHER TOOL
                updatedToolOther = capitalizedValue(toolOther);
                updatedToolName  = updatedToolOther;            
            }
            else {
                updatedToolName = toolName;
            }

            // CREATE A COPY OF progLanguages ARRAY
            const newToolData = [...tools];
            
            // ADD ARRAY VALUES
            newToolData[toolsArrayIndex] = {
                id:         currentToolId,
                name:       updatedToolName,
                mastery:    toolMastery,
                other:      updatedToolOther
            }
            
            // UPDATE progLanguages
            setTools(newToolData);            
            // INCREMENT CURRENT ID
            setCurrentToolId(currentToolId + 1);
            // INCREMENT ARRAY INDEX
            setToolsArrayIndex(toolsArrayIndex + 1);

            // RESET MODAL TITLE
            setModalTitle("");
            // RESET MODAL BUTTON HANDLER
            setModalButtonHandler("");

            // CLOSE MODAL
            setToggleModal(false);
            // RESET INPUT VALUES
            reset();
        }
    };

    // GET SELECTED TOOL INFO USING INDEX
    const getToolData = (index) => {

        // GET AND UPDATE TOOL NAME VALUE
        setToolName(tools[index].name);
        // GET AND UPDATE TOOL MASTERY VALUE
        setToolMastery(tools[index].mastery);
        // GET AND UPDATE OTHER TOOL VALUE
        setToolOther(tools[index].other);
        // GET AND UPDATE CURRENT ID VALUE
        setCurrentToolId(tools[index].id);
        // UPDATE ARRAY INDEX TO SELECTED TOOL'S INDEX
        setToolsArrayIndex(index);

        // UPDATE MODAL TITLE
        setModalTitle("Edit Web Development Tool Information");
        // UPDATE MODAL BUTTONN HANDLER
        setModalButtonHandler("handleEditToolInfo");

        // OPEN MODAL
        setToggleModal(true);
    };

    // HANDLE EDIT PROG LANG INFO
    const handleEditToolInfo = () => {
        
        // CHECK IF LANGUAGE IS EMPTY
        if(toolName === "" &&  toolOther === "") {
            // RESET INPUT VALUES
            reset();
            // SET ERROR MESSAGE
            setErrorMessage("Web Development Tool is required!");
            // SHOW ERROR MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
        }
        else {
            
            var updatedToolOther = "";
            var updatedToolName = "";

            // CHECK IF TOOL NAME IS EMPTY
            if(toolName === "") {     
                // CAPITALIZED FIRST LETTER OF WORDS OF INPUT VALUES    
                // UPDATE OTHER TOOL
                updatedToolOther = capitalizedValue(toolOther);
                updatedToolName  = updatedToolOther;            
            }
            else {
                updatedToolName = toolName;
            }

            // CREATE A COPY OF progLanguages ARRAY
            const updateToolData = [...tools];
            
            // ADD ARRAY VALUES
            updateToolData[toolsArrayIndex] = {
                id:         currentToolId,
                name:       updatedToolName,
                mastery:    toolMastery,
                other:      updatedToolOther
            }

            // UPDATE progLanguages
            setTools(updateToolData);            
            // GET LAST ELEMENT'S ID
            const lastId = updateToolData[updateToolData.length - 1].id;
            // UPDATE CURRENT ID TO LAST ELEMENT + 1
            setCurrentToolId(lastId + 1);
            // UPDATE ARRAY INDEX
            setToolsArrayIndex(updateToolData.length);
            
            // RESET MODAL TITLE
            setModalTitle("");
            // RESET MODAL BUTTON HANDLER
            setModalButtonHandler("");

            // CLOSE MODAL
            setToggleModal(false);
            // RESET INPUT VALUES
            reset();
        }
    };

    // HANDLE DELETE PROG LANG INFO
    const handleDeleteToolInfo = (id) => {

        // FILTER PROG LANG ARRAY TO EXCLUDE SELECTED PROG LANG INFO USING ID
        const updateToolData = tools.filter(data => data.id !== id);

        // UPDATE progLanguages
        setTools(updateToolData);
        // DECREMENT ARRAY INDEX
        setToolsArrayIndex(toolsArrayIndex - 1);

        // CHECK IF ARRAY IS EMPTY
        if(updateToolData.length === 0) {
            // RESET CURRENT ID TO 0
            setCurrentToolId(0);
            // RESET ARRAY VALUES
            setTools(initialTool);
        }
    };

    // RESET INPUT ARRAY VALUES TO ITS INITIAL STATE
    const reset = () => {
        setToolName("");
        setToolOther("");
        setToolMastery(0);
    };

    return (
        <div>            
            <div className="w-full mx-auto md:w-4/5 mb-4 mt-5">
                <div className={"message" + (errorMessage !== "" ? " error" : "")} hidden={hideMessage}>
                    {errorMessage}
                </div>
            </div>
            <div className="info-border">
                <div className="float-end">
                    <span className="add-item w-auto h-auto" id="OpenAddToolsModal" onClick={handleToggleModal}>+</span>
                </div>      
                <h5 className="title text-center">Web Development Tools</h5> 
                {toggleModal && <Modal title={modalTitle} toggleModal={handleToggleModal} 
                    button={modalButtonHandler === "handleAddToolInfo" ? handleAddToolInfo : handleEditToolInfo}
                    body={
                        <div>
                            <label htmlFor="toolName">Tool</label>
                            <Select selectVal={toolName} selectOptions={selectOptions} handleButton={handleToolName} />
                            <label htmlFor="others">Others: Please specify</label>
                            <input type="text" className="input-form mb-2" name="others" id="others" value={toolOther} onChange={handleToolOther} />
                            <label htmlFor="mastery">Mastery: <span>{toolMastery}</span></label>
                            <input type="range" className="w-full mt-2 outline-2 outline-offset-2 outline-white rounded-md accent-orange-300 cursor-pointer" name="mastery" id="mastery" value={toolMastery} onChange={handleToolMastery} min="0" max="10" />
                        </div>
                    }/>
                }                
                <div className="mt-3">
                    {tools.map((tool, index) => (
                        <div key={index} className="mb-2 break-word">
                            {tool.name === "" ? "" :
                            <div className="flex flex-col border rounded-xl">
                                <div className="relative block w-full h-full cursor-pointer transition duration-300 ease-in-out hover:scale-95">
                                    <div className="absolute w-full h-full opacity-0 cursor-pointer transition duration-300 ease-in-out rounded-xl hover:opacity-100">
                                        <div className="flex justify-center items-center w-full h-full">
                                            <button className="btn-primary w-1/4" onClick={() => getToolData(index)}>Edit</button>
                                            <button className="btn-danger w-1/4" onClick={() => handleDeleteToolInfo(tool.id)}>Delete</button>
                                        </div>
                                    </div>
                                     <div className="flex justify-between py-2">                                      
                                        <p className="pl-4 font-bold italic">{tool.name}</p>
                                        <p className="px-5 border-l">Mastery: {tool.mastery}</p>
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

export default WebDevTools