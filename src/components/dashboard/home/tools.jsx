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

function Tools({toolName, setToolName, toolDescription, setToolDescription, toolOther, setToolOther, tools, setTools, currentToolId, setCurrentToolId, toolsArrayIndex, setToolsArrayIndex, initialTool, setErrorMessage, hideMessage, setHideMessage}) {

    // STATE TO TRACK AND RE-RENDER TOGGLE MODAL VALUE
    const [toggleModal, setToggleModal] = useState(false);
    // STATE TO TRACK AND RE-RENDER MODAL BUTTON HANDLER VALUE
    const [modalTitle, setModalTitle] = useState("");
    
    // STATE TO TRACK AND RE-RENDER MODAL BUTTON HANDLER VALUE
    const [modalButtonHandler, setModalButtonHandler] = useState("");

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

    // HANDLE MODAL TOGGLING
    const handleToggleModal = () => {
        
        // CHECK IF MESSAGE IS SHOWING
        if(!hideMessage) {
            // HIDE MESSAGE
            setHideMessage(true);
        }

        // CHECK  IF MOCAL IS CLOSE
        if(toggleModal === false){

            if(modalTitle === "") {
                // UPDATE MODAL TITLE
                setModalTitle("Add Tool Information");
            }
            if(modalButtonHandler == "") {                
                // UPDATE MODAL BUTTON HANDLER
                setModalButtonHandler("handleAddToolInfo");
            }

            // OPEN MODAL
            setToggleModal(true);
        }
        else{
            
            // SET USER INPUT TO ITS INITIAL STATE;
            reset();
            // CLOSE MODAL
            setToggleModal(false);
        }
    }

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

    // HANDLE TOOL SELECTED INPUT
    const handleToolName = (event) => {
        // UPDATE CURRENT SELECTED TOOL VALUE
        setToolName(event.target.value);
    }
     
    // HANDLE DESCRIPTION INPUT
    const handleToolDescription = (event) => {
        // UPDATE CURRENT DESCRIPTION VALUE
        setToolDescription(event.target.value);
    }

    // HANDLE INPUT OTHER TOOL VALUE
    const handleToolOther = (event) => {

        // UPDATE OTHER TOOL VALUE ON CHANGE
        setToolOther(event.target.value);
    };

    // HANDLE ADD TOOL AND DESCRIPTION INPUT
    const handleAddToolInfo = () => {

        // CHECK IF TOOL AND DESCRIPTION ARE EMPTY
        if(toolName === "" && toolOther === "") {
            // SET USER INPUT TO ITS INITIAL STATE;
            reset();
            // SET ERROR MESSAGE
            setErrorMessage("Tool is required!");
            // SHOW MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);

            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }

        else {

            // CREATE A COPY OF TOOLS ARRAY
            const newToolData = [...tools];
            
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
            
            // ADD ARRAY VALUES
            newToolData[toolsArrayIndex] = {
                id:             currentToolId, 
                name:           updatedToolName,
                // CAPITALIZE FIRST LETTER
                // ^. MATCHES THE FIRST CHAR OF THE STRING
                description:    toolDescription.replace(/^./, (char) => char.toUpperCase()),
                other:          updatedToolOther
            };

            // UPDATEE tools
            setTools(newToolData);

            // INCREMENT CURRENT TOOLS ID
            setCurrentToolId(currentToolId + 1);

            // INCREMENT ARRAY INDEX
            setToolsArrayIndex(toolsArrayIndex + 1);

            // RESET MODAL TITLE
            setModalTitle("");
            // RESET MODAL BUTTON HANDLER
            setModalButtonHandler("");
            // CLOSE MODAL
            setToggleModal(false);

            // SET USER INPUT TO ITS INITIAL STATE;
            reset();
        }
    }

    // GET VALUES OF SELECTED TOOL INPUT
    const getEditToolValues = (index) => {

        // GET AND UPDATE TOOL NAME VALUE
        setToolName(tools[index].name);
        // GET AND UPDATE TOOL DESCRIPTION VALUE
        setToolDescription(tools[index].description);
        // GET AND UPDATE OTHER TOOL VALUE
        setToolOther(tools[index].other);
        // GET AND UPDATE CURRENT ID VALUE
        setCurrentToolId(tools[index].id);
        // UPDATE ARRAY INDEX TO SELECTED TOOL'S INDEX
        setToolsArrayIndex(index);
            
        // UPDATE MODAL TITLE
        setModalTitle("Edit Tool Information");
        // UPDATE MODAL BUTTON HANDLER
        setModalButtonHandler("handleEditToolInfo");

        // OPEN MODAL
        setToggleModal(true);
    };

    // HANDLE EDIT TOOL AND DESCRIPTION INPUT
    const handleEditToolInfo = () => {

        // CHECK IF TOOL AND DESCRIPTION ARE EMPTY
        if(toolName === "" && toolOther === "") {
            // SET USER INPUT TO ITS INITIAL STATE;
            reset();
            // SET ERROR MESSAGE
            setErrorMessage("Tool is required!");
            // SHOW MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
            
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
            
            // CREATE A COPY OF TOOLS ARRAY
            const updateToolData = [...tools];

            // // UPDATE SELECTED ELEMENT'S VALUE
            updateToolData[toolsArrayIndex] = {
                id:             currentToolId, 
                name:           updatedToolName,
                // CAPITALIZE FIRST LETTER
                // ^. MATCHES THE FIRST CHAR OF THE STRING
                description:    toolDescription.replace(/^./, (char) => char.toUpperCase()),
                other:          updatedToolOther
            };

            // UPDATE tools
            setTools(updateToolData);
            
            // GET THE LAST ELEMENT'S ID
            const lastID = updateToolData[updateToolData.length - 1].id;
            
            // UPDATE CURRENT TOOL ID TO LAST ELEMENT'S ID +1 
            setCurrentToolId(lastID + 1);

            // UPDATE ARRAY INDEX
            setToolsArrayIndex(updateToolData.length);

            // CLOSE MODAL
            setToggleModal(false);

            // SET USER INPUT TO ITS INITIAL STATE;
            reset();
        }
        
    };

    const handleDeleteToolInfo = (id) => {

        // FILTER SITES ARRAY TO EXCLUDE SELECTED SITE INFO USING ID
        const updateToolData = tools.filter(tool => tool.id !== id);

        // UPDATE tools
        setTools(updateToolData);
        
        // DECREMENT ARRAY INDEX
        setToolsArrayIndex(toolsArrayIndex - 1);

        // CHECK IF ARRAY LENGTH = 0
        if(updateToolData.length === 0) {
            setCurrentToolId(0);
            setTools(initialTool);
        }
    } 

    // RESET INPUT ARRAY VALUES TO ITS INITIAL STATE
    const reset = () => {
        setToolName("");
        setToolOther("");
        setToolDescription("");
    }

    return (
         <div className="info-border">
            <div className="float-end">
                <span className="add-item w-auto h-auto" id="OpenAddToolsModal" onClick={handleToggleModal}>+</span>
            </div>      
            <h3 className="title text-center">Developement Tools</h3> 
            {/* MODAL */}
            {toggleModal &&  <Modal title={modalTitle} toggleModal={handleToggleModal} 
                button={modalButtonHandler === "handleAddToolInfo?" ? handleAddToolInfo : handleEditToolInfo}
                body={
                    <div>                                            
                        <label htmlFor="tools">Tool</label>
                        <Select selectVal={toolName} selectOptions={selectOptions} handleButton={handleToolName} />
                        <label htmlFor="others">Others: Please specify</label>
                        <input type="text" className="input-form mb-2" name="others" id="others" value={toolOther} onChange={handleToolOther} />                    
                        <label htmlFor="description">Description</label>
                        <textarea className="input-form" name="description" id="description" rows={5} value={toolDescription} onChange={handleToolDescription}> 
                        </textarea>
                    </div>
                }
            />}
            {/* END MODAL */}           
            {tools.map((tool, index) => (
                <div key={index} className="mt-4">
                    {tool.name === "" ? "" :
                        <div className="border rounded-xl">
                            <div className="relative block w-full h-full transition duration-300 ease-linear hover:scale-95 "> 
                                <div className="absolute w-full h-full opacity-0 transition duration-300 ease-linear rounded-xl cursor-pointer hover:scale-95 hover:opacity-100">
                                    <div className="flex justify-center items-center w-full h-full">
                                        <button className="btn-primary w-1/4" onClick={() => getEditToolValues(index)}>Edit</button>
                                        <button className="btn-danger w-1/4" onClick={() => handleDeleteToolInfo(tool.id)}>Delete</button>
                                    </div>            
                                </div>
                                <div className="md:grid md:grid-cols-4 p-4">
                                    <span className="md:col-span-1 italic font-bold">{tool.name === "" ? tool.other : tool.name}</span>
                                    <div className="md:col-span-3 m-0 pl-5 border-l">
                                        {tool.description} 
                                    </div>
                                </div>
                            </div>
                        </div> 
                    }
                </div>                    
            ))}
        </div>
    );
}

export default Tools