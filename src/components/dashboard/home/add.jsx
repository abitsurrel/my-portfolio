import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SelectTools from './selectTools';
import { DataContext } from "../../../DataContext";

function AddHomeContent() {

    const { setSharedHomeContentData } = useContext(DataContext);
    const navigate = useNavigate();

    const [toggleModal, setToggleModal] = useState(false);
    
    const [hideMessage, setHideMessage] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const handleToggleModal = () => {
        
        if(!hideMessage) {
            setHideMessage(true);
        }

        if(toggleModal === false){

            // SET ONCLICK TO handleAddTool
            setCurrentOnclickHandler("handleAddTool");
            setToggleModal(true);
        }
        else
            setToggleModal(false);
    }

    const intialAboutPortfolioInput = "";

    const [aboutPortFolioInput, setAboutPortFolioInput] = useState(intialAboutPortfolioInput);

    const handleAboutPortfolioInput = (event) => {

        setAboutPortFolioInput(event.target.value)

    };

    const initialToolSelected = "";
    const [toolSelectedInput, setToolSelectedInput] = useState(initialToolSelected);

    const handleToolSelectedInput = (event) => {

        setToolSelectedInput(event.target.value);
    }

    const initialDescription = "";
    const [toolsDescriptionInput, setToolsDescriptionInput] = useState(initialDescription);    

    const handleToolsDescriptionInput = (event) => {

        setToolsDescriptionInput(event.target.value);
    }

    // INITIAL ADDED TOOLS LIST
    const initialAddedTools = [{id:0, tool:"", description:""}];
    // STATE TO ADD TOOL AND DESCRIPTION IN THE ADDED TOOLS LIST
    const [addedToolsList, setAddedToolsList] = useState(initialAddedTools);

    // CURRENT TOOL WHICH IS INITIALIZED EQUAL TO initialAddedTools.id
    const [currentTool, setCurrentTool] = useState(0);

    // MODAL ONCLICK FOOTER
    const [currentOnclickHandler, setCurrentOnclickHandler] = useState("");

    const handleAddTool = () => {

        // CREATE A COPY OF ADDED TOOL LIST ARRAY
        const newToolData = addedToolsList.filter(Boolean);

        // CHECK IF TOOL AND DESCRIPTION ARE EMPTY
        if(toolSelectedInput !== "" && toolsDescriptionInput !== "") {

            // MUTATE DATA addedToolsList USING THE newToolData
            //  BY ACCESSING THE ELEMENT OF CURRENT POSITION
            newToolData[currentTool] = {
                id:currentTool, 
                tool:toolSelectedInput,
                // CAPITALIZE FIRST LETTER
                // ^. MATCHES THE FIRST CHAR OF THE STRING
                description:toolsDescriptionInput.replace(/^./, (char) => char.toUpperCase())
            };

            // SET THE NEW VALUES
            setAddedToolsList(newToolData);
            // UPDATE currentTool
            setCurrentTool(currentTool + 1);

            // CLOSE MODAL
            setToggleModal(false);

            // SET USER INPUT TO ITS INITIAL STATE;
            reset();
        }

        else {

            // SET USER INPUT TO ITS INITIAL STATE;
            reset();

            setErrorMessage("Tool and Description are required! Please try again.");
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
        }
    }

    const handleEditTool = () => {

        // CREATE A COPY OF ADDED TOOL LIST ARRAY
        const newToolData = [...addedToolsList];

        // CHECK IF TOOL AND DESCRIPTION ARE EMPTY
        if(toolSelectedInput !== "" && toolsDescriptionInput !== "") {
            
            // MUTATE DATA addedToolsList USING THE newToolData
            //  BY ACCESSING THE ELEMENT OF CURRENT POSITION
            newToolData[currentTool] = {
                id:currentTool, 
                tool:toolSelectedInput,
                // CAPITALIZE FIRST LETTER
                // ^. MATCHES THE FIRST CHAR OF THE STRING
                description:toolsDescriptionInput.replace(/^./, (char) => char.toUpperCase())
            };

            // SET THE NEW VALUES
            setAddedToolsList(newToolData);

            // GET THE LAST ELEMENT'S ID
            const getLastID = newToolData[newToolData.length - 1].id;
            // UPDATE currentTool
            setCurrentTool(getLastID + 1);

            // CLOSE MODAL
            setToggleModal(false);

            // SET USER INPUT TO ITS INITIAL STATE;
            reset();
        }
        else {

            // SET USER INPUT TO ITS INITIAL STATE;
            reset();

            setErrorMessage("Tool and Description are required! Please try again.");
            setHideMessage(false);

            // CLOSE MODAL
            setToggleModal(false);
        }
        
    };

    const handleDeleteTool = (idToDelete) => {

        // USE filter() TO CREATE AN UPDATED COPY OF ADDED TOOLS ARRAY
        // WITHOUT THE SELECTED TOOL
        const updatedToolList = addedToolsList.filter(tool => tool.id !== idToDelete);

        // SET UPDATED ARRAY TO ADDED TOOLS LIST
        setAddedToolsList(updatedToolList);

        const newCurrentTool = updatedToolList.length - 1;
        setCurrentTool(newCurrentTool + 1);

    } 
    
    const getEditToolValues = (id) => {
         
        // GET SELECTED TOOL
        const getSelectedTool = addedToolsList[id].tool;

        // GET SELECTED TOOL'S DESCRIPTION
        const getSelectedToolDescription = addedToolsList[id].description;

        // SET CURRENT TOOL TO ID
        setCurrentTool(id);

        // UPDATE VALUE OF toolSelectedInput
        setToolSelectedInput(getSelectedTool);
        setToolsDescriptionInput(getSelectedToolDescription);

        // SET ONCLICK TO handleEditTool
        setCurrentOnclickHandler("handleEditTool");

        // OPEN MODAL
        setToggleModal(true);
    };

    const handleInputHomeContentData = () => {
        if(aboutPortFolioInput !== "" && toolSelectedInput !== "" && toolsDescriptionInput !== "") {
            setSharedHomeContentData({
                aboutPortfolioData:aboutPortFolioInput,
                tools:addedToolsList
            });
            navigate("/dashboard/home", {replace: true});
        }
        else {
            setErrorMessage("About Portfolio and Tools are required! Please try again.");
            setHideMessage(false);
        }
    };

    function reset() {
        setToolSelectedInput(initialToolSelected);
        setToolsDescriptionInput(initialDescription);
    }

    return (       
            <div className="w-full mx-auto md:w-2/3">    
                <div className={"message" + (errorMessage !== "" ? " error" : "")} hidden={hideMessage}>
                    {errorMessage}
                </div>
                <h1 className="text-center mb-5 font-serif">Add Home Content</h1>
                <div className="border border-dashed w-full my-4 p-4 leading-none rounded-md">           
                    <span className="text-xs text-gray-500">Note:</span>
                    <br />  
                    <div className="ml-5 text-xs text-gray-500">
                        When you submit a new Home Content data, the new data will override the previous one.
                    </div> 
                </div>  
                <label htmlFor="about_portfolio">About My Portfolio</label>
                <textarea className="input-form mb-5" name="about_portfolio" id="about_portfolio" onChange={handleAboutPortfolioInput} rows={5} defaultValue="" placeholder="Add information..." /> 

                {/* 
                    fixed inset-0: Positions the modal container to cover the entire viewport.
                    flex items-center justify-center: Centers the modal content horizontally and vertically.
                    z-50: Ensures the modal appears on top of other content.
                */}
                {/* MODAL */}
                <div className={toggleModal ? "modal" : "modal hidden"} id="AddToolsModal">
                    {/* MODAL BACKDROP */}
                    <div className="modal-backdrop"></div>
                    {/* CONTAINER */}
                    <div className="modal-container">
                        {/* HEADER */}
                        <div className="modal-header">
                            {/* TITLE */}
                            <h3>Add Tools</h3>
                            <span className="modal-close" onClick={handleToggleModal}>x</span>                        
                        </div>
                        {/* BODY */}
                        <div className="mt-5">
                            <SelectTools 
                                toolSelectedInput={toolSelectedInput} 
                                toolsDescriptionInput={toolsDescriptionInput} 
                                handleToolSelectedInput={handleToolSelectedInput} 
                                handleToolsDescriptionInput={handleToolsDescriptionInput} 
                                onClickHandler={currentOnclickHandler === "handleAddTool" ? handleAddTool : handleEditTool}
                            />
                        </div>
                    </div>
                </div>
                {/* END MODAL */}
                <div className="grid grid-cols-2 gap-1">
                    <div>
                        <h2>Tools</h2>
                    </div>
                    <div className="flex justify-end py-2">
                        <span className="add-item" id="OpenAddToolsModal" onClick={handleToggleModal}>+</span>
                    </div> 
                </div>
                {addedToolsList.map((addedTool, index) => (
                    <div key={index} className="mt-4">
                        {addedTool.tool === "" ? "" :
                            <div className="flex flex-col border rounded-md">
                                <div className="relative block w-full h-full transition duration-300 ease-out hover:scale-95 cursor-pointer"> 
                                    <div className="absolute flex w-full h-full transition duration-300 ease-in-out opacity-0 rounded-md hover:opacity-100">
                                        <div className="flex justify-center items-center w-full h-full">
                                            <button className="btn-primary w-1/4" onClick={() => getEditToolValues(addedTool.id)}>Edit</button>
                                            <button className="btn-danger w-1/4" onClick={() => handleDeleteTool(addedTool.id)}>Delete</button>
                                        </div>            
                                    </div>
                                    <div className="grid grid-cols-4 p-4">
                                        <span className="col-span-1 font-bold italic">{addedTool.tool}</span>
                                        <div className="col-span-3 m-0 pl-4 italic border-l">
                                            {addedTool.description} 
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        }
                    </div>                    
                ))}
                <div className="grid grid-cols-4 mt-10 gap-3">
                    <button className="col-start-1 col-span-2 mx-0 btn-primary" onClick={handleInputHomeContentData}>Submit</button>
                    <NavLink className="col-start-3 col-span-2 mx-0 btn-outline-info text-center" to="/dashboard/home">Back</NavLink>
                </div>
            </div>
    );
}

export default AddHomeContent