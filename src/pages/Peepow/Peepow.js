import React, {useRef, useState} from 'react';
import './Flag.css'
import {flag, pee} from "../../conponents/ImageMbappe/ImageMbappe";
import ReviewsFlag from "../../conponents/ReviewsFlag/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Peepow = ({date, date2, small, setSmall, setShowReviews, phone, lang, href, setForm}) => {

    const mainRef = useRef()

    const takeID = () => {
        if (mainRef.current) {
            mainRef.current.id = "TShirtContainer";
            setTimeout(() => {
                mainRef.current.id = "";
                setSmall(true)
                if (!phone) {
                    window.document.body.scrollIntoView({ behavior: 'auto', block: 'start' });
                } else {
                }
            }, 450)


        }
    }

    return small ? (
        <div className="smallPageNew" onClick={() => setSmall(false)}>
            <div className="imgBlock">
                <img className="imgTs2"
                     src="https://i.pinimg.com/originals/5b/97/84/5b97842367cc772ca047a1e3d86c4d66.jpg" alt=""/>
            </div>
            <div className="informationBlock">

                <h2 className="h2ts">Pot 3-in-1 Peepow</h2>
                <p className="price">£ 6.99 <span>£ 26.00</span> <span id="vat">Incl. VAT</span></p>
                <a className="btnts1" onClick={() => setSmall(false)}>
                    <img src="https://i.pinimg.com/originals/9e/63/21/9e6321883f018a4613fa5d8960a161d2.png"
                         alt=""/>
                    <p>More details</p>
                </a>
            </div>
        </div>
    ) : (
        <div ref={mainRef} className="mbappe">
            <img id="backToSmall"
                 src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                 onClick={() => takeID()}/>
            <div className="TShirt">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        <h2 className="h2ts">Pot 3-in-1 Peepow</h2>
                        <p className="price">£ 6.99 <span>£ 26.00</span> <span id="vat">Incl. VAT</span></p>
                    </div>
                    <div className="imgCarouselPillow">
                        <CarouselBoxTShirt element={pee}/>
                    </div>
                    <div className="features">
                        <h2>About this item</h2>
                        <p>Prémaman offers you this 3-in-1 pot.</p>
                        <br/>
                        <p>Both a pot, a reducer, and a step stool, this versatile pot accompanies your child through the different stages of potty training.</p>
                        <p className="pClass">Features:</p>
                        <ul id="fUl" className="firstUl">
                            <li>- Convertible pot, reducer, step stool.</li>
                            <li>- Suitable for children aged 20 months.</li>
                            <li>- Easy to use.</li>
                        </ul>
                    </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        <div>
                            <h2 className="h2ts">Pot 3-in-1 Peepow</h2>
                            <p className="price">£ 6.99 <span>£ 26.00</span></p>
                            <p className="vat">Incl. VAT</p>
                        </div>
                        <p className="odd">Take part in our contest and get a chance to get the prize by clicking on the button below</p>
                        <a className="btnts flag228" href={href}>
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            <p>Add to cart</p>
                        </a>
                        <div className="features221">
                            <h2>About this item</h2>
                            <p>Prémaman offers you this 3-in-1 pot.</p>
                            <br/>
                            <p>Both a pot, a reducer, and a step stool, this versatile pot accompanies your child through the different stages of potty training.</p>
                            <p className="pClass">Features:</p>
                            <ul id="fUl" className="firstUl">
                                <li>- Convertible pot, reducer, step stool.</li>
                                <li>- Suitable for children aged 20 months.</li>
                                <li>- Easy to use.</li>
                            </ul>
                        </div>
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/72/13/a1/7213a16165e9ba30d33be8c953faae28.png"
                                 alt="FranceFlag"/>
                            <div>
                                    <p className="devTitle">Delivery</p>
                                    <p className="devP">Express by {date}<br />
                                        Standard by {date2}</p>
                            </div>
                        </div>
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/35/96/f5/3596f54bbd8a9bbe7a0219847da373c0.png"
                                 alt="return"/>
                            <div>
                                    <p className="devTitle">Free and Easy Returns</p>
                                    <p className="devP">Exchange or refund guaranteed for all orders.</p>
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
                                <div className="barFlag">
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
                                <div className="barFlag">
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
                                <div className="barFlag">
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
                                <div className="barFlag">
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
                                <div className="barFlag">
                                    <div className="progressBar5">
                                    </div>
                                </div>
                            </div>
                            <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read the 55 Reviews</p>
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
export default Peepow;