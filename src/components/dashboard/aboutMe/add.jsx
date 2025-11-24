function AddAboutMeContent() {

    return (
        <div>
            <h1 className="text-center">Add About Me Content</h1>
            <div className="flex justify-center w-full mt-5">
                <form className="w-full md:w-2/3">
                    <label>First Name</label>
                    <input type="text" className="input-form" name="first_name" id="first_name" required />
                    <label>Last Name</label>
                    <input type="text" className="input-form" name="last_name" id="last_name" required />
                    <label>Email</label>
                    <input type="email" className="input-form" name="email" id="email" required />
                    <div className="w-full">
                        <label htmlFor="mobile_number">Mobile Number</label>                    
                        <div className="input-group-left">
                            <span className="input-group-text">09</span>
                            <input type="text" className="input-form" name="mobile_number" id="mobile_number"  pattern="{0-9}[11]" placeholder="09***********" />
                        </div>
                    </div>
                    <label>Gender</label>
                    <div className="flex gap-10">
                        <div className="form-radio">
                            <input type="radio" className="form-radio-input" name="gender" id="female" />  
                            <label className="form-radio-label" htmlFor="female">Female</label>
                        </div>
                        <div className="form-radio">
                            <input type="radio" className="form-radio-input" name="gender" id="male" />  
                            <label className="form-radio-label" htmlFor="male">Male</label>
                        </div>
                    </div>  
                </form>
            </div>
        </div>
    );
}

export default AddAboutMeContent