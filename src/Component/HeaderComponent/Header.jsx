import React from 'react'
import image from '../HeaderComponent/image/header-1.jpg';
import './Header.css'
const Header = () => {
  return (
    <section className='header-Conatiner'>
    <div className='header-image'>
        <img src={image}/>
    </div>
    <div className='header-Title'>
        <span className='topic-1'>Stays</span>
        <span className='topic-2'>Experiences</span>
    </div>
    <div className='header-nav'>
        <nav>
            <button className='header-button-1'>Airbnb Your Home</button>
            <button className='header-button-2'></button>
            <div className='header-menu'>
                <div className='line'>
                    <div className='header-line'></div>
                    <div className='header-line'></div>
                    <div className='header-line'></div>
                </div>
                <button className='header-profile'>👤</button>
            </div>
        </nav>
    </div>
    
    </section>
    
  )
}

export default Header