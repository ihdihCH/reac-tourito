import React from 'react'
import './About.css'
import icon1 from '../../Assets/icon-1.webp'
import icon2 from '../../Assets/icon2.webp'
import icon3 from '../../Assets/icon-3.webp'
const About = () =>{
    return(
        <section className='about section'>
            <div className='secContainer'>
                <h2 className='title'>
                    Why Hiking?
                </h2>
                <div className='mainContent gred '>
                    <div className='singleItem'>
                        <img src={icon1} alt='Img Name'/>
                        <h3> 50 + Montaine</h3>
                        <p>Travetto the any corner of the world, without going around in circles Travetto the any corner 
                    of the world, without going around in circle</p>
                    </div>

                    <div className='singleItem'>
                        <img src={icon2} alt='Img Name'/>
                        <h3> 50 + Montaine</h3>
                        <p>Travetto the any corner of the world, without going around in circles Travetto the any corner 
                    of the world, without going around in circle</p>
                    </div>

                    <div className='singleItem'>
                        <img src={icon3} alt='Img Name'/>
                        <h3> 50 + Montaine</h3>
                        <p>Travetto the any corner of the world, without going around in circles Travetto the any corner 
                    of the world, without going around in circle</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default About