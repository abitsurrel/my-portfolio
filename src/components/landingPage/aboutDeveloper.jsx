/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { useContext, useEffect } from "react";
import { DataContext } from "../../DataContext";
import MonthYear from "../../MonthYear";
import MonthDayYear from "../../MonthDayYear";
import useInView from "../../UseInView";

function AboutDeveloper() {

    // STATE TO TRACK AND RENDER IF CONTAINER IS IN VIEW
    const {sharedAboutMeContentData} = useContext(DataContext);
    const [personalInfo1Ref, isPersonalInfo1Visible] = useInView({threshold: 0.5});
    const [personalInfo2Ref, isPersonalInfo2Visible] = useInView({threshold: 0.5});
    const [educBackgroundRef, isEducBackgroundVisible] = useInView({threshold:0.5});
    const [experiencesRef, isExperiencesVisible] = useInView({threshold:0.5});
    const [progLanguagesRef, isProgLanguagesVisible] = useInView({threshold:0.5});
    const [toolsRef, isToolsVisible] = useInView({threshold:0.5});
    const [softSkillsRef, isSoftSkillsVisible] = useInView({threshold:0.5});

    useEffect(() => {
        
        const personalInfo1Id = document.getElementById("personalInfo1Id");
        const personalInfo2Id = document.getElementById("personalInfo2Id");
        const educBackgroundId = document.getElementById("educBackgroundId");
        const experiencesId = document.getElementById("experiencesId");
        const progLanguagesId = document.getElementById("progLanguagesId");
        const toolsId = document.getElementById("toolsId");
        const softSkillsId = document.getElementById("softSkillsId");

        // CHECK IF CONTAINER IS VISIBLE
        if(isPersonalInfo1Visible) {
            personalInfo1Id.classList.remove("opacity-0", "-translate-x-1/4");
            personalInfo1Id.classList.add("opacity-100", "translate-x-0");
        }
          
        // CHECK IF CONTAINER IS VISIBLE
        if(isPersonalInfo2Visible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            personalInfo2Id.classList.remove("opacity-0", "translate-x-1/4");
            personalInfo2Id.classList.add("opacity-100", "translate-x-0");
        }
          
        // CHECK IF CONTAINER IS VISIBLE
        if(isEducBackgroundVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
            educBackgroundId.classList.remove("opacity-0", "-translate-x-1/4");
            educBackgroundId.classList.add("opacity-100", "translate-x-0");
        }
          
        // CHECK IF CONTAINER IS VISIBLE
        if(isExperiencesVisible) {
            // CHANGE OPACITY AND TRANSLATE VALUE
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
        isPersonalInfo1Visible, 
        isPersonalInfo2Visible, 
        isEducBackgroundVisible, 
        isExperiencesVisible, 
        isProgLanguagesVisible, 
        isToolsVisible, 
        isSoftSkillsVisible
    ]);

    return (
        <div className="p-4 my-2 md:p-10 md:mx-5">
            <h1 className="title">About Developer</h1>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div ref={personalInfo1Ref} id="personalInfo1Id" className="flex flex-col info-border break-all opacity-0 transform -translate-x-1/4 transition-all duration-500 ease-out">
                    <div className="grid grid-cols-3 gap-2 mb-2">
                        <span className="col-span-1 italic">Name</span>
                        <span className="col-span-2 font-serif font-bold tracking-widest">{sharedAboutMeContentData.name} </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                        <span className="col-span-1 italic">Nickname</span>
                        <span className="col-span-2 font-serif font-bold tracking-widest">{sharedAboutMeContentData.nickname} </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <span className="col-span-1 italic">Email</span>
                        <span className="col-span-2 font-serif font-bold tracking-widest">{sharedAboutMeContentData.email} </span>
                    </div>
                </div>
                <div ref={personalInfo2Ref} id="personalInfo2Id" className="flex flex-col info-border break-all opacity-0 transform translate-x-1/4 transition-all duration-500 ease-out">
                    <h5 className="mb-2 text-center">Sites</h5>                        
                    {sharedAboutMeContentData.sites.map((data, index) => (                           
                        <div className="grid grid-cols-3 gap-2 break-all" key={index}>
                            <span className="col-span-1 italic">{data.sitename}</span>
                            <a href={data.link} target="_blank" className="col-span-2 link my-0 font-bold tracking-widest">{data.link}</a>
                        </div>
                    ))}
                </div>    
            </div>                
            <div className="flex flex-col info-border mb-5">
                <h3 className="mb-5 text-center">Educational Background</h3>   
                <div ref={educBackgroundRef} id="educBackgroundId" className="flex flex-wrap gap-5 justify-center mb-5 opacity-0 transform -translate-x-1/4 transition-opacity duration-500 ease-linear md:gap-10">        
                    {sharedAboutMeContentData.educ_background.map((data, index) =>(
                        <div className="flex flex-col w-90 p-5 bg-mint-300 info-border border-transparent break-word dark:bg-white dark:text-mint-950" key={index}>
                            <p className="italic font-serif font-bold tracking-widest">{data.level}</p>
                            <p className="font-serif">{data.school}</p>
                            {data.course === "" ? "" :
                                <p className="font-serif">{data.course}</p>
                            }
                            <p className="font-serif"><MonthYear date={data.date_graduated} /></p>
                        </div>
                    ))}
                </div>    
            </div>               
            <div className="flex flex-col mb-5 info-border">
                <h3 className="mb-5 text-center">Work Experience(s)</h3>
                <div ref={experiencesRef} id="experiencesId" className="flex flex-wrap gap-5 justify-center mb-5 opacity-0 transform translate-x-1/4 transition-opacity duration-500 ease-linear md:gap-10">        
                    {sharedAboutMeContentData.experiences.map((data, index) => (  
                        data.role === "" ? "" :
                        <div className="flex flex-col w-90 p-5 bg-mint-300 info-border border-transparent dark:bg-white  dark:text-mint-950" key={index}>
                            <p className="italic font-serif font-bold tracking-widest">{data.role}</p>
                            <p className="font-serif">{data.work_place}</p>
                            <p className="font-serif"><MonthDayYear date={data.start} /> - <MonthDayYear date={data.end} /></p>
                        </div>
                    ))}
                </div>    
            </div>                        
            <div className="flex flex-col mb-5 info-border">
                <h3 className="mb-5 text-center">Skills</h3>
                <h5 className="mb-2 italic pl-5">Programming Languages</h5>  
                <div ref={progLanguagesRef} id="progLanguagesId" className="flex flex-col gap-3 justify-center mb-10 px-5 opacity-0 transform -translate-x-1/4 transition-all duration-500 ease-out md:gap-5">        
                    {sharedAboutMeContentData.programming_langs.map((data, index) => (  
                        data.language === "" ? "" :
                        <div className="grid grid-cols-3" key={index}>
                            <div className="col-span-1">
                                <span className="flex items-center break-word">{data.language}</span>
                            </div>
                            <div className="col-span-2 flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-auto dark:bg-gray-500">
                                    <div className="bg-mint-800 h-auto rounded-full dark:bg-orange-300 text-center text-white font-bold" style={{ width: data.mastery * 10 + "%" }}>{ data.mastery}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>                      
                <h5 className="mb-2 italic pl-5">Web Development Tools</h5>  
                <div ref={toolsRef} id="toolsId" className="flex flex-col gap-3 justify-center mb-10 px-5 opacity-0 transform translate-x-1/4 transition-all duration-500 ease-out md:gap-5">        
                    {sharedAboutMeContentData.tools.map((data, index) => (  
                        data.name === "" ? "" :
                        <div className="grid md:grid-cols-3 gap-2" key={index}>
                            <div className="md:col-span-1">
                                <span className="flex items-center break-word">{data.name}</span>
                            </div>
                            <div className="md:col-span-2 flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-auto dark:bg-gray-500">
                                    <div className="bg-mint-800 h-auto rounded-full dark:bg-orange-300 text-center text-white font-bold" style={{ width: data.mastery * 10 + "%" }}>{ data.mastery}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>                   
                <h5 className="mb-2 italic pl-5">Soft Skills</h5>  
                <div ref={softSkillsRef} id="softSkillsId" className="flex flex-col gap-1 justify-center mb-10 px-5 opacity-0 transform -translate-x-1/4 transition-all duration-500 ease-out">   
                    <ul className="list-disc pl-5 font-serif tracking-widest break-word">
                        {sharedAboutMeContentData.soft_skills.map((data, index) => (  
                            data === "" ? "" :
                            <li key={index}>{data}</li>
                        ))}
                    </ul>     
                </div> 
            </div>
        </div>
    );
}

export default AboutDeveloper
