function SelectTools({ toolSelectedInput, toolsDescriptionInput, handleToolSelectedInput, handleToolsDescriptionInput, onClickHandler}) {

    return (            
        <div>                                            
            <label htmlFor="tools">Tool</label>
            <select className="input-form max-h-10 overflow-y-2" name="tools" id="tools" onChange={handleToolSelectedInput} value={toolSelectedInput}>
                <option value="">Select Tools</option>
                <option value="C++">C++</option>
                <option value="Java">Java</option>
                <option value="PHP">PHP</option>
                <option value="React JS">React JS</option>
                <option value="Tailwind CSS">Tailwind CSS</option>
                <option value="Bootstrap CSS">Bootstrap CSS</option>
                <option value="Javascript">Javascript</option>
            </select>                    
            <label htmlFor="description">Description</label>
            <textarea className="input-form" name="description" id="description" rows={5} value={toolsDescriptionInput} onChange={handleToolsDescriptionInput}> 
            </textarea>
            <button className="btn-info mx-0 float-right" onClick={onClickHandler}>Update</button>
        </div>
    );
}

export default SelectTools