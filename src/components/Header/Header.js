import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)

    const hadleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <nav className='logo'> 
            <img src={logo} alt="" />
            <div className='menu'>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
             {  
             user? 
             <button onClick={hadleSignOut}>Sign Out</button>
             :<Link to="/login">Login</Link>}
               
            </div>
            </nav>
        </div>
    );
};

export default Header;