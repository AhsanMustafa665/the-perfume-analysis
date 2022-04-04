import React from 'react';
import Oops from '../Assests/image/Oops-404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notfound-container'>
            <div class='w-25 details'>
                <h3>This is not the<br />  web page you<br />  are looking for.</h3>
            </div>
            <div>
            <img src={Oops} alt='/' />
            </div>
            
        </div>
    );
};

export default NotFound;