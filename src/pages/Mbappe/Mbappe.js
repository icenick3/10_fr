import React, {useState} from 'react';
import './Mbappe.css'
import ReviewsZippo from "../../conponents/ReviewsZippo/Reviews";
import CarouselBox from "../../conponents/CarouselBox/CarouselBox";
import {Mbappephoto} from "../../conponents/ImageMbappe/ImageMbappe";

const Mbappe = () => {
    const [color, setColor] = useState('Street Chrome')
    const [showReviews, setShowReviews] = useState(false)


    const colorOnclick = (color) => {
        setColor(color)
    }

    return (
        <div>
            <div className="TShirt">
                <div className="imgContainer">
                    <div className="imgCarousel">
                        <div className="imgCarContainer">
                            {/*<CarouselBoxTShirt element={Mbappephoto}/>*/}
                        </div>
                    </div>
                    {color === 'Street Chrome' && <div className="features22">
                        <p>
                            There is nothing old about this vintage model. The rounded corners and edges replace the
                            square casing from 1935. This Street Chrome™ lighter features decorative diagonal lines at
                            the corners. It comes packaged in a gift box. To achieve optimal performance, fill with
                            Zippo lighter fluid.
                        </p>
                        <ul className="firstUl">
                            <li>Vintage</li>
                            <li>Street Chrome™</li>
                            <li>Zippo Warranty</li>
                        </ul>
                        <ul className="secondUl">
                            <li>Authentic Zippo windproof lighter with the distinctive Zippo "click"</li>
                            <li>Comes packaged in a gift box</li>
                            <li>Constructed from metal; windproof design that works virtually anywhere</li>
                            <li>Refillable for lifelong use; for optimal utilization, we recommend using genuine Zippo
                                premium lighter fluid, flints, and wicks
                            </li>
                            <li>Made in the USA; Lifetime warranty, with the motto "it works or we fix it free™"</li>
                            <li>Fuel: Zippo premium lighter fluid (sold separately)</li>
                        </ul>
                    </div>}
                    {color === 'Black Crackle' && <div className="features22">
                        <p>
                            This Black Crackle™ 1941 Replica features flat surfaces with sharper, less rounded edges
                            where the front and back meet the side surfaces. The lid and base are connected with a
                            four-barrel hinge. The interior unit is flatter, with square edges where the front and back
                            meet the side surfaces.
                        </p>
                        <ul className="firstUl">
                            <li>1941 Replica</li>
                            <li>Black Crackle™</li>
                            <li>Zippo Warranty</li>
                        </ul>
                        <ul className="secondUl">
                            <li>Authentic Zippo windproof lighter with the distinctive Zippo "click"</li>
                            <li>Comes packaged in a gift box</li>
                            <li>Constructed from metal; windproof design that works virtually anywhere</li>
                            <li>Refillable for lifelong use; for optimal utilization, we recommend using genuine Zippo
                                premium lighter fluid, flints, and wicks
                            </li>
                            <li>Made in the USA; Lifetime warranty, with the motto "it works or we fix it free™"</li>
                            <li>Fuel: Zippo premium lighter fluid (sold separately)</li>
                        </ul>
                    </div>}
                    {color === 'Brushed Brass' && <div className="features22">
                        <p>
                            This 1941 replica in brushed brass features flat surfaces with sharper, less rounded edges
                            where the front and back meet the side surfaces. The lid and base are connected with a
                            four-barrel hinge. The interior unit is flatter, with square edges where the front and back
                            meet the side surfaces. It is delivered in a gift box packaging. To achieve optimal
                            performance, fill with Zippo lighter fluid.
                        </p>
                        <ul className="firstUl">
                            <li>1941 Replica</li>
                            <li>Brushed Brass™</li>
                            <li>Zippo Warranty</li>
                        </ul>
                        <ul className="secondUl">
                            <li>Authentic Zippo windproof lighter with the distinctive Zippo "click"</li>
                            <li>Comes packaged in a gift box</li>
                            <li>Constructed from metal; windproof design that works virtually anywhere</li>
                            <li>Refillable for lifelong use; for optimal utilization, we recommend using genuine Zippo
                                premium lighter fluid, flints, and wicks
                            </li>
                            <li>Made in the USA; Lifetime warranty, with the motto "it works or we fix it free™"</li>
                            <li>Fuel: Zippo premium lighter fluid (sold separately)</li>
                        </ul>
                    </div>}
                    {color === 'Blue Flame' && <div className="features22">
                        <p>
                            We love mid-century patterns and vibrant colors. The abstract shapes on this high polish
                            blue lighter are no exception. The retro design is created through our color image process.
                        </p>
                        <ul className="firstUl">
                            <li>High Polish Blue</li>
                            <li>Color Image</li>
                            <li>Zippo Warranty</li>
                        </ul>
                        <ul className="secondUl">
                            <li>Authentic Zippo windproof lighter with the distinctive Zippo "click"</li>
                            <li>Comes packaged in a gift box</li>
                            <li>Constructed from metal; windproof design that works virtually anywhere</li>
                            <li>Refillable for lifelong use; for optimal utilization, we recommend using genuine Zippo
                                premium lighter fluid, flints, and wicks
                            </li>
                            <li>Made in the USA; Lifetime warranty, with the motto "it works or we fix it free™"</li>
                            <li>Fuel: Zippo premium lighter fluid (sold separately)</li>
                        </ul>
                    </div>}
                    {color === 'Golden flowers' && <div className="features22">
                        <p>
                            The floral pattern on this flat sand lighter is the perfect blend of vintage and modern. The
                            fresh, colorful design is created through our color image process.
                        </p>
                        <ul className="firstUl">
                            <li>Flat Sand</li>
                            <li>Color Image</li>
                            <li>Zippo Warranty</li>
                        </ul>
                        <ul className="secondUl">
                            <li>Authentic Zippo windproof lighter with the distinctive Zippo "click"</li>
                            <li>Comes packaged in a gift box</li>
                            <li>Constructed from metal; windproof design that works virtually anywhere</li>
                            <li>Refillable for lifelong use; for optimal utilization, we recommend using genuine Zippo
                                premium lighter fluid, flints, and wicks
                            </li>
                            <li>Made in the USA; Lifetime warranty, with the motto "it works or we fix it free™"</li>
                            <li>Fuel: Zippo premium lighter fluid (sold separately)</li>
                        </ul>
                    </div>}
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        {color === 'Street Chrome' && <h2 className="h2ts">Vintage Street Chrome™</h2>}
                        {color === 'Black Crackle' && <h2 className="h2ts">1941 Replica Black Crackle™</h2>}
                        {color === 'Brushed Brass' && <h2 className="h2ts">1941B Replica Brush Brass™</h2>}
                        {color === 'Blue Flame' && <h2 className="h2ts">Retro Zippo Design™</h2>}
                        {color === 'Golden flowers' && <h2 className="h2ts">Vintage Floral Design™</h2>}
                        <p className="design">Designed and sold by <span>Luka Pirnat</span></p>
                        <p className="price">€ 2.00 <span>€32,90</span></p>
                        <p className="vat">incl. VAT</p>
                        <p className="color"><span>Color</span>{color}</p>
                        <div className="colors22">
                            <div className="grey" onClick={() => colorOnclick('Street Chrome')}>
                                {color === 'Street Chrome' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="black" onClick={() => colorOnclick('Black Crackle')}>
                                {color === 'Black Crackle' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="blue" onClick={() => colorOnclick('Brushed Brass')}>
                                {color === 'Brushed Brass' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="creme" onClick={() => colorOnclick('Blue Flame')}>
                                {color === 'Blue Flame' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="red" onClick={() => colorOnclick('Golden flowers')}>
                                {color === 'Golden flowers' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>

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
                            <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 212 reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="photosContainer">
                {color === 'Street Chrome' && <div className="photos1">
                    <img src="https://i.pinimg.com/originals/db/68/52/db68522f84a19df24b9afa128e531960.jpg" alt=""/>
                    <img src="https://i.pinimg.com/originals/38/b1/99/38b19976d15eb585c5a2c01a45d2546e.png" alt=""/>
                    <img src="https://i.pinimg.com/originals/da/ff/f2/dafff2133b37d355d94b31de9c14bab5.png" alt=""/>
                    <img src="https://i.pinimg.com/originals/e4/61/3b/e4613b1c37cb36169def0d388163325c.png" alt=""/>
                </div>}
                {color === 'Black Crackle' && <div className="photos1">
                    <img src="https://i.pinimg.com/originals/40/f3/f6/40f3f603b4d90735e2ecee0a11be3140.jpg" alt=""/>
                    <img src="https://i.pinimg.com/originals/a4/41/09/a44109a47e7b1ff71250e26bee8f2467.png" alt=""/>
                    <img src="https://i.pinimg.com/originals/14/82/d2/1482d294cc5ec3f38d83946085af7e38.jpg" alt=""/>
                    <img src="https://i.pinimg.com/originals/a2/58/48/a25848fd8391dd9fcd0a97234ed83968.png" alt=""/>
                </div>}
                {color === 'Brushed Brass' && <div className="photos1">
                    <img src="https://i.pinimg.com/originals/03/3c/21/033c211ab3e0253d6942312d5937f379.png" alt=""/>
                    <img src="https://i.pinimg.com/originals/b3/7e/7f/b37e7f6bf7c2f3e088508ddf8117b4d6.png" alt=""/>
                    <img src="https://i.pinimg.com/originals/f2/a2/18/f2a2185e004e00eea6df2cbe63a762da.png" alt=""/>
                    <img src="https://i.pinimg.com/originals/5e/23/92/5e239298f870fb3f14ddb872c2dec0b4.png" alt=""/>
                </div>}
                {color === 'Blue Flame' && <div className="photos1">
                    <img src="https://i.pinimg.com/originals/10/e2/81/10e2810d28a25aef163e7c75c53be54d.png" alt=""/>
                    <img src="https://i.pinimg.com/originals/c5/bb/f0/c5bbf0f931530228e3b3e0c010454fcd.png" alt=""/>
                    <img src="https://i.pinimg.com/originals/e0/e8/6f/e0e86f8b1fadef88be4f3fba8efcf0fe.png" alt=""/>
                    <img src="https://i.pinimg.com/originals/67/1f/a7/671fa7785c685eed6777f476065d9e44.png" alt=""/>
                </div>}
                {color === 'Golden flowers' && <div className="photos1">
                    <img src="https://i.pinimg.com/originals/0f/4b/3d/0f4b3d3525f1d8e9136c50237b47a0a8.png" alt=""/>
                    <img src="https://i.pinimg.com/originals/32/3e/cb/323ecb88807fe26c282effe262bf7b54.png" alt=""/>
                    <img src="https://i.pinimg.com/originals/77/d9/89/77d989930e35c5e654522a103a128ead.png" alt=""/>
                    <img src="https://i.pinimg.com/originals/7d/65/0e/7d650ecf78133117a56ade64a88692d2.png" alt=""/>
                </div>}
            </div>

            <ReviewsZippo showReviews={showReviews} setShowReviews={setShowReviews}/>
        </div>
    );
};

export default Mbappe;