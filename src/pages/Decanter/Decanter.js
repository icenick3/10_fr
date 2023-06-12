import React, {useRef, useState} from 'react';
import './Decanter.css'
import {decanter} from "../../conponents/ImageMbappe/ImageMbappe";
import ReviewsDecanter from "../../conponents/ReviewsDecanter/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Decanter = ({date, date2, small, setSmall, setShowReviews, phone, lang}) => {

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
                <img className="imgTs2"
                     src="https://i.pinimg.com/originals/ae/73/23/ae73230589a162a2ca0d41ac47fbd788.png" alt=""/>
            </div>
            <div className="informationBlock">
                {lang === "EN" && <h2 className="h2ts">Le Creuset Vitesse 750ml Glass Decanter</h2>}
                {lang === "EN" && <p className="design">Designed and sold by <span>John Lewis</span></p>}
                {lang === "EN" && <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>}
                {lang === "FR" && <h2 className="h2ts">Carafe en verre Le Creuset Vitesse de 750 ml</h2>}
                {lang === "FR" && <p className="design">Conçu et vendu par <span>John Lewis</span></p>}
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
            <div className="Decanter">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        {lang === "EN" && <h2 className="h2ts">Le Creuset Vitesse 750ml Glass Decanter</h2>}
                        {lang === "EN" && <p className="design">Designed and sold by <span>John Lewis</span></p>}
                        {lang === "EN" &&
                            <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>}
                        {lang === "FR" && <h2 className="h2ts">Carafe en verre Le Creuset Vitesse de 750 ml</h2>}
                        {lang === "FR" && <p className="design">Conçu et vendu par <span>John Lewis</span></p>}
                        {lang === "FR" &&
                            <p className="price">€ 2,00 <span>€18,01</span> <span id="vat">Incl. la TVA</span></p>}
                    </div>
                    <div className="imgCarousel">
                        <CarouselBoxTShirt element={decanter}/>
                    </div>
                    {lang === "EN" && <div className="features33">
                        <p>Brand information</p>
                        <ul className="firstUl">
                            <li>Le Creuset is recognised the world over for market-leading, premium quality ranges of
                                enamelled cast iron cookware, multi-ply stainless steel, toughened non-stick, and
                                stoneware, along with its outstanding range of wine accessories.
                            </li>
                            <li>Established in 1925, Le Creuset has been making world-class cookware from its foundry in
                                Fresnoy le Grand, France for almost 100 years. Innovation remains at the forefront of
                                their success – they’ve expanded the types of products on offer and have taken advantage
                                of many technological advances since its beginnings.
                            </li>
                            <li>Le Creuset has continued to use the hand-crafted techniques and the original process of
                                forging and casting in the manufacturing of its cookware. This attention to its heritage
                                is also characteristic of the design. The Cocotte, or French Oven, was one of the first
                                cast iron items produced by Le Creuset and is still the most popular item sold in a
                                range of bright retro colours, with Volcanic (orange) the company’s trademark.
                            </li>
                            <li>Used by leading chefs and keen cooks in more than 60 countries around the world
                                including the US, UK, Japan and Australia, Le Creuset cookware offers outstanding
                                performance time after time.
                            </li>
                        </ul>
                    </div>}
                    {lang === "FR" && <div className="features33">
                        <p>Informations sur la marque</p>
                        <ul className="firstUl">
                            <li>Le Creuset est reconnu dans le monde entier pour ses gammes de qualité supérieure de
                                ustensiles de cuisine en fonte émaillée, en acier inoxydable multicouche, en antiadhésif
                                renforcé et en grès, ainsi que pour sa remarquable gamme d'accessoires de vin.
                            </li>
                            <li>Fondée en 1925, Le Creuset fabrique depuis près de 100 ans des ustensiles de cuisine de
                                classe mondiale dans sa fonderie de Fresnoy le Grand, en France. L'innovation reste au
                                cœur de son succès - l'entreprise a élargi sa gamme de produits et a tiré parti de
                                nombreuses avancées technologiques depuis ses débuts.
                            </li>
                            <li>Le Creuset continue d'utiliser les techniques artisanales et le processus original de
                                forgeage et de moulage dans la fabrication de ses ustensiles de cuisine. Cette attention
                                à son héritage se reflète également dans le design. La cocotte, ou four français, a été
                                l'un des premiers articles en fonte produits par Le Creuset et reste l'article le plus
                                populaire vendu dans une gamme de couleurs rétro vives, avec le Volcanique (orange)
                                comme marque de fabrique de l'entreprise.
                            </li>
                            <li>Utilisée par les chefs de renom et les passionnés de cuisine dans plus de 60 pays à
                                travers le monde, dont les États-Unis, le Royaume-Uni, le Japon et l'Australie, la
                                batterie de cuisine Le Creuset offre des performances exceptionnelles à chaque
                                utilisation.
                            </li>
                        </ul>

                    </div>}
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        {lang === "EN" && <div>
                            <h2 className="h2ts">Le Creuset Vitesse 750ml Glass Decanter, Aerator and Cleaning Balls
                                Set</h2>
                            <p className="design">Designed and sold by <span>John Lewis</span></p>
                            <p className="price">€ 2.00 <span>€32,90</span></p>
                            <p className="vat">incl. VAT</p>
                            <p className="color"><span>Brand: </span>Le Creuset</p>
                            <p className="color"><span>Capacity: </span>Decanter: 750ml</p>
                            <p className="color"><span>Country of origin: </span>Romania</p>
                            <p className="color"><span>Dimensions: </span>H25.5 x Dia.6.5cm</p>
                            <p className="color"><span>Dishwasher safe: </span>No - Hand wash only</p>
                            <p className="color"><span>Material:</span>Glass decanter, plastic aerator, stainless steel
                                balls</p>
                        </div>}
                        {lang === "FR" && <div>
                            <h2 className="h2ts">Ensemble carafe en verre Le Creuset Vitesse 750ml, aérateur et billes de nettoyage</h2>
                            <p className="design">Conçu et vendu par <span>John Lewis</span></p>
                            <p className="price">2,00 € <span>32,90 €</span></p>
                            <p className="vat">Incl. la TVA</p>
                            <p className="color"><span>Marque : </span>Le Creuset</p>
                            <p className="color"><span>Capacité : </span>Carafe : 750 ml</p>
                            <p className="color"><span>Pays d'origine : </span>Roumanie</p>
                            <p className="color"><span>Dimensions : </span>H25,5 x Dia.6,5 cm</p>
                            <p className="color"><span>Lavable au lave-vaisselle : </span>Non - Lavage à la main uniquement</p>
                            <p className="color"><span>Matériau :</span>Carafe en verre, aérateur en plastique, billes en acier inoxydable</p>

                        </div>}
                        <a className="btnts" href="">
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            {lang === "EN" && <p>Buy this Item</p>}
                            {lang === "FR" && <p>Acheter</p>}
                        </a>
                        {lang === "EN" && <div className="features221">
                            <p>Brand information</p>
                            <ul className="firstUl">
                                <li>Le Creuset is recognised the world over for market-leading, premium quality ranges
                                    of
                                    enamelled cast iron cookware, multi-ply stainless steel, toughened non-stick, and
                                    stoneware, along with its outstanding range of wine accessories.
                                </li>
                                <li>Established in 1925, Le Creuset has been making world-class cookware from its
                                    foundry in
                                    Fresnoy le Grand, France for almost 100 years. Innovation remains at the forefront
                                    of
                                    their success – they’ve expanded the types of products on offer and have taken
                                    advantage
                                    of many technological advances since its beginnings.
                                </li>
                                <li>Le Creuset has continued to use the hand-crafted techniques and the original process
                                    of
                                    forging and casting in the manufacturing of its cookware. This attention to its
                                    heritage
                                    is also characteristic of the design. The Cocotte, or French Oven, was one of the
                                    first
                                    cast iron items produced by Le Creuset and is still the most popular item sold in a
                                    range of bright retro colours, with Volcanic (orange) the company’s trademark.
                                </li>
                                <li>Used by leading chefs and keen cooks in more than 60 countries around the world
                                    including the US, UK, Japan and Australia, Le Creuset cookware offers outstanding
                                    performance time after time.
                                </li>
                            </ul>
                        </div>}
                        {lang === "FR" && <div className="features221">
                            <p>Informations sur la marque</p>
                            <ul className="firstUl">
                                <li>Le Creuset est reconnu dans le monde entier pour ses gammes de qualité supérieure de
                                    ustensiles de cuisine en fonte émaillée, en acier inoxydable multicouche, en antiadhésif
                                    renforcé et en grès, ainsi que pour sa remarquable gamme d'accessoires de vin.
                                </li>
                                <li>Fondée en 1925, Le Creuset fabrique depuis près de 100 ans des ustensiles de cuisine de
                                    classe mondiale dans sa fonderie de Fresnoy le Grand, en France. L'innovation reste au
                                    cœur de son succès - l'entreprise a élargi sa gamme de produits et a tiré parti de
                                    nombreuses avancées technologiques depuis ses débuts.
                                </li>
                                <li>Le Creuset continue d'utiliser les techniques artisanales et le processus original de
                                    forgeage et de moulage dans la fabrication de ses ustensiles de cuisine. Cette attention
                                    à son héritage se reflète également dans le design. La cocotte, ou four français, a été
                                    l'un des premiers articles en fonte produits par Le Creuset et reste l'article le plus
                                    populaire vendu dans une gamme de couleurs rétro vives, avec le Volcanique (orange)
                                    comme marque de fabrique de l'entreprise.
                                </li>
                                <li>Utilisée par les chefs de renom et les passionnés de cuisine dans plus de 60 pays à
                                    travers le monde, dont les États-Unis, le Royaume-Uni, le Japon et l'Australie, la
                                    batterie de cuisine Le Creuset offre des performances exceptionnelles à chaque
                                    utilisation.
                                </li>
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
                            {lang === "EN" && <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 98 reviews</p>}
                            {lang === "FR" && <p id="readReviews" onClick={() => setShowReviews(true)}>+ Lire les 98 Commentaires</p>}
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

export default Decanter;