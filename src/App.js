import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Poupelar from './Components/Poupelar/Poupelar'
import Offer from './Components/Offers/Offer'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
const App = () =>{
    return(
        <div basename={'/reac-tourito'}>
        <Navbar/>
        <Home/>
        <Poupelar/>
        <Offer/>
        <About/>
        <Blog/>
        <Footer/>
        </div>
    )
}
export default App