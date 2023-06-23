import React, { useEffect, useRef, useState } from 'react';
import './Zippo.css'

import {
    bodic,
} from "../../conponents/ImageMbappe/ImageMbappe";


import CarouselBoxZippo from "../../conponents/CarouselBoxZippo/CarouselBoxTShirt";

const Bodyk = ({ date, date2, small, setSmall, setShowReviews, phone, lang, href, setForm }) => {

    const [color, setColor] = useState('52')


    const mainRef = useRef()

    const sizeRefs = [
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
    ]

    useEffect(() => {
        sizeRefs.map(element => {
            if (element.current) {
                if (element.current.innerText === color) {
                    element.current.id = 'clicked'
                } else {
                    element.current.id = ''
                }
            }

        })
    }, [color])

    const takeID = () => {
        if (mainRef.current) {
            mainRef.current.id = "zippoContainer";
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
                <img className="imgTs"
                    src="https://i.pinimg.com/originals/8b/ff/8e/8bff8ea4bcd7985da9b8cd5b27d64ee3.jpg" alt="" />
            </div>
            <div className="informationBlock2">
                <h2 className="h2ts">Baby body, 5 pieces - for a boy</h2>
                <p className="price">£ 3.00 <span>£ 11.99</span> <span id="vat">Incl. VAT</span></p>
                <a className="btnts1" onClick={() => setSmall(false)}>
                    <p>More details</p>
                </a>
            </div>
        </div>
    ) : (
        <div ref={mainRef} className="zippoContainer">
            <img id="backToSmall"
                src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                onClick={() => takeID()} />
            <div className="Zippo">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        <h2 className="h2ts">Baby body, 5 pieces - for a boy</h2>
                        <p className="price">£ 3.00 <span>£ 11.99</span> <span id="vat">incl. VAT</span></p>
                    </div>
                    <div className="imgCarContainerZippo">
                        <div className="imageCont">
                            <CarouselBoxZippo element={bodic} />
                        </div>
                    </div>
                    <div className="features22">
                        <h2>About this article</h2>
                        <ul className="firstUl">
                            <li>Round neckline</li>
                            <li>Openings for easy dressing and undressing</li>
                            <li>Short sleeves</li>
                            <li>Button snap closure</li>
                            <li>Decorative print</li>
                        </ul>
                    </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        <h2 className="h2ts">Baby Bodysuit, 5-piece - for a boy</h2>
                        <p className="price">£ 3.00 <span>£ 11.99</span></p>
                        <p className="vat">Incl. VAT</p>
                        <p className="color"><span>Size - </span>{color}</p>
                        <div className="taile">
                            <div ref={sizeRefs[0]} id="clicked" onClick={() => setColor('56')}>56</div>
                            <div ref={sizeRefs[1]} onClick={() => setColor('62')}>62</div>
                            <div ref={sizeRefs[2]} onClick={() => setColor('68')}>68</div>
                            <div ref={sizeRefs[3]} onClick={() => setColor('74')}>74</div>
                            <div ref={sizeRefs[4]} onClick={() => setColor('80')}>80</div>
                            <div ref={sizeRefs[5]} onClick={() => setColor('86')}>86</div>
                            <div ref={sizeRefs[6]} onClick={() => setColor('92')}>92</div>
                            <div ref={sizeRefs[7]} onClick={() => setColor('98')}>98</div>
                        </div>
                        <p className="odd">Take part in our contest and get a chance to get the prize by clicking on the button below</p>
                        <a className="btnts zippo228" href={href}>
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                alt="" />

                            <p>Add to Cart</p>
                        </a>
                        <div className="features221">
                            <h2>About this article</h2>
                            <ul className="firstUl">
                                <li>Round neckline</li>
                                <li>Openings for easy dressing and undressing</li>
                                <li>Short sleeves</li>
                                <li>Button snap closure</li>
                                <li>Decorative print</li>
                            </ul>
                        </div>
                        <p className="color"><span>Main fabric composition:</span> 100% cotton.</p>
                        <div className="iconsBlock">
                            <img src="https://i.pinimg.com/originals/b1/45/2a/b1452af4c60bf18ead6ee3ef7e5dab76.png"
                                alt="" />
                            <p>Machine wash at a maximum temperature of 30°C.</p>
                        </div>
                        <div className="iconsBlock">
                            <img src="https://i.pinimg.com/originals/46/1a/61/461a61e52a6b9d095a989f8a4b118371.png"
                                alt="" />
                            <p>Do not tumble dry.</p>
                        </div>
                        <div className="iconsBlock">
                            <img src="https://i.pinimg.com/originals/eb/68/9d/eb689d2f1356a346e13c2e6d1b169238.png"
                                alt="" />
                            <p>Do not bleach.</p>
                        </div>
                        <div className="iconsBlock">
                            <img src="https://i.pinimg.com/originals/67/c1/25/67c125d86469b17b1cfa4ea4121c68ab.png"
                                alt="" />
                            <p>Iron at a maximum temperature of 110°C.</p>
                        </div>
                        <div className="iconsBlock">
                            <img src="https://i.pinimg.com/originals/0e/87/f2/0e87f2eb7caaf974ce16c15cd25c9e9a.png"
                                alt="" />
                            <p>Do not dry clean</p>
                        </div>
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/72/13/a1/7213a16165e9ba30d33be8c953faae28.png"
                                alt="FranceFlag" />
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
                                alt="return" />
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
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                    alt="" />
                                <div className="bar">
                                    <div className="progressBar1Zippo">
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                    alt="" />
                                <div className="bar">
                                    <div className="progressBar2Zippo">
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                    alt="" />
                                <div className="bar">
                                    <div className="progressBar3Zippo">
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                    alt="" />
                                <div className="bar">
                                    <div className="progressBar4Zippo">
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="https://i.pinimg.com/originals/7d/d0/45/7dd045a8dc0e884b0a49f53abf22d2d0.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                    alt="" />
                                <img src="https://i.pinimg.com/originals/3b/70/0e/3b700e77b647c29b9bfa6adfd36969ad.png"
                                    alt="" />
                                <div className="bar">
                                    <div className="progressBar5Zippo">
                                    </div>
                                </div>
                            </div>
                            <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read the 23 Reviews</p>
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

export default Bodyk;