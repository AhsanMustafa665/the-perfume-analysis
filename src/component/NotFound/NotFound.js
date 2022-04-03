import React from 'react';
import Oops from '../Assests/image/Oops-404.jpg';

const NotFound = () => {
    return (
        <div>
            <h1>NotFound</h1>
            <img src={Oops} alt='/'/>
        </div>
    );
};

export default NotFound;