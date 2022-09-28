import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth)

    const [name, setName] = useState('');
    const [email, setEamil] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    // const navigate = useNavigate();

    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handleAddressBlur = e =>{
        setAddress(e.target.value);
    }
    const handlePhoneNumber = e =>{
        setPhone(e.target.value);
    }
    const handlecreateUser = e =>{
        e.preventDefault();
        const shipping = {name, email, address, phone}
        console.log(shipping)
    }

    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Shipping Information</h2>
        <form onSubmit={handlecreateUser} action="">
        <div className="input-group">
            <label htmlFor="Name">Your Name</label>
            <input onBlur={handleNameBlur} type="text" name="name" id="" required />
        </div>
        <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input value={user?.email} readOnly type="email" name="email" id="" required />
        </div>
        <div className="input-group">
            <label htmlFor="Address">Address</label>
            <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
        </div>
        <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input onBlur={handlePhoneNumber} type="number" name="number" id=""  required/>
        </div>
        <p className='error'>{error}</p>
        <input className='form-submit' type="submit" value="Add shipping" />
        </form>
       
        </div>
    </div>
    );
};

export default Shipment;