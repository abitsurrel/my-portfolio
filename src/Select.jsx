/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

function  Select({selectVal, selectOptions, handleButton}) {

    return (
        <select className="input-form overflow-y-auto" name="tools" id="tools" onChange={handleButton} value={selectVal}>
            {selectOptions.map((data, index) => (
                <option key={index} value={data.val}>{data.option}</option>
            ))}
        </select> 
    );
}

export default Select