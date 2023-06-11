import React, {useRef, useState} from 'react';
import './Light.css'

import {
    blackLight, blueLight, brownLight, grayLight, greenLight, orangeLight, redLight,
} from "../../conponents/ImageMbappe/ImageMbappe";
import ReviewsLight from "../../conponents/ReviewsLight/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Light = ({date, date2, setSmall, small, setShowReviews, phone}) => {

    const [color, setColor] = useState('Black')


    const colorOnclick = (color) => {
        setColor(color)
    }

    const mainRef = useRef()


    const takeID = () => {
        if (mainRef.current) {
            mainRef.current.id = "zippoContainer";
            setTimeout(() => {
                mainRef.current.id = "";
                setSmall(true)
                if (!phone){
                    window.document.body.scrollIntoView({ behavior: 'auto', block: 'start' });
                } else {

                }
            }, 450)



        }
    }

    return small ? (
        <div className="smallPageZippo" onClick={()=> setSmall(false)}>
            <div className="imgBlock">
                <img src="https://i.pinimg.com/originals/00/a8/91/00a891197914de1a68522fcd991c2c02.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                <h2 className="h2ts">Blukar Flashlight Rechargeable</h2>
                <p className="design">Designed and sold by <span>Yanko Design</span></p>
                <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>
                <div className="buttons22">
                    <a className="btnts1" onClick={()=> setSmall(false)}>
                        <img src="https://i.pinimg.com/originals/9e/63/21/9e6321883f018a4613fa5d8960a161d2.png"
                             alt=""/>
                        <p>More Details</p></a>
                    <a className="btnts2" href="" onClick={(e)=> e.stopPropagation()}>
                        <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                             alt=""/>
                        <p>Add to cart</p></a>
                </div>
            </div>
        </div>
    ) :(
        <div ref={mainRef} className="zippoContainer">
            <img id="backToSmall"
                 src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                 onClick={() => takeID()}/>
            <div className="Light">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        <h2 className="h2ts">Blukar Flashlight Rechargeable</h2>
                        <p className="design">Designed and sold by <span>Yanko Design</span></p>
                        <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>
                    </div>
                    <div className="imgCarousel">
                        {color === 'Black' && <CarouselBoxTShirt element={blackLight}/>}
                        {color === 'Blue' && <CarouselBoxTShirt element={blueLight}/>}
                        {color === 'Brown' && <CarouselBoxTShirt element={brownLight}/>}
                        {color === 'Red' && <CarouselBoxTShirt element={redLight}/>}
                        {color === 'Green' && <CarouselBoxTShirt element={greenLight}/>}
                        {color === 'Orange' && <CarouselBoxTShirt element={orangeLight}/>}
                        {color === 'Gray' && <CarouselBoxTShirt element={grayLight}/>}
                    </div>
                    <div className="features">
                        <h2>
                            About this item
                        </h2>
                        <ul className="firstUl">
                            <li>【Super Bright flashlight】With stable performance and low power consumption, it can
                                provide a uniform high-brightness beam and a wider range of illumination to meet your
                                daily needs.
                            </li>
                            <li>【4 Lighting Modes & Zoomable】One button control of 4 lighting modes:
                                High/Low/Strobe/SOS. The zoomable design of the flashlight adjusts the focus as needed,
                                giving you the freedom to choose a spotlight or floodlight for long distances or larger
                                illuminated areas.
                            </li>
                            <li>【USB Rechargeable】Built-in 1800mAh can work up to 16 hours in normal use. You can charge
                                this flashlight directly via the included USB cable.
                            </li>
                            <li>【Durable and Portable】The flashlight shell is made of high quality aluminum alloy with
                                excellent hardness, wear resistance and drop resistance. The pocket is designed for easy
                                portability and can fit in your handbag, backpack or survival kit.
                            </li>
                            <li>【Multiple Uses】The kit includes: 1*Rechargeable Flashlight, 1*USB Cable. The lightweight
                                and practical LED flashlight can be widely used for daily lighting, power outages,
                                emergencies, etc. It can also be used for outdoor sports such as dog walking, camping,
                                hiking, fishing, running.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        <h2 className="h2ts">Blukar Flashlight Rechargeable</h2>
                        <p className="design">Designed and sold by <span>Yanko Design</span></p>
                        <p className="price">€ 2.00 <span>€32,90</span></p>
                        <p className="vat">incl. VAT</p>
                        <p className="color"><span>Color</span>{color}</p>
                        <div className="colors">
                            <div className="black" onClick={() => colorOnclick('Black')}>
                                {color === 'Black' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="blue" onClick={() => colorOnclick('Blue')}>
                                {color === 'Blue' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="brown" onClick={() => colorOnclick('Brown')}>
                                {color === 'Brown' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="red" onClick={() => colorOnclick('Red')}>
                                {color === 'Red' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="green" onClick={() => colorOnclick('Green')}>
                                {color === 'Green' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="orange" onClick={() => colorOnclick('Orange')}>
                                {color === 'Orange' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="gray" onClick={() => colorOnclick('Gray')}>
                                {color === 'Gray' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>

                        </div>
                        <a className="btnts" href="">
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            <p>Add to cart</p></a>
                        <div className="features221">
                            <h2>
                                About this item
                            </h2>
                            <ul className="firstUl">
                                <li>【Super Bright flashlight】With stable performance and low power consumption, it can
                                    provide a uniform high-brightness beam and a wider range of illumination to meet your
                                    daily needs.
                                </li>
                                <li>【4 Lighting Modes & Zoomable】One button control of 4 lighting modes:
                                    High/Low/Strobe/SOS. The zoomable design of the flashlight adjusts the focus as needed,
                                    giving you the freedom to choose a spotlight or floodlight for long distances or larger
                                    illuminated areas.
                                </li>
                                <li>【USB Rechargeable】Built-in 1800mAh can work up to 16 hours in normal use. You can charge
                                    this flashlight directly via the included USB cable.
                                </li>
                                <li>【Durable and Portable】The flashlight shell is made of high quality aluminum alloy with
                                    excellent hardness, wear resistance and drop resistance. The pocket is designed for easy
                                    portability and can fit in your handbag, backpack or survival kit.
                                </li>
                                <li>【Multiple Uses】The kit includes: 1*Rechargeable Flashlight, 1*USB Cable. The lightweight
                                    and practical LED flashlight can be widely used for daily lighting, power outages,
                                    emergencies, etc. It can also be used for outdoor sports such as dog walking, camping,
                                    hiking, fishing, running.
                                </li>
                            </ul>
                        </div>
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/72/13/a1/7213a16165e9ba30d33be8c953faae28.png"
                                 alt="FranceFlag"/>
                            <div>
                                <p className="devTitle">Delivery</p>
                                <p className="devP">Express by {date} <br/>
                                    Standard {date2}</p>
                            </div>
                        </div>
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/35/96/f5/3596f54bbd8a9bbe7a0219847da373c0.png"
                                 alt="return"/>
                            <div>
                                <p className="devTitle">Returns are free and easy</p>
                                <p className="devP">Exchange or money back guarantee for all orders.</p>
                            </div>
                        </div>
                        <div className="starContainer">
                            <p>Reviews</p>
                            <div className="stars">
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <div className="bar">
                                    <div className="progressBar1">
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                     alt=""/>
                                <div className="bar">
                                    <div className="progressBar2">
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                     alt=""/>
                                <div className="bar">
                                    <div className="progressBar3">
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                     alt=""/>
                                <div className="bar">
                                    <div className="progressBar4">
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                     alt=""/>
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                     alt=""/>
                                <div className="bar">
                                    <div className="progressBar5">
                                    </div>
                                </div>
                            </div>
                            <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 93 reviews</p>
                        </div>
                    </div>
                    <div className="backContainer">
                        <img className="backToSmall22"
                             src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                             onClick={() => takeID()}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Light;