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

function AddAboutMeContent() {

    // STATE TO TRACK AND RE-RENDER ERROR MESSAGE VALUE
    const [errorMessage, setErrorMessage] = useState("");
    // STATE TO TRACK AND RE-RENDER HIDE MESSAGE STATUS
    const [hideMessage, setHideMessage] = useState(true);

    /*
     *  PERSONAL INFORMATION
     */ 
    // GET SHARED DEVELOPER DATA USING DATACONTEX
    const {setSharedAboutMeContentData} = useContext(DataContext);
    // INITIALIZE NAVIGATE TO RETURN TO INDEX
    const navigate = useNavigate();    
    

    // STATE TO TRACK AND RE-RENDER INPUT NAME VALUE
    const [inputName, setName] = useState("");    

    // STATE TO TRACK AND RE-RENDER INPUT NICKNAME VALUE
    const [nickname, setNickname] = useState("");   

    // STATE TO TRACK AND RE-RENDER INPUT EMAIL VALUE 
    const [email, setEmail] = useState("");

    // STATE TO TRACK AND RE-RENDER INPUT SITE NAME VALUE 
    const [siteName, setSiteName] = useState("");

    // STATE TO TRACK AND RE-RENDER INPUT SITE LINK VALUE
    const [siteLink, setSiteLink] = useState("");

    // INITIAL SITES ARRAY VALUE
    const initialSite = [{id: 0, sitename:"", link:""}];    
    // STATE TO TRACK AND RE-RENDER INPUT SITES VALUE 
    const [sites, setSites] = useState(initialSite);
    // STATE TO TRACK AND RE-RENDER SITE'S CURRENT ID
    const [currentSiteId, setCurrentSiteId] = useState(0);
    // STATE TO TRACK AND RE-RENDER SITE'S CURRENT INDEX
    const [sitesArrayIndex, setSitesArrayIndex] = useState(0); 

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
    const initialEducation = [{
        id:             0, 
        level:          "", 
        school:         "", 
        course:         "", 
        date_graduated: ""
    }];

    // STATE TO TRACK AND RE-RENDER INPUT EDUC BACKGROUND VALUE
    const [educBackground, setEducBackground] = useState(initialEducation);
    // STATE TO TRACK AND RE-RENDER EDUC BACKGROUND'S CURRENT ID
    const [currentEducId,  setCurrentEducId] = useState(0);
    // STATE TO TRACK AND RE-RENDER EDUC BACKGROUND'S CURRENT INDEX
    const [educArrayIndex, setEducArrayIndex] = useState(0);
 
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
    const initialExperience =[{
        id:         0, 
        role:       "", 
        work_place:  "", 
        start:  "", 
        end:    ""
    }];
    
    // STATE TO TRACK AND RE-RENDER INPUT EXPERIENCES ARRAY VALUE
    const [experiences, setExperiences] = useState(initialExperience);
    // STATE TO TRACK AND RE-RENDER EXPERIENCE'S CURRENT ID
    const [currentExpId, setCurrentExpId] = useState(0);
    // STATE TO TRACK AND RE-RENDER EXPERIENCE'S CURRENT INDEX
    const [expArrayIndex, setExpArrayIndex] = useState(0);

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
    const initialProgLanguage = [{
        id:         0,
        language:   "",
        mastery:    0
    }];

    // STATE TO TRACK AND RE-RENDER INPUT LANGUAGES ARRAY VALUE
    const [progLanguages, setProgLanguages] = useState(initialProgLanguage);
    // STATE TO TRACK AND RE-RENDER PROG LANG' CURRENT ID
    const [currentProgLanguageId, setCurrentProgLanguageId] = useState(0);
    // STATE TO TRACK AND RE-RENDER PROG LANG'S CURRENT INDEX
    const [progLanguageArrayIndex, setProgLanguageArrayIndex] = useState(0);

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
    const initialTool = [{
        id:         0,
        name:       "",
        mastery:    0,
        other: ""
    }];
    // STATE TO TRACK AND RE-RENDER INPUT LANGUAGES ARRAY VALUE
    const [tools, setTools] = useState(initialTool);
    // STATE TO TRACK AND RE-RENDER TOOL' CURRENT ID
    const [currentToolId, setCurrentToolId] = useState(0);
    // STATE TO TRACK AND RE-RENDER TOOL'S CURRENT INDEX
    const [toolsArrayIndex, setToolsArrayIndex] = useState(0);

      /*
     *  WEB DEVELOPMENT TOOLS INFORMATION
     */ 
    // STATE TO TRACK AND RE-RENDER INPUT TOOL NAME VALUE
    const [softSkill, setSoftSkill] = useState("");

    // STATE TO TRACK AND RE-RENDER INPUT LANGUAGES ARRAY VALUE
    const [softSkills, setSoftSkills] = useState([""]);
    // STATE TO TRACK AND RE-RENDER TOOL'S CURRENT INDEX
    const [softSkillsArrayIndex, setSoftSkillsArrayIndex] = useState(0);

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
            <h1 className="title">Add About Me Content</h1>
            <div className="w-full mx-auto mt-10 mb-5 md:w-4/5">
                <div className={"message" + (errorMessage !== "" ? " error" : "")} hidden={hideMessage}>
                    {errorMessage}
                </div>
            </div>
            <div className="border border-dashed w-full mx-auto my-4 p-4 leading-none rounded-md md:w-4/5">           
                <span className="text-xs text-gray-500">Note:</span>
                <br />  
                <div className="ml-5 text-xs text-gray-500">
                    <ul>
                        <li className="pl-5 list-disc">When you submit a new About Me Content data, the new data will override the previous one.</li>
                        <li className="pl-5 list-disc"><span className="text-red-700">*</span> is required.</li>
                    </ul>                    
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
            <h3 className="title text-center mt-10">Skills</h3>
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

export default AddAboutMeContent