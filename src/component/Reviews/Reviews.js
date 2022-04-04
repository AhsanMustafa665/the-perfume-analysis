import React from 'react';
import usePerfumes from '../../hooks/usePerfumes';
import Perfume from '../Perfume/Perfume';

const Reviews = () => {
    const [perfumes] = usePerfumes();
    // console.log(perfumes);
    return (
        <div class='container'>
           
            <h2 style={{fontFamily:'cursive',color:'blue',marginTop:'20px'}}>Our clients says...</h2>
        <div className='perfume-container'>
            
                {
                    perfumes?.map(perfume=><Perfume key={perfume.id} perfume={perfume}></Perfume>)
               }
            </div>
            </div>
    );
};

export default Reviews;