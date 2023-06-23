import React, {useRef, useState} from 'react';
import './Mbappe.css'
import {cameraImage, Mbappephoto} from "../../conponents/ImageMbappe/ImageMbappe";

import ReviewsMbappe from "../../conponents/ReviewsMbappe/Reviews";

import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Camera = ({date, date2, small, setSmall, setShowReviews, phone, lang, href, setForm}) => {


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
                <img src="https://i.pinimg.com/originals/96/5d/83/965d83d194055d1ee62e870fbed2ea7c.jpg" alt=""/>
            </div>
            <div className="informationBlock2">
                <h2 className="h2ts">Nanit Pro Smart Baby Monitor & Wall Mount</h2>
                <p className="price">£ 9.99 <span>£ 70.00</span> <span id="vat">Incl. VAT</span></p>
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
            <div className="MBappe">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        <h2 className="h2ts">Nanit Pro Smart Baby Monitor & Wall Mount</h2>
                        <p className="price">£ 9.99 <span>£ 70.00</span> <span id="vat">Incl. VAT</span></p>
                    </div>
                    <div className="imgCarousel">
                        <CarouselBoxTShirt element={cameraImage}/>
                    </div>
                    <div className="features33">
                        <h2>About this item</h2>
                        <p>Eliminate the stress of bedtime and naps with the Nanit Pro Smart Baby Monitor & Wall Mount. Designed to be placed above your little one's crib, it provides you with a clear and real-time overhead view of your baby, streamed directly to your smart device. Nanit's patented technology then analyzes your baby's sleep patterns to provide personalized insights and expert guidance to improve the quality of sleep for everyone. It comes with the Nanit breathable band that is suitable for up to 3 months and monitors your baby's breaths per minute, quickly responding to any changes and alerting you through the app.</p>
                        <ul className="firstUl">
                            <li>Crystal-clear 1080p HD video quality, day and night</li>
                            <li>App allows you to see and connect with your little one from almost anywhere</li>
                            <li>Split-screen function: view and control two cameras simultaneously in the app</li>
                            <li>256-bit AES encryption to ensure the security of your data</li>
                            <li>Real-time sleep analysis</li>
                            <li>Personalized expert advice</li>
                            <li>Breathable sensor-free band monitors baby's breathing (0-3 months)</li>
                            <li>Two-way audio and background audio</li>
                            <li>White noise and nature sounds for a soothing environment</li>
                            <li>One year of included Insights Basic</li>
                            <li>Dimensions: 4.2 x 3.3 x 8"</li>
                            <li>Compatible with iOS, iPadOS, Mac/Apple computers, Android, and Amazon Echo Show</li>
                        </ul>
                    </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        <div>
                            <h2 className="h2ts">Nanit Pro Smart Baby Monitor & Wall Mount</h2>
                            <p className="price">£ 9.99 <span>£ 70.00</span></p>
                            <p className="vat">Incl. VAT</p>
                        </div>
                        <p className="odd">Take part in our contest and get a chance to get the prize by clicking on the button below</p>
                        <a className="btnts mbappe228" href={href}>
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            <p>Add to cart</p>
                        </a>
                        <div className="features221">
                            <h2>About this item</h2>
                            <p>Eliminate the stress of bedtime and naps with the Nanit Pro Smart Baby Monitor & Wall Mount. Designed to be placed above your little one's crib, it provides you with a clear and real-time overhead view of your baby, streamed directly to your smart device. Nanit's patented technology then analyzes your baby's sleep patterns to provide personalized insights and expert guidance to improve the quality of sleep for everyone. It comes with the Nanit breathable band that is suitable for up to 3 months and monitors your baby's breaths per minute, quickly responding to any changes and alerting you through the app.</p>
                            <ul className="firstUl">
                                <li>Crystal-clear 1080p HD video quality, day and night</li>
                                <li>App allows you to see and connect with your little one from almost anywhere</li>
                                <li>Split-screen function: view and control two cameras simultaneously in the app</li>
                                <li>256-bit AES encryption to ensure the security of your data</li>
                                <li>Real-time sleep analysis</li>
                                <li>Personalized expert advice</li>
                                <li>Breathable sensor-free band monitors baby's breathing (0-3 months)</li>
                                <li>Two-way audio and background audio</li>
                                <li>White noise and nature sounds for a soothing environment</li>
                                <li>One year of included Insights Basic</li>
                                <li>Dimensions: 4.2 x 3.3 x 8"</li>
                                <li>Compatible with iOS, iPadOS, Mac/Apple computers, Android, and Amazon Echo Show</li>
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
                            <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read the 31 Reviews</p>
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

export default Camera;