import React from 'react'
import './Home.css'
const Home = () =>{
    return(
        <section className='home'>
            <div className='secContainer container'>
                <div className='homeText'>
                    <h1 className='title'>Enjoy Your Dream Vacation</h1>
                    <p className='subTitle'>Travetto the any corner of the world, without going around in circles</p>

                    <button className='btn'>
                        <a href='/'>Explore Now</a>
                    </button>
                </div>

                <div className='homeCard gred'> 

                    <div className='locationDiv'>
                        <label htmlFor='location'>Location</label>
                        <input type='text' placeholder='Dream Destination'></input>
                    </div>

                    <div className='distDiv'>
                        <label htmlFor='distance'>Location</label>
                        <input type='text' placeholder='11/Metres'></input>
                    </div>

                    <div className='priceDiv'>
                        <label htmlFor='price'>Location</label>
                        <input type='text' placeholder='$140- $500'></input>
                    </div>

                    <button className='btn'>
                        Search
                    </button>

                </div>
            </div>
        </section>
    )
}
export default Home