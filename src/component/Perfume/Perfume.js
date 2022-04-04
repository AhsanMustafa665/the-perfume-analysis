import React from 'react';
import './Perfume.css';

const Perfume = (props) => {
    const { name, ratingDetails,rating, img}=props.perfume;
    return (

        <div className='ratings-detail'>
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Comments: {ratingDetails}</p>
            <p>Ratings: {rating}</p>
            
        </div>
    );
};

export default Perfume;