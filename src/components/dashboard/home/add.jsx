import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeContentContext } from "../../../HomeContentContext";
import { NavLink } from "react-router-dom";

function AddHomeContent() {

    const { setSharedHomeContentData } = useContext(HomeContentContext);
    const navigate = useNavigate();

    const [toggleModal, setToggleModal] = useState(false);
    const handleToggleModal = () => {
        
        if(toggleModal === false)
            setToggleModal(true);
        else
            setToggleModal(false);
    }

    const intialAboutPortfolioInput = "";

    const [aboutPortFolioInput, setAboutPortFolioInput] = useState(intialAboutPortfolioInput);

    const handleAboutPortfolioInput = (event) => {

        setAboutPortFolioInput(event.target.value)

    };

    const [toolsMasteryInput, setToolsMasteryInput] = useState(0);

    const handleToolsMasteryInput = (event) => {

        setToolsMasteryInput(event.target.value);
    }

    const handleInputHomeContentData = () => {
        setSharedHomeContentData({
            aboutPortfolioData:aboutPortFolioInput
        });
        navigate("/dashboard/home", {replace: true});
    };

    return (
        <div>            
            <h1 className="text-center mb-5">Add Home Content</h1>
            <div className="w-full mx-auto md:w-2/3"> 
                <div className="border border-dashed w-full my-4 p-4 leading-none rounded-md">           
                    <span className="text-xs text-gray-500">Note:</span>
                    <br />  
                    <span className="text-xs text-gray-500">
                        When you add a new About My Portfolio description, the new description will override the previous one.
                    </span> 
                    <br />  
                    <br />         
                    <span className="text-xs text-gray-500">Try this! (Copy and Paste):</span>
                    <br />
                    <span className="text-xs text-gray-500">
                        My Portfolio showcases the different projects made by the developer using different web development tools.
                    </span>
                </div>  
                <label htmlFor="about_portfolio">About My Portfolio</label>
                <textarea className="input-form mb-5" name="about_portfolio" id="about_portfolio" onChange={handleAboutPortfolioInput} defaultValue="" placeholder="Add information..." />               
                {/* 
                    fixed inset-0: Positions the modal container to cover the entire viewport.flex items-center justify-center: Centers the modal content horizontally and vertically.
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
                            <h3>Add Tools/Packages/Libraries</h3>
                            <span className="modal-close" onClick={handleToggleModal}>x</span>                        
                        </div>
                        {/* BODY */}
                        <div className="mt-5">
                            <label htmlFor="used_tools">Name</label>
                            <input type="text" className="input-modal" name="used_tools" id="used_tools" />                                
                            <label htmlFor="description">Description</label>
                            <textarea className="input-modal" name="description" id="description"></textarea>
                        </div>
                        {/* FOOTER */}
                        <div className="flex justify-end">
                            <button className="btn-primary px-8 py-2">Add</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                    <div>
                        <span className="modal-open" id="OpenAddToolsModal" onClick={handleToggleModal}>+</span>
                    </div>
                    <div className="w-full leading-none">                                                
                        <span className="text-xs text-gray-500">
                            Note:
                        </span>
                        <br />                                      
                        <span className="text-xs text-gray-500">
                            0 - No Prior Knowledge <br />
                            5 - Average Mastery <br />
                            10 - Mastered
                        </span>
                    </div>   
                    <div>                      
                        {/* <label htmlFor="used_tools">Name</label>
                        <input type="text" className="input-modal border-slate-950" name="used_tools" id="used_tools" />                                 */}
                        <label htmlFor="tools">Tool</label>
                        <select className="input-form max-h-10 overflow-y-2" name="tools" id="tools">
                            <option value="" selected>Select Tools</option>
                            <option value="C++">C++</option>
                            <option value="Java">Java</option>
                            <option value="PHP">PHP</option>
                            <option value="React JS">React JS</option>
                            <option value="Tailwind CSS">Tailwind CSS</option>
                            <option value="Bootstrap CSS">Bootstrap CSS</option>
                            <option value="Javascript">Javascript</option>
                            <option value="C++">C++</option>
                            <option value="Java">Java</option>
                            <option value="PHP">PHP</option>
                            <option value="React JS">React JS</option>
                            <option value="Tailwind CSS">Tailwind CSS</option>
                            <option value="Bootstrap CSS">Bootstrap CSS</option>
                            <option value="Javascript">Javascript</option>
                        </select>                      
                        <label htmlFor="description">
                        Mastery: <span className="font-bold text-lg text-orange-300">{toolsMasteryInput}</span>
                        <input type="range" className="appearance-none w-full h-5 mx-0 bg-white rounded-md cursor-pointer" name="mastery" id="mastery" min="0" max="10" defaultValue="0" onChange={handleToolsMasteryInput} />
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-5 gap-3">
                    <button className="col-start-1 col-span-2 mx-0 btn-primary text-center" onClick={handleInputHomeContentData}>Submit</button>
                    <NavLink className="col-start-3 col-span-2 mx-0 btn-outline-info text-center" to="/dashboard/home">Back</NavLink>
                </div>
            </div>
        </div>
    );
}

export default AddHomeContent