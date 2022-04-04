import React from 'react';
import usePerfumes from '../../hooks/usePerfumes';
import Perfume from '../Perfume/Perfume';

const Reviews = () => {
    const [perfumes] = usePerfumes();
    // console.log();
    return (
        <div className='perfume-container'>
                {
                    perfumes?.map(perfume=><Perfume key={perfume.id} perfume={perfume}></Perfume>)
               }
            </div>
    );
};

export default Reviews;