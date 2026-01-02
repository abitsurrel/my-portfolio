/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { DataContext } from "../../../DataContext"
import MonthYear from "../../../MonthYear";
import MonthDayYear from './../../../MonthDayYear';
import useInView from "../../../UseInView";

function AboutMeIndex() {

    const {sharedAboutMeContentData, isDarkTheme} = useContext(DataContext);

    // STATE TO TRACK AND RENDER IF CONTAINER IS IN VIEW
    const [personalInfoRef, isPersonalInfoVisible] = useInView({threshold: 0.5});
    const [educBackgroundRef, isEducBackgroundVisible] = useInView({threshold: 0.5});
    const [experiencesRef, isExperiencesVisible] = useInView({threshold: 0.5});
    const [progLanguagesRef, isProgLanguagesVisible] = useInView({threshold: 0.5});
    const [toolsRef, isToolsVisible] = useInView({threshold: 0.3});
    const [softSkillsRef, isSoftSkillsVisible] = useInView({threshold: 0.2});

    useEffect(() => {

        const personalInfoId = document.getElementById("personalInfoId");
        const educBackgroundId = document.getElementById("educBackgroundId");
        const experiencesId = document.getElementById("experiencesId");
        const progLanguagesId = document.getElementById("progLanguagesId");
        const toolsId = document.getElementById("toolsId");
        const softSkillsId = document.getElementById("softSkillsId");

        // CHECK IF CONTAINER IS VISIBLE
        if(isPersonalInfoVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            personalInfoId.classList.remove("opacity-0", "translate-x-1/4");
            personalInfoId.classList.add("opacity-100", "translate-x-0");
        }
        
        // CHECK IF CONTAINER IS VISIBLE
        if(isEducBackgroundVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            educBackgroundId.classList.remove("opacity-0", "-translate-x-1/4");
            educBackgroundId.classList.add("opacity-100", "translate-x-0");
        }
        
        // CHECK IF CONTAINER IS VISIBLE
        if(isExperiencesVisible) {
            experiencesId.classList.remove("opacity-0", "translate-x-1/4");
            experiencesId.classList.add("opacity-100", "translate-x-0");
        }
        
        // CHECK IF CONTAINER IS VISIBLE
        if(isProgLanguagesVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            progLanguagesId.classList.remove("opacity-0", "-translate-x-1/4");
            progLanguagesId.classList.add("opacity-100", "translate-x-0");
        }
        
        // CHECK IF CONTAINER IS VISIBLE
        if(isToolsVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            toolsId.classList.remove("opacity-0", "translate-x-1/4");
            toolsId.classList.add("opacity-100", "translate-x-0");
        }
        
        // CHECK IF CONTAINER IS VISIBLE
        if(isSoftSkillsVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            softSkillsId.classList.remove("opacity-0", "-translate-x-1/4");
            softSkillsId.classList.add("opacity-100", "translate-x-0");
        }

        // DEPENDENCIES
    }, [
        isPersonalInfoVisible, 
        isEducBackgroundVisible, 
        isExperiencesVisible,
        isProgLanguagesVisible,
        isToolsVisible,
        isSoftSkillsVisible
    ]);

    return (
        <div>   
            <h1 className="title">About Me Content</h1>
             <div className="w-full md:w-4/5 md:mx-auto">
                <div className="flex justify-center items-center md:justify-end gap-2 mb-5 mx-0">    
                    <NavLink className={"py-2 px-4 rounded-md text-xs md:text-base" + (isDarkTheme ? " btn-primary" : " btn-info")} to={"/my-portfolio/dashboard/about-me/add-information"}>Add Information</NavLink>
                    <NavLink className={"py-2 px-4 rounded-md text-xs md:text-base" + (isDarkTheme ? " btn-primary" : " btn-info")} to={"/my-portfolio/dashboard/about-me/edit-information"}>Edit Information</NavLink>
                </div>
                {/* ABOUT ME */}
                <h3 className="title">Personal Information</h3>     
                <div ref={personalInfoRef} id="personalInfoId" className="info-border break-all opacity-0 translate-x-1/4 transform transition-all duration-700 ease-out">        
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
                    {sharedAboutMeContentData.sites.length === 0 ? 
                        <p className="info-empty">
                            Input Sites
                        </p>
                        :
                        <div className="md:grid md:grid-cols-3">  
                            <p className="md:col-span-1 italic">Sites</p>
                            <div className="md:col-span-2 pl-5 border-l">
                                <div className="flex flex-col">                                 
                                {
                                 sharedAboutMeContentData.sites.map((data, index) =>(
                                        <div key={index}>
                                            <p>
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
                {/* END ABOUT ME */}
                {/* EDUCATIONAL BACKGROUND */}
                <h3 className="text-center my-5">Educational Background</h3>
                <div ref={educBackgroundRef} id="educBackgroundId" className="info-border break-word opacity-0 -translate-x-1/4 transform transition-all duration-700 ease-out">  
                    {sharedAboutMeContentData.educ_background.length === 0 ? "" :
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
                <h3 className="text-center my-5">Work Experiences</h3>
                <div ref={experiencesRef} id="experiencesId" className="info-border break-word opacity-0 translate-x-1/4 transform transition-all duration-700 ease-out">
                    {sharedAboutMeContentData.experiences.length === 0 ? 
                        <p className="info-empty">
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
                <h3 className="text-center my-5">Skills</h3>
                <span className="block mb-4 italic font-bold">Technical Skills</span>
                <div className="info-border">
                    <div ref={progLanguagesRef} id="progLanguagesId" className="pt-2 opacity-0 -translate-x-1/4 transform transition-all duration-700 ease-out md:grid md:grid-cols-3">
                        <p className="italic font-bold md:col-span-1">Programming Languages</p>
                        <div className="md:col-span-2">
                            {sharedAboutMeContentData.programming_langs.length === 0 ? 
                                <p className="info-empty ml-5">
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
                    <div ref={toolsRef} id="toolsId" className="opacity-0 translate-x-1/4 transform transition-all duration-700 ease-out md:grid md:grid-cols-3 md:pt-2">
                        <p className="italic font-bold md:col-span-1">Web Development Tools</p>
                        <div className="md:col-span-2">
                            {sharedAboutMeContentData.tools.length === 0 ? 
                                <p className="info-empty ml-5">
                                    Input Web Development Tools
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
                </div>
                <span className="block my-4 italic font-bold">Soft Skills</span>
                <div ref={softSkillsRef} id="softSkillsId" className="info-border opacity-0 -translate-x-1/4 transform transition-all duration-700 ease-out">
                    {sharedAboutMeContentData.soft_skills.length === 0 ?  
                        <p className=" info-empty">
                            Input Soft Skills   
                        </p> 
                        :
                        <ul className="pl-5 list-disc">
                            {sharedAboutMeContentData.soft_skills.map((data, index) => (
                                <li key={index}>{data}</li>
                            ))}
                        </ul>
                    }
                </div>
                {/* END SKILLS */}
            </div>
        </div>
    )
}

export default AboutMeIndex