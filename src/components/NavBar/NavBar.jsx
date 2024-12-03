// Updated NavBar component with profile toggle
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/caclogopng.png';
import { IoAddCircle } from "react-icons/io5";
import { MenuOutlined } from '@ant-design/icons';
import { ImUser } from 'react-icons/im';

const NavBar = () => {
    const [toggleNav, settoggleNav] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const handleToggleProfile = () => {
        setShowProfile(!showProfile);
    };

    return (
        <nav className={`bg-white text-black px-10 flex flex-col md:flex-row items-center z-20 sticky top-0 justify-between overflow-hidden ${toggleNav ? 'max-h-screen' : 'max-h-[220px]'} w-full`}>
            <div className='flex items-center justify-between w-full md:w-auto'>
                <Link to="/" className='flex items-center'>
                    <img src={logo} alt='caclogo' className='w-36 h-16' />
                </Link>
                <button
                    className='md:hidden text-2xl'
                    onClick={() => settoggleNav(!toggleNav)}
                >
                    <MenuOutlined />
                </button>
            </div>
            <ul className={`mt-4 md:mt-0 flex font-medium text-3xl flex-col md:flex-row gap-4 md:gap-10 w-full md:w-auto ${toggleNav ? 'block' : 'hidden md:flex'}`}>
                <li>
                    <Link to="/Add" className='hover:text-green-200 transition text-black duration-200 ease-linear'><IoAddCircle /></Link>
                </li>
                <li className='relative'>
                    <button
                        onClick={handleToggleProfile}
                        className='hover:text-green-200 transition text-black duration-200 ease-linear'>
                        <ImUser />
                    </button>
                    {showProfile && (
                        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                            <h2 className="text-lg font-semibold">Emmanuel Uchenna Ihenacho (Tariq)</h2>
                            <p className="text-sm text-gray-600">ID: 123456</p>
                            <br />
                            <div className='flex items-center justify-center'>
                                <button className='bg-green-600 text-white font-medium py-2 px-6 rounded-full hover:scale-105 transition-transform duration-200 ease-in-out'>
                                    LOGOUT
                                </button>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;