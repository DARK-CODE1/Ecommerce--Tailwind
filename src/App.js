import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Smartwatch from "./assets/category/smartwatch.png";
import Headphone from "./assets/hero/headphone.png";
import Products from './components/Products/Products';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';

const BannerData = {
  discount: '30% OFF',
  title: 'Fine Smile',
  date: '10 Jan To 28 Jan',
  image: Headphone,
  title2: 'Air Solo Bass',
  title3: 'Winter Sale',
  title4: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nesciunt beatae eius ad tempora.',
  bgColor: '#f42c37'
}
const BannerData2 = {
  discount: '30% OFF',
  title: 'Happy Hours',
  date: '14 Jan To 28 Jan',
  image: Smartwatch,
  title2: 'Smart Solo',
  title3: 'Winter Sale',
  title4: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nesciunt beatae eius ad tempora.',
  bgColor: '#2dcc6f'
}
const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default App