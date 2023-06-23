import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {HeatherGreyFront} from "../ImageMbappe/ImageMbappe";

const ProductCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <div className="my-div">
                        <img src={HeatherGreyFront[0]} alt=""/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <img src={HeatherGreyFront[1]} alt=""/>
                    </div>
                </div>
                <div>
                    <div className="my-div">
                        <img src={HeatherGreyFront[2]} alt=""/>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default ProductCarousel;