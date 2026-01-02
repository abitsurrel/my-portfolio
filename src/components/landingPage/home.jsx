/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { useContext } from "react";
import { DataContext } from "../../DataContext";
// import useResizeWindow from "../../ResizeWindow";
import BackgroundImg from "../../BackgroundImg";
import hand_waving from "../../assets/images/hand-waving.gif";
import sprite from "../../assets/images/sprite.jpeg";

function Home() {
    
    const {isDarkTheme, sharedAboutMeContentData} = useContext(DataContext);
    // const {width} = useResizeWindow();
    // const breakpoint = 768;

    return (
        <div>
            <div className="intro w-full h-full">
                <div className="flex flex-col gap-9 md:gap-3 w-full h-full">
                    <div className="grid mt-15 gap-10 md:grid-cols-5 md:mt-50">
                        <div className="md:col-span-2 md:col-start-1 md:ml-20">
                            <p className="text-center md:text-left mb-5 md:mb-10">
                                Hi <span><img src={hand_waving} className="w-8 inline lg:w-10"/></span><br/>
                                I'm <i className="text-orange-400 font-serif text-bold text-shadow-md text-shadow-mint-800 dark:text-shadow-black">{sharedAboutMeContentData.nickname}</i> :) <br/>
                                Welcome  to my <br/>
                                <i className="text-orange-400 font-serif text-bold text-shadow-md text-shadow-mint-800 dark:text-shadow-black">Personal Portfolio</i>
                            </p>                        
                            <div className="flex justify-center items-center md:justify-start md:items-baseline">
                                <a className={"py-2 px-3 text-sm md:text-lg rounded-md" + (isDarkTheme ? " btn-primary" : " btn-info")} href="#my_works">See my works</a>
                            </div>
                        </div>
                        <div className="md:col-span-2 md:col-start-4 md:ml-10 md:mr-10">                            
                            <div className="flex justify-center items-center mb-5 md:10">
                                <img src={sprite} className="rounded-full w-45 border-2 border-mint-800 md:border-3 md:w-auto lg:w-auto dark:border-transparent" />
                            </div>                            
                            <span className="flex justify-center items-center text-sm">This portfolio is hosted in<a className="highlight hover:bg-mint-500 hover:text-white dark:hover:bg-orange-500 px-2" href="https://docs.github.com/en/pages" target="_blank">Github Pages</a></span>     
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundImg />
            {/* {width < breakpoint ? <div className="bg-home-sm"></div> : <div className="bg-home"></div>}             */}
        </div>        
    );
}

export default Home