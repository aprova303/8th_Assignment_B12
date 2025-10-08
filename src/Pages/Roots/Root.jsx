import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';

const Root = () => {
    return (
        <div  className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            {/* <Banner></Banner> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;