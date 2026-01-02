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
import MonthDayYear from './../../../MonthDayYear';

function WorkExperiences({role, setRole, workPlace, setWorkPlace, startDate, setStartDate, endDate, setEndDate, experiences, setExperiences, currentExpId, setCurrentExpId, expArrayIndex, setExpArrayIndex, initialExperience}) {
    
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

    const [invalidDate,  setInvalidDate] = useState(false);

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
                setModalTitle("Add Experience Information");
            }
            if(modalButtonHandler === "") {                
                // UPDATE MODAL BUTTON HANDLER
                setModalButtonHandler("handleAddExpInfo");
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
                // .toLowerCase() // LOWERCASE ALL LETTERS
                .split(' ')    // SPLIT WORD BY ' '
                // LOOP THRU SPLIT WORD
                // CAPITALIZE FIRST CHAR
                // CONCAT REST OF WORD'S CHARS
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                //CONCAT ALL UPDATED WORDS
                .join(' ');
    };

    // HANDLE ROLE INPUT
    const handleRole = (event) => {
        // UPDATE ROLE VALUE ON CHANGE
        setRole(event.target.value);
    }; 

    // HANDLE WORK PLACE INPUT
    const handleWorkPlace = (event) => {
        // UPDATE WORK PLACE VALUE ON CHANGE
        setWorkPlace(event.target.value);
    };      

    // HANDLE INPUT START DATE VALUE
    const handleStartDate = (event) => {

        // GET AND UPDATE INPUT DATE
        // const updatedDate = getDate(new Date(event.target.value));
        const updatedDate = event.target.value;

        // CHECK IF END DATE IS VALID
        if(updatedDate > endDate) {
            // UPDATE INVALID DATE
            setInvalidDate(true);
            // UPDATE END DATE VALUE
            setStartDate(updatedDate);
        }

        else{
            // UPDATE END DATE VALUE
            setStartDate(updatedDate);
            // UPDATE INVALID DATE
            setInvalidDate(false);
        }
    };

    // HANDLE INPUT END DATE VALUE
    const handleEndDate = (event) => {

        // GET AND UPDATE INPUT DATE
        // const updatedDate = getDate(new Date(event.target.value));
         const updatedDate = event.target.value;

        // CHECK IF END DATE IS VALID
        if(updatedDate < startDate) {
            // UPDATE INVALID DATE
            setInvalidDate(true);
            // UPDATE END DATE VALUE
            setEndDate(updatedDate);
        }

        else{
            // UPDATE END DATE VALUE
            setEndDate(updatedDate);
            // UPDATE INVALID DATE
            setInvalidDate(false);
        }
    };

    // HANDLE ADD EXP INFO
    const handleAddExpInfo = () => {

        // CHECK IF ROLE NAME OR WORKPLACE ARE EMPTY
        if(role === "" || workPlace === "") {
            // RESET INPUT VALUES
            reset();
            // SET ERROR MESSAGE
            setErrorMessage("Role and work place are required!");
            // SHOW ERROR MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
        }
        else if(invalidDate) {// RESET INPUT VALUES
            reset();
            // SET ERROR MESSAGE
            setErrorMessage("Invalid input start and end dates!");
            // SHOW ERROR MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
        }
        else {
            
            // CREATE COPY OF EXP ARRAY
            const newExpData = [...experiences];
            
            // CAPITALIZED FIRST LETTER OF WORDS OF INPUT VALUES
            const updateRole = capitalizedValue(role);
            const updateWorkPlace = capitalizedValue(workPlace);

            // ADD ARRAY VALUES
            newExpData[expArrayIndex] = {
                id:         currentExpId,
                role:       updateRole, 
                work_place: updateWorkPlace, 
                start:      startDate, 
                end:        endDate
            };

            // UPDATE experiences
            setExperiences(newExpData);
            // INCREMENT CURRENT ID
            setCurrentExpId(currentExpId + 1);
            // INCREMENT ARRAY INDEX
            setExpArrayIndex(expArrayIndex + 1);

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

    // GET SELECTED EXP DATA USING INDEX
    const getExpData = (index) => {
        // GET AND UPDATE ROLE VALUE
        setRole(experiences[index].role);
        // GET AND UPDATE WORK PLACE VALUE
        setWorkPlace(experiences[index].work_place);
        // GET AND UPDATE START DATE VALUE
        setStartDate(experiences[index].start);    
        // GET AND UPDATE END DATE VALUE
        setEndDate(experiences[index].end);       
        // UPDATE ARRAY INDEX TO SELECTED EXP'S INDEX
        setExpArrayIndex(index);

        // UPDATE MODAL TITLE
        setModalTitle("Edit Experience Information");
        // UPDATE MODAL BUTTON HANDLER
        setModalButtonHandler("handleEditExpInfo");

        // OPEN MODAL
        setToggleModal(true);
    };

     // HANDLE EDIT EXP INFO
    const handleEditExpInfo = () => {

        // CHECK IF ROLE AND WORK PLACE ARE EMPTY
        if(role === "" && workPlace === "") {
            // RESET INPUT VALUES
            reset();
            // SET ERROR MESSAGE
            setErrorMessage("Role and work place are required!");
            // SHOW ERROR MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
        }

        else {
            // CREATE COPY OF EXP ARRAY
            const updateExpData = [...experiences];
            
            // CAPITALIZED FIRST LETTER INPUT VALUES
            const updateRole = capitalizedValue(role);
            const updateWorkPlace = capitalizedValue(workPlace);

            // ADD ARRAY VALUES
            updateExpData[expArrayIndex] = {
                id:         currentExpId,
                role:       updateRole, 
                work_place: updateWorkPlace, 
                start:      startDate, 
                end:        endDate
            };
            
            // UPDATE experiences
            setExperiences(updateExpData);
            // GET LAST ELEMENT'S ID
            const lastId = updateExpData[updateExpData.length - 1].id;
            // UPDATE CURRENT EXP ID TO LAST ELEMENT'S ID + 1
            setCurrentExpId(lastId + 1);
            // UPDATE ARRAY INDEX
            setExpArrayIndex(updateExpData.length);

            // CLOSE MODAL
            setToggleModal(false);
            // RESET INPUT VALUES
            reset();
        }
    };

    // HANDLE DELETE EXP INFO
    const handleDeleteExpInfo = (id) => {

        // FILTER EXP ARRAY TO EXCLUDE SELECTED SITE INFO USING ID
        const updateExpData = experiences.filter(data => data.id !== id);

        // UPDATE experiences
        setExperiences(updateExpData);
        // DECREMENT ARRAY INDEX
        setExpArrayIndex(expArrayIndex - 1);

        // CHECK IF EXP ARRAY IS EMPTY
        if(updateExpData.length === 0) {
            // SET CURRENT SITE ID TO INITIAL STATE
            setCurrentExpId(0);
            // RESET ARRAY VALUES
            setExperiences(initialExperience);
        }
    };

    // RESET INPUT ARRAY VALUES TO ITS INITIAL STATE
    const reset = () => {
        setRole("");
        setWorkPlace("");
        setStartDate(new Date().toISOString().slice(0, 10));
        setEndDate(new Date().toISOString().slice(0, 10));
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
                <h3 className="title text-center">Work Experience(s)</h3> 
                {toggleModal && <Modal title={modalTitle} toggleModal={handleToggleModal} 
                    button={modalButtonHandler === "handleAddExpInfo" ? handleAddExpInfo : handleEditExpInfo}
                    body={
                        <div>
                            <label htmlFor="role">Role</label>
                            <input type="text" className="input-form mb-2" name="role" id="role" value={role} onChange={handleRole} />
                            <label htmlFor="work_place">Work Place</label>
                            <input type="text" className="input-form mb-2" name="work_place" id="work_place" value={workPlace} onChange={handleWorkPlace} />
                            <label htmlFor="start_date">Start Date</label>
                            <input type="date" className={"input-form mb-2 outline-2" + (invalidDate ? " error" : "")} name="start_date" id="start_date" value={startDate} onChange={handleStartDate} />
                            <label htmlFor="end_date">End Date</label>
                            <input type="date" className={"input-form mb-2 outline-2" + (invalidDate ? " error" : "")} name="end_date" id="end_date" value={endDate} onChange={handleEndDate} />
                        </div>
                    }/>
                }                
                <div className="mt-3">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-2 break-word">
                            {exp.role === "" ? "" :
                            <div className="flex flex-col border rounded-xl">
                                <div className="relative block w-full h-full cursor-pointer transition duration-300 ease-in-out hover:scale-95">
                                    <div className="absolute w-full h-full opacity-0 cursor-pointer transition duration-300 ease-in-out hover:opacity-100">
                                        <div className="flex justify-center items-center w-full h-full">
                                            <button className="btn-primary w-1/4" onClick={() => getExpData(index)}>Edit</button>
                                            <button className="btn-danger w-1/4" onClick={() => handleDeleteExpInfo(exp.id)}>Delete</button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 py-3 px-4">
                                        <span className="col-span-1 font-bold italic">Role</span>
                                        <div className="col-span-3 m-0 pl-4 border-l">
                                            {exp.role} 
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 py-3 px-4">
                                        <span className="col-span-1 font-bold italic">Work Place</span>
                                        <div className="col-span-3 m-0 pl-4 border-l">
                                            {exp.work_place} 
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 py-3 px-4">
                                        <span className="col-span-1 font-bold italic">Duration</span>
                                        <div className="col-span-3 m-0 pl-4 border-l">
                                            <MonthDayYear date={exp.start} /> - <MonthDayYear date={exp.end} />
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

export default WorkExperiences