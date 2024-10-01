import React, { useEffect, useState } from 'react';
// import { IoSunny, IoMoonOutline } from "react-icons/io5";
import LightButtom from '../../assets/website/light-mode-button.png';
import DarkButtom from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    const element=document.documentElement;

    console.log(element);
    
    useEffect(()=>{
        localStorage.setItem('theme',theme);
        if (theme==='dark') {
            element.classList.add('dark');
            element.classList.remove('light');
        } else {
            element.classList.add('light');
            element.classList.remove('dark');
        }
    })

    return (
        <div className='relative'>

            <img src={LightButtom} alt="" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'} transition-all duration-300`} />

            <img src={DarkButtom} alt="" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`w-12 cursor-pointer`} />
        </div>
    )
}

export default DarkMode