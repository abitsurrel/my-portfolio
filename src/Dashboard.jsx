/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { Link, NavLink, Outlet} from "react-router-dom";
import useResizeWindow from './ResizeWindow';
import Footer from './Footer';
import { useContext, useState } from "react";
import { DataContext } from "./DataContext";

function Dashboard() {   
    
    const { width }     = useResizeWindow();
    const breakpoint    = 768;
    
	const {setSharedCredential, isDarkTheme, setIsDarkTheme} = useContext(DataContext);

    // HANDLE CHANGE THEME TOGGLING
	const changeTheme = () => {
		if(isDarkTheme) {
			setIsDarkTheme(false);
		}
		else {
			setIsDarkTheme(true);
		}

		return document.documentElement.classList.toggle('dark');
	};
    
    // STATE TO TRACK AND RE-RENDER SHOWING OF NAV LINKS
    const [showNavLinks, setShowNavLinks] = useState(false);

    // HANDLE SHOW NAV LINK TOGGLING
    const handleShowNavLinks = () => {

        if(showNavLinks) {
            
            setShowNavLinks(false);
        }
        else {  

            setShowNavLinks(true);
        }
    }
    
    // QUICKLINKS VALUES
	const quicklinks = [
		{
			name: "Home",
			href: "/dashboard/home"
		},
		{
			name: "About Me",
			href: "/dashboard/about-me"
		},
		{
			name: "My Works",
			href: "/dashboard/my-works"
		},
		{
			name: "Landing Page",
			href: "/"
		}
	];

    const handleLogout = () => {

        setSharedCredential(false);

    }
    return (
        <>          
            <div className="flex flex-col w-full min-h-screen overflow-hidden z-0 md:grid md:grid-cols-5">  
                <div className="flex flex-col min-w-screen">                                    
                    <div className={"dash-nav" + (width < breakpoint ? "" : " hidden")}>
                        {isDarkTheme ? 						
							<Link className="w-25 hover:bg-transparent" to="/">
								<img src="/src/assets/logo/dark_theme_logo.svg" alt="My Portfolio" />
							</Link>	
							:							
							<Link className="w-25 hover:bg-transparent" to="/">
								<img src="/src/assets/logo/light_theme_logo.svg" alt="My Portfolio" />
							</Link>	
						}
                        <div className="flex gap-1">                            
                            <div className="flex items-center w-auto cursor-pointer" onClick={changeTheme}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 transform transition-all duration-300 ease-in-out hover:scale-75 dark:fill-yellow-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                            </div> 
                            <div className="flex items-center w-auto mr-5 cursor-pointer" onClick={handleShowNavLinks}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                </svg>
                            </div>   
                        </div>
                    </div> 
                    {width < breakpoint ? 
                        <nav className={"flex flex-col bg-white shadow-lg transform transition-all duration-700 ease-linear z-20 dark:bg-black dark:shadow-black" + (showNavLinks ? "" : " hidden")}>
                            <NavLink className="dash-link" to={"/dashboard"} end>Dashboard</NavLink>
                            <NavLink className="dash-link" to={"/dashboard/home"}>Home</NavLink>
                            <NavLink className="dash-link" to={"/dashboard/about-me"}>About Me</NavLink>
                            <NavLink className="dash-link" to={"/dashboard/my-works"}>My Works</NavLink>  
                            <button className="dash-link py-1 text-left hover:outline-0 hover:border-transparent" onClick={handleLogout}>Logout</button>
                        </nav>  
                        :
                        ""
                    }                  
                </div> 
                <div className={"sidebar z-50" + (width > breakpoint ? "" : " hidden")}>
                    <div className="flex justify-center">
                        {isDarkTheme ? 						
							<Link className="w-40 mx-auto my-5 hover:bg-transparent" to="/">
								<img src="/src/assets/logo/dark_theme_logo.svg" alt="My Portfolio" />
							</Link>	
							:							
							<Link className="w-40 mx-auto my-5 hover:bg-transparent" to="/">
								<img src="/src/assets/logo/light_theme_logo.svg" alt="My Portfolio" />
							</Link>	
						}
                    </div>
                    <nav className="flex flex-col">
                        <NavLink className="dash-link" to={"/dashboard"} end>Dashboard</NavLink>
                        <NavLink className="dash-link" to={"/dashboard/home"}>Home</NavLink>
                        <NavLink className="dash-link" to={"/dashboard/about-me"}>About Me</NavLink>
                        <NavLink className="dash-link" to={"/dashboard/my-works"}>My Works</NavLink>
                        <button className="dash-link py-2 text-left hover:outline-0 hover:border-transparent" onClick={handleLogout}>Logout</button>
                    </nav>	       
                    <div className="flex justify-end items-baseline w-auto h-full mr-5 cursor-pointer" onClick={changeTheme}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 transform transition-all duration-300 ease-in-out hover:scale-75 dark:fill-yellow-400">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
						</svg>
					</div>  
                </div>
                <div className="flex flex-col gap-5 min-h-screen mt-10 mx-5 mb-5 md:mt-0 md:mb-0 md:mx-0 md:col-start-2 md:col-span-4 md:py-4 md:mr-5">
                    <div className="core p-10 bg-white border-2 rounded-xl dark:bg-mint-900">    
                        <Outlet />
                    </div>
                    {/* FOOTER */}
                    <Footer isRounded={true} from={"Dashboard"} quicklinks={quicklinks} />      
                    {/* END FOOTER */}
                </div>
            </div>
            
        </>
    );

}

export default Dashboard