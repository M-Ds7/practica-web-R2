import React from 'react'
import Menu from './Menu'; 
import Slider from './Slider'; 
import Servicios from './Servicios';
import Footer from './Footer'; 

const Home = () => {
    return(
        <>
            <Menu/>
            <main role='main' className='fkex-shrink-0 mt-5'>
                <div className="container">
                    <Slider/>
                    <Servicios/>

                    <hr className='featurette-divider' />
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home