import React from 'react';
// import Navbar from './navbar/Navbar';
import CardCol from './card/CardCol';
import Navbar from './nabar/Navbar';
import Banner from './banner/Banner';
import Productlist from './productlist/Productlist';
import Footer from './footer/Footer';



function Home() {
    return(
        <section>
            <Navbar/>
            <Banner />
            <div>
        
           <Productlist/>
            </div>
            <Footer/>

        </section>
    );
}

export default Home;