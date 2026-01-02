/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { NavLink, useNavigate } from 'react-router-dom';
import PersonalInfo from './personalInfo';
import EducBackground from './educBackground';
import { useContext, useState } from 'react';
import { DataContext } from '../../../DataContext';
import WorkExperiences from './experiences';
import ProgrammingLanguages from './programmingLangs';
import WebDevTools from './tools';
import SoftSkills from './softSkills';

function EditAboutMeContent() {

    // STATE TO TRACK AND RE-RENDER ERROR MESSAGE VALUE
    const [errorMessage, setErrorMessage] = useState("");
    // STATE TO TRACK AND RE-RENDER HIDE MESSAGE STATUS
    const [hideMessage, setHideMessage] = useState(true);

    /*
     *  PERSONAL INFORMATION
     */ 
    // GET SHARED DEVELOPER DATA USING DATACONTEX
    const {sharedAboutMeContentData, setSharedAboutMeContentData} = useContext(DataContext);
    // INITIALIZE NAVIGATE TO RETURN TO INDEX
    const navigate = useNavigate();    
    

    // STATE TO TRACK AND RE-RENDER INPUT NAME VALUE
    const [inputName, setName] = useState(sharedAboutMeContentData.name);    

    // STATE TO TRACK AND RE-RENDER INPUT NICKNAME VALUE
    const [nickname, setNickname] = useState(sharedAboutMeContentData.nickname);   

    // STATE TO TRACK AND RE-RENDER INPUT EMAIL VALUE 
    const [email, setEmail] = useState(sharedAboutMeContentData.email);

    // STATE TO TRACK AND RE-RENDER INPUT SITE NAME VALUE 
    const [siteName, setSiteName] = useState("");

    // STATE TO TRACK AND RE-RENDER INPUT SITE LINK VALUE
    const [siteLink, setSiteLink] = useState("");

    // INITIAL SITES ARRAY VALUE
    const initialSite = sharedAboutMeContentData.sites;    
    // STATE TO TRACK AND RE-RENDER INPUT SITES VALUE 
    const [sites, setSites] = useState(initialSite);
    // SET INITIAL CURRENT STTES ID TO 0
    let initialCurrentSiteId = 0;
    // CHECK IF TOOLS ARRAY IS NOT EMPTY
    if(sites.length !== 0) {
        // UPDATE TO LAST ELEMENT'S ID + 1
        initialCurrentSiteId = sites[sites.length - 1].id + 1;
    }
    // INITIAL CURRENT SITE ID VALUE
    const lastSiteId = initialCurrentSiteId;
    // STATE TO TRACK AND RE-RENDER SITE'S CURRENT ID
    const [currentSiteId, setCurrentSiteId] = useState(lastSiteId + 1);
    // STATE TO TRACK AND RE-RENDER SITE'S CURRENT INDEX
    const [sitesArrayIndex, setSitesArrayIndex] = useState(sites.length); 

    /*
     *  EDUCATIONAL BACKGROUND
     */ 
    // STATE TO TRACK AND RE-RENDER INPUT LEVEL VALUE
    const [level, setLevel] = useState("");

    // STATE TO TRACK AND RE-RENDER INPUT SCHOOL VALUE
    const [school, setSchool] = useState("");

    // STATE TO TRACK AND RE-RENDER INPUT COURSE VALUE
    const [course, setCourse] = useState("");
    
    // STATE TO TRACK AND RE-RENDER INPUT DATE GRADUATED VALUE
    const [dateGraduated, setDateGraduated] = useState("");

    // INITIAL EDUC BACKGROUND ARRAY VALUE
    const initialEducation = sharedAboutMeContentData.educ_background;
    // STATE TO TRACK AND RE-RENDER INPUT EDUC BACKGROUND VALUE
    const [educBackground, setEducBackground] = useState(initialEducation);
    // SET INITIAL EDUC BACKGROUND ID TO 0
    let initialEducId = 0;
    // CHECK IF EDUC BACKGROUND ARRAY IS NOT EMPTY
    if(educBackground.length !== 0) {
        // UPDATE TO LAST ELEMENT'S ID + 1
        initialEducId = educBackground[educBackground.length - 1].id + 1;
    }
    // STATE TO TRACK AND RE-RENDER EDUC BACKGROUND'S CURRENT ID
    const [currentEducId,  setCurrentEducId] = useState(initialEducId);
    // STATE TO TRACK AND RE-RENDER EDUC BACKGROUND'S CURRENT INDEX
    const [educArrayIndex, setEducArrayIndex] = useState(educBackground.length);
 
    /*
     *  EXPERIENCES INFORMATION
     */ 
    // STATE TO TRACK AND RE-RENDER INPUT ROLES VALUE
    const [role, setRole] = useState("");

    // STATE TO TRACK AND RE-RENDER INPUT WORK PLACE VALUE
    const [workPlace, setWorkPlace] = useState("");

    // STATE TO TRACK AND RE-RENDER INPUT START DATE VALUE
    const [startDate, setStartDate] = useState("");

    // STATE TO TRACK AND RE-RENDER INPUT END DATE VALUE
    const [endDate, setEndDate] = useState("");

    // INITIAL EXPERIENCE ARRAY VALUE
    const initialExperience = sharedAboutMeContentData.experiences;    
    // STATE TO TRACK AND RE-RENDER INPUT EXPERIENCES ARRAY VALUE
    const [experiences, setExperiences] = useState(initialExperience);
    // SET INITIAL EXP ID TO 0
    let initialExpId = 0;
    // CHECK IF EXP ARRAY IS NOT EMPTY
    if(experiences.length !== 0) {
        // UPDATE TO LAST ELEMENT'S ID + 1
        initialExpId = experiences[experiences.length - 1].id + 1;
    }
    // STATE TO TRACK AND RE-RENDER EXPERIENCE'S CURRENT ID
    const [currentExpId, setCurrentExpId] = useState(initialExpId);
    // STATE TO TRACK AND RE-RENDER EXPERIENCE'S CURRENT INDEX
    const [expArrayIndex, setExpArrayIndex] = useState(experiences.length);

    /*
     *  PROGRAMMING LANGUAGES INFORMATION
     */ 
    // STATE TO TRACK AND RE-RENDER INPUT LANGUAGE VALUE
    const [language, setLanguage] = useState("");
    // STATE TO TRACK AND RE-RENDER INPUT LANGUAGE MASTERY VALUE
    const [progLanguageMastery, setProgLanguageMastery] = useState(0);
    // STATE TO TRACK AND RE-RENDER INPUT OTHER PROG LANG VALUE
    const [progLanguageOther, setProgLanguageOther] = useState("");

    // INITIAL PROG LANG ARRAY VALUE
    const initialProgLanguage = sharedAboutMeContentData.programming_langs;

    // STATE TO TRACK AND RE-RENDER INPUT LANGUAGES ARRAY VALUE
    const [progLanguages, setProgLanguages] = useState(initialProgLanguage);
    // SET INITIAL EXP ID TO 0
    let initialProgLangId = 0;
    // CHECK IF EXP ARRAY IS NOT EMPTY
    if(progLanguages.length !== 0) {
        // UPDATE TO LAST ELEMENT'S ID + 1
        initialProgLangId = progLanguages[progLanguages.length - 1].id + 1;
    }
    // STATE TO TRACK AND RE-RENDER PROG LANG' CURRENT ID
    const [currentProgLanguageId, setCurrentProgLanguageId] = useState(initialProgLangId);
    // STATE TO TRACK AND RE-RENDER PROG LANG'S CURRENT INDEX
    const [progLanguageArrayIndex, setProgLanguageArrayIndex] = useState(progLanguages.length);

    /*
     *  WEB DEVELOPMENT TOOLS INFORMATION
     */ 
    // STATE TO TRACK AND RE-RENDER INPUT TOOL NAME VALUE
    const [toolName, setToolName] = useState("");
    // STATE TO TRACK AND RE-RENDER INPUT TOOL MASTERY VALUE
    const [toolMastery, setToolMastery] = useState(0);
    // STATE TO TRACK AND RE-RENDER INPUT OTHER TOOL VALUE
    const [toolOther, setToolOther] = useState("");

    // INITIAL TOOLS ARRAY VALUE
    const initialTool = sharedAboutMeContentData.tools;
    // STATE TO TRACK AND RE-RENDER INPUT LANGUAGES ARRAY VALUE
    const [tools, setTools] = useState(initialTool);
    // SET INITIAL EXP ID TO 0
    let initialToolId = 0;
    // CHECK IF EXP ARRAY IS NOT EMPTY
    if(tools.length !== 0) {
        // UPDATE TO LAST ELEMENT'S ID + 1
        initialToolId = tools[tools.length - 1].id + 1;
    }
    // STATE TO TRACK AND RE-RENDER TOOL' CURRENT ID
    const [currentToolId, setCurrentToolId] = useState(initialToolId);
    // STATE TO TRACK AND RE-RENDER TOOL'S CURRENT INDEX
    const [toolsArrayIndex, setToolsArrayIndex] = useState(tools.length);

      /*
     *  WEB DEVELOPMENT TOOLS INFORMATION
     */ 
    // STATE TO TRACK AND RE-RENDER INPUT TOOL NAME VALUE
    const [softSkill, setSoftSkill] = useState("");

    // STATE TO TRACK AND RE-RENDER INPUT LANGUAGES ARRAY VALUE
    const [softSkills, setSoftSkills] = useState(sharedAboutMeContentData.soft_skills);
    // STATE TO TRACK AND RE-RENDER TOOL'S CURRENT INDEX
    const [softSkillsArrayIndex, setSoftSkillsArrayIndex] = useState(softSkills.length);

    /*
     *  UPDATE SHARED DEVELOPER DATA
     */ 
    const handleSetSharedDeveloperData = () => {

        if(inputName === "" 
            || email === "" 
            || educBackground[0].level === ""
        ) {
            setErrorMessage("Name, email, and Educational Background are required!");
            setHideMessage(false);
        }
        else {
            setSharedAboutMeContentData({
                name:               inputName,
                nickname:           nickname,
                email:              email,
                sites:              sites,
                educ_background:    educBackground,
                experiences:        experiences,
                programming_langs:  progLanguages,
                tools:              tools,
                soft_skills:        softSkills
            });

            navigate("/my-portfolio/dashboard/about-me", {replace: true});
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    
    return (
        <div>
            <h1 className="title">Edit About Me Content</h1>
            <div className="w-full mx-auto mt-10 mb-5 md:w-4/5">
                <div className={"message" + (errorMessage !== "" ? " error" : "")} hidden={hideMessage}>
                    {errorMessage}
                </div>
            </div>
            <div className="w-full mx-auto mt-5 md:w-4/5 mb-10">
            {/* PERSONAL INFORMATION */}
                <PersonalInfo inputName={inputName} setName={setName} nickname={nickname} setNickname={setNickname} email={email} setEmail={setEmail} siteName={siteName} setSiteName={setSiteName} siteLink={siteLink} setSiteLink={setSiteLink} currentSiteId={currentSiteId} setCurrentSiteId={setCurrentSiteId} sitesArrayIndex={sitesArrayIndex} setSitesArrayIndex={setSitesArrayIndex} sites={sites} setSites={setSites} initialSite={initialSite} />
            {/* END PERSONAL INFORMATION */}
            {/* EDUCATIONAL BACKGROUND */}
                <EducBackground level={level} setLevel={setLevel} school={school} setSchool={setSchool} course={course} setCourse={setCourse} dateGraduated={dateGraduated} setDateGraduated={setDateGraduated} educBackground={educBackground} setEducBackground={setEducBackground} currentEducId={currentEducId} setCurrentEducId={setCurrentEducId} educArrayIndex={educArrayIndex} setEducArrayIndex={setEducArrayIndex} initialEducation={initialEducation} />
            {/* END EDUCATIONAL BACKGROUND */}
            {/* EXPERIENCES */}
                <WorkExperiences role={role} setRole={setRole} workPlace={workPlace} setWorkPlace={setWorkPlace} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} experiences={experiences} setExperiences={setExperiences} currentExpId={currentExpId} setCurrentExpId={setCurrentExpId} expArrayIndex={expArrayIndex} setExpArrayIndex={setExpArrayIndex} initialExperience={initialExperience} />
            {/* END EXPERIENCES */}
            {/* SKILLS */}
            <h3 className="text-center mt-10">Skills</h3>
                {/* PROGRAMMING LANGUAGES */}
                <ProgrammingLanguages language={language} setLanguage={setLanguage} progLanguageMastery={progLanguageMastery} setProgLanguageMastery={setProgLanguageMastery} progLanguageOther={progLanguageOther} setProgLanguageOther={setProgLanguageOther} progLanguages={progLanguages} setProgLanguages={setProgLanguages} currentProgLanguageId={currentProgLanguageId} setCurrentProgLanguageId={setCurrentProgLanguageId} progLanguageArrayIndex={progLanguageArrayIndex} setProgLanguageArrayIndex={setProgLanguageArrayIndex} initialProgLanguage={initialProgLanguage} />
                {/* END PROGRAMMING LANGUAGES */}
                {/* WEB DEVELOPMENT TOOLS */}
                <WebDevTools toolName={toolName} setToolName={setToolName} toolMastery={toolMastery} setToolMastery={setToolMastery} toolOther={toolOther} setToolOther={setToolOther} tools={tools} setTools={setTools} currentToolId={currentToolId} setCurrentToolId={setCurrentToolId} toolsArrayIndex={toolsArrayIndex} setToolsArrayIndex={setToolsArrayIndex} initialTool={initialTool} />
                {/* END WEB DEVELOPMENT TOOLS */}
                {/* SOFT SKILLS */}
                <SoftSkills softSkill={softSkill} setSoftSkill={setSoftSkill} softSkills={softSkills} setSoftSkills={setSoftSkills} softSkillsArrayIndex={softSkillsArrayIndex} setSoftSkillsArrayIndex={setSoftSkillsArrayIndex} />
                {/* END SOFT SKILLS */}
            {/* END SKILLS */}
            </div>            
            <div className="grid grid-cols-4 gap-3 w-3/5 mx-auto">            
                <button className="col-span-2 mx-0 btn-primary" onClick={handleSetSharedDeveloperData}>Submit</button>
                <NavLink to={"/my-portfolio/dashboard/about-me"} className="col-span-2 mx-0 btn-info rounded-md text-center">Back</NavLink>
            </div>
        </div>
    );
}

export default EditAboutMeContent