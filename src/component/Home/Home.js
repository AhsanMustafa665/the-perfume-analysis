import React from 'react';
import './Home.css';
import perfume from '../Assests/image/brand-1.jpg';
import usePerfumes from '../../hooks/usePerfumes';
import Perfume from '../Perfume/Perfume';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [perfumes, setPerfumes] = usePerfumes();
    const navigate = useNavigate();
    return (
        <>
        <div className='full-details'>
            <div className='bio-details'>
                <h1>Your choice is marvellous </h1>
                <h1>Effective so gorgeus</h1>
                <h3>There's a 99 percent chance you owned at least one body mist as a pre-teen. But as we grew up, so did our fragrance profiles, and many of us moved on from spritzes to more sophisticated bottles of luxury perfumes. </h3>
                <button className='live-btn'>Live Demo</button>
            </div>
            <div className='picture-details'>
               <img src={perfume} alt='/' />
            </div>
            </div>
            <h1>Customer's Reviews (3)</h1>
            <div className='perfume-container'>
                {
                    perfumes.slice(0,3).map(perfume=><Perfume key={perfume.id} perfume={perfume}></Perfume>)
               }
            </div>
           
            <br />
            <br />
            <br />
            <button onClick={()=>navigate("/reviews")} className='btn-style'>See all reviews</button>
            </>
    );
};

export default Home;