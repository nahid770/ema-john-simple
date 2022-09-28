import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { BallTriangle } from 'react-loader-spinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEamil] = useState('')
    const [Password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate =useNavigate();
      const location = useLocation();
      const from = location?.state?.form?.pathname || '/';

    const handleEmailBlur = e =>{
        setEamil(e.target.value);
    }
    const handlePasswordBlur = e =>{
        setPassword(e.target.value);
    }
    if(user){
        navigate(from, {replace:true});
    }

    const handleUserSignIn = e =>{
        e.preventDefault()
        signInWithEmailAndPassword(email, Password)
    }
    return (
        <div className='form-container'>
            <div>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleUserSignIn} action="">
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
            </div>
            <div className="input-group">
                <label htmlFor="Password">Password</label>
                <input onBlur={handlePasswordBlur} type="Password" name="Password" id="" required/>
            </div>
            <p className='error'> {error?.message}</p>
            {
                loading && <p > <BallTriangle 
                height={50}
                width={50}
                radius={5}
                color="#FF9900"
              
                ></BallTriangle> </p>
            }
            <input className='form-submit' type="submit" value="Login" />
            </form>
            <p className='submit-title'>New to ema john? <Link className='form-link' to="/signup">SignUp</Link></p>
            </div>
        </div>
    );
};

export default Login;