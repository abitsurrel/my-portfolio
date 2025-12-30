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

function ProgrammingLanguages({language, setLanguage, progLanguageMastery, setProgLanguageMastery, progLanguageOther, setProgLanguageOther, progLanguages, setProgLanguages, currentProgLanguageId, setCurrentProgLanguageId, progLanguageArrayIndex, setProgLanguageArrayIndex, initialProgLanguage}) {
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
                setModalTitle("Add Programming Language Information");
            }
            if(modalButtonHandler === "") {                
                // UPDATE MODAL BUTTON HANDLER
                setModalButtonHandler("handleAddProgLanguageInfo");
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

    // HANDLE INPUT LANGUAGE VALUE
    const handleLanguage = (event) => {

        // UPDATE LANGUAGE VALUE ON CHANGE
        setLanguage(event.target.value);
    };
    
    // HANDLE INPUT LANGUAGE MASTERY VALUE
    const handleProgLanguageMastery = (event) => {

        // UPDATE LANGUAGE MASTERY VALUE ON CHANGE
        setProgLanguageMastery(event.target.value);
    };
    
    // HANDLE INPUT OTHER LANGUAGE VALUE
    const handleProgLanguageOther = (event) => {

        // UPDATE LANGUAGE VALUE ON CHANGE
        setProgLanguageOther(event.target.value);
    };

    // HANDLE ADD PROG LANG INPUT
    const handleAddProgLanguageInfo = () => {
        
        // CHECK IF LANGUAGE IS EMPTY
        if(language === ""  && progLanguageMastery === "") {
            // RESET INPUT VALUES
            reset();
            // SET ERROR MESSAGE
            setErrorMessage("Programming Language is required!");
            // SHOW ERROR MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
        }
        else {

            var updatedLanguage = "";
            var updatedProgLanguageOther = "";

            // CHECK IF LANGUAGE IS EMPTY
            if(language === "") {     
                // CAPITALIZED FIRST LETTER OF WORDS OF INPUT VALUES    
                // UPDATE OTHER PROG LANG
                updatedProgLanguageOther = capitalizedValue(progLanguageOther);
                updatedLanguage  = updatedProgLanguageOther;            
            }
            else {
                updatedLanguage = language;
            }

            // CREATE A COPY OF progLanguages ARRAY
            const newProgLanguageData = [...progLanguages];
            
            // ADD ARRAY VALUES
            newProgLanguageData[progLanguageArrayIndex] = {
                id:         currentProgLanguageId,
                language:   updatedLanguage,
                mastery:    progLanguageMastery,
                other:      updatedProgLanguageOther
            }

            // UPDATE progLanguages
            setProgLanguages(newProgLanguageData);            
            // INCREMENT CURRENT ID
            setCurrentProgLanguageId(currentProgLanguageId + 1);
            // INCREMENT ARRAY INDEX
            setProgLanguageArrayIndex(progLanguageArrayIndex + 1);

            
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

    // GET SELECTED PROG LANG INFO USING INDEX
    const getProgLanguageData = (index) => {

        // GET AND UPDATE LANGUAGE VALUE
        setLanguage(progLanguages[index].language);
        // GET AND UPDATE PROG LANG MASTERY VALUE
        setProgLanguageMastery(progLanguages[index].mastery);
        // GET AND UPDATE OTHER LANGUAGE VALUE
        setProgLanguageOther(progLanguages[index].progLanguageOther);
        // GET AND UPDATE CURRENT ID VALUE
        setCurrentProgLanguageId(progLanguages[index].id);
        // UPDATE ARRAY INDEX TO SELECTED PROG LANG'S INDEX
        setProgLanguageArrayIndex(index);

        // UPDATE MODAL TITLE
        setModalTitle("Edit Programming Language Information");
        // UPDATE MODAL BUTTONN HANDLER
        setModalButtonHandler("handleEditProgLanguageInfo");

        // OPEN MODAL
        setToggleModal(true);
    };

    // HANDLE EDIT PROG LANG INFO
    const handleEditProgLanguageInfo = () => {
        
        // CHECK IF LANGUAGE IS EMPTY
        if(language === "") {
            // RESET INPUT VALUES
            reset();
            // SET ERROR MESSAGE
            setErrorMessage("Programming Language is required!");
            // SHOW ERROR MESSAGE
            setHideMessage(false);
            // CLOSE MODAL
            setToggleModal(false);
        }
        else {
            
            var updatedLanguage = "";
            var updatedProgLanguageOther = "";

            // CHECK IF LANGUAGE IS EMPTY
            if(language === "") {     
                // CAPITALIZED FIRST LETTER OF WORDS OF INPUT VALUES    
                // UPDATE OTHER PROG LANG
                updatedProgLanguageOther = capitalizedValue(progLanguageOther);
                updatedLanguage  = updatedProgLanguageOther;            
            }
            else {
                updatedLanguage = language;
            }

            // CREATE A COPY OF progLanguages ARRAY
            const updateProgLangData = [...progLanguages];

            // UPDATE ARRAY VALUES
            updateProgLangData[progLanguageArrayIndex] = {
                id:         currentProgLanguageId,
                language:   updatedLanguage,
                mastery:    progLanguageMastery,
                other:      updatedProgLanguageOther
            }

            // UPDATE progLanguages
            setProgLanguages(updateProgLangData); 
            // GET LAST ELEMENT'S ID
            const lastId = updateProgLangData[updateProgLangData.length - 1].id;
            // UPDATE CURRENT ID TO LAST ELEMENT + 1
            setCurrentProgLanguageId(lastId + 1);
            // UPDATE ARRAY INDEX
            setProgLanguageArrayIndex(updateProgLangData.length);
            
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
    const handleDeleteProgLangInfo = (id) => {

        // FILTER PROG LANG ARRAY TO EXCLUDE SELECTED PROG LANG INFO USING ID
        const updateProgLangData = progLanguages.filter(data => data.id !== id);

        // UPDATE progLanguages
        setProgLanguages(updateProgLangData);
        // DECREMENT ARRAY INDEX
        setProgLanguageArrayIndex(progLanguageArrayIndex - 1);

        // CHECK IF ARRAY IS EMPTY
        if(updateProgLangData.length === 0) {
            // RESET CURRENT ID TO 0
            setCurrentProgLanguageId(0);
            // RESET ARRAY VALUES
            setProgLanguages(initialProgLanguage);
        }
    };

    // RESET INPUT ARRAY VALUES TO ITS INITIAL STATE
    const reset = () => {
        setLanguage("");
        setProgLanguageMastery(0);
    };

    return (
        <div>            
            <div className="w-full mx-auto md:w-4/5 mb-4 mt-4">
                <div className={"message" + (errorMessage !== "" ? " error" : "")} hidden={hideMessage}>
                    {errorMessage}
                </div>
            </div>
            <div className="info-border">
                <div className="float-end">
                    <span className="add-item w-auto h-auto" id="OpenAddToolsModal" onClick={handleToggleModal}>+</span>
                </div>      
                <h5 className="title text-center">Programming Languages</h5> 
                {toggleModal && <Modal title={modalTitle} toggleModal={handleToggleModal} 
                    button={modalButtonHandler === "handleAddProgLanguageInfo" ? handleAddProgLanguageInfo : handleEditProgLanguageInfo}
                    body={
                        <div>
                            <label htmlFor="language">Language</label>
                            <Select selectVal={language} selectOptions={selectOptions} handleButton={handleLanguage} />
                            <label htmlFor="others">Others: Please specify</label>
                            <input type="text" className="input-form mb-2" name="others" id="others" value={progLanguageOther} onChange={handleProgLanguageOther} />
                            <label htmlFor="mastery">Mastery: <span>{progLanguageMastery}</span></label>
                            <input type="range" className="w-full mt-2 outline-2 outline-offset-2 outline-white rounded-md accent-orange-300 cursor-pointer" name="mastery" id="mastery" value={progLanguageMastery} onChange={handleProgLanguageMastery} min="0" max="10" />
                        </div>
                    }/>
                }                
                <div className="mt-3">
                    {progLanguages.map((prog, index) => (
                        <div key={index} className="mb-2 break-word">
                            {prog.language === "" ? "" :
                            <div className="flex flex-col border rounded-xl">
                                <div className="relative block w-full h-full cursor-pointer transition duration-300 ease-in-out hover:scale-95">
                                    <div className="absolute w-full h-full opacity-0 cursor-pointer transition duration-300 ease-in-out rounded-xl hover:opacity-100">
                                        <div className="flex justify-center items-center w-full h-full">
                                            <button className="btn-primary w-1/4" onClick={() => getProgLanguageData(index)}>Edit</button>
                                            <button className="btn-danger w-1/4" onClick={() => handleDeleteProgLangInfo(prog.id)}>Delete</button>
                                        </div>
                                    </div>
                                     <div className="flex justify-between  py-2">                                      
                                        <p className="pl-4 font-bold italic">{prog.language}</p>
                                        <p className="px-5 border-l">Mastery: {prog.mastery}</p>
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

export default ProgrammingLanguages