import React, {useEffect, useRef, useState} from 'react';
import './TShirt.css'
import PreFooter from "../../conponents/PreFooter/PreFooter";
import SizeGuide from "../../conponents/SizeGuide/SizeGuide";
import Reviews from "../../conponents/Reviews/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";
import {
    backDarkRedImages,
    backGoldImages,
    backGreenImages,
    backKiwiImages,
    backLightPinkImages, backPurpleImages,
    backRed,
    blackBack,
    blackFront,
    blueBackLinks,
    blueFrontLinks,
    cremeBack,
    cremeFront, frontDarkRedImages, frontGoldImages,
    frontGreenImages,
    frontKiwiImages,
    frontLightPinkImages,
    frontPurpleImages,
    frontRed,
    HeatherGreyBack,
    HeatherGreyFront
} from "../../conponents/ImageMbappe/ImageMbappe";

const TShirt = () => {


    const [color, setColor] = useState('Heather Grey')
    const [side, setSide] = useState('Front')
    const [size, setSize] = useState('S')
    const [showGuide, setShowGuide] = useState(false)
    const [showReviews, setShowReviews] = useState(false)

    const frontRef = useRef()
    const backRef = useRef()

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
            if (element.current.innerText === size) {
                element.current.id = 'selected'
            } else {
                element.current.id = ''
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


    return (
        <div className="TShirtContainer">
            <div className="TShirt">
                <div className="imgContainer">
                    {color === 'Heather Grey' && side === 'Front' && <CarouselBoxTShirt element={HeatherGreyFront}/>}
                    {color === 'Heather Grey' && side === 'Back' && <CarouselBoxTShirt element={HeatherGreyBack}/>}
                    {color === 'Black' && side === 'Front' && <CarouselBoxTShirt element={blackFront}/>}
                    {color === 'Black' && side === 'Back' && <CarouselBoxTShirt element={blackBack}/>}
                    {color === 'Blue' && side === 'Front' && <CarouselBoxTShirt element={blueFrontLinks}/>}
                    {color === 'Blue' && side === 'Back' && <CarouselBoxTShirt element={blueBackLinks}/>}
                    {color === 'Creme' && side === 'Front' && <CarouselBoxTShirt element={cremeFront}/>}
                    {color === 'Creme' && side === 'Back' && <CarouselBoxTShirt element={cremeBack}/>}
                    {color === 'Red' && side === 'Front' && <CarouselBoxTShirt element={frontRed}/>}
                    {color === 'Red' && side === 'Back' && <CarouselBoxTShirt element={backRed}/>}
                    {color === 'Kiwi' && side === 'Front' && <CarouselBoxTShirt element={frontKiwiImages}/> }
                    {color === 'Kiwi' && side === 'Back' && <CarouselBoxTShirt element={backKiwiImages}/>}
                    {color === 'Green' && side === 'Front' && <CarouselBoxTShirt element={frontGreenImages}/>}
                    {color === 'Green' && side === 'Back' && <CarouselBoxTShirt element={backGreenImages}/>}
                    {color === 'Light Pink' && side === 'Front' && <CarouselBoxTShirt element={frontLightPinkImages}/>}
                    {color === 'Light Pink' && side === 'Back' && <CarouselBoxTShirt element={backLightPinkImages}/>}
                    {color === 'Purple' && side === 'Front' && <CarouselBoxTShirt element={frontPurpleImages}/>}
                    {color === 'Purple' && side === 'Back' && <CarouselBoxTShirt element={backPurpleImages}/>}
                    {color === 'Gold' && side === 'Front' && <CarouselBoxTShirt element={frontGoldImages}/>}
                    {color === 'Gold' && side === 'Back' && <CarouselBoxTShirt element={backGoldImages}/>}
                    {color === 'Dark Red' && side === 'Front' && <CarouselBoxTShirt element={frontDarkRedImages}/>}
                    {color === 'Dark Red' && side === 'Back' && <CarouselBoxTShirt element={backDarkRedImages}/>}
                    <div className="features">
                        <h2>Features</h2>
                        <ul>
                            <li>The standard, traditional t-shirt for everyday wear</li>
                            <li>Classic, generous, boxy fit</li>
                            <li>Male model shown is 6'0" / 183 cm tall and wearing size Medium</li>
                            <li>Female model shown is 5'8" / 173 cm tall and wearing size Small</li>
                            <li>Heavyweight 5.3 oz / 180 gsm fabric, solid colors are 100% preshrunk cotton, heather
                                grey is
                                90% cotton/10% polyester, denim heather is 50% cotton/ 50% polyester
                            </li>
                            <li>Double-needle hems and neck band for durability</li>
                        </ul>
                    </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        <h2 className="h2ts">Russian War Ship Classic T-Shirt</h2>
                        <p className="design">Designed and sold by <span>GoyetteKaylee</span></p>
                        <p className="price">€ 2.00 <span>€18.01</span></p>
                        <p className="vat">incl. VAT</p>
                        <p className="color"><span>Color</span>{color}</p>
                        <div className="colors">
                            <div className="grey" onClick={() => colorOnclick('Heather Grey')}>
                                {color === 'Heather Grey' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="black" onClick={() => colorOnclick('Black')}>
                                {color === 'Black' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="blue" onClick={() => colorOnclick('Blue')}>
                                {color === 'Blue' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="creme" onClick={() => colorOnclick('Creme')}>
                                {color === 'Creme' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="red" onClick={() => colorOnclick('Red')}>
                                {color === 'Red' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="kiwi" onClick={() => colorOnclick('Kiwi')}>
                                {color === 'Kiwi' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="green" onClick={() => colorOnclick('Green')}>
                                {color === 'Green' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="pink" onClick={() => colorOnclick('Light Pink')}>
                                {color === 'Light Pink' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="purple" onClick={() => colorOnclick('Purple')}>
                                {color === 'Purple' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="gold" onClick={() => colorOnclick('Gold')}>
                                {color === 'Gold' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="darkRed" onClick={() => colorOnclick('Dark Red')}>
                                {color === 'Dark Red' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                        </div>
                        <p className="size">Size</p>
                        <div className="sizes">
                            <div ref={sizeRefs[0]} className="S" onClick={() => sizeOnclick("S")}>S</div>
                            <div ref={sizeRefs[1]} className="M" onClick={() => sizeOnclick("M")}>M</div>
                            <div ref={sizeRefs[2]} className="M" onClick={() => sizeOnclick("L")}>L</div>
                            <div ref={sizeRefs[3]} className="M" onClick={() => sizeOnclick("XL")}>XL</div>
                            <div ref={sizeRefs[4]} className="M" onClick={() => sizeOnclick("2XL")}>2XL</div>
                            <div ref={sizeRefs[5]} className="XXXL" onClick={() => sizeOnclick("3XL")}>3XL</div>
                        </div>

                        <div className="guide" onClick={()=>setShowGuide(true)}>
                            <img src="https://i.pinimg.com/originals/1a/d2/ab/1ad2ab029e9f76112f2dbb683e5c35eb.png"
                                 alt=""/>
                            <p>View size guide</p>
                        </div>
                        <SizeGuide showGuide={showGuide} setShowGuide={setShowGuide}/>
                        <p className="printLoc">Print Location</p>
                        <div className="location">
                            <div ref={frontRef} className="selected" onClick={() => sideOnclick("Front")}>Front</div>
                            <div ref={backRef} className="back" onClick={() => sideOnclick("Back")}>Back</div>
                        </div>
                        <a className="btnts" href="">
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            <p>Add to cart</p></a>
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/72/13/a1/7213a16165e9ba30d33be8c953faae28.png"
                                 alt="FranceFlag"/>
                            <div>
                                <p className="devTitle">Delivery</p>
                                <p className="devP">Express by 7 June <br/>
                                    Standard between 7 - 8 June</p>
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
                            <p id="readReviews" onClick={()=>setShowReviews(true)}>+ Read all 122 reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <Reviews showReviews={showReviews} setShowReviews={setShowReviews}/>
        </div>
    );
};

export default TShirt;