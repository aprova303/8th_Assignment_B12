import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import image from '../../assets/error-404.png'
const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
          <div className='ml-100 items-center'>
             <img className='' src={image}></img>
           <h1 className='font-semibold text-5xl ml-5 mb-10 mt-10 '>Oops, page not found!</h1>
           <p className='mb-10 ml-20'>The page you are looking for is not available.</p>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;