import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEamil] = useState('')
    const [Password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate();

    const handleEmailBlur = e =>{
        setEamil(e.target.value);
    }
    const handlePasswordBlur = e =>{
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = e =>{
        setConfirmPassword(e.target.value);
    }
    if(user){
        navigate('/shop')
    }
    const handlecreateUser = e =>{
        e.preventDefault();
        if(Password !== confirmPassword){
            setError('password did not match!')
            return;
        }
        if(Password.length <6){
            setError('Password should be 6 characters or longer')
            return;
        }

        createUserWithEmailAndPassword(email, Password)
    }

    return (
            <div className='form-container'>
            <div>
            <h2 className='form-title'>SignUp</h2>
            <form onSubmit={handlecreateUser} action="">
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
            </div>
            <div className="input-group">
                <label htmlFor="Password">Password</label>
                <input onBlur={handlePasswordBlur} type="Password" name="Password" id="" required />
            </div>
            <div className="input-group">
                <label htmlFor="confirm-Password">Confirm Password</label>
                <input onBlur={handleConfirmPasswordBlur} type="Password" name="confirm-Password" id=""  required/>
            </div>
            <p className='error'>{error}</p>
            <input className='form-submit' type="submit" value="SignUp" />
            </form>
            <p className='submit-title'>Already have an account? <Link className='form-link' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;