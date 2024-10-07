import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaTelegram } from "react-icons/fa";

const FooterLinks = [
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

const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className="container">
                <div className="grid md:grid-cols-3 pb-2 pt-5">
                    <div className="py-8 px-4">
                        <a href="#home" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 md:pl-10">
                        <div className="py-8 px-4">
                            <h1 className='text-xl font-semibold mb-3 sm:text-left' >Important Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='text-gray-600 duration-300 hover:text-black dark:hover:text-white'>{data.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="py-8 px-4">
                            <h1 className='text-xl font-semibold mb-3 sm:text-left' >Quick Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='text-gray-600 duration-300 hover:text-black dark:hover:text-white'>{data.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                            <h1 className='text-xl font-semibold mb-3 sm:text-left' >Address Links</h1>
                            <div>
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Noida , Uttar Pradesh</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <FaMobileAlt />
                                    <p>+11 123456789</p>
                                </div>
                                <div className='flex items-center gap-3 mt-6'>
                                    <a href="#Facebook"><FaFacebook className='text-3xl hover:text-primary duration-300' /></a>
                                    <a href="#Instagram"><FaInstagram className='text-3xl hover:text-primary duration-300' /></a>
                                    <a href="#Linkedin"><FaTelegram className='text-3xl hover:text-primary duration-300' /></a>
                                    <a href="#Linkedin"><FaLinkedin className='text-3xl hover:text-primary duration-300' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer