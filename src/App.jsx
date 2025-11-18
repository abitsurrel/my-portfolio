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
  return (
    <DataContext.Provider value={{sharedCredential, setSharedCredential}}>
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
