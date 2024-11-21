import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../components/Header';

const Layout = () => {
    return (
        <div>

            <div className='py-4 text-center'>
            <Header></Header>
            </div>
            <div className='py-4'>
            <Navbar></Navbar>
            </div>

            <div className='mx-auto min-h-44 '>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Layout;