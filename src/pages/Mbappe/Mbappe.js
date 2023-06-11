import React, {useRef, useState} from 'react';
import './Mbappe.css'
import {Mbappephoto} from "../../conponents/ImageMbappe/ImageMbappe";

import ReviewsMbappe from "../../conponents/ReviewsMbappe/Reviews";

import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Mbappe = ({date, date2, small, setSmall, setShowReviews,  phone}) => {


    const mainRef = useRef()

    const takeID = () => {
        if (mainRef.current) {
            mainRef.current.id = "TShirtContainer";
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
        <div className="smallPage" onClick={()=> setSmall(false)}>
            <div className="imgBlockMbappe">
                <img src="https://i.pinimg.com/originals/f9/c4/3f/f9c43f66394f7662505fe1eb249a73c9.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                <h2 className="h2ts">Funko POP Vinyl - Kylian Mbappe </h2>
                <p className="design">Designed and sold by <span>Reis O’Brien</span></p>
                <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>
                <div className="buttonsMbappe">
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
        <div ref={mainRef} className="mbappe">
            <img id="backToSmall"
                 src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                 onClick={() => takeID()}/>
            <div className="MBappe">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        <h2 className="h2ts">Funko 39828 POP Vinyl: Football - Kylian Mbappe (PSG) Collectible Figure,
                            Multicolour</h2>
                        <p className="design">Designed and sold by <span>Reis O’Brien</span></p>
                        <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>
                    </div>
                    <div className="imgCarousel">
                        <CarouselBoxTShirt element={Mbappephoto}/>
                    </div>
                    <div className="features33">
                        <p>About this item</p>
                        <ul className="firstUl">
                            <li>IDEAL COLLECTIBLE SIZE - At approximately 3.75 inches (9.5 cm) tall, this vinyl mini
                                figurine complements other collectable merchandise and fits perfectly in your display
                                case or on your desk.
                            </li>
                            <li>PREMIUM VINYL MATERIAL - Made from high-quality, durable vinyl, this collectible is
                                built to last and withstand daily wear, ensuring long-lasting enjoyment for fans and
                                collectors alike.
                            </li>
                            <li>PERFECT GIFT FOR PARIS SAINT-GERMAIN FANS - Ideal for holidays, birthdays, or special
                                occasions and as a present this exclusive figurine is a must-have addition to any Paris
                                Saint-Germain merchandise collection
                            </li>
                            <li>EXPAND YOUR COLLECTION - Add this unique KYLIAN MBAPPÉ vinyl display piece to your
                                growing assortment of Funko Pop! figures, and seek out other rare and exclusive
                                collectible items for a complete set
                            </li>
                            <li>LEADING POP CULTURE BRAND - Trust in the expertise of Funko, the premier creator of pop
                                culture merchandise that includes vinyl figures, action toys, plush, apparel, board
                                games, and more.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        <h2 className="h2ts">Funko 39828 POP Vinyl: Football - Kylian Mbappe (PSG) Collectible Figure,
                            Multicolour</h2>
                        <p className="design">Designed and sold by <span>Reis O’Brien</span></p>
                        <p className="price">€ 2.00 <span>€32,90</span></p>
                        <p className="vat">incl. VAT</p>
                        <p className="color"><span>Theme: </span>Tv</p>
                        <p className="color"><span>Brand: </span>Funko</p>
                        <p className="color"><span>Colour: </span>Multicolour</p>
                        <p className="color"><span>Style: </span>Pop. vinyl</p>
                        <p className="color"><span>Material: </span>Vinyl</p>
                        <p className="color"><span>Product dimensions: </span>9L x 7.5W x 9H centimetres</p>
                        <p className="color"><span>Cartoon character: </span>Kylian Mbappé (PSG)</p>
                        <p className="color"><span>Special feature: </span>Collectible</p>
                        <p className="color"><span>Age range (description): </span>Not appropriate for children under
                            the age of 3</p>
                        <a className="btnts" href="">
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            <p>Add to cart</p></a>
                        <div className="features221">
                            <p>About this item</p>
                            <ul className="firstUl">
                                <li>IDEAL COLLECTIBLE SIZE - At approximately 3.75 inches (9.5 cm) tall, this vinyl mini
                                    figurine complements other collectable merchandise and fits perfectly in your display
                                    case or on your desk.
                                </li>
                                <li>PREMIUM VINYL MATERIAL - Made from high-quality, durable vinyl, this collectible is
                                    built to last and withstand daily wear, ensuring long-lasting enjoyment for fans and
                                    collectors alike.
                                </li>
                                <li>PERFECT GIFT FOR PARIS SAINT-GERMAIN FANS - Ideal for holidays, birthdays, or special
                                    occasions and as a present this exclusive figurine is a must-have addition to any Paris
                                    Saint-Germain merchandise collection
                                </li>
                                <li>EXPAND YOUR COLLECTION - Add this unique KYLIAN MBAPPÉ vinyl display piece to your
                                    growing assortment of Funko Pop! figures, and seek out other rare and exclusive
                                    collectible items for a complete set
                                </li>
                                <li>LEADING POP CULTURE BRAND - Trust in the expertise of Funko, the premier creator of pop
                                    culture merchandise that includes vinyl figures, action toys, plush, apparel, board
                                    games, and more.
                                </li>
                            </ul>
                        </div>
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/72/13/a1/7213a16165e9ba30d33be8c953faae28.png"
                                 alt="FranceFlag"/>
                            <div>
                                <p className="devTitle">Delivery</p>
                                <p className="devP">Express by {date}<br/>
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
                                    <div className="progressBar1Mbappe">
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
                                    <div className="progressBar2Mbappe">
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
                                    <div className="progressBar3Mbappe">
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
                                    <div className="progressBar4Mbappe">
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
                                    <div className="progressBar5Mbappe">
                                    </div>
                                </div>
                            </div>
                            <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 154 reviews</p>
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

export default Mbappe;