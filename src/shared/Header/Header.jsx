import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='flex justify-between items-center px-4 py-4 bg-green-600 text-white'>
           <div>Logo</div>
           <ul className='flex items-center gap-4'>
            <li><NavLink to={"/"}>হোম</NavLink></li>
            <li><NavLink to={"/program-application"}>প্রোগ্রামের আবেদন করুন</NavLink></li>
            <li><NavLink to={"/signin"}>লগ ইন</NavLink></li>
            <li><NavLink to={"/signup"}>সাইন আপ</NavLink></li>
           </ul>
        </nav>
    );
};

export default Header;