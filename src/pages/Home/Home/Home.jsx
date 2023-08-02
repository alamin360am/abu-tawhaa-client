import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <section>
            <Helmet><title>Home</title></Helmet>
            <h1 className='text-3xl'>হোম</h1>
        </section>
    );
};

export default Home;