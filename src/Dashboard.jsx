import { NavLink, Outlet} from "react-router-dom";
import useResizeWindow from './MyResizeWindow';
import Footer from './Footer';

function Dashboard() {   
    
    const { width }     = useResizeWindow();
    const breakpoint    = 768;
    
    return (
        <>          
            <div className="flex flex-col w-full min-h-screen md:grid md:grid-cols-10 lg:grid-cols-9">
                <div className={"dash-nav" + (width > breakpoint ? " hidden" : "")}>
                    <h2 className="navbar-logo ml-5 cursor-pointer">My Portfolio</h2>
                    <nav className="flex gap-1 md:gap-2 mr-5">
                        <NavLink className="nav-link" to={"/dashboard"}>Dashboard</NavLink>
                        <NavLink className="nav-link" to={"/dashboard/home"}>Home</NavLink>
                        <NavLink className="nav-link" to={"/dashboard/about-me"}>About Me</NavLink>
                        <NavLink className="nav-link" to={"/dashboard/my-works"}>My Works</NavLink>  
                    </nav>
                </div>
                <div className={"sidebar" + (width > breakpoint ? "" : " hidden")}>
                    <h2 className="dash-logo cursor-pointer">My Portfolio</h2>
                    <nav className="flex flex-col">
                        <NavLink className="dash-link" to={"/dashboard"} end>Dashboard</NavLink>
                        <NavLink className="dash-link" to={"/dashboard/home"}>Home</NavLink>
                        <NavLink className="dash-link" to={"/dashboard/about-me"}>About Me</NavLink>
                        <NavLink className="dash-link" to={"/dashboard/my-works"}>My Works</NavLink>
                    </nav>
                </div>
                <div className="flex flex-col gap-2 min-h-screen mt-24 mx-5 mb-5 md:mt-0 md:mb-0 md:mx-0 md:col-start-4 md:col-span-7 lg:col-start-3 lg:col-span-7 lg:mr-10 md:py-4 md:mr-5">
                    <div className="core bg-slate-950 rounded-xl p-10">    
                        <Outlet />
                    </div>
                    {/* FOOTER */}
                    <div className="rounded-xl">
                        <Footer isRounded={true}/>        
                    </div>        
                    {/* END FOOTER */}
                </div>
            </div>
            
        </>
    );

}

export default Dashboard