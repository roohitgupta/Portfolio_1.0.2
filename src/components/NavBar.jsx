import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { FiPhone } from 'react-icons/fi';
import { Link } from 'react-scroll'
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiOutlineContacts
  } from "react-icons/ai";

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            icon: <AiOutlineHome className='mr-2' size={20} />,
            link: "home",
        },
        {
            id: 2,
            icon: <AiOutlineUser className='mr-2' size={20} />,
            link: "about",
        },
        {
            id: 3,
            icon: <AiOutlineFundProjectionScreen className='mr-2' size={22} />,
            link: "projects",
        },
        {
            id: 4,
            icon: <AiFillStar className='mr-2' size={20} />,
            link: "experience",
        },
        {
            id: 5,
            icon: <AiOutlineContacts className='mr-2' size={22} />,
            link: "contact",
        },
    ]


    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
            <div>
                <h1 className='text-4xl ml-2 font-signature flex'> <a href="tel:+917000193449" target="_blank" rel="noreferrer"> <FiPhone className="phone" size={30}/> </a>  </h1>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link, icon }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 hover:underline underline-offset-4 decoration-sky-500 duration-200 hover:text-sky-500'>
                        <Link to={link} smooth duration={500} className="flex items-center ml-2">
                            {icon}{link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar
