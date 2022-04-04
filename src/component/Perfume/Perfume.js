import React from 'react';
import './Perfume.css';

const Perfume = (props) => {
    const { name, ratingDetails,rating, img}=props.perfume;
    return (

        <div className='ratings-detail'>
            <img src={img} alt="" />
            <div style={{textAlign:'left',paddingLeft:'4px' ,paddingTop:'20px'}}>
            <h6>Name: {name}</h6>
            <p><small> Comments: {ratingDetails}</small></p>
            <p><small> Ratings: {rating}</small></p>
            </div>
          
            
        </div>
    );
};

export default Perfume;