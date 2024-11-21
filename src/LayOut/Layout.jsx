import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='min-h-44'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Layout;