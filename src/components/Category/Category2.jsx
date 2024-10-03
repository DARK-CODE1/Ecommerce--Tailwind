import React from 'react';
import image1 from "../../assets/category/gaming.png";
import image2 from "../../assets/category/vr.png";
import image3 from "../../assets/category/speaker.png";
import Button from '../Shared/Button';

const Category2 = () => {
    return (
        <div className='py-8'>
            <div className="container">
                <div className="grid grid-cols-1 flex-col-reverse sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className='col-span-2 py-5 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-500'>Enjoy</p>
                                <p className='text-2xl text-gray-500 font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl text-gray-500 font-bold opacity-40 mb-4'>Console</p>
                                <Button text='Browse' bgColor='bg-primary' textColor='text-white' />
                            </div>
                        </div>
                        <img src={image1} alt="" className="w-[250px]  absolute -right-0 top-1/2 -translate-y-1/2" />
                    </div>
                    <div className='py-5 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div className='space-y-3 z-10'>
                            <div className='mb-4'>
                                <p className='text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-70 mb-4'>Oculus</p>
                                <Button text='Browse' bgColor='bg-white' textColor='text-brandGreen' />
                            </div>
                        </div>
                        <img src={image2} alt="" className="w-[320px]  absolute bottom-0 -right-2" />
                    </div>
                    <div className='py-5 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div className='z-10'>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-4'>Speaker</p>
                                <Button text='Browse' bgColor='bg-white' textColor='text-brandBlue' />
                            </div>
                        </div>
                        <img src={image3} alt="" className="w-[200px] absolute -right-0 top-0" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category2