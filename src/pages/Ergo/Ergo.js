import React, {useRef, useState} from 'react';
import './Microphone.css'

import {
    ergoBaby,
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

const Ergo = ({date2, date, small, setSmall, setShowReviews, phone, lang, href, setForm}) => {
    const [color, setColor] = useState('Black')


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
                <img className="imgTs3"
                     src="https://i.pinimg.com/originals/1a/e8/f1/1ae8f18bd7cd806be00dbe165e79f964.webp" alt=""/>
            </div>
            <div className="informationBlock2">
                <h2 className="h2ts">Ergobaby Aura Baby Wrap Carrier</h2>
                <p className="price">£ 3.00 <span>£ 18.00</span> <span id="vat">Incl. VAT</span></p>
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
            <div className="Micro">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        <h2 className="h2ts">Ergobaby Aura Baby Wrap Carrier</h2>
                        <p className="price">£ 3.00 <span>£ 18.00</span> <span id="vat">Incl. VAT</span></p>
                    </div>
                    <div className="imgCarContainerZippo">
                        <CarouselBoxTShirt element={ergoBaby}/>
                    </div>
                    <div className="features">
                        <h2>About this item</h2>
                        <p>Nothing soothes a baby like being close to the heartbeat of their parents. The Ergobaby Aura
                            Baby Wrap Carrier is easy to use and perfect for those who are new to baby wrap carriers.
                            Its lightweight design makes it comfortable, soft, and durable, supporting newborns up to 25
                            pounds. The stretchy fabric is easy to tie with a guiding edge and instructional label. The
                            wrap style is designed to evenly distribute the weight of your baby on your back and hips.
                            Its ergonomic M-shape position has been recognized as "hip-healthy" by the International Hip
                            Dysplasia Institute. Ideal for beginners in baby wrap carriers.</p>
                        <ul className="firstUl">
                            <li>100% Viscose made from eucalyptus and acacia</li>
                            <li>Easy to tie with a guiding edge</li>
                            <li>Lightweight and breathable</li>
                            <li>Supportive for babies</li>
                            <li>Hip-friendly positioning</li>
                            <li>One size fits most parents, suitable for both small and large sizes</li>
                            <li>Gentle against your baby's skin</li>
                            <li>Built-in pocket for storage</li>
                            <li>Suitable for newborns from 8 pounds to 25 pounds</li>
                            <li>192.9 x 21 inches</li>
                            <li>Machine washable</li>
                        </ul>
                    </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        <p className="color11"><span>Color</span>{color}</p>
                        <div className="colors122">
                            <div className="roseGold" onClick={() => colorOnclick('Black')}>
                                {color === 'Black' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="blue" onClick={() => colorOnclick('Blush')}>
                                {color === 'Blush' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="silver" onClick={() => colorOnclick('Indigo')}>
                                {color === 'Indigo' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                        </div>
                        <div>
                            <h2 className="h2ts">Ergobaby Aura Baby Wrap Carrier</h2>
                            <p className="price">£ 3.00 <span>£ 18.00</span></p>
                            <p className="vat">Incl. VAT</p>
                        </div>
                        <p className="color22"><span>Color</span>{color}</p>
                        <div className="colors">
                            <div className="roseGold" onClick={() => colorOnclick('Black')}>
                                {color === 'Black' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="blue" onClick={() => colorOnclick('Blush')}>
                                {color === 'Blush' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="silver" onClick={() => colorOnclick('Indigo')}>
                                {color === 'Indigo' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                        </div>
                        <p className="odd">Take part in our contest and get a chance to get the prize by clicking on the button below</p>
                        <a className="btnts micro228" href={href}>
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            <p>Add to cart</p>
                        </a>
                        <div className="features221">
                            <h2>About this item</h2>
                            <p>Nothing soothes a baby like being close to the heartbeat of their parents. The Ergobaby
                                Aura Baby Wrap Carrier is easy to use and perfect for those who are new to baby wrap
                                carriers. Its lightweight design makes it comfortable, soft, and durable, supporting
                                newborns up to 25 pounds. The stretchy fabric is easy to tie with a guiding edge and
                                instructional label. The wrap style is designed to evenly distribute the weight of your
                                baby on your back and hips. Its ergonomic M-shape position has been recognized as
                                "hip-healthy" by the International Hip Dysplasia Institute. Ideal for beginners in baby
                                wrap carriers.</p>
                            <ul className="firstUl">
                                <li>100% Viscose made from eucalyptus and acacia</li>
                                <li>Easy to tie with a guiding edge</li>
                                <li>Lightweight and breathable</li>
                                <li>Supportive for babies</li>
                                <li>Hip-friendly positioning</li>
                                <li>One size fits most parents, suitable for both small and large sizes</li>
                                <li>Gentle against your baby's skin</li>
                                <li>Built-in pocket for storage</li>
                                <li>Suitable for newborns from 8 pounds to 25 pounds</li>
                                <li>192.9 x 21 inches</li>
                                <li>Machine washable</li>
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
                            <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read the 30 Reviews</p>
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

export default Ergo;