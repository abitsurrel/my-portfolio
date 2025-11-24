import { useState } from "react";
import { Outlet } from "react-router-dom";
import { HomeContentContext } from "../../HomeContentContext";

function Home() {

    const initialAboutPortfolio = "";
    
    const [sharedHomeContentData, setSharedHomeContentData] = useState({

        aboutPortfolioData:initialAboutPortfolio,
        // tools: [
        // {
        //     tool: "React",
        //     description: "React is Javascript Library made Facebook for building User Interfaces(UIs). This library allows developers to create a dynamic web pages by breaking the UI down into smaller, reusable components. It is composed of components, a Javascript function that return a JSX in lieu of boolean, strings, and numbers. Each component is a self-contained piece of UI like a  button, form, or an entire page. My Portfolio used React as the main development tool to create a more interactive web pages." 
        // },
        // {
        //     tool: "Tailwind CSS",
        //     description: "Tailwindcss is a utility-first CSS framework that can be usedto build any web design, directly in the markup. It offers a more compact, flexible, and rapid development of web pages without the need to write custom CSS from scratch. My Portfolio used Tailwind CSS utilized the  creative freedom offered by the framework to design the web pages."
        // }
    // ]
    });

    return (
        <HomeContentContext.Provider value={{ sharedHomeContentData, setSharedHomeContentData }}>
            <Outlet />
        </HomeContentContext.Provider>
    );
}

export default Home