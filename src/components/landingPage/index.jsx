/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { Link } from 'react-router';
import Home from './home';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from './../../DataContext';
import Footer from './../../Footer';
import AboutPortfolio from './aboutPortfolio';
import AboutDeveloper from './aboutDeveloper';
import useResizeWindow from '../../ResizeWindow';
import MyWorks from './myWorks';

function LandingPage() {

	// GET CALLBACK FUNCTION sharedCredential TO GET CREDENTIAL VALUE
	const {sharedCredential, setSharedCredential, isDarkTheme, setIsDarkTheme} = useContext(DataContext); 
	const {width} = useResizeWindow();
	const breakpoint = 768;

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
	
	// HANDLE ABOUT DROPDOWN TOGGLING
	const handleDropdown = () => {
		
		const dropdownContent1 = document.getElementById("navDropDownContent1");
		const dropdownContent2 = document.getElementById("navDropDownContent2");
		const caret1 = document.getElementById("caret1");
		const caret2 = document.getElementById("caret2");

		if(width < breakpoint) {

			// TOGGLE HIDDEN CLASS
			dropdownContent1.classList.toggle("hidden");
			// ROTATE CARET
			caret1.classList.toggle("rotate-180");
		}
		else {
			
			// TOGGLE HIDDEN CLASS
			dropdownContent2.classList.toggle("hidden");
			// ROTATE CARET
			caret2.classList.toggle("rotate-180");
		}

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
	};

	// STATE TO TRACK AND RE-RENDER Y-AXIS POSITION VALUE
	const [yPosition, setYPosition] = useState(0);
	const threshold 				= 5;
	
	// HANDLE SCROLLING EVENT
	const handleScrollEvent = () => {
		// GET CURRENT Y-AXIS POSITION VALUE
		const position = window.scrollY;

		// UPDATE Y-AXIS POSITION VALUE
		setYPosition(position);
	};

	useEffect(() => {

		const navbar1 = document.getElementById("navbar1Id");
		const navbar2 = document.getElementById("navbar2Id");
		const showNavId = document.getElementById("showNavId");

		// CHECK IF SCREEN IS LESS THAN BREAKPOINT
		if(width < breakpoint) {

			// CHECK IF Y-AXIS POSITION IS GREATER THAN THRESHOLD
			if(yPosition > threshold) {
				// CHANGE BACKGROUND VALUE
				navbar1.classList.remove("bg-transparent", "dark:bg-transparent");
				navbar1.classList.add("bg-[rgb(0,0,0,0.1)]", "dark:bg-[rgb(0,0,0,0.5)]");
			}
			else {
				// CHANGE BACKGROUND VALUE
				navbar1.classList.remove("bg-[rgb(0,0,0,0.1)]", "dark:bg-[rgb(0,0,0,0.5)]");
				navbar1.classList.add("bg-transparent", "dark:bg-transparent");
			}

			// CHECK IF Y-AXIS POSITION IS GREATER THAN THRESHOLD AND SHOWING NAV LINKS
			if(yPosition > threshold && showNavLinks){
				// CHANGE BACKGROUND VALUE
				showNavId.classList.remove("bg-transparent", "dark:bg-transparent");
				showNavId.classList.add("bg-[rgb(0,0,0,0.1)]", "dark:bg-[rgb(0,0,0,0.5)]");
			}
			else {
				// CHANGE BACKGROUND VALUE
				showNavId.classList.remove("bg-[rgb(0,0,0,0.1)]", "dark:bg-[rgb(0,0,0,0.5)]");
				showNavId.classList.add("bg-transparent", "dark:bg-transparent");
			}
		}

		// CHECK IF SCREEN IS GREATER THAN BREAKPOINT
		else if(width > breakpoint) {

			// CHECK IF Y-AXIS POSITION IS GREATER THAN THRESHOLD
			if(yPosition > threshold) {
				// CHANGE BACKGROUND VALUE
				navbar2.classList.remove("bg-transparent", "dark:bg-transparent");
				navbar2.classList.add("bg-[rgb(0,0,0,0.1)]", "dark:bg-[rgb(0,0,0,0.5)]");
			}
			else {
				// CHANGE BACKGROUND VALUE
				navbar2.classList.remove("bg-[rgb(0,0,0,0.1)]", "dark:bg-[rgb(0,0,0,0.5)]");
				navbar2.classList.add("bg-transparent", "dark:bg-transparent");
			}
		}

		// LISTEN SCROLL EVENT ON MOUNT
		window.addEventListener("scroll", handleScrollEvent)

		// REMOVE SCROLL EVENT ON UNMOUNT
		return () => {
			window.removeEventListener("scroll", handleScrollEvent);
		}

		// DEPENDENCIES
	}, [width, showNavLinks, yPosition]);


	// QUICKLINKS VALUES
	const quicklinks = [
		{
			name: "Home",
			href: "#home"
		},
		{
			name: "About Portfolio",
			href: "#about_portfolio"
		},
		{
			name: "About Developer",
			href: "#about_developer"
		},
		{
			name: "My Works",
			href: "my_works"
		},
		{
			name: "Dashboard",
			href: "/dashboard"
		}
	];

	const handleLogout = () => {

        setSharedCredential(false);
        
    }

	return (
		<div className='flex flex-col min-h-screen overflow-hidden'> 	
			{/* SM SCREENS */}	
			<div className={"flex flex-col min-w-screen" + (width > breakpoint ? " hidden" : "")}>
				<div className="navbar bg-transparent dark:bg-transparent transform transition-all duration-300 ease-linear" id="navbar1Id">
					<div className="navbar-logo">
						{isDarkTheme ? 						
							<Link to="/">
								<img src="/src/assets/logo/dark_theme_logo.svg" alt="My Portfolio" />
							</Link>	
							:							
							<Link to="/">
								<img src="/src/assets/logo/light_theme_logo.svg" alt="My Portfolio" />
							</Link>	
						}			
					</div>				
					<div className="flex gap-1">				
						<div className="flex items-center w-auto mr-3 cursor-pointer " onClick={changeTheme}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 transform transition-all duration-300 ease-linear hover:scale-75 dark:fill-yellow-400">
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
				{/* SHOW NAV LINKS FOR SM SCREENS  */}
				<nav className={"flex flex-col top-15 fixed w-full bg-transparent dark:bg-transparent shadow-lg transform transition-all duration-700 ease-linear z-20 dark:shadow-black" + (showNavLinks ? "" : " hidden")} id="showNavId">
					<a className="navbar-link py-3" href="#home">Home</a>
					<div className="relative inline-block px-1" onClick={handleDropdown}>
						<div className="flex justify-between w-full py-3 navbar-link cursor-pointer" id="navDropDown">
							<div className="inline-flex items-center" aria-haspopup="true" aria-expanded="true">About	
							</div>							
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mt-1 ml-3 transition-all duration-100 ease-linear" id="caret1">
							<path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
							</svg>
						</div>
						<div id="navDropDownContent1" className="absolute top-10 w-90 p-0 bg-white border border-mint-800 rounded-md  transition-all duration-700 ease-in hidden" role="menu" aria-orientation="vertical" aria-labelledby="navDropDown">
							<div className="py-1" role="none">
								<a href="#about_portfolio" className="block rounded-none m-0 px-4 py-1 no-underline hover:bg-orange-400 dark:text-mint-800" role="menuitem">
									Portfolio
								</a>
								<a href="#" className="block rounded-none m-0 px-4 py-1 no-underline hover:bg-orange-400 dark:text-mint-800" role="menuitem">
									Developer
								</a>
							</div>
						</div>
					</div>
					<a className="navbar-link py-3" href="#">My Works</a>   
					{sharedCredential ? 
						<>
							<Link className="navbar-link mb-2 py-3" to="/dashboard">Dashboard</Link> 
							<button className="navbar-link py-3 text-left hover:outline-0 hover:border-transparent" onClick={handleLogout}>Logout</button>
						</>
						: 
						<Link className="navbar-link mb-2 py-3" to="/login">Login</Link>
					}		
				</nav>						
				{/* END SHOW NAV LINKS FOR SM SCREENS  */}				
			</div> 
			{/* END SM SCREENS */}	 
			{/* MD tto XL SCREENS */}
			<div className={"navbar bg-transparent dark:bg-transparent transform transition-all duration-300 ease-linear" + (width > breakpoint ? "" : " hidden")} id="navbar2Id">
				<div className="navbar-logo">
					{isDarkTheme ? 						
						<Link to="/">
							<img src="/src/assets/logo/dark_theme_logo.svg" alt="My Portfolio" />
						</Link>	
						:							
						<Link to="/">
							<img src="/src/assets/logo/light_theme_logo.svg" alt="My Portfolio" />
						</Link>	
					}				
				</div>
				<nav className={width > breakpoint ? "flex gap" : "hidden"}>
					<a className="navbar-link" href="#home">Home</a>
					<div className="relative inline-block" onClick={handleDropdown}>
						<div className="flex flex-row" id="navDropDown">
							<button className="inline-flex justify-center navbar-link shadow-none hover:outline-transparent hover:border-transparent" aria-haspopup="true" aria-expanded="true">About
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mt-1 ml-3 transition-all duration-100 ease-linear" id="caret2">
								<path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
								</svg>
							</button>
						</div>
						<div id="navDropDownContent2" className="absolute left-5 w-50 p-0 bg-white border border-mint-800 rounded-md  transition-all duration-700 ease-in hidden dark:border-orange-500" role="menu" aria-orientation="vertical" aria-labelledby="navDropDown">
							<div className="py-1" role="none">
								<a href="#about_portfolio" className="block rounded-none m-0 px-4 py-1 no-underline text-mint-950 hover:text-white dark:text-orange-500" role="menuitem">
									Portfolio
								</a>
								<a href="#about_developer" className="block rounded-none m-0 px-4 py-1 no-underline text-mint-950 hover:text-white dark:text-orange-500" role="menuitem">
									Developer
								</a>
							</div>
						</div>
					</div>
					<a className="navbar-link" href="#my_works">My Works</a>   
					{sharedCredential ? 
						<>
							<Link className="navbar-link" to="/dashboard">Dashboard</Link> 
                            <button className="navbar-link hover:outline-0 hover:border-transparent" onClick={handleLogout}>Logout</button>
						</>
						: 
						<Link className="navbar-link" to="/login">Login</Link>
					}					
					<div className="flex items-center w-auto mr-5 cursor-pointer " onClick={changeTheme}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 transform transition-all duration-300 ease-in-out hover:scale-75 dark:fill-yellow-400">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
						</svg>
					</div> 					
				</nav>	
			</div>
			{/* END MD tto XL SCREENS */}
			{/* END NAVBAR */}
			{/* CORE */}
			<div className="core">   
				{/* HOME CONTENT */}
				<div className="shadow-xl" id="home">
					<Home />
				</div>
				{/* END HOME CONTENT */} 
				{/* ABOUT CONTENT */}
				<div className="min-h-screen">					     
					{/* ABOUT PORTFOLIO CONTENT */}
					<div className="shadow-xl" id="about_portfolio">
						<AboutPortfolio />
					</div>
					{/* END ABOUT PORTFOLIO CONTENT */}
					{/* ABOUT DEVELOPER CONTENT */}
					<div className="shadow-xl" id="about_developer">
						<AboutDeveloper />
					</div>
					{/* END ABOUT DEVELOPER CONTENT */}
				</div>  
				{/* END ABOUT CONTENT */}
				{/* MY WORK CONTENT */}
				<div className="min-h-screen shadow-xl" id="my_works">
					<MyWorks />
				</div>
				{/* END MY WORK CONTENT */}    
			</div>        
			{/* END CORE */}
			{/* FOOTER */}
			<Footer isRounded={false} from={"Landing Page"} quicklinks={quicklinks} /> 
			{/* END FOOTER */}		 
			{sharedCredential ? "" :
				<div className="fixed py-2 px-4 bottom-5 right-5 rounded-full cursor-pointer text-center transition-all duration-300 animate-bounce bg-mint-800 dark:bg-orange-400">
					<span className="text-white text-sm">Wanna try Dashboard?<Link to="/login">Login now!</Link></span>
				</div>
			} 
		</div>
	);
}

export default LandingPage