import { useContext, useState } from "react";
import HomeIndex from './index';
import { HomeContentContext } from "../../../HomeContentContext";
import { NavLink, useNavigate } from "react-router-dom";

function EditHomeContent() {

    const { sharedHomeContentData, setSharedHomeContentData } = useContext(HomeContentContext);
    const navigate = useNavigate();

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = () => {
        
        if(toggleModal === false)
            setToggleModal(true);
        else
            setToggleModal(false);
    }

    const initialAboutPortfolioInput = sharedHomeContentData.aboutPortfolioData;
    const [aboutPortFolioInput, setAboutPortFolioInput] = useState(initialAboutPortfolioInput);

    const handleAboutPortfolioInput = (event) => {
        setAboutPortFolioInput(event.target.value);
    };

    const handleInputHomeContentData = () => {
        setSharedHomeContentData({
            aboutPortfolioData:aboutPortFolioInput
        });
        navigate("/dashboard/home", {replace: true});
    };

    return (
        <div>            
            <h1 className="text-center">Edit Home Content</h1>
            <div className="w-full mx-auto md:w-2/3">  
                <label htmlFor="about_portfolio">About My Portfolio</label>
                <textarea className="input-form mb-5" name="about_portfolio" id="about_portfolio" defaultValue={sharedHomeContentData.aboutPortfolioData} onChange={handleAboutPortfolioInput}>
                </textarea>                    
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
                            <h3>Add Tool</h3>
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
                <div className="flex flex-col gap-0 mt-3">
                    <div>
                        <span className="modal-open" id="OpenAddToolsModal" onClick={handleToggleModal}>+</span>
                    </div>
                    <div>                      
                        <label htmlFor="used_tools">Name</label>
                        <input type="text" className="input-modal border-slate-950" name="used_tools" id="used_tools" />                                
                        <label htmlFor="description">Description</label>
                        <textarea className="input-modal" name="description" id="description"></textarea>
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

export default EditHomeContent