import React, {useRef, useState} from 'react';
import './Pampers.css'
import {decanter, pampers} from "../../conponents/ImageMbappe/ImageMbappe";
import ReviewsDecanter from "../../conponents/ReviewsDecanter/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";
const Pampers = ({date, date2, small, setSmall, setShowReviews, phone, lang, href, setForm}) => {

    const mainRef = useRef()
    const takeID = () => {
        if (mainRef.current) {
            mainRef.current.id = "TShirtContainer";
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
                <img className="imgTs2"
                     src="https://i.pinimg.com/originals/eb/d0/d7/ebd0d787c5ce68dd9c4c22f86c7fad58.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                <h2 className="h2ts">Pampers Pack of 26 diapers for baby Size 1 (2 to 5 kg)</h2>
                <p className="price">£ 3.00 <span>£ 11.99</span> <span id="vat">incl. VAT</span></p>
                <a className="btnts1" onClick={() => setSmall(false)}>
                    <p>More details</p>
                </a>
            </div>
        </div>
    ) : (
        <div ref={mainRef} className="mbappe">
            <img id="backToSmall"
                 src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                 onClick={() => takeID()}/>
            <div className="Pampers">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        <h2 className="h2ts">Pampers Pack of 26 diapers for baby Size 1 (2 to 5 kg)</h2>
                        <p className="price">£ 3.00 <span>£ 11.99</span> <span id="vat">incl. VAT</span></p>
                    </div>
                    <div className="imgCarousel">
                        <CarouselBoxTShirt element={pampers}/>
                    </div>
                    <div className="features33">
                        <p>About this item</p>
                        <ul className="firstUl">
                            <li>The DermacoMFORT inner fleece provides the softest comfort from Pampers. It absorbs moisture and liquid stools and keeps them away from the baby's skin.</li>
                            <li>Diapers with selected soft materials for Pampers' softest touch on the baby's sensitive skin.</li>
                            <li>Soft side wings adapt to your baby's belly and provide individual comfort.</li>
                            <li>Unique 3-position protection system for complete protection for up to 12 hours.</li>
                            <li>The urine indicator indicates when it might be time for a new diaper.</li>
                            <li>Navel-shaped design to protect your newborn's sensitive belly.</li>
                            <li>Dermatologically tested and free from 26 EU fragrance allergens.</li>
                        </ul>
                    </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        <div>
                            <h2 className="h2ts">Pampers Pack of 26 diapers for baby Size 1 (2 to 5 kg)</h2>
                            <p className="price">£ 3.00 <span>£ 11.99</span></p>
                            <p className="vat">incl. VAT</p>
                            <p className="color"><span>Brand: </span>Pampers</p>
                            <p className="color"><span>Number of items: </span>1</p>
                            <p className="color"><span>Color: </span>White</p>
                            <p className="color"><span>Age range (description): </span>Baby</p>
                            <p className="color"><span>Material: </span>Polypropylene</p>
                            <p className="color"><span>Unused material: </span>No fragrance allergens</p>
                            <p className="color"><span>Reuse: </span>Disposable</p>
                            <p className="color"><span>Size: </span>Size 1 (26 Units)</p>
                            <p className="color"><span>Number of units: </span>26 units</p>
                        </div>
                        <p className="odd">Take part in our contest and get a chance to get the prize by clicking on the button below</p>
                        <a className="btnts decanter228" href={href}>
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            <p>Add to cart</p>
                        </a>
                        <div className="features221">
                            <p>About this item</p>
                            <ul className="firstUl">
                                <li>The DermacoMFORT inner fleece provides the softest comfort from Pampers. It absorbs moisture and liquid stools and keeps them away from the baby's skin.</li>
                                <li>Diapers with selected soft materials for Pampers' softest touch on the baby's sensitive skin.</li>
                                <li>Soft side wings adapt to your baby's belly and provide individual comfort.</li>
                                <li>Unique 3-position protection system for complete protection for up to 12 hours.</li>
                                <li>The urine indicator indicates when it might be time for a new diaper.</li>
                                <li>Navel-shaped design to protect your newborn's sensitive belly.</li>
                                <li>Dermatologically tested and free from 26 EU fragrance allergens.</li>
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
                            <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read the 64 Reviews</p>
                        </div>
                    </div>
                    <div className="backContainer" onClick={() => takeID()}>
                        <img className="backToSmall22"
                             src="https://i.pinimg.com/originals/e1/ec/ca/e1ecca4d141317c2fef51dce8ca995d1.png" alt=""
                           />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pampers;