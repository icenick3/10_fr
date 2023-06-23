import React, {useRef, useState} from 'react';
import './Light.css'

import {
    blackLight, blueLight, brownLight, grayLight, greenLight, medBlue, medPink, orangeLight, redLight,
} from "../../conponents/ImageMbappe/ImageMbappe";
import ReviewsLight from "../../conponents/ReviewsLight/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Medical = ({date, date2, setSmall, small, setShowReviews, phone, lang, href, setForm}) => {

    const [color, setColor] = useState('Bleu')


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
                if (!phone) {
                    window.document.body.scrollIntoView({behavior: 'auto', block: 'start'});
                } else {

                }
            }, 450)


        }
    }

    return small ? (
        <div className="smallPageNew" onClick={() => setSmall(false)}>
            <div className="imgBlock">
                <img src="https://i.pinimg.com/originals/db/de/2f/dbde2fde3576b885b8c488583d6098e5.jpg" alt=""/>
            </div>
            <div className="informationBlock2">
                <h2 className="h2ts">Baby Care Kit</h2>
                <p className="price">£ 6.99 <span>£ 28.50</span> <span id="vat">Incl. VAT</span></p>
                <a className="btnts1" onClick={() => setSmall(false)}>
                    <p>More details</p>
                </a>
            </div>
        </div>
    ) : (
        <div ref={mainRef} className="zippoContainer">
            <img id="backToSmall"
                 src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                 onClick={() => takeID()}/>
            <div className="Light">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        <h2 className="h2ts">Baby Care Kit</h2>
                        <p className="price">£ 6.99 <span>£ 28.50</span> <span id="vat">Incl. VAT</span></p>
                    </div>
                    <div className="imgCarousel">
                        {color === 'Blue' && <CarouselBoxTShirt element={medBlue}/>}
                        {color === 'Peachy' && <CarouselBoxTShirt element={medPink}/>}
                    </div>
                    <div className="features">
                        <h2>About this item</h2>
                        <p>Babymoov introduces a complete care kit with 9 essential accessories for daily baby care and hygiene. It is easy to carry everywhere for your travels and convenient to keep near the changing table at home.</p>
                        <br/>
                        <p>These accessories will allow you to monitor your baby's temperature, trim their nails to prevent injuries, check the bathwater temperature, and soothe their gums during teething.</p>
                        <br/>
                        <p>You can organize the care kit according to your preferences, thanks to its various elastic bands and interior and exterior pockets.</p>
                        <br/>
                        <p>It is a must-have for parents who want easy access to the accessories by unfolding the kit and carrying it with them everywhere (handbag, diaper bag, etc.) due to its compact size, convenience, and lightweight design.</p>
                        <p className="pClass">Included accessories:</p>
                        <br/>
                        <p className="pClass">For care:</p>
                        <ul id="fUl" className="firstUl">
                            <li>1 digital thermometer with a soft tip</li>
                            <li>1 baby nasal aspirator (with a backflow prevention reservoir)</li>
                        </ul>
                        <p className="pClass">For nails:</p>
                        <ul id="fUl" className="firstUl">
                            <li>1 pair of scissors with rounded tips</li>
                            <li>1 nail file</li>
                            <li>1 nail clipper suitable for baby's small fingers</li>
                        </ul>
                        <p className="pClass">For bathing:</p>
                        <ul id="fUl" className="firstUl">
                            <li>1 bath thermometer</li>
                            <li>1 soft brush</li>
                        </ul>
                        <p className="pClass">For teeth:</p>
                        <ul id="fUl" className="firstUl">
                            <li>1 refrigerable teething ring</li>
                            <li>1 gum massager</li>
                        </ul>
                        <p className="pClass">Specifications:</p>
                        <ul id="fUl" className="firstUl">
                            <li>Usage: From birth</li>
                            <li>Dimensions: 22 x 18 x 5 cm</li>
                            <li>Trousse material: 100% Polyester</li>
                            <li>Care: Wipe clean with a sponge or damp cloth</li>
                        </ul>
                    </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        <h2 className="h2ts">Baby Care Kit</h2>
                        <p className="price">£ 6.99 <span>£ 28.50</span></p>
                         <p className="vat">Incl. VAT</p>
                         <p className="color"><span>Color</span>{color}</p>
                        <div className="colors">
                            <div className="black" onClick={() => colorOnclick('Blue')}>
                                {color === 'Blue' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="blue" onClick={() => colorOnclick('Peachy')}>
                                {color === 'Peachy' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                        </div>
                        <p className="odd">Take part in our contest and get a chance to get the prize by clicking on the button below</p>
                        <a className="btnts light2288" href={href}>
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            <p>Add to cart</p>
                        </a>
                        <div className="features221">
                            <h2>About this item</h2>
                            <p>Babymoov introduces a complete care kit with 9 essential accessories for daily baby care and hygiene. It is easy to carry everywhere for your travels and convenient to keep near the changing table at home.</p>
                            <br/>
                            <p>These accessories will allow you to monitor your baby's temperature, trim their nails to prevent injuries, check the bathwater temperature, and soothe their gums during teething.</p>
                            <br/>
                            <p>You can organize the care kit according to your preferences, thanks to its various elastic bands and interior and exterior pockets.</p>
                            <br/>
                            <p>It is a must-have for parents who want easy access to the accessories by unfolding the kit and carrying it with them everywhere (handbag, diaper bag, etc.) due to its compact size, convenience, and lightweight design.</p>
                            <p className="pClass">Included accessories:</p>
                            <br/>
                            <p className="pClass">For care:</p>
                            <ul id="fUl" className="firstUl">
                                <li>1 digital thermometer with a soft tip</li>
                                <li>1 baby nasal aspirator (with a backflow prevention reservoir)</li>
                            </ul>
                            <p className="pClass">For nails:</p>
                            <ul id="fUl" className="firstUl">
                                <li>1 pair of scissors with rounded tips</li>
                                <li>1 nail file</li>
                                <li>1 nail clipper suitable for baby's small fingers</li>
                            </ul>
                            <p className="pClass">For bathing:</p>
                            <ul id="fUl" className="firstUl">
                                <li>1 bath thermometer</li>
                                <li>1 soft brush</li>
                            </ul>
                            <p className="pClass">For teeth:</p>
                            <ul id="fUl" className="firstUl">
                                <li>1 refrigerable teething ring</li>
                                <li>1 gum massager</li>
                            </ul>
                            <p className="pClass">Specifications:</p>
                            <ul id="fUl" className="firstUl">
                                <li>Usage: From birth</li>
                                <li>Dimensions: 22 x 18 x 5 cm</li>
                                <li>Trousse material: 100% Polyester</li>
                                <li>Care: Wipe clean with a sponge or damp cloth</li>
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
                            <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read the 48 Reviews</p>
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

export default Medical;