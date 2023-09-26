import React from 'react'
import './Blog.css'
import {BsArrowRightShort} from 'react-icons/bs'
import bg1 from '../../Assets/bg1.jpg'
import bg2 from '../../Assets/bg2.jpg'
import bg3 from '../../Assets/bg3.jpg'
import bg4 from '../../Assets/bg4.jpg'


const Posts =[
    {
        id: 1,
        postImage: bg1,
        title: 'Beautifull , let us travell',
        desc: 'Travetto the any corner of the world, without going around in circles Travetto the any corner of the world, without going ',
    },
    {
        id: 2,
        postImage: bg2,
        title: 'Beautifull , let us travell',
        desc: 'Travetto the any corner of the world, without going around in circles Travetto the any corner of the world, without going ',
    },
    {
        id: 3,
        postImage: bg3,
        title: 'Beautifull , let us travell',
        desc: 'Travetto the any corner of the world, without going around in circles Travetto the any corner of the world, without going ',
    },
    {
        id: 4,
        postImage: bg4,
        title: 'Beautifull , let us travell',
        desc: 'Travetto the any corner of the world, without going around in circles Travetto the any corner of the world, without going ',
    }
]

const Blog = () =>{
    return(
        <section className='blog container section'>

            <div className='secContainer'>
                <div className='secIntro'>
                    <h2 className='secTitle'> Our Best Blog?</h2>
                    <p>Travetto the any corner of the world, without going around in circles</p>
                </div>

                <div className='mainContainer gred'>
                    {
                        Posts.map(({id,postImage,title,desc})=>{
                            return(
                                <div className='singlePost gred'>
                                    <div className='imgDiv'>
                                        <img src={postImage} alt={title}/>
                                    </div>
        
                                    <div className='postDetails'>
                                        <h3>{title}</h3>
                                        <p>{desc}</p>
                                    </div>
                                    <a href='/' className='flex'>
                                            Read More
                                            <BsArrowRightShort className='icon'/>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default Blog