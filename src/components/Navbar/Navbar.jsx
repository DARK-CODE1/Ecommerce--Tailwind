import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";
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

const DropdownLinks = [
    {
        id: 1,
        name: 'Trending Products',
        link: '/#Trending-Products',
    },
    {
        id: 2,
        name: 'Best Selling',
        link: '/#Best-Selling',
    },
    {
        id: 3,
        name: 'Top Rated',
        link: '/#Top-Rated',
    },
]
const Navbar = ({ handleOrderPopup }) => {
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
                                <li className="relative cursor-pointer group">
                                    <a href="#Quick-Links" className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
                                        Quick Links
                                        <span>
                                            <FaCaretDown className='group-hover:rotate-180 duration-300' />
                                        </span>
                                    </a>
                                    <div className='absolute z-50 hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                                        <ul className='space-y-2'>
                                            {DropdownLinks.map((data, index) => (
                                                <li key={index}>
                                                    <a href={data.link} className='text-gray-500 duration-300 hover:text-black inline-block w-full hover:bg-primary/20 dark:hover:text-white rounded-md'>{data.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* right scetion */}
                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder='Search' className='search-bar focus:w-[300px]' />
                            <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>
                        <button className='relative p-3' onClick={handleOrderPopup} >
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