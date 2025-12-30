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

function PersonalInfo({inputName, setName, nickname, setNickname, email, setEmail, siteName, setSiteName, siteLink, setSiteLink, currentSiteId, setCurrentSiteId, sitesArrayIndex, setSitesArrayIndex, sites, setSites, initialSite}) {    
    
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

        // CHECK  IF MODAL IS CLOSEa
        if(toggleModal === false){

            if(modalTitle === "") {
                // UPDATE MODAL TITLE
                setModalTitle("Add Site Information");
            }
            if(modalButtonHandler === "") {                
                // UPDATE MODAL BUTTON HANDLER
                setModalButtonHandler("handleAddSiteInfo");
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
    
    // CAPITALIZED FIRST CHAR OF EACH WORD
    const capitalizedValue = (value) => {

        return value
                .toLowerCase() // LOWERCASE ALL LETTERS
                .split(' ')    // SPLIT WORD BY ' '
                // LOOP THRU SPLIT WORD
                // CAPITALIZE FIRST CHAR
                // CONCAT REST OF WORD'S CHARS
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                //CONCAT ALL UPDATED WORDS
                .join(' ');
    };
    
    // HANDLE NAME INPUT
    const handleInputName = (event) => {
        // GET INPUT VALUE ON CHANGE
        const value = event.target.value;
        // PASS VALUE TO CAPITALIZE EACH FIRST CHAR OF WORDS
        const updatedValue = capitalizedValue(value);
        // UPDATE NAME VALUE
        setName(updatedValue);
    };  
    
    // HANDLE NICKNAME INPUT
    const handleInputNickname = (event) => {
        // GET INPUT VALUE ON CHANGE
        const value = event.target.value;
        // PASS VALUE TO CAPITALIZE EACH FIRST CHAR OF WORDS
        const updatedValue = capitalizedValue(value);
        // UPDATE NICKNAME VALUE
        setNickname(updatedValue);
    };

    // HANDLE EMAIL INPUT
    const handleInputEmail = (event) => {
        // UPDATE EMAIL VALUE ON CHANGE
        setEmail(event.target.value);
    }

    // HANDLE SITE NAME INPUT
    const handleInputSiteName = (event) => {

        // UPDATE SITE NAME VALUE ON CHANGE
        setSiteName(event.target.value);
    };

    // HANDLE SITE LINK INPUT
    const handleInputSiteLink = (event) => {
        // UPDATE SITE LINK VALUE ON CHANGE
        setSiteLink(event.target.value);
    };

    // HANDLE ADD SITE INFO
    const handleAddSiteInfo = () => {

        // CHECK IF SITE NAME AND LINK ARE EMPTY
        if(siteName === "" && siteLink === "") {
            // RESET INPUT VALUES
            reset();
            // SET ERROR MESSAGE
            setErrorMessage("Site name and link are required!");
            // SHOW ERROR MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
        }

        else {
            
            // CREATE COPY OF SITES ARRAY
            const newSiteData = [...sites];
            
            // CAPITALIZED FIRST LETTER OF WORDS OF INPUT VALUES
            const updatedSiteName = capitalizedValue(siteName);

            // ADD ARRAY VALUES
            newSiteData[sitesArrayIndex] = {
                id:         currentSiteId,
                sitename:   updatedSiteName,
                link:       siteLink,
            };

            // UPDATE sites
            setSites(newSiteData);  
            // INCREMENT CURRENT ID
            setCurrentSiteId(currentSiteId + 1);
            // INCREMENT ARRAY INDEX
            setSitesArrayIndex(sitesArrayIndex + 1);

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

    // GET SELECTED SITE DATA USING INDEX
    const getSiteData = (index) => {
        // GET AND UPDATE SITE ID VALUE
        setCurrentSiteId(sites[index].id);
        // GET AND UPDATE SITE NAME VALUE
        setSiteName(sites[index].sitename);
        // GET AND UPDATE SITE LINK VALUE
        setSiteLink(sites[index].link);        
        // UPDATE ARRAY INDEX TO SELECTED SITE'S INDEX
        setSitesArrayIndex(index);

        // UPDATE MODAL TITLE
        setModalTitle("Edit Site Information");
        // UPDATE MODAL BUTTON HANDLER
        setModalButtonHandler("handleEditSiteInfo");

        // OPEN MODAL
        setToggleModal(true);
    };

    // HANDLE EDIT SITE INFO
    const handleEditSiteInfo = () => {

        // CHECK IF SITE NAME AND LINK ARE EMPTY
        if(siteName === "" && siteLink === "") {
            // RESET INPUT VALUES
            reset();
            // SET ERROR MESSAGE
            setErrorMessage("Site name and link are required!");
            // SHOW ERROR MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
        }

        else {
            // CREATE COPY OF SITES ARRAY
            const updateSiteData = [...sites];
            
            // CAPITALIZED FIRST LETTER OF WORDS OF INPUT VALUES
            const updatedSiteName = capitalizedValue(siteName);

            // UPDATE SELECTED ELEMENT'S VALUE
            updateSiteData[sitesArrayIndex] = {
                id:         currentSiteId,
                sitename:   updatedSiteName,
                link:       siteLink,
            };
            
            // UPDATE sites
            setSites(updateSiteData);
            // GET LAST ELEMENT'S ID
            const lastId = updateSiteData[updateSiteData.length - 1].id;
            // UPDATE CURRENT SITE ID TO LAST ELEMENT'S ID + 1
            setCurrentSiteId(lastId + 1);
            // UPDATE ARRAY INDEX
            setSitesArrayIndex(updateSiteData.length);

            // CLOSE MODAL
            setToggleModal(false);
            // RESET INPUT VALUES
            reset();
        }
    };

    // HANDLE DELETE SITES INFO
    const handleDeleteSiteInfo = (id) => {

        // FILTER SITES ARRAY TO EXCLUDE SELECTED SITE INFO USING ID
        const updateSiteData = sites.filter(site => site.id !== id);

        // UPDATE sites
        setSites(updateSiteData);
        // DECREMENT ARRAY INDEX
        setSitesArrayIndex(sitesArrayIndex - 1);

        // CHECK IF SITES ARRAY IS EMPTY
        if(updateSiteData.length === 0) {
            // SET CURRENT SITE ID TO INITIAL STATE
            setCurrentSiteId(0);
            // RESET INPUT VALUES
            setSites(initialSite);
        }
    };

    // RESET INPUT ARRAY VALUES TO ITS INITIAL STATE
    const reset = () => {
        setSiteName("");
        setSiteLink("");
    };
    
    return (
        <div>            
            <div className="w-full mx-auto md:w-4/5 mb-8 mt-10">
                <div className={"message" + (errorMessage !== "" ? " error" : "")} hidden={hideMessage}>
                    {errorMessage}
                </div>
            </div>
            <div className="info-border">  
                <h3 className="title text-center">Personal Information</h3>               
                <label htmlFor="name">Name (<span className="text-red-700">*</span>)</label>
                <input type="text" className="input-form mb-2" name="name" id="name" value={inputName} onChange={handleInputName} />
                <label htmlFor="nickname">Nickname</label>
                <input type="text" className="input-form mb-2" name="nickname" id="nickname" value={nickname} onChange={handleInputNickname} />
                <label htmlFor="email">Email (<span className="text-red-700">*</span>)</label>
                <input type="email" className="input-form mb-2" name="email" id="email" value={email} onChange={handleInputEmail} />
                {toggleModal &&  <Modal title={modalTitle} toggleModal={handleToggleModal} 
                button={modalButtonHandler === "handleAddSiteInfo?" ? handleAddSiteInfo : handleEditSiteInfo}
                body={
                    <div className="mt-5">
                        <label htmlFor="sitename">Sitename</label>
                        <input type="text" className="input-form mb-2" name="sitename" id="sitename" value={siteName} onChange={handleInputSiteName} />
                        <label htmlFor="siteLink">Link</label>
                        <input type="url" className="input-form mb-2" name="siteLink" id="siteLink" value={siteLink} onChange={handleInputSiteLink} />
                    </div>
                }
                />}
                <span>Sites</span>
                <div className="float-end mt-2">
                    <span className="add-item w-auto h-auto" id="OpenAddToolsModal" onClick={handleToggleModal}>+</span>
                </div>
                <div className="mt-5">
                    {sites.map((site, index) => (
                        <div key={index} className="mb-2 break-all">
                            {site.sitename === "" ? "" :
                            <div className="flex flex-col border rounded-xl">
                                <div className="relative block w-full h-full cursor-pointer transition duration-300 ease-in-out hover:scale-95">
                                    <div className="absolute w-full h-full opacity-0 cursor-pointer transition duration-300 ease-in-out rounded-xl hover:opacity-100">
                                        <div className="flex justify-center items-center w-full h-full">
                                            <button className="btn-primary w-1/4" onClick={() => getSiteData(index)}>Edit</button>
                                            <button className="btn-danger w-1/4" onClick={() => handleDeleteSiteInfo(site.id)}>Delete</button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 py-3 px-4">
                                        <span className="col-span-1 font-bold italic">{site.sitename}</span>
                                        <div className="col-span-3 m-0 pl-4 border-l">
                                            {site.link} 
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

export default PersonalInfo