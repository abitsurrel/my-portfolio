import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Login from './Login';
import LandingPage from './components/landingPage/index';
import { useState } from 'react';
import { DataContext } from './DataContext';
import MyWorks from './components/dashboard/myWorks/index';
import Dashboard from './Dashboard';
import DashboardIndexContent from './components/dashboard';
import Home from './components/dashboard/Home';
import HomeIndex from './components/dashboard/home/index';
import AddHomeContent from './components/dashboard/home/add';
import EditHomeContent from './components/dashboard/home/edit';
import AboutMe from './components/dashboard/AboutMe';
import AboutMeIndex from './components/dashboard/aboutMe/index';
import AddAboutMeContent from './components/dashboard/aboutMe/add';
import EditAboutMeContent from './components/dashboard/aboutMe/edit';

// function isAuthenticated({sharedCredential}) {
//   if(!sharedCredential) {
//     return  <Navigate to="/login" replace />;
//   }
//   return <Dashboard />;
// }

function App() {

  const [sharedCredential, setSharedCredential] = useState(false);
  
    const initialAboutPortfolio = "My Portfolio showcases the different projects made by the developer using different web development tools.";
        
    const [sharedHomeContentData, setSharedHomeContentData] = useState({

        aboutPortfolioData:initialAboutPortfolio,
        tools:
        [
            {
                id: 0,
                tool: "React",
                description: "React is Javascript Library made Facebook for building User Interfaces(UIs). This library allows developers to create a dynamic web pages by breaking the UI down into smaller, reusable components. It is composed of components, a Javascript function that return a JSX in lieu of boolean, strings, and numbers. Each component is a self-contained piece of UI like a  button, form, or an entire page. My Portfolio used React as the main development tool to create a more interactive web pages." 
            },
            {
                id: 1,
                tool: "Tailwind CSS",
                description: "Tailwindcss is a utility-first CSS framework that can be used to build any web design, directly in the markup. It offers a more compact, flexible, and rapid development of web pages without the need to write custom CSS from scratch. My Portfolio used Tailwind CSS utilized the  creative freedom offered by the framework to design the web pages."
            }
        ]
    });
  return (
    <DataContext.Provider value={{sharedCredential, setSharedCredential, sharedHomeContentData, setSharedHomeContentData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          {/* <Route path="/dashboard" element={
              <isAuthenticated sharedCredential={sharedCredential}></isAuthenticated>
            }
          /> */}
            <Route path="dashboard" element={<Dashboard />} >
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
              <Route path="my-works" element={<MyWorks />} />
            </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );

}

export default App
