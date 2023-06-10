import React, {useRef, useState} from 'react';
import './Decanter.css'
import {decanter} from "../../conponents/ImageMbappe/ImageMbappe";
import ReviewsDecanter from "../../conponents/ReviewsDecanter/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Decanter = ({date, date2, small, setSmall}) => {
    const [showReviews, setShowReviews] = useState(false)

    const mainRef = useRef()

    const takeID = () => {
        if (mainRef.current) {
            mainRef.current.id = "TShirtContainer";
            setTimeout(()=>{
                mainRef.current.id = "";
                setSmall(true)
            }, 450)

        }
    }

    return small ? (
        <div className="smallPage" onClick={()=> setSmall(false)}>
            <div className="imgBlock">
                <img src="https://i.pinimg.com/originals/ae/73/23/ae73230589a162a2ca0d41ac47fbd788.png" alt=""/>
            </div>
            <div className="informationBlock">
                <h2 className="h2ts">Le Creuset Vitesse 750ml Glass Decanter</h2>
                <p className="design">Designed and sold by <span>John Lewis</span></p>
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
    ) : (
        <div ref={mainRef} className="mbappe">
            <img className="backToSmall"
                 src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                 onClick={() => takeID()}/>
            <div className="Decanter">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        <h2 className="h2ts">Le Creuset Vitesse 750ml Glass Decanter, Aerator and Cleaning Balls
                            Set</h2>
                        <p className="design">Designed and sold by <span>John Lewis</span></p>
                        <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>
                    </div>
                    <div className="imgCarousel">
                        <CarouselBoxTShirt element={decanter}/>
                    </div>
                    <div className="features33">
                        <p>Brand information</p>
                        <ul className="firstUl">
                            <li>Le Creuset is recognised the world over for market-leading, premium quality ranges of
                                enamelled cast iron cookware, multi-ply stainless steel, toughened non-stick, and
                                stoneware, along with its outstanding range of wine accessories.
                            </li>
                            <li>Established in 1925, Le Creuset has been making world-class cookware from its foundry in
                                Fresnoy le Grand, France for almost 100 years. Innovation remains at the forefront of
                                their success – they’ve expanded the types of products on offer and have taken advantage
                                of many technological advances since its beginnings.
                            </li>
                            <li>Le Creuset has continued to use the hand-crafted techniques and the original process of
                                forging and casting in the manufacturing of its cookware. This attention to its heritage
                                is also characteristic of the design. The Cocotte, or French Oven, was one of the first
                                cast iron items produced by Le Creuset and is still the most popular item sold in a
                                range of bright retro colours, with Volcanic (orange) the company’s trademark.
                            </li>
                            <li>Used by leading chefs and keen cooks in more than 60 countries around the world
                                including the US, UK, Japan and Australia, Le Creuset cookware offers outstanding
                                performance time after time.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        <h2 className="h2ts">Le Creuset Vitesse 750ml Glass Decanter, Aerator and Cleaning Balls
                            Set</h2>
                        <p className="design">Designed and sold by <span>John Lewis</span></p>
                        <p className="price">€ 2.00 <span>€32,90</span></p>
                        <p className="vat">incl. VAT</p>
                        <p className="color"><span>Brand: </span>Le Creuset</p>
                        <p className="color"><span>Capacity: </span>Decanter: 750ml</p>
                        <p className="color"><span>Country of origin: </span>Romania</p>
                        <p className="color"><span>Dimensions: </span>H25.5 x Dia.6.5cm</p>
                        <p className="color"><span>Dishwasher safe: </span>No - Hand wash only</p>
                        <p className="color"><span>Material:</span>Glass decanter, plastic aerator, stainless steel
                            balls</p>
                        <a className="btnts" href="">
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            <p>Add to cart</p></a>
                        <div className="features221">
                            <p>Brand information</p>
                            <ul className="firstUl">
                                <li>Le Creuset is recognised the world over for market-leading, premium quality ranges of
                                    enamelled cast iron cookware, multi-ply stainless steel, toughened non-stick, and
                                    stoneware, along with its outstanding range of wine accessories.
                                </li>
                                <li>Established in 1925, Le Creuset has been making world-class cookware from its foundry in
                                    Fresnoy le Grand, France for almost 100 years. Innovation remains at the forefront of
                                    their success – they’ve expanded the types of products on offer and have taken advantage
                                    of many technological advances since its beginnings.
                                </li>
                                <li>Le Creuset has continued to use the hand-crafted techniques and the original process of
                                    forging and casting in the manufacturing of its cookware. This attention to its heritage
                                    is also characteristic of the design. The Cocotte, or French Oven, was one of the first
                                    cast iron items produced by Le Creuset and is still the most popular item sold in a
                                    range of bright retro colours, with Volcanic (orange) the company’s trademark.
                                </li>
                                <li>Used by leading chefs and keen cooks in more than 60 countries around the world
                                    including the US, UK, Japan and Australia, Le Creuset cookware offers outstanding
                                    performance time after time.
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
                            <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 98 reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewsDecanter showReviews={showReviews} setShowReviews={setShowReviews}/>
        </div>
    );
};

export default Decanter;