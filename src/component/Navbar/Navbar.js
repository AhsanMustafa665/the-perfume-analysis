import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className='logo-container'>
            <div className='link-container'>
                <Link className='link' to='/home'>HOME</Link>
                <Link className='link' to='/reviews'>REVIEWS</Link>
                <Link className='link' to='/dashboard'>DASHBOARD</Link>
                <Link className='link' to='/blogs'>BLOGS</Link>
                <Link className='link'  to='/about'>ABOUT</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;