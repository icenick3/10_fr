import React, {useRef, useState} from 'react';
import './Cork.css'
import {cork} from "../../conponents/ImageMbappe/ImageMbappe";
import ReviewsCork from "../../conponents/ReviewsCork/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";
import CarouselBoxCork from "../../conponents/CarouselBoxCork/CarouselBoxTShirt";


const Cork = ({date, date2, small, setSmall, setShowReviews, phone, lang}) => {

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
        <div className="smallPage" onClick={() => setSmall(false)}>
            <div className="imgBlock">
                <img src="https://i.pinimg.com/originals/7e/c5/f1/7ec5f1dd01ff1852a50993ba0f0f309f.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                {lang === "EN" && <h2 className="h2ts">Oster Electric Wine Opener and Foil Cutter </h2>}
                {lang === "EN" && <p className="design">Designed and sold by <span>Oster</span></p>}
                {lang === "EN" && <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>}
                {lang === "FR" && <h2 className="h2ts">Oster Ouvre-bouteille électrique et coupe-capsule</h2>}
                {lang === "FR" && <p className="design">Conçu et vendu par <span>Oster</span></p>}
                {lang === "FR" &&
                    <p className="price">€ 2,00 <span>€18,01</span> <span id="vat">Incl. la TVA</span></p>}
                <div className="buttons22">
                    <a className="btnts1" onClick={() => setSmall(false)}>
                        <img src="https://i.pinimg.com/originals/9e/63/21/9e6321883f018a4613fa5d8960a161d2.png"
                             alt=""/>
                        {lang === "EN" && <p>More Details</p>}
                        {lang === "FR" && <p>Plus de détails</p>}
                    </a>
                    <a className="btnts2" href="" onClick={(e) => e.stopPropagation()}>
                        <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                             alt=""/>
                        {lang === "EN" && <p>Buy this Item</p>}
                        {lang === "FR" && <p>Acheter</p>}
                    </a>
                </div>
            </div>
        </div>
    ) : (
        <div ref={mainRef} className="mbappe">
            <img id="backToSmall"
                 src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                 onClick={() => takeID()}/>
            <div className="TShirt">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        {lang === "EN" && <h2 className="h2ts">Oster Electric Wine Opener and Foil Cutter </h2>}
                        {lang === "EN" && <p className="design">Designed and sold by <span>Oster</span></p>}
                        {lang === "EN" &&
                            <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>}
                        {lang === "FR" && <h2 className="h2ts">Oster Ouvre-bouteille électrique et coupe-capsule</h2>}
                        {lang === "FR" && <p className="design">Conçu et vendu par <span>Oster</span></p>}
                        {lang === "FR" &&
                            <p className="price">€ 2,00 <span>€18,01</span> <span id="vat">Incl. la TVA</span></p>}
                    </div>
                    <div className="imgCarouselCork">
                        <CarouselBoxCork element={cork}/>
                    </div>
                    {lang === "EN" && <div className="features">
                        <h2>About this item</h2>
                        <ul className="firstUl">
                            <li>Cordless electric bottle opener removes the cork in seconds

                            </li>
                            <li>Opens upto 30 bottles on a single charge(6 8 hours); Simple push button operation


                            </li>
                            <li>Foil cutter for easily removing seals; Comfortable soft grip handle

                            </li>
                            <li>Sleek, sophisticated design; Recharging base included; UL approved for 110-120 voltage.


                            </li>
                            <li>Care & MaintenanceTurn the appliance OFF, then uplug from outlet when not in use, before
                                putting on or taking off parts, and before cleaning. THIS PRODUCT IS FOR HOUSEHOLD USE
                                ONLY
                            </li>
                            <li>
                                Wattage: 14.4
                            </li>
                        </ul>
                    </div>}
                    {lang === "FR" && <div className="features">
                        <h2>À propos de cet article</h2>
                        <ul className="firstUl">
                            <li>Ouvre-bouteille électrique sans fil qui enlève le bouchon en quelques secondes</li>
                            <li>Ouvre jusqu'à 30 bouteilles avec une seule charge (6 à 8 heures) ; Bouton poussoir
                                simple à utiliser
                            </li>
                            <li>Décapsuleur de feuille pour enlever facilement les capsules ; Poignée confortable</li>
                            <li>Design élégant et sophistiqué ; Base de recharge incluse ; Homologué UL pour une tension
                                de 110-120 volts.
                            </li>
                            <li>Entretien et maintenance : éteindre l'appareil, le débrancher de la prise lorsqu'il
                                n'est pas utilisé, avant de mettre ou de retirer des pièces et avant le nettoyage. CE
                                PRODUIT EST DESTINÉ À UN USAGE DOMESTIQUE UNIQUEMENT.
                            </li>
                            <li>Puissance : 14,4 watts</li>
                        </ul>
                    </div>}
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        {lang === "EN" && <div>
                            <h2 className="h2ts">Oster Electric Wine Opener and Foil Cutter Kit with CorkScrew and
                                Charging
                                Base, Silver</h2>
                            <p className="design">Designed and sold by <span>Oster</span></p>
                            <p className="price">€ 2.00 <span>€32,90</span></p>
                            <p className="vat">incl. VAT</p>
                            <p className="color"><span>Brand: </span>Oster</p>
                            <p className="color"><span>Finish Type: </span>Brushed</p>
                            <p className="color"><span>Item Weight: </span>1 Pounds</p>
                            <p className="color"><span>Material: </span>Plastic</p>
                            <p className="color"><span>Colour: </span>Silver</p>
                            <p className="color"><span>Item dimensions L x W x H:</span>5.51 x 14.96 x 5.32 inches</p>
                        </div>}

                        {lang === "FR" && <div>
                            <h2 className="h2ts">Ouvre-bouteille électrique Oster et kit de décapsuleur avec
                                tire-bouchon et base de charge, argent</h2>
                            <p className="design">Conçu et vendu par <span>Oster</span></p>
                            <p className="price">2,00 € <span>32,90 €</span></p>
                            <p className="vat">Incl. la TVA</p>
                            <p className="color"><span>Marque : </span>Oster</p>
                            <p className="color"><span>Type de finition : </span>Brossé</p>
                            <p className="color"><span>Poids de l'article : </span>1 livre</p>
                            <p className="color"><span>Matériau : </span>Plastique</p>
                            <p className="color"><span>Couleur : </span>Argent</p>
                            <p className="color"><span>Dimensions de l'article L x l x H :</span> 5,51 x 14,96 x 5,32
                                pouces</p>
                        </div>}
                        <a className="btnts" href="">
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            {lang === "EN" && <p>Buy this Item</p>}
                            {lang === "FR" && <p>Acheter</p>}
                        </a>
                        {lang === "EN" && <div className="features221">
                            <p>About this item</p>
                            <ul className="firstUl">
                                <li>Cordless electric bottle opener removes the cork in seconds

                                </li>
                                <li>Opens upto 30 bottles on a single charge(6 8 hours); Simple push button operation


                                </li>
                                <li>Foil cutter for easily removing seals; Comfortable soft grip handle

                                </li>
                                <li>Sleek, sophisticated design; Recharging base included; UL approved for 110-120
                                    voltage.


                                </li>
                                <li>Care & MaintenanceTurn the appliance OFF, then uplug from outlet when not in use,
                                    before
                                    putting on or taking off parts, and before cleaning. THIS PRODUCT IS FOR HOUSEHOLD
                                    USE
                                    ONLY
                                </li>
                                <li>
                                    Wattage: 14.4
                                </li>
                            </ul>
                        </div>}
                        {lang === "FR" && <div className="features221">
                            <h2>À propos de cet article</h2>
                            <ul className="firstUl">
                                <li>Ouvre-bouteille électrique sans fil qui enlève le bouchon en quelques secondes</li>
                                <li>Ouvre jusqu'à 30 bouteilles avec une seule charge (6 à 8 heures) ; Bouton poussoir
                                    simple à utiliser
                                </li>
                                <li>Décapsuleur de feuille pour enlever facilement les capsules ; Poignée confortable
                                </li>
                                <li>Design élégant et sophistiqué ; Base de recharge incluse ; Homologué UL pour une
                                    tension de 110-120 volts.
                                </li>
                                <li>Entretien et maintenance : éteindre l'appareil, le débrancher de la prise lorsqu'il
                                    n'est pas utilisé, avant de mettre ou de retirer des pièces et avant le nettoyage.
                                    CE PRODUIT EST DESTINÉ À UN USAGE DOMESTIQUE UNIQUEMENT.
                                </li>
                                <li>Puissance : 14,4 watts</li>
                            </ul>
                        </div>}
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
                                <div className="barCork">
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
                                <div className="barCork">
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
                                <div className="barCork">
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
                                <div className="barCork">
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
                                <div className="barCork">
                                    <div className="progressBar5">
                                    </div>
                                </div>
                            </div>
                            {lang === "EN" &&
                                <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 84 reviews</p>}
                            {lang === "FR" &&
                                <p id="readReviews" onClick={() => setShowReviews(true)}>+ Lire les 84 Commentaires</p>}
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

export default Cork;