import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';

const MainLayout = () => {
    return (
        <main className='max-w-6xl mx-auto px-4 md:px-0'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </main>
    );
};

export default MainLayout;