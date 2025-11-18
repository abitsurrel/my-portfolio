
import { Link } from 'react-router';
// import { useState } from 'react';
import Home from './home';
import { useContext } from 'react';
import { DataContext } from './../../DataContext';
import Footer from './../../Footer';

function LandingPage() {
    
  const name = "Dianne";

  // GET CALLBACK FUNCTION sendCredential TO GET CREDENTIAL
  const { sharedCredential } = useContext(DataContext); 
  
  return (
    <>   
      <div className='flex flex-col min-h-screen'> 
        {/* NAVBAR */}
        <div className="navbar">
            <h2 className="navbar-logo ml-5 cursor-pointer">My Portfolio</h2>
            <nav className="flex gap-1 md:gap-2 mr-5">
              <a className="navbar-link" href="#">Home</a>
              <a className="navbar-link" href="#">About Me</a>
              <a className="navbar-link" href="#">My Works</a>   
              {sharedCredential ? <Link className="navbar-link" to="/dashboard">Dashboard</Link> : <Link className="navbar-link" to="/login">Login</Link>}  
            </nav>
        </div>
        {/* END NAVBAR */}
        {/* CORE */}
        <div className="core">   
            {/* HOME CONTENT */}
            <div id="home">
              <Home name={name}/>
            </div>
            {/* END HOME CONTENT */}
        </div>        
        {/* END CORE */}
        {/* FOOTER */}
        <Footer isRounded={false}/> 
        {/* END FOOTER */}
      </div>
    </>
  );
}

export default LandingPage