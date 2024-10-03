import React from 'react';
import image1 from "../../assets/category/earphone.png";
import image2 from "../../assets/category/watch.png";
import image3 from "../../assets/category/macbook.png";
import Button from '../Shared/Button';

const Category = () => {
    return (
        <div className='py-8'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className='py-5 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div className='space-y-3 z-10'>
                            <div className='mb-4'>
                                <p className='text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-4'>Earphone</p>
                                <Button text='Browse' bgColor='bg-primary' textColor='text-white' />
                            </div>
                        </div>
                        <img src={image1} alt="" className="w-[320px] absolute bottom-8 -right-5" />
                    </div>
                    <div className='py-5 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div className='z-10'>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-4'>Gadget</p>
                                <Button text='Browse' bgColor='bg-white' textColor='text-brandYellow' />
                            </div>
                        </div>
                        <img src={image2} alt="" className="w-[320px] absolute -right-9 top-[70px] sm:top-[0px]" />
                    </div>
                    <div className='col-span-2 py-5 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div className='z-10'>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-4'>Laptop</p>
                                <Button text='Browse' bgColor='bg-white' textColor='text-primary' />
                            </div>
                        </div>
                        <img src={image3} alt="" className="w-[250px] absolute -right-0 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category