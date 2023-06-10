import React, {useRef, useState} from 'react';
import './Pillow.css'

import { pillow} from "../../conponents/ImageMbappe/ImageMbappe";

import ReviewsPillow from "../../conponents/ReviewsPillow/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Pillow = ({date, date2, small, setSmall}) => {
    const [showReviews, setShowReviews] = useState(false)

    const mainRef = useRef()

    const takeID = () => {
        if (mainRef.current) {
            mainRef.current.id = "zippoContainer";
            setTimeout(()=>{
                mainRef.current.id = "";
                setSmall(true)
            }, 450)

        }
    }

    return small ? (
        <div className="smallPageZippo" onClick={()=> setSmall(false)}>
            <div className="imgBlock">
                <img src="https://i.pinimg.com/originals/61/f6/d9/61f6d9e58b5817d3072c364bf7cd8305.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                <h2 className="h2ts">Froster Heated Croissant – Giant Pillow</h2>
                <p className="design">Designed and sold by <span>Froster Store</span></p>
                <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>
                <div className="buttons22" onClick={()=> setSmall(false)}>
                    <a className="btnts1">
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
    ) : (
        <div ref={mainRef} className="zippoContainer">
            <img className="backToSmall"
                 src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                 onClick={() => takeID()}/>
            <div className="TShirt">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        <h2 className="h2ts">Froster Heated Croissant – Giant Pillow, with Cherry Stone Heat Bag, Travel
                            Neck Pillow, Huggable Cushion</h2>
                        <p className="design">Designed and sold by <span>Froster Store</span></p>
                        <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>
                    </div>
                    <div className="imgCarouselPillow">
                        <CarouselBoxTShirt element={pillow}/>
                    </div>
                    <div className="features">
                        <h2>About this item</h2>
                        <ul className="firstUl">
                            <li>Giant croissant neck pillow with a pocket for a heat pad which looks like chocolate.
                            </li>
                            <li>The microwavable eco heat bag is filled with cherry stones – its pleasant warmth will
                                allow you to relax.

                            </li>
                            <li>Novelty decorative pillow to your bedroom or living room and a huggable chocolate
                                croissant gift.

                            </li>
                            <li>Also suitable for travelling – provides comfort and makes your nap easier (comfortable
                                travel headrest).

                            </li>
                            <li>Pillow size: approx. 42 x 42 x 13 cm. Pillow material & filling: 100% polyester. Made in
                                EU.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        <h2 className="h2ts">Froster Heated Croissant – Giant Pillow, with Cherry Stone Heat Bag, Travel
                            Neck Pillow, Huggable Cushion</h2>
                        <p className="design">Designed and sold by <span>Froster Store</span></p>
                        <p className="price">€ 2.00 <span>€32,90</span></p>
                        <p className="vat">incl. VAT</p>
                        <p className="color"><span>Brand: </span>Froster</p>
                        <p className="color"><span>Special feature: </span>Zipped pocket for a heat pad</p>
                        <p className="color"><span>Use for: </span>Neck</p>
                        <p className="color"><span>Material: </span>Polyester</p>
                        <p className="color"><span>Colour: </span>Orange</p>
                        <p className="color"><span>Item dimensions L x W x H:</span>42 x 42 x 13 centimetres</p>
                        <p className="color"><span>Size:</span>One-size</p>
                        <p className="color"><span>Style:</span>Classic</p>
                        <a className="btnts" href="">
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            <p>Add to cart</p></a>
                        <div className="features221">
                            <p>About this item</p>
                            <ul className="firstUl">
                                <li>Giant croissant neck pillow with a pocket for a heat pad which looks like chocolate.
                                </li>
                                <li>The microwavable eco heat bag is filled with cherry stones – its pleasant warmth will
                                    allow you to relax.

                                </li>
                                <li>Novelty decorative pillow to your bedroom or living room and a huggable chocolate
                                    croissant gift.

                                </li>
                                <li>Also suitable for travelling – provides comfort and makes your nap easier (comfortable
                                    travel headrest).

                                </li>
                                <li>Pillow size: approx. 42 x 42 x 13 cm. Pillow material & filling: 100% polyester. Made in
                                    EU.
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
                            <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 69 reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewsPillow showReviews={showReviews} setShowReviews={setShowReviews}/>
        </div>
    );
};

export default Pillow;