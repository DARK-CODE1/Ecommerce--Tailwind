import React from 'react';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';
import image1 from "../../assets/product/p-1.jpg";
import image2 from "../../assets/product/p-2.jpg";
import image3 from "../../assets/product/p-3.jpg";
import image4 from "../../assets/product/p-4.jpg";
import image5 from "../../assets/product/p-5.jpg";
import image6 from "../../assets/product/p-7.jpg";
import image7 from "../../assets/product/p-8.jpg";

const ProductsData = [
    {
        id: 1,
        img: image1,
        title: 'Headphone',
        price: '120',
        aosDelay: '0',
    },
    {
        id: 2,
        img: image2,
        title: 'Rocky Mountain',
        price: '420',
        aosDelay: '200',
    },
    {
        id: 3,
        img: image3,
        title: 'Goggles',
        price: '320',
        aosDelay: '400',
    },
    {
        id: 4,
        img: image4,
        title: 'Printed',
        price: '220',
        aosDelay: '300',
    },
]
const ProductsData2 = [
    {
        id: 1,
        img: image5,
        title: 'Headphone',
        price: '120',
        aosDelay: '0',
    },
    {
        id: 2,
        img: image6,
        title: 'Rocky Mountain',
        price: '420',
        aosDelay: '200',
    },
    {
        id: 3,
        img: image7,
        title: 'Goggles',
        price: '320',
        aosDelay: '400',
    },
    {
        id: 4,
        img: image6,
        title: 'Printed',
        price: '220',
        aosDelay: '300',
    },
]
function Products() {
    return (
        <div>
            <div className="container">
                <Heading title="Our Products" subtitle={"Explore Our Products"} />

                <ProductCard data={ProductsData} />
                <ProductCard data={ProductsData2} />
            </div>
        </div>
    )
}

export default Products