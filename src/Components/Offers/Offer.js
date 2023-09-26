import React from 'react'
import './Offer.css'
import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'
import blog1 from '../../Assets/blog1.jpg'
import blog2 from '../../Assets/blog2.jpg'
import blog3 from '../../Assets/blog3.jpg'

const Offers = [
    {
        id: 1,
        imageSrc: blog1,
        destTitle: 'Machu Pichu',
        location: 'Ispanga',
        price: '$100'
    },
    {
        id: 1,
        imageSrc: blog2,
        destTitle: 'Italy',
        location: 'Italy',
        price: '$400'
    },
    {
        id: 1,
        imageSrc: blog3,
        destTitle: 'Machu Pichu',
        location: 'Germany',
        price: '$500'
    }


]


const Offer = () =>{
    return(
        <section className='offer container section'>
            <div className='secContainer'>
                <div className='secIntro'>
                <h2 className='secTitle'>
                    Special Offers
                </h2>
                <p>Travetto the any corner of the world, without going around in circles Travetto the any corner 
                    of the world, without going around in circles</p>
                </div>
                <div className='mainContent gred'>
                {
                    Offers.map(({id,imageSrc,destTitle,location,price})=>{
                        return(
                        <div className='singleOffer'>
                        <div className='destImage'>
                        <img src={imageSrc} alt={destTitle}/>
                        <span className='discount'>
                            30% 0ff
                        </span>
                        </div>
                        <div className='offerBody'>
                            <div className='price flex'>
                            <h4>{price}</h4>
                            <span className='status'>For Rent</span>
                            </div>
                        <div className='amenitites flex'>
                            <div className='singleAmenity flex'>
                                <MdKingBed className="icon"/>
                                <small>2 Beds</small>
                            </div>
                            <div className='singleAmenity flex'>
                                <MdBathtub className="icon"/>
                                <small>2 Beds</small>
                            </div>
                            <div className='singleAmenity flex'>
                                <FaWifi className="icon"/>
                                <small>2 Beds</small>
                            </div>
                                <div className='singleAmenity flex'>
                                <MdAirportShuttle className="icon"/>
                                <small>2 Beds</small>
                                </div>
                            </div>
                            <div className='location flex'>
                            <MdLocationOn className="icon"/>
                            <small>23 Rue 234 {location}</small>
                            </div>
                            <button className='btn flex'>Read More
                            <BsArrowRightShort className="icon"/>
                            </button>
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
export default Offer