import React, {useState} from "react";

const Form = props => {

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");


    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1){
            setFirstNameError("First Name is required!");
        }
        else if(e.target.value.length < 2){
            setFirstNameError("First Name must be 2 or more characters!");
        }
        else {
            setFirstNameError(<p>&nbsp;</p>)
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1){
            setLastNameError("Last Name is required!");
        }
        else if(e.target.value.length < 2){
            setLastNameError("Last Name must be 2 or more characters!");
        }
        else {
            setLastNameError(<p>&nbsp;</p>)
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Email is required!");
        }
        else if(e.target.value.length < 2){
            setEmailError("Email must be 2 or more characters!");
        }
        else {
            setEmailError(<p>&nbsp;</p>)
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Password is required!");
        }
        else if(e.target.value.length < 8){
            setPasswordError("Password must be 8 or more characters!");
        }
        else {
            setPasswordError(<p>&nbsp;</p>)
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1){
            setConfirmPasswordError("Confirm Password is required!");
        }
        else if(e.target.value !== password ){
            setConfirmPasswordError("Password must match!");
        }
        else {
            setConfirmPasswordError(<p>&nbsp;</p>)
        }
    }



    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ handleFirstName } />
                    {
                        firstNameError ?
                        <p style = {{color: 'red'}}>{ firstNameError}</p> :
                        ""
                    }

                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ handleLastName } />
                    {
                        lastNameError ?
                        <p style = {{color: 'red'}}>{ lastNameError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ handleEmail } />
                    {
                        emailError ?
                        <p style = {{color: 'red'}}>{ emailError }</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p style = {{color: 'red'}}>{ passwordError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ handleConfirmPassword } />
                    {
                        confirmPasswordError ?
                        <p style = {{color: 'red'}}>{ confirmPasswordError}</p> :
                        ""
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>

            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email Address: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>

    );
};

export default Form;