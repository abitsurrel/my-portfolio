/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from './DataContext';
import Logo from "./Logo";
// import useResizeWindow from "./ResizeWindow";

function Login() {

    // const location = useLocation();
    const navigate = useNavigate();
    // GET setSharedCredential
    const {setSharedCredential, isDarkTheme, setIsDarkTheme} = useContext(DataContext);
    // const {width} = useResizeWindow();
    // const breakpoint = 768;

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

    // // GET CALLBACK FUNCTION sendCredential TO GET CREDENTIAL
    // const { sendCredential } = location.state;
    const username = "admin";
    const password = "admin";
    
    //  userState TO HIDE ERROR MESSAGE
    const [hideMessage, setHideMessage] = useState(true);

    // userState FOR INPUT USERNAME
    const [inputUsername, setInputUsername] = useState("");

    // UPDATE inputUsername ON EVERY CHANGE
    const handleUsername = (event) => {

        if(!hideMessage) {
            setHideMessage(true);
        }
        // UPDATE inputUsername STATE WITH NEW VALUE
        setInputUsername(event.target.value);
    }

    // userState FOR INPUT PASSWORD
    const [inputPassword, setInputPassword] = useState("");

    // UPDATE inputPassword ON EVERY CHANGE
    const handlePassword = (event) => {

        if(!hideMessage) {
            setHideMessage(true);
        }

        // UPDATE inputPassword STATE WITH NEW VALUE
        setInputPassword(event.target.value);
    }

    // RESET VALUES
    const resetValues = () => {
        setInputUsername("");
        setInputPassword("");
    }
    // VALIDATE USER
    const validateUser = () => {
        // CHECK IF INPUT USERNAME AND PASSWORD MATCH USERNAME AND PASSWORD
        if(inputUsername === username && inputPassword === password) {
            resetValues();
            setHideMessage(true);
            setSharedCredential(true);
            // NAVIGATE BACK TO PREVIOUS ROUTE
            navigate("/my-portfolio", {replace:true});
        }
        else {           
            setHideMessage(false);
            resetValues();
        }
    };
    return (
        <div>
            <div className="absolute w-full min-h-screen">	
                <div className="flex justify-end mx-6 my-3 cursor-pointer md:my-5" onClick={changeTheme}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 transform transition-all duration-300 ease-in-out hover:scale-75 dark:fill-yellow-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                </div>	
                <div className="flex flex-col gap-5 w-5/6 p-8 bg-[rgb(0,0,0,0.05)] rounded-xl md:py-10 md:px-15 md:w-1/2 mx-auto">
                    <div className="flex justify-center items-center w-full">
                        <Link className="w-1/2 m-0 p-0 hover:bg-transparent" to="/my-portfolio">						
                            <Logo />
                        </Link>	
                    </div>                    
                    {hideMessage ? "" : 
                        <div className="message error">
                            <p>
                                No account found!<br />
                                Please try again.
                            </p>
                        </div>
                    }   
                    <div className="flex justify-center items-center">      
                        <div>     
                            <h1 className="title text-center md-2 md:mb-5">Login</h1>
                            
                            <div className="border border-dashed w-full mx-auto my-2 p-4 leading-none rounded-md">           
                                <span className="text-sm">Note:</span>
                                <br />  
                                <div className="ml-5 text-sm">
                                    Username and password are <strong><i>admin</i></strong>.                    
                                </div> 
                            </div> 
                            <label htmlFor="username">Username (<span className="text-red-700">*</span>)</label>
                            <input type="text" className="input-form mb-2" name="username" id="username" value={inputUsername} onChange={handleUsername} />
                            <label htmlFor="password">Password (<span className="text-red-700">*</span>)</label>
                            <input type="password" className="input-form mb-5" name="password" id="password" value={inputPassword} onChange={handlePassword} />
                            <div className="w-full md:mx-auto md:w-1/2">
                                <button type="submit" className="btn-primary w-full mx-0" onClick={validateUser}>Submit</button>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default Login