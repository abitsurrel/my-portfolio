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

function SoftSkills({softSkill, setSoftSkill, softSkills, setSoftSkills, softSkillsArrayIndex, setSoftSkillsArrayIndex}) {
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
                setModalTitle("Add Soft Skill Information");
            }
            if(modalButtonHandler === "") {                
                // UPDATE MODAL BUTTON HANDLER
                setModalButtonHandler("handleAddSkillInfo");
            }

            // UPDATE HIDE MESSAGE STATUS
            setHideMessage(true);
            // OPEN MODAL
            setToggleModal(true);
        }
        else{
            
            // RESET INPUT VALUES
            setSoftSkill("");

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

    // HANDLE INPUT TOOL NAME VALUE
    const handleSoftSkill = (event) => {

        // UPDATE TOOL NAME VALUE ON CHANGE
        setSoftSkill(event.target.value);
    };

    // HANDLE ADD PROG LANG INPUT
    const handleAddSkillInfo = () => {
        
        // CHECK IF LANGUAGE IS EMPTY
        if(softSkill === "") {
            // RESET INPUT VALUES
            setSoftSkill("")
            // SET ERROR MESSAGE
            setErrorMessage("Skill is required!");
            // SHOW ERROR MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
        }
        else {
            // CREATE A COPY OF progLanguages ARRAY
            const newSkillData = [...softSkills];

            // CAPITALIZED FIRST LETTER OF WORDS OF INPUT VALUE
            const updatedSoftSkill = capitalizedValue(softSkill);

            // ADD ARRAY VALUE
            newSkillData[softSkillsArrayIndex] = updatedSoftSkill;

            // UPDATE progLanguages
            setSoftSkills(newSkillData);           
            // INCREMENT ARRAY INDEX
            setSoftSkillsArrayIndex(softSkillsArrayIndex + 1);

            
            // RESET MODAL TITLE
            setModalTitle("");
            // RESET MODAL BUTTON HANDLER
            setModalButtonHandler("");

            // CLOSE MODAL
            setToggleModal(false);
            // RESET INPUT VALUES
            setSoftSkill("");
        }
    };

    // GET SELECTED PROG LANG INFO USING INDEX
    const getSkillData = (index) => {

        // GET AND UPDATE LANGUAGE VALUE
        setSoftSkill(softSkills[index]);
        // UPDATE ARRAY INDEX TO SELECTED PROG LANG'S INDEX
        setSoftSkillsArrayIndex(index);

        // UPDATE MODAL TITLE
        setModalTitle("Edit Soft Skill Information");
        // UPDATE MODAL BUTTONN HANDLER
        setModalButtonHandler("handleEditToolInfo");

        // OPEN MODAL
        setToggleModal(true);
    };

    // HANDLE EDIT PROG LANG INFO
    const handleEditSkillInfo = () => {
       
        // CHECK IF LANGUAGE IS EMPTY
        if(softSkill === "") {
            // RESET INPUT VALUES
            setSoftSkill("")
            // SET ERROR MESSAGE
            setErrorMessage("Skill is required!");
            // SHOW ERROR MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
        }
        else {
            // CREATE A COPY OF progLanguages ARRAY
            const updateSkillData = [...softSkills];

            // CAPITALIZED FIRST LETTER OF WORDS OF INPUT VALUE
            const updatedSoftSkill = capitalizedValue(softSkill);

            // ADD ARRAY VALUES
            updateSkillData[softSkillsArrayIndex] = updatedSoftSkill;

            // UPDATE progLanguages
            setSoftSkills(updateSkillData);           

            // UPDATE ARRAY INDEX
            setSoftSkillsArrayIndex(updateSkillData.length);
            
            // RESET MODAL TITLE
            setModalTitle("");
            // RESET MODAL BUTTON HANDLER
            setModalButtonHandler("");

            // CLOSE MODAL
            setToggleModal(false);
            // RESET INPUT VALUES
            setSoftSkill("");
        }
    };

    // HANDLE DELETE PROG LANG INFO
    const handleDeleteSkillInfo = (indexToDelete) => {

        // FILTER PROG LANG ARRAY TO EXCLUDE SELECTED PROG LANG INFO USING ID
        const updateSkillData = softSkills.filter((data, index) => index !== indexToDelete);

        // UPDATE progLanguages
        setSoftSkills(updateSkillData);           

        // DECREMENT ARRAY INDEX
        setSoftSkillsArrayIndex(softSkillsArrayIndex - 1);

        // CHECK IF ARRAY IS EMPTY
        if(softSkillsArrayIndex.length === 0) {
            // RESET INPUT ARRAY VALUES
            setSoftSkills([""]);
        }
    };

    return (
        <div>            
            <div className="w-full mx-auto md:w-4/5 mb-8 mt-10">
                <div className={"message" + (errorMessage !== "" ? " error" : "")} hidden={hideMessage}>
                    {errorMessage}
                </div>
            </div>
            <div className="info-border">
                <div className="float-end">
                    <span className="add-item w-auto h-auto" id="OpenAddToolsModal" onClick={handleToggleModal}>+</span>
                </div>      
                <h5 className="title text-center">Soft Skills</h5>               
                {toggleModal && <Modal title={modalTitle} toggleModal={handleToggleModal} 
                    button={modalButtonHandler === "handleAddSkillInfo" ? handleAddSkillInfo : handleEditSkillInfo}
                    body={
                        <div>
                            <label htmlFor="name">Skill</label>
                            <input type="text" className="input-form" name="skill" id="skill" value={softSkill} onChange={handleSoftSkill} />
                        </div>
                    }/>
                }                
                <div className="mt-3">
                    {softSkills.map((skill, index) => (
                        <div key={index} className="mb-2 break-all">
                            {skill === "" ? "" :
                            <div className="flex flex-col border rounded-xl">
                                <div className="relative block w-full h-full cursor-pointer transition duration-300 ease-in-out hover:scale-95">
                                    <div className="absolute w-full h-full opacity-0 cursor-pointer transition duration-300 ease-in-out rounded-xl hover:opacity-100">
                                        <div className="flex justify-center items-center w-full h-full">
                                            <button className="btn-primary w-1/4" onClick={() => getSkillData(index)}>Edit</button>
                                            <button className="btn-danger w-1/4" onClick={() => handleDeleteSkillInfo(index)}>Delete</button>
                                        </div>
                                    </div>
                                    <div className="py-3 px-4 italic">
                                        {skill}
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>);
}

export default SoftSkills