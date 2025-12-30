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
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "./DataContext";

function Footer({isRounded, from, quicklinks}) {

    const {sharedAboutMeContentData} = useContext(DataContext);
    return (
        <div className= {isRounded ? "footer rounded-xl border-2 dark:bg-mint-900" : "footer"}>
            <div className="flex flex-col w-full h-full"> 
                <div className="footer-content">
                    <div className="m-2">
                        <h6 className="mt-5">Developer Information</h6>
                        <p className="px-2">Name: <span className="highlight break-word">{sharedAboutMeContentData.name}</span></p>
                        <p className="px-2">Email: <span className="highlight break-all">{sharedAboutMeContentData.email}</span></p>
                        {sharedAboutMeContentData.sites.map((data, index) => (
                            
                            <p key={index} className="px-2">{data.sitename}:<a className="px-2 highlight  hover:bg-mint-300 break-all" target="_blank" href={data.link}>{data.link}</a></p>
                        ))}
                    </div>
                    <div className="col-start-3 m-2">
                        <h6 className="mt-5">Quicklinks</h6>
                        <div className="flex flex-col gap-2 mt-2">
                            {from === "Landing Page" ? 
                                quicklinks.map((data, index) => (
                                <div key={index}>
                                    {data.name === "Dashboard" ? <Link className="px-2" to={data.href}>{data.name}</Link>
                                    : 
                                    <a href={data.href} className="px-2">{data.name}</a>                                
                                    }
                                </div>
                                ))
                                : 
                                quicklinks.map((data, index) => (
                                    <div key={index}>
                                        {data.name === "Landing Page" ? <Link className="px-2" to={data.href}>{data.name}</Link>
                                        : 
                                        <NavLink className="px-2" to={data.href}>{data.name}</NavLink>                                 
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-5 md:mt-10">
                    <p>Copyright &copy; 2025 Dianne Russel Ocampo</p>
                </div>
            </div>           
        </div>
    );
}

export default Footer