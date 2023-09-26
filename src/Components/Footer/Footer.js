import React from 'react'
import './Footer.css'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () =>{
    return(
        <div className='footer'>
            <div className='secContainer container gred'>
                <div className='logoDiv'>
                    <div className='footerLogo'>
                        <a href='/'className='logo flex'><h1 className='flex icon'>Tourito</h1></a>
                    </div>
                    <div className='socials flex'>
                    <ImFacebook className='icon'/>
                    <BsTwitter className='icon'/>
                    <AiFillInstagram className='icon'/>
                </div>
                </div>
                <div className='footerLinks'>
                    <span className='linkTitle'>
                        Links
                    </span>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Blog</a>
                    </li>
                    <li>
                        <a href='/'>Enjoy</a>
                    </li>
                </div>

                <div className='footerLinks'>
                    <span className='linkTitle'>
                        Links
                    </span>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Blog</a>
                    </li>
                    <li>
                        <a href='/'>Enjoy</a>
                    </li>
                </div>

                <div className='footerLinks'>
                    <span className='linkTitle'>
                        Contact Us
                    </span>
                    <a href='/' className='phone'>+444 222 176</a>
                    <a href='/' className='email'>Tourito@gmail.com</a>
                </div>
            </div>
        </div>
    )
}
export default Footer