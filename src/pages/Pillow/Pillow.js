import React, {useRef, useState} from 'react';
import './Pillow.css'

import {pillow} from "../../conponents/ImageMbappe/ImageMbappe";

import ReviewsPillow from "../../conponents/ReviewsPillow/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Pillow = ({date, date2, small, setSmall, setShowReviews, phone, lang, href}) => {

    const mainRef = useRef()

    const takeID = () => {
        if (mainRef.current) {
            mainRef.current.id = "zippoContainer";
            setTimeout(() => {
                mainRef.current.id = "";
                setSmall(true)
                if (!phone) {
                    // window.document.body.scrollIntoView({behavior: 'auto', block: 'start'});
                } else {

                }
            }, 450)


        }
    }

    return small ? (
        <div className="smallPageZippo" onClick={() => setSmall(false)}>
            <div className="imgBlockPillow">
                <img className="imgTs2"
                     src="https://i.pinimg.com/originals/61/f6/d9/61f6d9e58b5817d3072c364bf7cd8305.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                {lang === "EN" && <h2 className="h2ts">Froster Heated Croissant – Giant Pillow</h2>}
                {lang === "EN" && <p className="design">Designed and sold by <span>Froster Store</span></p>}
                {lang === "EN" && <p className="price">€ 2.00 <span>€ 7.99</span> <span id="vat">incl. VAT</span></p>}
                {lang === "FR" && <h2 className="h2ts">Croissant chauffé Froster - Oreiller géant</h2>}
                {lang === "FR" && <p className="design">Conçu et vendu par <span>Froster Store</span></p>}
                {lang === "FR" &&
                    <p className="price">€ 2,00 <span>€ 7,99</span> <span id="vat">Incl. la TVA</span></p>}
                <div className="buttons22" onClick={() => setSmall(false)}>
                    <a className="btnts1">
                        <img src="https://i.pinimg.com/originals/9e/63/21/9e6321883f018a4613fa5d8960a161d2.png"
                             alt=""/>
                        {lang === "EN" && <p>More Details</p>}
                        {lang === "FR" && <p>Plus de détails</p>}
                    </a>
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
                        {lang === "EN" && <h2 className="h2ts">Froster Heated Croissant – Giant Pillow</h2>}
                        {lang === "EN" && <p className="design">Designed and sold by <span>Froster Store</span></p>}
                        {lang === "EN" &&
                            <p className="price">€ 2.00 <span>€ 7.99</span> <span id="vat">incl. VAT</span></p>}
                        {lang === "FR" && <h2 className="h2ts">Croissant chauffé Froster - Oreiller géant</h2>}
                        {lang === "FR" && <p className="design">Conçu et vendu par <span>Froster Store</span></p>}
                        {lang === "FR" &&
                            <p className="price">€ 2,00 <span>€ 7,99</span> <span id="vat">Incl. la TVA</span></p>}
                    </div>
                    <div className="imgCarouselPillow">
                        <CarouselBoxTShirt element={pillow}/>
                    </div>
                    {lang === "EN" && <div className="features">
                        <h2>About this item</h2>
                        <ul className="firstUl">
                            <li>Giant croissant neck pillow with a pocket for a heat pad which looks like chocolate.
                            </li>
                            <li>The microwavable eco heat bag is filled with cherry stones – its pleasant warmth will
                                allow you to relax.

                            </li>
                            <li>Novelty decorative pillow to your bedroom or living room and a huggable chocolate
                                croissant gift.

                            </li>
                            <li>Also suitable for travelling – provides comfort and makes your nap easier (comfortable
                                travel headrest).

                            </li>
                            <li>Pillow size: approx. 42 x 42 x 13 cm. Pillow material & filling: 100% polyester. Made in
                                EU.
                            </li>
                        </ul>
                    </div>}
                    {lang === "FR" &&
                        <div className="features">
                            <h2>À propos de cet article</h2>
                            <ul className="firstUl">
                                <li>Oreiller géant en forme de croissant avec une poche pour une bouillotte qui
                                    ressemble à du chocolat.
                                </li>
                                <li>La bouillotte écologique chauffante au micro-ondes est remplie de noyaux de cerise -
                                    sa chaleur agréable vous permettra de vous détendre.
                                </li>
                                <li>Oreiller décoratif original pour votre chambre à coucher ou votre salon, et un
                                    cadeau croissant en chocolat à câliner.
                                </li>
                                <li>Convient également pour les voyages - procure du confort et facilite la sieste
                                    (appui-tête de voyage confortable).
                                </li>
                                <li>Dimensions de l'oreiller : environ 42 x 42 x 13 cm. Matériau et rembourrage de
                                    l'oreiller : 100% polyester. Fabriqué en UE.
                                </li>
                            </ul>
                        </div>
                    }
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        {lang === "EN" && <div>
                            <h2 className="h2ts">Froster Heated Croissant – Giant Pillow, with Cherry Stone Heat Bag, Travel
                                Neck Pillow, Huggable Cushion</h2>
                            <p className="design">Designed and sold by <span>Froster Store</span></p>
                            <p className="price">€ 2.00 <span> € 7,99</span></p>
                            <p className="vat">incl. VAT</p>
                            <p className="color"><span>Brand: </span>Froster</p>
                            <p className="color"><span>Special feature: </span>Zipped pocket for a heat pad</p>
                            <p className="color"><span>Use for: </span>Neck</p>
                            <p className="color"><span>Material: </span>Polyester</p>
                            <p className="color"><span>Colour: </span>Orange</p>
                            <p className="color"><span>Item dimensions L x W x H:</span>42 x 42 x 13 centimetres</p>
                            <p className="color"><span>Size:</span>One-size</p>
                            <p className="color"><span>Style:</span>Classic</p>
                        </div>}

                        {lang === "FR" &&
                            <div>
                                <h2 className="h2ts">Froster Heated Croissant - Oreiller géant, avec bouillotte aux noyaux de cerise, oreiller de voyage pour le cou, coussin câlinable</h2>
                                <p className="design">Conçu et vendu par <span>Froster Store</span></p>
                                <p className="price">€ 2,00<span>€ 7,99</span></p>
                                <p className="vat">Incl. la TVA</p>
                                <p className="color"><span>Marque :</span> Froster</p>
                                <p className="color"><span>Fonction spéciale :</span> Poche zippée pour une bouillotte</p>
                                <p className="color"><span>Utilisation :</span> Cou</p>
                                <p className="color"><span>Matériau :</span> Polyester</p>
                                <p className="color"><span>Couleur :</span> Orange</p>
                                <p className="color"><span>Dimensions du produit :</span> 42 x 42 x 13 centimètres</p>
                                <p className="color"><span>Taille :</span> Taille unique</p>
                                <p className="color"><span>Style :</span> Classique</p>
                            </div>
                        }
                        <a className="btnts pillow228" href={href}>
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            {lang === "EN" && <p>Buy this Item</p>}
                            {lang === "FR" && <p>Acheter</p>}
                        </a>
                        {lang === "EN" && <div className="features221">
                            <p>About this item</p>
                            <ul className="firstUl">
                                <li>Giant croissant neck pillow with a pocket for a heat pad which looks like chocolate.
                                </li>
                                <li>The microwavable eco heat bag is filled with cherry stones – its pleasant warmth
                                    will
                                    allow you to relax.

                                </li>
                                <li>Novelty decorative pillow to your bedroom or living room and a huggable chocolate
                                    croissant gift.

                                </li>
                                <li>Also suitable for travelling – provides comfort and makes your nap easier
                                    (comfortable
                                    travel headrest).

                                </li>
                                <li>Pillow size: approx. 42 x 42 x 13 cm. Pillow material & filling: 100% polyester.
                                    Made in
                                    EU.
                                </li>
                            </ul>
                        </div>}
                        {lang === "FR" &&
                            <div className="features221">
                                <h2>À propos de cet article</h2>
                                <ul className="firstUl">
                                    <li>Oreiller géant en forme de croissant avec une poche pour une bouillotte qui
                                        ressemble à du chocolat.
                                    </li>
                                    <li>La bouillotte écologique chauffante au micro-ondes est remplie de noyaux de cerise -
                                        sa chaleur agréable vous permettra de vous détendre.
                                    </li>
                                    <li>Oreiller décoratif original pour votre chambre à coucher ou votre salon, et un
                                        cadeau croissant en chocolat à câliner.
                                    </li>
                                    <li>Convient également pour les voyages - procure du confort et facilite la sieste
                                        (appui-tête de voyage confortable).
                                    </li>
                                    <li>Dimensions de l'oreiller : environ 42 x 42 x 13 cm. Matériau et rembourrage de
                                        l'oreiller : 100% polyester. Fabriqué en UE.
                                    </li>
                                </ul>
                            </div>
                        }
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/72/13/a1/7213a16165e9ba30d33be8c953faae28.png"
                                 alt="FranceFlag"/>
                            <div>
                                {lang === "EN" && <div>
                                    <p className="devTitle">Delivery</p>
                                    <p className="devP">Express by {date}<br/>
                                        Standard {date2}</p>
                                </div>}
                                {lang === "FR" && <div>
                                    <p className="devTitle">Livraison</p>
                                    <p className="devP">Express d'ici le {date}<br/>
                                        Standard d'ici le {date2}</p>
                                </div>}
                            </div>
                        </div>
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/35/96/f5/3596f54bbd8a9bbe7a0219847da373c0.png"
                                 alt="return"/>
                            <div>
                                {lang === "EN" && <div>
                                    <p className="devTitle">Returns are free and easy</p>
                                    <p className="devP">Exchange or money back guarantee for all orders.</p>
                                </div>}
                                {lang === "FR" && <div>
                                    <p className="devTitle">Les retours sont gratuits et faciles</p>
                                    <p className="devP">Échange ou remboursement garanti pour toutes les commandes.</p>
                                </div>}
                            </div>
                        </div>
                        <div className="starContainer">
                            {lang === "EN" && <p>Reviews</p>}
                            {lang === "FR" && <p>Commentaires</p>}
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
                                <div className="barPillow">
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
                                <div className="barPillow">
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
                                <div className="barPillow">
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
                                <div className="barPillow">
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
                                <div className="barPillow">
                                    <div className="progressBar5">
                                    </div>
                                </div>
                            </div>
                            {lang === "EN" && <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 69 reviews</p>}
                            {lang === "FR" && <p id="readReviews" onClick={() => setShowReviews(true)}>+ Lire les 69 Commentaires</p>}
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

export default Pillow;