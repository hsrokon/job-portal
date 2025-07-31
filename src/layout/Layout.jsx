import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header className='sticky top-0 bg-white z-100'>
                <Navbar />
            </header>
            
            <section>
                <Outlet />
            </section>

            <section>

            </section>
        </div>
    );
};

export default Layout;