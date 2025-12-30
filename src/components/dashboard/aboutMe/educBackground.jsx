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
import MonthYear from "../../../MonthYear";

function EducBackground({level, setLevel, school, setSchool, course, setCourse, dateGraduated, setDateGraduated, educBackground, setEducBackground, currentEducId, setCurrentEducId, educArrayIndex, setEducArrayIndex, initialEducation}) {

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

        // CHECK  IF MODAL IS CLOSE
        if(toggleModal === false){

            if(modalTitle === "") {
                // UPDATE MODAL TITLE
                setModalTitle("Add Education Information");
            }
            if(modalButtonHandler === "") {                
                // UPDATE MODAL BUTTON HANDLER
                setModalButtonHandler("handleAddEducInfo");
            }

            // UPDATE HIDE MESSAGE STATUS
            setHideMessage(true);
            // OPEN MODAL
            setToggleModal(true);
        }
        else{
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

    // HANDLE INPUT LEVEL VALUE
    const handleLevel = (event) => {

        // UPDATE LEVEL VALUE ON CHANGE
        setLevel(event.target.value);
    };

    // UPDATE LEVEL VALUE ON CHANGE
    const handleSchool = (event) => {

        // UPDATE INPUT VALUE ON CHANGE
        setSchool(event.target.value);
    };

    // UPDATE LEVEL VALUE ON CHANGE
    const handleCourse = (event) => {

        // UPDATE COURSE VALUE ON CHANGE
        setCourse(event.target.value);
    };

    // HANDLE INPUT LEVEL VALUE
    const handleDateGraduated = (event) => {
        // UPDATE COURSE VALUE ON CHANGE
        setDateGraduated(event.target.value);
    };

    // HANDLE ADD EDUC INFO
    const handleAddEducInfo = () => {

        // CHECK IF LEVEL AND SCHOOL ARE EMPTY
        if(level === "" && school === "") {
            // RESET INPUT VALUES
            reset();
            // SET ERROR MESSAGE
            setErrorMessage("Level and School are required!");
            // SHOW ERROR MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
        }

        else {
            // CREATE A COPY OF educBackground ARRAY
            const newEducData = [...educBackground];

            // CAPITALIZED FIRST LETTER OF INPUT VALUES
            const updatedSchool = capitalizedValue(school);
            const updatedCourse = capitalizedValue(course);

            // const updatedGradDate = new Date(dateGraduated).toLocaleDateString('default', {month: 'long', year:'numeric'});

            // ADD ARRAY VALUES
            newEducData[educArrayIndex] = {
                id:     currentEducId,
                level:  level,
                school: updatedSchool,
                course: updatedCourse,
                date_graduated: dateGraduated
            }

            // UPDATE educBackground
            setEducBackground(newEducData);
            // INCREMENT CURRENT ID
            setCurrentEducId(currentEducId + 1);
            // INCREMENT ARRAY INDEX
            setEducArrayIndex(educArrayIndex + 1);
            
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
    // GET SELECTED EDUC INFO USING INDEX
    const getEducData = (index) => {
        // GET AND UPDATE LEVEL VALUE
        setLevel(educBackground[index].level);
        // GET AND UPDATE SCHOOL VALUE
        setSchool(educBackground[index].school);
        // GET AND UPDATE COURSE VALUE
        setCourse(educBackground[index].course);
        // GET AND UPDATE DATE GRADUATED VALUE
        setDateGraduated(educBackground[index].date_graduated);
        // GET AND UPDATE CURRENT ID VALUE
        setCurrentEducId(educBackground[index].id);
        // UPDATE ARRAY INDEX TO SELECTED EDUC INFO'S INDEX
        setEducArrayIndex(index);

        // UPDATE MODAL TITLE
        setModalTitle("Edit Education Information");
        // UPDATE MODAL BUTTONN HANDLER
        setModalButtonHandler("handleEditEducInfo");

        // OPEN MODAL
        setToggleModal(true);
    };

    // HANDLE EDIT EDUC INFO
    const handleEditEducInfo = () => {

        // CHECK IF LEVEL AND SCHOOL ARE EMPTY
        if(level === "" && school === "") {
            // RESET INPUT VALUES
            reset();
            // SET ERROR MESSAGE
            setErrorMessage("Level and School are required!");
            // SHOW ERROR MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
        }

        else {

            // CREATE A COPY OF educBackground ARRAY
            const updatedEducData = [...educBackground];

            // CAPITALIZED FIRST LETTER OF WORDS OF INPUT VALUES
            const updatedSchool = capitalizedValue(school);
            const updatedCourse = capitalizedValue(course);
            
            // UPDATE SELECTED ELEMENT'S VALUE
            updatedEducData[educArrayIndex] = {
                id:     currentEducId,
                level:  level,
                school: updatedSchool,
                course: updatedCourse,
                date_graduated: dateGraduated
            }

            // UPDATE educBackground
            setEducBackground(updatedEducData);
            // GET LAST ELEMENT'S ID
            const lastId = updatedEducData[updatedEducData.length - 1].id;
            // UPDATE CURRENT ID TO LAST ELEMENT + 1
            setCurrentEducId(lastId + 1);
            // UPDATE ARRAY INDEX
            setEducArrayIndex(updatedEducData.length);

            // CLOSE MODAL
            setToggleModal(false);

            // RESET INPUT VALUES
            reset();
        }
    };

    // HANDLE DELETE EDUC INFO
    const handleDeleteEducBackgroundInfo = (id) => {

        // FILTER EDUC BACKGROUND ARRAY TO EXCLUDE SELECTED EDUC INFO USING ID
        const updatedEducData = educBackground.filter(data => data.id !== id);

        // UPDATE educBackground
        setEducBackground(updatedEducData);
        // DECREMENT ARRAY INDEX
        setEducArrayIndex(educArrayIndex - 1);

        // CHECK IF ARRAY IS EMPTY
        if(updatedEducData.length === 0) {
            // RESET CURRENT ID TO 0
            setCurrentEducId(0);
            // RESET ARRAY VALUES
            setEducBackground(initialEducation);
        }
    };
    
    // RESET INPUT ARRAY VALUES TO ITS INITIAL STATE
    const reset = () => {
        setLevel("");
        setSchool("");
        setCourse("");
        setDateGraduated("");
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
                <h3 className="title text-center">Educational Background (<span className="text-red-700">*</span>)</h3>               
                {toggleModal && <Modal title={modalTitle} toggleModal={handleToggleModal} 
                    button={modalButtonHandler === "handleAddEducInfo" ? handleAddEducInfo : handleEditEducInfo}
                    body={
                        <div>
                            <label htmlFor="name">Level (<span className="text-red-700">*</span>)</label>
                            <select className="input-form mb-2" name="level" id="level" value={level} onChange={handleLevel}>
                                <option value="">Select Level</option>
                                <option value="Elementary">Elementary</option>
                                <option value="Junior High School">Junior High School</option>
                                <option value="Senior High School">Senior High School</option>
                                <option value="Vocational">Vocational</option>
                                <option value="Bachelor's Degree">Bachelor's Degree</option>
                                <option value="Master's Degree">Master's Degree</option>
                                <option value="Doctoral Degree">Doctoral Degree</option>
                            </select>
                            <label htmlFor="school">School (<span className="text-red-700">*</span>)</label>
                            <input type="text" className="input-form mb-2" name="school" id="school" value={school} onChange={handleSchool} />
                            <label htmlFor="course">Course</label>
                            <input type="text" className="input-form mb-2" name="course" id="course" value={course} onChange={handleCourse} placeholder="ex: Information Technology" />
                            <label htmlFor="dated_graduated">Date Graduated</label>
                            <input type="month" className="input-form" name="date_graduated" id="date_graduated" value={dateGraduated} onChange={handleDateGraduated} />
                        </div>
                    }/>
                }                
                <div className="mt-3">
                    {educBackground.map((educ, index) => (
                        <div key={index} className="mb-2 break-word">
                            {educ.level === "" ? "" :
                            <div className="flex flex-col border rounded-xl">
                                <div className="relative block w-full h-full cursor-pointer transition duration-300 ease-in-out hover:scale-95">
                                    <div className="absolute w-full h-full opacity-0 cursor-pointer transition duration-300 ease-in-out hover:opacity-100">
                                        <div className="flex justify-center items-center w-full h-full">
                                            <button className="btn-primary w-1/4" onClick={() => getEducData(index)}>Edit</button>
                                            <button className="btn-danger w-1/4" onClick={() => handleDeleteEducBackgroundInfo(educ.id)}>Delete</button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 py-3 px-4">
                                        <span className="col-span-1 font-bold italic">Level</span>
                                        <div className="col-span-3 m-0 pl-4 border-l">
                                            {educ.level} 
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 py-3 px-4">
                                        <span className="col-span-1 font-bold italic">School</span>
                                        <div className="col-span-3 m-0 pl-4 border-l">
                                            {educ.school} 
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 py-3 px-4">
                                        <span className="col-span-1 font-bold italic">Course</span>
                                        <div className="col-span-3 m-0 pl-4 border-l">
                                            {educ.course} 
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 py-3 px-4">
                                        <span className="col-span-1 font-bold italic">Date Graduated</span>
                                        <div className="col-span-3 m-0 pl-4 border-l">
                                            <MonthYear date={educ.date_graduated} /> 
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

export default EducBackground