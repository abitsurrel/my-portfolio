import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../../DataContext";

function HomeIndex() {   

    const { sharedHomeContentData } = useContext(DataContext);

    return (
        <div>
            <h1 className="mb-5 font-serif">Home Content</h1>
            <div className="flex justify-end mb-10">
                <NavLink className="btn-primary py-2 px-4 hover:outline-2 hover:outline-offset-3 hover:outline-orange-500" to={"/dashboard/home/add-information"}>Add Information</NavLink>
                <NavLink className="btn-primary py-2 px-4 hover:outline-2 hover:outline-offset-3 hover:outline-orange-500" to={"/dashboard/home/edit-information"}>Edit Information</NavLink>
            </div>
            <div>
                <h3 className="text-center mb-3">About My Portfolio</h3>                
                <p className="border-2 border-dotted rounded-md p-5">
                    {sharedHomeContentData.aboutPortfolioData}
                </p>
                <h3 className="text-center mb-3">Tools</h3>
                <div>
                    {sharedHomeContentData.tools.map((usedTool) => (
                        <div key={usedTool.id} className="mt-4">
                            {usedTool.tool === "" ? 
                            <p className="border-2 border-dotted rounded-md p-5">
                            </p> 
                            :                            
                            <div className="grid grid-cols-4 p-4 border border-dashed rounded-md">
                                <span className="col-span-1 font-bold italic">{usedTool.tool}</span>
                                <div className="col-span-2 m-0 p-0 italic">
                                    {usedTool.description} 
                                </div>
                            </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default HomeIndex