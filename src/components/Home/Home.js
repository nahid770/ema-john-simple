import React from 'react';
import img from '../../images/hero-img.png'
import Shop from '../Shop/Shop';
import './Home.css'

const Home = () => {
    return (
        <div >
           <div className='hero-container'>
           <div className='text-container'>
                <small className='hero-text'>Sale up to 70% off</small>
                <h1 className='hero-title'>New Collection For Fall</h1>
                <p className='hero-info'>Discover all the new arrivals of ready-to-wear collection.</p>
                <button className='hero-btn'>SHOP NOW</button>
            </div>
            <div className='image-container'>
            
                <img src={img} alt="" />
                
            </div>
            
           </div>
           <h1 className='hero-second-title'><span className='cross-title'>Best Selling</span> Products</h1>
            <Shop></Shop>
        </div>
    );
};

export default Home;