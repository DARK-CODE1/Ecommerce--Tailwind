import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';
const MenuLinks = [
    {
        id: 1,
        name: 'Home',
        link: '/#',
    },
    {
        id: 2,
        name: 'Shop',
        link: '/#shop',
    },
    {
        id: 3,
        name: 'About',
        link: '/#about',
    },
    {
        id: 4,
        name: 'Blogs',
        link: '/#blogs',
    },
]

const Navbar = () => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-300 relative z-40'>
            <div className='py-4'>
                <div className="container flex justify-between items-center">
                    <div className='flex items-center gap-4'>
                        {/* Logo */}
                        <a href="#home" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>

                        {/* Menu Item */}
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4'>
                                {MenuLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='inline-block font-semibold px-4 text-gray-500 duration-150 hover:text-black dark:hover:text-white'>{data.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* right scetion */}
                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder='Search' className='search-bar focus:w-[300px]' />
                            <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>
                        <button className='relative p-3'>
                            <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex justify-center items-center text-xs">4</div>
                        </button>

                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar