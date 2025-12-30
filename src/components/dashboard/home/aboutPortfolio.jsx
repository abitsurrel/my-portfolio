/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

function AboutPortfolio({aboutPortfolio, setAboutPortfolio }) {

    // HANDLE ABOUT PORTFOLIO INPUT
    const handleAboutPortfolio = (event) => {
        // UPDATE CURRENT ABOUT PORTFOLIO VALUE
        setAboutPortfolio(event.target.value)

    };
    return (
        <div>
            <h3 className="title text-center mb-3">About My Portfolio</h3>      
            <textarea className="input-form mb-5 resize-none info-border" name="about_portfolio" id="about_portfolio" onChange={handleAboutPortfolio} rows={8} value={aboutPortfolio} placeholder="Add information..." />
        </div>
    );
}
export default AboutPortfolio