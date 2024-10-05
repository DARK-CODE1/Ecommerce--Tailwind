import React from 'react';
import Heading from '../Shared/Heading';
import image1 from "../../assets/blogs/blog-1.jpg";
import image2 from "../../assets/blogs/blog-2.jpg";
import image3 from "../../assets/blogs/blog-3.jpg";

const BlogsDats = [
    {
        id: 1,
        title: 'How To Choose Perfect Smartwatch',
        subtitle: 'Recusandae corrupti culpa quo nulla nisi rerum provident doloremque pariatur explicabo aut eveniet iusto atque aliquam tenetur, sunt animi maiores placeat doloribus.',
        published: 'Jan 20 , 2024 By Dilshad',
        img: image1
    },
    {
        id: 2,
        title: 'How To Choose Perfect Gadget',
        subtitle: 'Recusandae corrupti culpa quo nulla nisi rerum provident doloremque pariatur explicabo aut eveniet iusto atque aliquam tenetur, sunt animi maiores placeat doloribus.',
        published: 'Jan 20 , 2024 By Satya',
        img: image2
    },
    {
        id: 3,
        title: 'How To Choose Perfect VR Headset',
        subtitle: 'Recusandae corrupti culpa quo nulla nisi rerum provident doloremque pariatur explicabo aut eveniet iusto atque aliquam tenetur, sunt animi maiores placeat doloribus.',
        published: 'Jan 08 , 2024 By Sabir',
        img: image3
    },

]

const Blogs = () => {
    return (
        <div className='my-12'>
            <div className="container">
                <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-3 sm:gap-4 md:gap-7">
                    {
                        BlogsDats.map((data) => (
                            <div key={data.id} className='bg-white dark:bg-gray-900'>
                                <div className='overflow-hidden rounded-2xl mb-2 '>
                                    <img src={data.img} alt="" className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500" />
                                </div>
                                <div className='space-y-2'>
                                    <p className="text-xs text-gray-500">{data.published}</p>
                                    <p className="font-bold line-clamp-1">{data.title}</p>
                                    <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <p></p>
            </div>
        </div>
    )
}

export default Blogs