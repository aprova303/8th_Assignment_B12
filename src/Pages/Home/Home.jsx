import React from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../../components/Banner/Banner';
import Apps from '../Apps/Apps';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;