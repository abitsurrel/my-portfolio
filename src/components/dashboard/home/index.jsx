import { useContext } from "react";
import { HomeContentContext } from "../../../HomeContentContext";
import { NavLink } from "react-router-dom";

function HomeIndex() {   

    const { sharedHomeContentData } = useContext(HomeContentContext);

    return (
        <div>
            <h1 className="mb-5">Home Content</h1>
            <div className="flex justify-end mb-10">
                <NavLink className="btn-primary py-2 px-4" to={"/dashboard/home/add-information"}>Add Information</NavLink>
                <NavLink className="btn-primary py-2 px-4" to={"/dashboard/home/edit-information"}>Edit Information</NavLink>
            </div>
            <div>
                <h2 className="text-center">About My Portfolio</h2>
                <p className="border-2 border-dotted rounded-xl p-5">
                    {sharedHomeContentData.aboutPortfolioData}
                </p>
            </div>
        </div>
    );

}

export default HomeIndex