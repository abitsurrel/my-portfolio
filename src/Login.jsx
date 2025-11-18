import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from './DataContext';

function Login() {

    // const location = useLocation();
    const navigate = useNavigate();
    // GET setSharedCredential
    const { setSharedCredential } = useContext(DataContext);

    // // GET CALLBACK FUNCTION sendCredential TO GET CREDENTIAL
    // const { sendCredential } = location.state;
    const username = "admin";
    const password = "admin";

    /**
     * CHECK IF PASSWORDS ARE THE SAME [FOR CREATE ACCOUNT]
     *      <input type="text" id="password" className={isCorrectPassword ? "" : "error"}  onKeyUp=     {handlePassword} />
     */ 
    // const [isCorrectPassword, setCorrectPasssword] = useState(false);
    // const InitialPassword = "";
    // const [inputPassword, setInputPassword] = useState(InitialPassword)
    // const handlePassword = (event) => {   
    //     // UPDATE THE STATE WITH NEW VALUE
    //     setInputPassword(event.target.value);   
    //     if(inputPassword === password) {
    //         setCorrectPasssword(true);
    //     }
    // }
    
    // DECLARE AND INITIALIZE INITIAL USERNAME
    const initialUsername = "";

    // userState FOR INPUT USERNAME
    const [inputUsername, setInputUsername] = useState(initialUsername);

    // UPDATE inputUsername ON EVERY CHANGE
    const handleUsername = (event) => {

        // UPDATE inputUsername STATE WITH NEW VALUE
        setInputUsername(event.target.value);
    }

    // DECLARE AND INITIALIZE INITIAL PASSWORD
    const initialPassword = "";

    // userState FOR INPUT PASSWORD
    const [inputPassword, setInputPassword] = useState(initialPassword);

    // UPDATE inputPassword ON EVERY CHANGE
    const handlePassword = (event) => {

        // UPDATE inputPassword STATE WITH NEW VALUE
        setInputPassword(event.target.value);
    }
    //  userState TO HIDE ERROR MESSAGE
    const [hideMessage, setHideMessage] = useState(true);

    // RESET VALUES
    function resetValues() {
        setInputUsername(initialUsername);
        setInputPassword(initialPassword);
    }
    // VALIDATE USER
    function validateUser() {
        // CHECK IF INPUT USERNAME AND PASSWORD MATCH USERNAME AND PASSWORD
        if(inputUsername === username && inputPassword === password) {
            resetValues();
            setHideMessage(true);
            setSharedCredential(true);
            // NAVIGATE BACK TO PREVIOUS ROUTE
            navigate(-1);
        }
        else {           
            setHideMessage(false);
            resetValues();
        }
    }    
    return (
        <div className="grid grid-flow-row mx-5 mt-10 p-5 md:gap-10 md:grid-cols-2 md:h-[500px] md:mx-15 lg:mx-20 ">
            <div className="login-logo flex justify-center items-center">
                <h1 className="">My Portfolio</h1> 
            </div>
            <div className="login-container">
                {hideMessage ? <p></p> : 
                <div className="message error">
                    <p>
                        No account found!<br />
                        Please try again.
                    </p>
                </div>
                }                
                <h1 className="text-center">Login</h1>
                <label className="label">Username</label>
                <input type="text" id="username" value={inputUsername} onChange={handleUsername} />
                <label className="label" >Password</label>
                <input type="text" id="password" value={inputPassword} onChange={handlePassword} />
                <button type="submit" className="btn-primary w-full mx-auto" onClick={validateUser}>Submit</button>
            </div>
        </div>
    );    
}

export default Login