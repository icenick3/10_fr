import React, {useEffect, useRef, useState} from 'react';
import './Pillow.css'

import {cup, pillow} from "../../conponents/ImageMbappe/ImageMbappe";


import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Cup = ({date, date2, small, setSmall, setShowReviews, phone, lang, href, setForm}) => {

    const mainRef = useRef();

    const takeID = () => {
        if (mainRef.current) {
            mainRef.current.id = "zippoContainer";
            setTimeout(() => {
                mainRef.current.id = "";
                setSmall(true)
                if (!phone) {
                    window.document.body.scrollIntoView({behavior: 'auto', block: 'start'});
                } else {

                }
            }, 450)


        }
    }


    return small ? (
        <div className="smallPageNew" onClick={() => setSmall(false)}>
            <div className="imgBlockPillow">
                <img className="imgTs2"
                     src="https://i.pinimg.com/originals/96/bf/9c/96bf9c742331fed54b13db4a71ee537c.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                <h2 className="h2ts">Sophie la Giraffe 5-Piece Meal Set - Balloons</h2>
                <p className="price">£ 3.00 <span>£ 12.99</span> <span id="vat">Incl. VAT</span></p>
                <a className="btnts1">
                    <p>More details</p>
                </a>
            </div>
        </div>
    ) : (
        <div ref={mainRef} className="zippoContainer">
            <img id="backToSmall"
                 src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                 onClick={() => takeID()}/>
            <div className="TShirt">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        <h2 className="h2ts">Sophie la Giraffe 5-Piece Meal Set - Balloons</h2>
                        <p className="price">£ 3.00 <span>£ 12.99</span> <span id="vat">Incl. VAT</span></p>
                    </div>
                    <div className="imgCarouselPillow">
                        <CarouselBoxTShirt element={cup}/>
                    </div>
                        <div className="features">
                            <h2>About this item</h2>
                            <p className="pClass">Sophie la Giraffe meal set includes:</p>
                            <ul id="fUl" className="firstUl">
                                <li>- Plate with anti-slip base.</li>
                                <li>- Bowl with suction cup to stay stable in case of clumsy movements.</li>
                                <li>- Leak-proof cup with anti-slip base and an ergonomic spout that promotes natural sucking like a bottle.</li>
                                <li>- Set of 2 utensils (spoon and fork) specially designed for baby's little hands.</li>
                            </ul>
                            <p className="pClass">Features:</p>
                            <ul id="fUl" className="firstUl">
                                <li>- Packaged in a lovely window box.</li>
                                <li>- Care instructions: dishwasher safe.</li>
                                <li>- Material: Melamine and silicone.</li>
                                <li>- Recommended age: 6 months and above.</li>
                            </ul>
                        </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                            <div>
                                <h2 className="h2ts">Sophie la Giraffe 5-Piece Meal Set - Balloons</h2>
                                <p className="price">£ 3.00 <span>£ 12.99</span> </p>
                                <p className="vat">Incl. VAT</p>
                            </div>
                        <p className="odd">Take part in our contest and get a chance to get the prize by clicking on the button below</p>
                        <a className="btnts pillow228" href={href}>
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            <p>Add to cart</p>
                        </a>
                        <div className="features221">
                            <h2>About this item</h2>
                            <p className="pClass">Sophie la Giraffe meal set includes:</p>
                            <ul id="fUl" className="firstUl">
                                <li>- Plate with anti-slip base.</li>
                                <li>- Bowl with suction cup to stay stable in case of clumsy movements.</li>
                                <li>- Leak-proof cup with anti-slip base and an ergonomic spout that promotes natural sucking like a bottle.</li>
                                <li>- Set of 2 utensils (spoon and fork) specially designed for baby's little hands.</li>
                            </ul>
                            <p className="pClass">Features:</p>
                            <ul id="fUl" className="firstUl">
                                <li>- Packaged in a lovely window box.</li>
                                <li>- Care instructions: dishwasher safe.</li>
                                <li>- Material: Melamine and silicone.</li>
                                <li>- Recommended age: 6 months and above.</li>
                            </ul>
                        </div>
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/72/13/a1/7213a16165e9ba30d33be8c953faae28.png"
                                 alt="FranceFlag"/>
                            <div>

                              <div>
                                  <p className="devTitle">Delivery</p>
                                  <p className="devP">Express by {date}<br />
                                      Standard by {date2}</p>
                                </div>
                            </div>
                        </div>
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/35/96/f5/3596f54bbd8a9bbe7a0219847da373c0.png"
                                 alt="return"/>
                            <div>
                              <div>
                                  <p className="devTitle">Free and Easy Returns</p>
                                  <p className="devP">Exchange or refund guaranteed for all orders.</p>
                                </div>
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
                                <div className="barPillow">
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
                                <div className="barPillow">
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
                                <div className="barPillow">
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
                                <div className="barPillow">
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
                                <div className="barPillow">
                                    <div className="progressBar5">
                                    </div>
                                </div>
                            </div>
                           <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read the 44 Reviews</p>
                        </div>
                    </div>
                    <div className="backContainer">
                        <img className="backToSmall22"
                             src="https://i.pinimg.com/originals/e1/ec/ca/e1ecca4d141317c2fef51dce8ca995d1.png" alt=""
                             onClick={() => takeID()}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cup;