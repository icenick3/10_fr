import React, {useEffect, useRef, useState} from 'react';
import './TShirt.css'
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";
import {towel} from "../../conponents/ImageMbappe/ImageMbappe";


const Towel = ({date, date2, setSmall, small, setShowReviews, setShowGuide, phone, lang, href, setForm}) => {


    const [color, setColor] = useState('Purple')
    const [side, setSide] = useState('Front')
    const [size, setSize] = useState('S')

    const frontRef = useRef()
    const backRef = useRef()

    const mainRef = useRef()

    const sizeRefs = [
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
                if (element.current.innerText === size) {
                    element.current.id = 'selected'
                } else {
                    element.current.id = ''
                }
            }

        })
    }, [size])

    const colorOnclick = (color) => {
        setColor(color)
    }
    const sideOnclick = (side) => {
        setSide(side)
        if (side === 'Front') {
            frontRef.current.classList.add('selected')
            backRef.current.classList.remove('selected2')
            frontRef.current.classList.remove('front')
            backRef.current.classList.add('back')
        } else {
            backRef.current.classList.add('selected2')
            frontRef.current.classList.remove('selected')
            backRef.current.classList.remove('back')
            frontRef.current.classList.add('front')
        }
    }

    const sizeOnclick = (size) => {
        setSize(size)
    }

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
                     src="https://i.pinimg.com/originals/d3/f9/c2/d3f9c2f2fb67fbb8abfe5d12a0ec3adf.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                <h2 className="h2ts">Hooded Bear-shaped Baby Bath Towel</h2>
                <p className="price">£ 3.00 <span>£ 14.50</span> <span id="vat">Incl. VAT</span></p>
                <a className="btnts1" onClick={() => setSmall(false)}>
                    <p>More details</p>
                </a>
            </div>
        </div>
    ) : (
        <div ref={mainRef} className="TShirtContainer">
            <img id="backToSmall"
                 src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                 onClick={() => takeID()}/>
            <div className="TShirt">
                <div className="mobileHeader">
                    <h2 className="h2ts">Hooded Bear-shaped Baby Bath Towel</h2>
                    <p className="price">£ 3.00 <span>£ 14.50</span> <span id="vat">Incl. VAT</span></p>
                </div>
                <div className="imgContainer">
                    <div className="imageContTS">
                        <CarouselBoxTShirt element={towel}/>
                    </div>
                    <div className="features">
                        <h2>About this item</h2>
                        <p>Toddlers will love being wrapped in our Hooded Bear-shaped Baby Bath Towel. It is made from
                            ultra-soft organic cotton, which is highly absorbent and dries quickly. We have added a hood
                            for extra warmth, featuring an embroidered bear face and cute little ears.</p>
                        <ul>
                            <li>Made from 100% organic micro cotton</li>
                            <li>Suitable for up to 9 months</li>
                            <li>Measures 75 x 75 cm</li>
                            <li>Temperature-regulating hood</li>
                            <li>Absorbs 250 times more water than regular cotton</li>
                            <li>Embroidered face detail</li>
                        </ul>
                    </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        <h2 className="h2ts">Hooded Bear-shaped Baby Bath Towel</h2>
                        <p className="price">£ 3.00 <span>£ 14.50</span></p>
                        <p className="vat">Incl. VAT</p>
                        <p className="odd">Take part in our contest and get a chance to get the prize by clicking on the
                            button below</p>
                        <a className="btnts tshirt228" href={href}>
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            <p>Add to cart</p>
                        </a>
                        <div className="features221">
                            <h2>About this item</h2>
                            <p>Toddlers will love being wrapped in our Hooded Bear-shaped Baby Bath Towel. It is made
                                from ultra-soft organic cotton, which is highly absorbent and dries quickly. We have
                                added a hood for extra warmth, featuring an embroidered bear face and cute little
                                ears.</p>
                            <ul>
                                <li>Made from 100% organic micro cotton</li>
                                <li>Suitable for up to 9 months</li>
                                <li>Measures 75 x 75 cm</li>
                                <li>Temperature-regulating hood</li>
                                <li>Absorbs 250 times more water than regular cotton</li>
                                <li>Embroidered face detail</li>
                            </ul>
                        </div>
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/72/13/a1/7213a16165e9ba30d33be8c953faae28.png"
                                 alt="FranceFlag"/>
                            <div>
                                <p className="devTitle">Delivery</p>
                                <p className="devP">Express by {date}<br/>
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
                            <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read the 51 Reviews</p>
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

export default Towel;