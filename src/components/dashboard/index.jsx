/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../DataContext";
import MonthDayYear from "../../MonthDayYear";
import MonthYear from "../../MonthYear";
import useInView from "../../UseInView";
import Modal from './../../Modal';

function DashboardIndexContent() {   
    
    const{sharedHomeContentData, sharedAboutMeContentData} = useContext(DataContext);
    // STATE TO TRACK AND RE-RENDER TOGGLE MODAL VALUE
    const [toggleModal, setToggleModal] = useState(false);
    // STATE TO TRACK AND RE-RENDER MODAL TITLE VALUE
    const [modalTitle, setModalTitle] = useState("");
    // STATE TO TRACK AND RE-RENDER MODAL BODY VALUE
    const [modalBody, setModalBody] = useState("");

    // HANDLE MODAL TOGGLING
    const handleToggleModal = () => {
        
        // CHECK IF MODAL IS CLOSE
        if(toggleModal === false) {    
            // OPEN  MODAL
            setToggleModal(true);
        }
        else {     
            // RESET MOMDAL VALUES  
            setModalTitle("");
            setModalBody("");
            // CLOSE MODAL
            setToggleModal(false);
        }
    }

    // GET SELECTED TOOL INFO USING INDEX
    const getTool = (index) => {

        // GET TOOL NAME AND SET TO TITLE VALUE
        const title = sharedHomeContentData.tools[index].name;
        // GET TOOL DESCRIPTION AND SET TO BODY VALUE
        const body = sharedHomeContentData.tools[index].description;

        // UPDATE MODAL TITLE
        setModalTitle(title);
        // UPDATE MODAL BODY
        setModalBody(body); 
        
        // OPEN MODAL
        setToggleModal(true);
    }

    // STATE TO TRACK AND RENDER IF CONTAINER IS IN VIEW
    const [aboutPortfolioRef, isAboutPortfolioVisible] = useInView({threshold: 0.1});
    const [toolsAndDescriptionRef, isToolsAndDescriptionVisible] = useInView({threshold: 0.5});
    const [personalInfoRef, isPersonalInfoVisible] = useInView({threshold: 0.5});
    const [educBackgroundRef, isEducBackgroundVisible] = useInView({threshold: 0.5});
    const [experiencesRef, isExperiencesVisible] = useInView({threshold: 0.5});
    const [progLanguagesRef, isProgLanguagesVisible] = useInView({threshold: 0.5});
    const [toolsRef, isToolsVisible] = useInView({threshold: 0.3});
    const [softSkillsRef, isSoftSkillsVisible] = useInView({threshold: 0.2});

    useEffect(() => {

        const aboutPortfolioId = document.getElementById("aboutPortfolioId");
        const toolsAndDescriptionId = document.getElementById("toolsAndDescriptionId");
        const personalInfoId = document.getElementById("personalInfoId");
        const educBackgroundId = document.getElementById("educBackgroundId");
        const experiencesId = document.getElementById("experiencesId");
        const progLanguagesId = document.getElementById("progLanguagesId");
        const toolsId = document.getElementById("toolsId");
        const softSkillsId = document.getElementById("softSkillsId");

        // CHECK IF CONTAINER IS VISIBLE
        if(isAboutPortfolioVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            aboutPortfolioId.classList.remove("opacity-0", "-translate-x-1/4");
            aboutPortfolioId.classList.add("opacity-100", "translate-x-0");
        }

        // CHECK IF CONTAINER IS VISIBLE
        if(isToolsAndDescriptionVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            toolsAndDescriptionId.classList.remove("opacity-0", "translate-x-1/4");
            toolsAndDescriptionId.classList.add("opacity-100", "translate-x-0");
        }

        // CHECK IF CONTAINER IS VISIBLE
        if(isPersonalInfoVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            personalInfoId.classList.remove("opacity-0", "-translate-x-1/4");
            personalInfoId.classList.add("opacity-100", "translate-x-0");
        }

        // CHECK IF CONTAINER IS VISIBLE
        if(isEducBackgroundVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            educBackgroundId.classList.remove("opacity-0", "translate-x-1/4");
            educBackgroundId.classList.add("opacity-100", "translate-x-0");
        }
        
        // CHECK IF CONTAINER IS VISIBLE
        if(isExperiencesVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            experiencesId.classList.remove("opacity-0", "-translate-x-1/4");
            experiencesId.classList.add("opacity-100", "translate-x-0");
        }
        
        // CHECK IF CONTAINER IS VISIBLE
        if(isProgLanguagesVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            progLanguagesId.classList.remove("opacity-0", "translate-x-1/4");
            progLanguagesId.classList.add("opacity-100", "translate-x-0");
        }
        
        // CHECK IF CONTAINER IS VISIBLE
        if(isToolsVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            toolsId.classList.remove("opacity-0", "-translate-x-1/4");
            toolsId.classList.add("opacity-100", "translate-x-0");
        }
        
        // CHECK IF CONTAINER IS VISIBLE
        if(isSoftSkillsVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            softSkillsId.classList.remove("opacity-0", "translate-x-1/4");
            softSkillsId.classList.add("opacity-100", "translate-x-0");
        }

        // DEPENDENCIES
    }, [
        isAboutPortfolioVisible,
        isToolsAndDescriptionVisible, 
        isPersonalInfoVisible, 
        isEducBackgroundVisible, 
        isExperiencesVisible,
        isProgLanguagesVisible,
        isToolsVisible,
        isSoftSkillsVisible
    ]);
    

    return(
        <div>
            {/* ABOUT PORTFOLIO */}
            <h1 className="mb-4 text-center font-serif text-shadow-lg md:mb-8 md:text-left">About Portfolio</h1>    
            <div className="w-full md:w-4/5 md:mx-auto md:mb-10">              
                {toggleModal && <Modal toggleModal={handleToggleModal} title={modalTitle} button={""} body={modalBody} />}   
                <div ref={aboutPortfolioRef} id="aboutPortfolioId" className="opacity-0 transform -translate-x-1/4 transition-all duration-700 ease-out text-justify break-word">
                    <p>
                        {sharedHomeContentData.aboutPortfolioData}
                    </p>
                </div>
                <h3 className="mb-4 text-center font-serif text-shadow-lg md:mb-8 mt-5">Development Tools and Description</h3>   
                <div ref={toolsAndDescriptionRef} id="toolsAndDescriptionId" className="flex flex-wrap gap-10 justify-center w-full my-5 opacity-0 transform translate-x-1/4 transition-opacity duration-700 ease-linear">   
                    {sharedHomeContentData.tools.map((tool, index) => (
                        <div className="w-full rounded-xl shadow-lg shadow-gray-400 md:w-90 dark:shadow-black" key={index}>
                            <div className="w-full rounded-xl bg-mint-300 md:w-90 dark:bg-white dark:text-mint-800">
                                <div className="relative w-full h-50 transition duration-200 ease-linear rounded-xl md:h-80 hover:scale-95">    
                                    <div className="absolute w-full h-full opacity-0 transition duration-200 ease-linear hover:scale-95 hover:opacity-100">
                                        <div className="flex justify-center items-center w-full h-full">
                                                <button className="btn-info dark:bg-mint-800 dark:text-white dark:hover:bg-white dark:hover:border-mint-800 dark:hover:outline-mint-800 dark:hover:text-mint-800" onClick={() => {getTool(index)}}>Read more</button>
                                        </div>
                                    </div>
                                    <div className="h-50 p-5 text-justify break-word md:h-80">
                                        <div className="h-full overflow-hidden">
                                            <p className="italic font-bold">{tool.name}</p>
                                            <p>
                                                {tool.description} 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>    
            </div>   
            {/* END ABOUT PORTFOLIO */}
            {/* ABOUT ME */}
            <h1 className="mb-4 text-center font-serif text-shadow-lg md:mb-8 md:text-left">About Me</h1>    
            <div className="w-full md:w-4/5 md:mx-auto">    
                <h3 className="mb-4 text-center font-serif text-shadow-lg md:mb-8 mt-5">Personal Information</h3>     
                <div ref={personalInfoRef} id="personalInfoId" className="info-border opacity-0 -translate-x-1/4 transition-all duration-700 ease-out break-all text-sm md:text-base">        
                    <div className="md:grid md:grid-cols-3 md:pb-1">
                        <p className="italic font-bold md:col-span-1">Name</p>
                        <p className="pl-5 border-l md:col-span-2">{sharedAboutMeContentData.name}</p>
                    </div>      
                    <div className="md:grid md:grid-cols-3 md:pb-1">
                        <p className="italic font-bold md:col-span-1">Nickname</p>
                        <p className="pl-5 border-l md:col-span-2">{sharedAboutMeContentData.nickname}</p>
                    </div>     
                    <div className="md:grid md:grid-cols-3 md:pb-1">
                        <p className="italic font-bold md:col-span-1">Email</p>
                        <p className="pl-5 border-l md:col-span-2">{sharedAboutMeContentData.email}</p>
                    </div> 
                    {sharedAboutMeContentData.sites[0].sitename === "" ? "" :
                    <div className="md:grid md:grid-cols-3">  
                        <p className="italic font-bold md:col-span-1">Sites</p>
                        <div className="pl-5 border-l md:col-span-2">
                            <div className="flex flex-col">  
                            {sharedAboutMeContentData.sites[0].sitename === "" ? "" :
                                sharedAboutMeContentData.sites.map((data, index) =>(
                                    <div key={index}>
                                        <p className="">
                                            {data.sitename}
                                            <br />                                    
                                            <a href={data.link} target="_blank" className="link mx-0">{data.link}</a>
                                        </p>
                                        <hr className="border-t-2 border-dotted my-2" hidden={index === sharedAboutMeContentData.sites.length - 1 ? true : false} />
                                    </div>
                                ))
                            }
                            </div>  
                        </div>
                    </div>
                    } 
                </div>
                {/* EDUCATIONAL BACKGROUND */}
                <h3 className="my-5">Educational Background</h3>
                <div ref={educBackgroundRef} id="educBackgroundId" className="info-border opacity-0 translate-x-1/4 transition-all duration-700 ease-out break-word text-sm md:text-base">  
                    {sharedAboutMeContentData.educ_background[0].school === "" ? "" :
                        sharedAboutMeContentData.educ_background.map((data, index) => (
                            <div key={index}>
                                <div className="md:grid md:grid-cols-3">
                                    <p className="italic font-bold md:col-span-1">{data.level}</p>
                                    <div className="md:col-span-2 md:pl-4">
                                        <div className="flex flex-col pl-5 border-l">
                                            <p>{data.school}</p>
                                            <p>{data.course}</p>
                                            <p><MonthYear date={data.date_graduated} /></p> 
                                        </div>
                                    </div>
                                </div>
                                <hr className="border-t-2 border-dotted my-2" hidden={index === sharedAboutMeContentData.educ_background.length - 1 ? true : false} />
                            </div>
                        ))
                    }
                </div>                
                {/* END EDUCATIONAL BACKGROUND */}                 
                {/* WORK EXPERIENCES */}
                <h3 className="my-5">Work Experiences</h3>
                <div ref={experiencesRef} id="experiencesId" className="info-border opacity-0 -translate-x-1/4 transition-all duration-700 ease-out break-word text-sm md:text-base">
                    {sharedAboutMeContentData.experiences[0].role === "" ? 
                        <p className="italic font-extralight text-gray-400 opacity-50">
                            Input Work Experiences  
                        </p>
                        :
                        sharedAboutMeContentData.experiences.map((data, index) => (
                            <div key={index}>
                                <div className="md:grid md:grid-cols-3">
                                    <p className="italic font-bold md:col-span-1">{data.role}</p>
                                    <div className="md:col-span-2">
                                        <div className="flex flex-col pl-5 border-l">
                                            <p>{data.work_place}</p>
                                            <p><MonthDayYear date={data.start} /> - <MonthDayYear date={data.end} /></p>
                                        </div>  
                                    </div>
                                </div>
                                <hr className="border-t-2 border-dotted my-2" hidden={index === sharedAboutMeContentData.experiences.length - 1 ? true : false} />
                            </div>
                        ))
                    }
                </div>
                {/* END WORK EXPERIENCES */}
                {/* SKILLS */}
                <h3 className="mt-5 mb-3">Skills</h3>
                <span className="block mb-4 italic font-bold pl-5">Technical Skills</span>
                <div className="info-border">
                    <div ref={progLanguagesRef} id="progLanguagesId" className="opacity-0 translate-x-1/4 transition-all duration-700 ease-out pt-2 md:grid md:grid-cols-3">
                        <p className="italic font-bold md:col-span-1">Programming Languages</p>
                        <div className="md:col-span-2">
                            {sharedAboutMeContentData.programming_langs[0].language === "" ? 
                                <p className="italic font-extralight text-gray-400 opacity-50">
                                    Input Programming Languages
                                </p>
                                :        
                                sharedAboutMeContentData.programming_langs.map((data, index) => (
                                    <div key={index}>
                                        <div className="flex flex-col pl-5 border-l">
                                            <p>{data.language}</p>
                                            <p>Mastery: {data.mastery}</p>
                                        </div>
                                        <hr className="border-t-2 border-dotted my-2" hidden={index === sharedAboutMeContentData.programming_langs.length - 1 ? true : false} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>                        
                    <hr className="my-4" />                
                    <div ref={toolsRef} id="toolsId" className="opacity-0 -translate-x-1/4 transition-all duration-700 ease-out md:grid md:grid-cols-3 md:pt-2">
                        <p className="italic font-bold md:col-span-1">Web Development Tools</p>
                        <div className="md:col-span-2">
                            {sharedAboutMeContentData.tools[0].name === "" ? 
                                <p className="italic font-extralight text-gray-400 opacity-50">
                                    Input Programming Languages
                                </p>
                                :        
                                sharedAboutMeContentData.tools.map((data, index) => (
                                    <div key={index}>
                                        <div className="flex flex-col pl-5 border-l">
                                            <p>{data.name}</p>
                                            <p>Mastery: {data.mastery}</p>
                                        </div>
                                        <hr className="border-t-2 border-dotted my-2" hidden={index === sharedAboutMeContentData.tools.length - 1 ? true : false} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>                    
                    <hr className="my-4" />  
                    <div ref={softSkillsRef} id="softSkillsId" className="opacity-0 translate-x-1/4 transition-all duration-700 ease-out">
                        <span className="block my-4 italic font-bold pl-5">Soft Skills</span>
                        {sharedAboutMeContentData.soft_skills[0] === "" ?  
                            <p className="italic font-extralight text-gray-400 opacity-50">
                                Input Soft Skills   
                            </p> 
                            :
                            <ul className="pl-5 list-disc">
                                {sharedAboutMeContentData.soft_skills.map((data, index) => (
                                    <li key={index} className="">{data}</li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>
                {/* END SKILLS */}                
            </div>   
            {/* END ABOUT ME */}
        </div>
        );

}

export default DashboardIndexContent