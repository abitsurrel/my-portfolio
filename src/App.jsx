/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */


import './index.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Login from './Login';
import LandingPage from './components/landingPage/index';
import { useLayoutEffect, useState } from 'react';
import { DataContext } from './DataContext';
import DashboardIndexContent from './components/dashboard';
import Home from './components/dashboard/Home';
import HomeIndex from './components/dashboard/home/index';
import AddHomeContent from './components/dashboard/home/add';
import EditHomeContent from './components/dashboard/home/edit';
import AboutMe from './components/dashboard/AboutMe';
import AboutMeIndex from './components/dashboard/aboutMe/index';
import AddAboutMeContent from './components/dashboard/aboutMe/add';
import EditAboutMeContent from './components/dashboard/aboutMe/edit';
import MyWorksIndex from './components/dashboard/myWorks/index';
import ProtectedRoutes from './ProtectedRoute';

    
function App() {

    // DEVELOPER DATA
    const [sharedAboutMeContentData,  setSharedAboutMeContentData] = useState({
        name:           "Dianne Russel Ocampo",
        nickname:       "Dianne",
        email:          "diannerusselocampo@gmail.com",
        sites: 
        [
            {
                id:       0,
                sitename: "Github",
                link:     "https://github.com/abitsurrel"
            },
            {
                id:       1,
                sitename: "Gitlab",
                link:     "https://gitlab.com/diocampo1"
            }
        ],
        educ_background: [
            {
                id:             0,
                level:          "Elementary",
                school:         "Pasacao Central School",
                course:         "",
                date_graduated: "2010-03" 
            },
            {
                id:             1,
                level:          "Junior High School",
                school:         "Pasacao Academy, Inc.",
                course:         "",
                date_graduated: "2014-03" 
            },
            {
                id:             2,
                level:          "Bachelor's Degree",
                school:         "Ateneo de Naga University",
                course:         "Information Technology",
                date_graduated: "2023-06" 
            },
        ],
        experiences: 
        [
            {
                id:           0,
                role:         "CCTV Operator",
                work_place:   "Manila International Aiport Authority",
                start:        "2022-04-21",
                end:          "2023-01-21"
            },
            {
                id:           1,
                role:         "Web Developer Intern",
                work_place:   "SDW Web Solutions",
                start:        "2021-02-10",
                end:          "2021-05-11"
            }
        ],
        programming_langs:
        [
            {
                id: 0,
                language: "PHP: PHP Hypertext Preprocessor",
                mastery: 6,
                other: ""
            },
            {
                id: 1,
                language: "Java",
                mastery: 4,
                other: ""
            },
            {
                id: 2,
                language: "C++",
                mastery: 4,
                other: ""
            },
            {
                id: 3,
                language: "Javascript",
                mastery: 5,
                other: ""
            }
        ],
        tools: 
        [
            {
                id: 0,
                name: "Laravel Frameworks",
                mastery: 6,
                other: ""
            },
            {
                id: 1,
                name: "CodeIgniter Frameworks",
                mastery: 4,
                other: ""
            },
            {
                id: 2,
                name: "React JS",
                mastery: 6,
                other: ""
            },
            {
                id:3,
                name: "Tailwind CSS",
                mastery: 6,
                other: ""
            },
            {
                id: 4,
                name: "Bootstrap CSS",
                mastery: 6,
                other: ""
            },
            {
                id: 5,
                name: "Cascading Style Sheets",
                mastery: 6,
                other: ""
            },
            {
                id: 6,
                name: "Hypertext Markup Language",
                mastery: 6,
                other: ""
            },
            {
                id: 7,
                name: "MySQL",
                mastery: 4,
                other: ""
            },
            {
                id: 7,
                name: "Diagrams: Data Flow",
                mastery: 7,
                other: ""
            },
            {
                id: 8,
                name: "Diagrams: Use Case - UML",
                mastery: 7,
                other: ""
            },
            {
                id: 9,
                name: "Diagrams: Entity Relationship",
                mastery: 7,
                other: ""
            },
            {
                id: 10,
                name: "Diagrams: Swimlane",
                mastery: 7,
                other: ""
            },
            {
                id: 11,
                name: "MySQL",
                mastery: 4,
                other: ""
            },
            {
                id: 12,
                name: "Git",
                mastery: 6,
                other: ""
            }
        ],
        soft_skills: ["Goal-oriented", "Team Collaborations", "Problem-solving", "Adaptibility", "Willing to train new skills", "Written and verbal Communication", "Accepts positive critisms"]
    });

    // INITIAL ABOUT PORTFOLIO VALUE
    const initialAboutPortfolio = "This Portfolio showcases the different projects made by the developer using different web development tools. It is designed to be interactive where visitors can input their information using the Dashboard to make the portfolio feels like their own. \n\nThe logo is a twist of word \"a bit surreal\". The developer change the surreal to \"surrel\", a username used by the developer since college, which also is a play in the developer's name \"Russel\". The circuit lines and nodes, and binary numbers in the background image symbolize the passion of the developer in the field of Information Technology where she aims to establish a successful career. Additionally, the binary numbers represents the developer's name \"dianne russel\" in lower case form to signify the developer's signature and ownership of the portfolio. The binary number and circuit lines arrangements depicts the stage of Taylor Swift's latest concert \"The Eras Tour\". Lastly,  the color palette consisting of white, shades of orange, and shades of mint green is a nod towards Taylor Swift's new album \"The Life of a Showgirl\".";

    // HOME CONTENT DATA
    const [sharedHomeContentData, setSharedHomeContentData] = useState({

        aboutPortfolioData:initialAboutPortfolio,
        tools:
        [
            {
                id: 0,
                name: "React JS",
                description: "React is Javascript Library made by Facebook for building User Interfaces(UIs). This library allows developers to create a dynamic web pages by breaking the UI down into smaller, reusable components. It is composed of components, a Javascript function that return a JSX in lieu of boolean, strings, and numbers. Each component is a self-contained piece of UI like a  button, form, or an entire page. My Portfolio used React as the main development tool to create a more interactive web pages.",
                other: "React JS"
            },
            {
                id: 1,
                name: "Tailwind CSS",
                description: "Tailwindcss is a utility-first CSS framework that can be used to build any web design, directly in the markup. It offers a more compact, flexible, and rapid development of web pages without the need to write custom CSS from scratch. My Portfolio used Tailwind CSS utilized the creative freedom offered by the framework to design the web pages.",
                other: "Tailwind CSS"
            }
        ]
    });

    const [sharedCredential, setSharedCredential] = useState(false);

    const ScrollToTopWrapper = ({children}) => {

        const location = useLocation();

        useLayoutEffect(() => {

            window.scrollTo({top: 0, left: 0, behavior: 'instant'});

        }, [location.pathname]);

        return children;
    };

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <DataContext.Provider value={{sharedCredential, setSharedCredential, sharedHomeContentData, setSharedHomeContentData, sharedAboutMeContentData,  setSharedAboutMeContentData, isDarkTheme, setIsDarkTheme}}>
            <BrowserRouter>      
            <ScrollToTopWrapper>
            <Routes>          
                <Route path="/my-portfolio" element={<LandingPage />}/>
                <Route path="/my-portfolio/dashboard" element={<ProtectedRoutes sharedCredential={sharedCredential} />}
                >
                    <Route index element={<DashboardIndexContent />} />
                    <Route path="home/" element={<Home />} >      
                        <Route index element={<HomeIndex />} />     
                        <Route path="add-information" element={<AddHomeContent />} />
                        <Route path="edit-information" element={<EditHomeContent />} />
                    </Route>
                    <Route path="about-me" element={<AboutMe />} >
                        <Route index element={<AboutMeIndex />} />                
                        <Route path="add-information" element={<AddAboutMeContent />} />
                        <Route path="edit-information" element={<EditAboutMeContent />} />
                    </Route>
                    <Route path="my-works" element={<MyWorksIndex />} />
                </Route>
                <Route path="/my-portfolio/login" element={<Login />} />
            </Routes>
            </ScrollToTopWrapper>
            </BrowserRouter>
        </DataContext.Provider>
    );

}

  export default App
