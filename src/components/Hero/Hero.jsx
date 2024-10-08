import React from 'react';
import Slider from "react-slick";
import image1 from "../../assets/hero/headphone.png";
import image2 from "../../assets/category/vr.png";
import image3 from "../../assets/category/macbook.png";
import Button from '../Shared/Button';

const HeroData = [
    {
        id: 1,
        img: image1,
        subtitle: 'Beast Solo',
        title: 'Wireless',
        title2: 'Headphone'
    },
    {
        id: 2,
        img: image2,
        subtitle: 'Apple Pro 7',
        title: 'Wireless',
        title2: 'Virtual'
    },
    {
        id: 3,
        img: image3,
        subtitle: 'MacBook Z30',
        title: 'Branded',
        title2: 'Laptop'
    },
]

const Hero = ({ handleOrderPopup }) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className='container pt-2'>
            <div className='overflow-hidden rounded-3xl min-h-[450px] sm:min-h-[550px] hero-bg-color flex items-center justify-center'>
                <div className='container pb-8 sm:pb-0 '>
                    <Slider {...settings}>
                        {HeroData.map((data) => (
                            <div key={data.id}>
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true' className='text-2xl sm:text-6xl lg:text-4xl  font-bold'>{data.subtitle}</h1>
                                        <h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true' className='text-5xl sm:text-6xl lg:text-7xl  font-bold'>{data.title}</h1>
                                        <h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true' className='text-5xl uppercase text-white dark:text-white/5 sm:text-[70px] md:text-[90px] xl:text-[100px] font-bold'>{data.title2}</h1>
                                        <div data-aos='fade-up' data-aos-duration='500' data-aos-offset='0' data-aos-delay='300'>
                                            <Button text='Buy Now' bgColor='bg-primary' textColor='text-white' handleOrderPopup={handleOrderPopup} />
                                        </div>
                                    </div>
                                    <div className='order-1 sm:order-2'>
                                        <div data-aos='zoom-in' data-aos-once='true' className='relative z-10'>
                                            <img src={data.img} alt="" className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Hero