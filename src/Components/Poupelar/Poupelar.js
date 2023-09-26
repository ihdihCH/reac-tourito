import React from 'react'
import './Poupelar.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import city1 from '../../Assets/city4.jpg'
import city2 from '../../Assets/city2.jpg'
import city3 from '../../Assets/city3.jpg'
import city4 from '../../Assets/city4.jpg'

const Data = [
    {
        id: 1,
        imageSrc: city1,
        destTitle: 'Machu Pichu',
        location: 'Peru',
    },
    {
        id: 2,
        imageSrc: city2,
        destTitle: 'Tower Evill',
        location: 'Paris',
    },
    {
        id: 3,
        imageSrc: city3,
        destTitle: 'Big Bin',
        location: 'london',
    },
    {
        id: 4,
        imageSrc: city4,
        destTitle:  'Roma',
        location: 'Italy',
    }
]

const Poupelar = () =>{
    return(
        <section className='poupelar section container'>
            <div className='secContainer'>
                <div className='secHeader flex'>
                    <div className='textDiv'>
                        <h2 className='secTitle'>Poupelar Destination</h2>
                        <p>Travetto the any corner of the world, without going around in circles
                             Travetto 
                        </p>
                    </div>
                    <div className='iconsDiv flex'>
                    <BsArrowLeftShort className='icon leftIcon'/>
                    <BsArrowRightShort className='icon'/>
                    </div>
                </div>

                <div className='mainContent gred'>
                    {
                        Data.map(({id,imageSrc,destTitle,location})=>{
                            return(
                     <div className='singleDestination'>
                       <div className='destImage'>
                          <img src={imageSrc} alt='Imag title' />
                           <div className='overlayInfo'>
                                <h3>{destTitle}</h3>
                                <p>{location}</p>
                                <BsArrowRightShort className='icon'/>
                            </div>
                       </div>
                        <div className='destFooter'>
                            <div className='number'>
                                0{id}
                            </div>
                            <div className='destText flex'>
                                <h6>{location}</h6>
                                <span className='flex'>
                                    <span className='dot'>
                                        <BsDot className='icon'/>
                                    </span>
                                    Dot
                                </span>
                            </div>
                        </div>
                    </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default Poupelar