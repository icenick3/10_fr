import React, {useRef, useState} from 'react';
import './Mill.css'

import { mill} from "../../conponents/ImageMbappe/ImageMbappe";

import ReviewsMill from "../../conponents/ReviewsMill/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Mill = ({date, date2, small, setSmall, setShowReviews, phone}) => {

    const mainRef = useRef()

    const takeID = () => {
        if (mainRef.current) {
            mainRef.current.id = "zippoContainer";
            setTimeout(() => {
                mainRef.current.id = "";
                setSmall(true)
                if (!phone){
                    window.document.body.scrollIntoView({ behavior: 'auto', block: 'start' });
                } else {

                }
            }, 450)



        }
    }
    return small ? (
        <div className="smallPageZippo" onClick={()=> setSmall(false)}>
            <div className="imgBlockPillow">
                <img src="https://i.pinimg.com/originals/80/eb/c1/80ebc1f2b62bcfedcc84f1fb0e4da6bb.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                <h2 className="h2ts">COOL KNIGHT Herb Grinder Electric Spice Grinder
                </h2>
                <p className="design">Designed and sold by <span>Coolknight</span></p>
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
            <div className="TShirt">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        <h2 className="h2ts">COOL KNIGHT Herb Grinder Electric Spice Grinder [Large Capacity/High
                            Rotating Speed /Electric]--Electric Grinder for Spices and Herbs (Wood grain 2)
                        </h2>
                        <p className="design">Designed and sold by <span>Coolknight</span></p>
                        <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>
                    </div>
                    <div className="imgCarouselMill">
                        <CarouselBoxTShirt element={mill}/>
                    </div>
                    <div className="features">
                        <h2>About this item</h2>
                        <ul className="firstUl">
                            <li>Large-capacity, fast grinder for herbs : Spice grinder can quickly complete grinding
                                120g of herbs or spices within 5 to 10 seconds; Its visual-lid design allows you to
                                control the coarse or fine grinding state with one hand only; It takes 3 to 5 seconds
                                for coarse grinding, and 8 to15 seconds for fine grinding only.
                            </li>
                            <li>Powerful multi-function grinder : Suitable for grinding herbs, spices, pollen, coffee
                                beans, etc., meeting all your needs on grinding, and solving other problems like slow
                                grinding, low capacity, long grinding time, inability to control coarseness, etc. It
                                saves you a lot of time for doing other meaningful things.


                            </li>
                            <li>One-button operation and safety design : Its design includes a simple push-down-power
                                operation, and the lid is used as a switch; Just a gentle press, the grinder will start
                                grinding, and only stop till you lift your hand from the lid. You can also keep pressing
                                the lid within different time length so as to control the coarse, medium and fine
                                grinding state. In addition, it makes the grinder safer, since the blade will only start
                                to rotate when the lid is on the cup and pressed down.


                            </li>
                            <li>Material and technology : The sharp blade of the electric grinder is made of high
                                quality 304 stainless steel,The motor is designed with copper wire for durability.;
                                Unique shape of the blade allows grinding in all 360-degree directions. And it runs at a
                                speed of 30,000 rotations per minute, which enables the grinder to complete its work
                                quickly.


                            </li>
                            <li>Easy to clean and detachable power cord A complimentary brush is included in the
                                package, which can be used to clean the stainless steel grinder easily. The power cord
                                is detachable, so you can store it with ease and save space..Safer to use :Spice grinder
                                with automatic power off protection.when the motor is shorted, overheated, or the outer
                                lid is open,the electric grinder will automatically powers off.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        <h2 className="h2ts">COOL KNIGHT Herb Grinder Electric Spice Grinder [Large Capacity/High
                            Rotating Speed /Electric]--Electric Grinder for Spices and Herbs (Wood grain 2)
                        </h2>
                        <p className="design">Designed and sold by <span>Coolknight</span></p>
                        <p className="price">€ 2.00 <span>€32,90</span></p>
                        <p className="vat">incl. VAT</p>
                        <p className="color"><span>Brand: </span>Coolknight</p>
                        <p className="color"><span>Operation mode: </span>Automatic</p>
                        <p className="color"><span>Dishwasher safe?: </span>Yes</p>
                        <p className="color"><span>Material: </span>Stainless Steel Wood Copper</p>
                        <p className="color"><span>Colour: </span>Wood Grain 2</p>
                        <a className="btnts" href="">
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            <p>Add to cart</p></a>
                        <div className="features221">
                            <p>About this item</p>
                            <ul className="firstUl">
                                <li>Large-capacity, fast grinder for herbs : Spice grinder can quickly complete grinding
                                    120g of herbs or spices within 5 to 10 seconds; Its visual-lid design allows you to
                                    control the coarse or fine grinding state with one hand only; It takes 3 to 5 seconds
                                    for coarse grinding, and 8 to15 seconds for fine grinding only.
                                </li>
                                <li>Powerful multi-function grinder : Suitable for grinding herbs, spices, pollen, coffee
                                    beans, etc., meeting all your needs on grinding, and solving other problems like slow
                                    grinding, low capacity, long grinding time, inability to control coarseness, etc. It
                                    saves you a lot of time for doing other meaningful things.


                                </li>
                                <li>One-button operation and safety design : Its design includes a simple push-down-power
                                    operation, and the lid is used as a switch; Just a gentle press, the grinder will start
                                    grinding, and only stop till you lift your hand from the lid. You can also keep pressing
                                    the lid within different time length so as to control the coarse, medium and fine
                                    grinding state. In addition, it makes the grinder safer, since the blade will only start
                                    to rotate when the lid is on the cup and pressed down.


                                </li>
                                <li>Material and technology : The sharp blade of the electric grinder is made of high
                                    quality 304 stainless steel,The motor is designed with copper wire for durability.;
                                    Unique shape of the blade allows grinding in all 360-degree directions. And it runs at a
                                    speed of 30,000 rotations per minute, which enables the grinder to complete its work
                                    quickly.


                                </li>
                                <li>Easy to clean and detachable power cord A complimentary brush is included in the
                                    package, which can be used to clean the stainless steel grinder easily. The power cord
                                    is detachable, so you can store it with ease and save space..Safer to use :Spice grinder
                                    with automatic power off protection.when the motor is shorted, overheated, or the outer
                                    lid is open,the electric grinder will automatically powers off.
                                </li>
                            </ul>
                        </div>
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/72/13/a1/7213a16165e9ba30d33be8c953faae28.png"
                                 alt="FranceFlag"/>
                            <div>
                                <p className="devTitle">Delivery</p>
                                <p className="devP">Express by 7{date}<br/>
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
                                <div className="barMill">
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
                                <div className="barMill">
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
                                <div className="barMill">
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
                                <div className="barMill">
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
                                <div className="barMill">
                                    <div className="progressBar5">
                                    </div>
                                </div>
                            </div>
                            <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 66 reviews</p>
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

export default Mill;