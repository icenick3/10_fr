import React, {useRef, useState} from 'react';
import './Microphone.css'

import {
    microBlue,
    microGold,
    microLightGreen,
    microPurple,
    microRed,
    microRose,
    microSilver
} from "../../conponents/ImageMbappe/ImageMbappe";
import ReviewsMicro from "../../conponents/ReviewsMicro/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Microphone = ({date2, date, small, setSmall ,setShowReviews}) => {
    const [color, setColor] = useState('Rose gold')



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
                window.document.body.scrollIntoView({ behavior: 'auto', block: 'start' });
            }, 450)



        }
    }


    return small ? (
        <div className="smallPageZippo" onClick={()=> setSmall(false)}>
            <div className="imgBlock">
                <img className="imgTs3" src="https://i.pinimg.com/originals/50/63/2c/50632cf3b63c0eaceab2b09df710ff38.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                <h2 className="h2ts">Ankuka Karaoke Wireless Microphone</h2>
                <p className="design">Designed and sold by <span>Ankuka Store</span></p>
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
        <div ref={mainRef} className="zippoContainer">
            <img id="backToSmall"
                 src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                 onClick={() => takeID()}/>
            <div className="Micro">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        <h2 className="h2ts">Ankuka Karaoke Wireless Microphone, Bluetooth Dancing LED Lights Handheld
                            Portable Speaker Karaoke Machine, Home KTV Player with Record Function, Compatible with
                            Android & iOS Devices</h2>
                        <p className="design">Designed and sold by <span>Ankuka Store</span></p>
                        <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>
                    </div>
                    <div className="imgCarContainerZippo">
                        {color === 'Rose gold' && <CarouselBoxTShirt element={microRose}/>}
                        {color === 'Blue' && <CarouselBoxTShirt element={microBlue}/>}
                        {color === 'Silver' && <CarouselBoxTShirt element={microSilver}/>}
                        {color === 'Red' && <CarouselBoxTShirt element={microRed}/>}
                        {color === 'Gold' && <CarouselBoxTShirt element={microGold}/>}
                        {color === 'Light Green' && <CarouselBoxTShirt element={microLightGreen}/>}
                        {color === 'Purple' && <CarouselBoxTShirt element={microPurple}/>}
                    </div>
                    <div className="features">
                        <h2>
                            About this item
                        </h2>
                        <ul className="firstUl">
                            <li>4-IN-1 KARAOKE BLUETOOTH MICROPHONE: This portable wireless kids microphones can be used
                                as a microphone, Bluetooth speaker, loudspeaker and recorder. Using this handheld home
                                karaoke mic singing or record your wonderful voice at any time/where.
                            </li>
                            <li>QUALITY AUDIO SOUND: Equipped with professional audio processor and tuning system, three
                                layers pop filter, creating a stunning KTV live-sound environment and wonderful echo
                                reverberation. It's also a microphone speaker with 4 magic sounds: children's voice,
                                female voice, male voice, old male voice. So fun!
                            </li>
                            <li>LONG USING TIME: Long lasting and playing time up to 8 hours after full charged. This is
                                a brilliant Bluetooth microphone for kids, parties, family evenings and special festival
                                occasions.*Please use a DC 5V-1A plug adapter for charging.
                            </li>
                            <li>EASY CONNECTION AND WIDELY COMPATIBLE: Conveniently Bluetooth connections. This singing
                                microphone can easily connect to all Bluetooth devices like Andriod/smartphone/PC, and
                                YouTube, Smule etc. apps. It's super easy to use for kids or adults.
                            </li>
                            <li>IDEAL CHRISTMAS GIFT: This purple Bluetooth wireless microphone shows glowing dancing
                                led lights along with your voice and music volume, make you feel at the center of the
                                disco club. Not only kids but also adults will love it and enjoy lots of fun! If any
                                problem, please contact us immediately, and we'll sort it out for you.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        <p className="color11"><span>Color</span>{color}</p>
                        <div className="colors122">
                            <div className="roseGold" onClick={() => colorOnclick('Rose gold')}>
                                {color === 'Rose gold' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="blue" onClick={() => colorOnclick('Blue')}>
                                {color === 'Blue' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="silver" onClick={() => colorOnclick('Silver')}>
                                {color === 'Silver' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="red" onClick={() => colorOnclick('Red')}>
                                {color === 'Red' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="golde" onClick={() => colorOnclick('Gold')}>
                                {color === 'Gold' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="greene" onClick={() => colorOnclick('Light Green')}>
                                {color === 'Light Green' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="purple1" onClick={() => colorOnclick('Purple')}>
                                {color === 'Purple' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>

                        </div>
                        <h2 className="h2ts">Ankuka Karaoke Wireless Microphone, Bluetooth Dancing LED Lights Handheld
                            Portable Speaker Karaoke Machine, Home KTV Player with Record Function, Compatible with
                            Android & iOS Devices</h2>
                        <p className="design">Designed and sold by <span>Ankuka Store</span></p>
                        <p className="price">€ 2.00 <span>€32,90</span></p>
                        <p className="vat">incl. VAT</p>
                        <p className="color"><span>Brand: </span>Ankuka</p>
                        <p className="color"><span>Connectivity technology: </span>Bluetooth, USB</p>
                        <p className="color"><span>Connector type	:</span>USB</p>
                        <p className="color22"><span>Color</span>{color}</p>
                        <div className="colors">
                            <div className="roseGold" onClick={() => colorOnclick('Rose gold')}>
                                {color === 'Rose gold' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="blue" onClick={() => colorOnclick('Blue')}>
                                {color === 'Blue' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="silver" onClick={() => colorOnclick('Silver')}>
                                {color === 'Silver' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="red" onClick={() => colorOnclick('Red')}>
                                {color === 'Red' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="golde" onClick={() => colorOnclick('Gold')}>
                                {color === 'Gold' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="greene" onClick={() => colorOnclick('Light Green')}>
                                {color === 'Light Green' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="purple1" onClick={() => colorOnclick('Purple')}>
                                {color === 'Purple' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>

                        </div>
                        <a className="btnts" href="">
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            <p>Add to cart</p></a>
                        <div className="features221">
                            <h2>
                                About this item
                            </h2>
                            <ul className="firstUl">
                                <li>4-IN-1 KARAOKE BLUETOOTH MICROPHONE: This portable wireless kids microphones can be
                                    used
                                    as a microphone, Bluetooth speaker, loudspeaker and recorder. Using this handheld
                                    home
                                    karaoke mic singing or record your wonderful voice at any time/where.
                                </li>
                                <li>QUALITY AUDIO SOUND: Equipped with professional audio processor and tuning system,
                                    three
                                    layers pop filter, creating a stunning KTV live-sound environment and wonderful echo
                                    reverberation. It's also a microphone speaker with 4 magic sounds: children's voice,
                                    female voice, male voice, old male voice. So fun!
                                </li>
                                <li>LONG USING TIME: Long lasting and playing time up to 8 hours after full charged.
                                    This is
                                    a brilliant Bluetooth microphone for kids, parties, family evenings and special
                                    festival
                                    occasions.*Please use a DC 5V-1A plug adapter for charging.
                                </li>
                                <li>EASY CONNECTION AND WIDELY COMPATIBLE: Conveniently Bluetooth connections. This
                                    singing
                                    microphone can easily connect to all Bluetooth devices like Andriod/smartphone/PC,
                                    and
                                    YouTube, Smule etc. apps. It's super easy to use for kids or adults.
                                </li>
                                <li>IDEAL CHRISTMAS GIFT: This purple Bluetooth wireless microphone shows glowing
                                    dancing
                                    led lights along with your voice and music volume, make you feel at the center of
                                    the
                                    disco club. Not only kids but also adults will love it and enjoy lots of fun! If any
                                    problem, please contact us immediately, and we'll sort it out for you.
                                </li>
                            </ul>
                        </div>
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/72/13/a1/7213a16165e9ba30d33be8c953faae28.png"
                                 alt="FranceFlag"/>
                            <div>
                                <p className="devTitle">Delivery</p>
                                <p className="devP">Express {date}<br/>
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
                            <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 52 reviews</p>
                        </div>
                    </div>
                    <div className="backContainer">
                        <img className="backToSmall22"
                             src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                             onClick={() => takeID()}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Microphone;