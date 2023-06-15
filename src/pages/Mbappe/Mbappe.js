import React, {useRef, useState} from 'react';
import './Mbappe.css'
import {Mbappephoto} from "../../conponents/ImageMbappe/ImageMbappe";

import ReviewsMbappe from "../../conponents/ReviewsMbappe/Reviews";

import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Mbappe = ({date, date2, small, setSmall, setShowReviews,  phone, lang, href}) => {


    const mainRef = useRef()

    const takeID = () => {
        if (mainRef.current) {
            mainRef.current.id = "TShirtContainer";
            setTimeout(() => {
                mainRef.current.id = "";
                setSmall(true)
                if (!phone){
                    // window.document.body.scrollIntoView({ behavior: 'auto', block: 'start' });
                } else {

                }
            }, 450)



        }
    }



    return small ? (
        <div className="smallPage" onClick={()=> setSmall(false)}>
            <div className="imgBlockMbappe">
                <img src="https://i.pinimg.com/originals/f9/c4/3f/f9c43f66394f7662505fe1eb249a73c9.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                {lang === "EN" && <h2 className="h2ts">Funko POP Vinyl - Kylian Mbappe </h2>}
                {lang === "EN" && <p className="design">Designed and sold by <span>Reis O’Brien</span></p>}
                {lang === "EN" && <p className="price">€ 2.00 <span>€ 9.99</span> <span id="vat">incl. VAT</span></p>}
                {lang === "FR" && <h2 className="h2ts">Funko POP Vinyl - Kylian Mbappé</h2>}
                {lang === "FR" && <p className="design">Conçu et vendu par <span>Reis O’Brien</span></p>}
                {lang === "FR" && <p className="price">€ 2,00 <span>€ 9,99</span> <span id="vat">Incl. la TVA</span></p>}
                <div className="buttonsMbappe">
                    <a className="btnts1" onClick={()=> setSmall(false)}>
                        <img src="https://i.pinimg.com/originals/9e/63/21/9e6321883f018a4613fa5d8960a161d2.png"
                             alt=""/>
                        {lang === "EN" && <p>More Details</p>}
                        {lang === "FR" && <p>Plus de détails</p>}
                    </a>
                </div>
            </div>
        </div>
    ) :(
        <div ref={mainRef} className="mbappe">
            <img id="backToSmall"
                 src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                 onClick={() => takeID()}/>
            <div className="MBappe">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        {lang === "EN" && <h2 className="h2ts">Funko 39828 POP Vinyl: Football - Kylian Mbappe (PSG) Collectible Figure,
                            Multicolour</h2>}
                        {lang === "FR" && <h2 className="h2ts">Funko 39828 POP Vinyl : Football - Figurine de collection Kylian Mbappé (PSG), Multicolore</h2>}
                        {lang === "EN" && <p className="design">Designed and sold by <span>Reis O’Brien</span></p>}
                        {lang === "FR" && <p className="design">Conçu et vendu par <span>Reis O’Brien</span></p>}
                        {lang === "EN" && <p className="price">€ 2.00 <span>€ 9.99</span> <span id="vat">incl. VAT</span></p>}
                        {lang === "FR" && <p className="price">€ 2,00 <span>€ 9,99</span> <span id="vat">Incl. la TVA</span></p>}
                    </div>
                    <div className="imgCarousel">
                        <CarouselBoxTShirt element={Mbappephoto}/>
                    </div>
                    {lang === "EN" && <div className="features33">
                        <p>About this item</p>
                        <ul className="firstUl">
                            <li>IDEAL COLLECTIBLE SIZE - At approximately 3.75 inches (9.5 cm) tall, this vinyl mini
                                figurine complements other collectable merchandise and fits perfectly in your display
                                case or on your desk.
                            </li>
                            <li>PREMIUM VINYL MATERIAL - Made from high-quality, durable vinyl, this collectible is
                                built to last and withstand daily wear, ensuring long-lasting enjoyment for fans and
                                collectors alike.
                            </li>
                            <li>PERFECT GIFT FOR PARIS SAINT-GERMAIN FANS - Ideal for holidays, birthdays, or special
                                occasions and as a present this exclusive figurine is a must-have addition to any Paris
                                Saint-Germain merchandise collection
                            </li>
                            <li>EXPAND YOUR COLLECTION - Add this unique KYLIAN MBAPPÉ vinyl display piece to your
                                growing assortment of Funko Pop! figures, and seek out other rare and exclusive
                                collectible items for a complete set
                            </li>
                            <li>LEADING POP CULTURE BRAND - Trust in the expertise of Funko, the premier creator of pop
                                culture merchandise that includes vinyl figures, action toys, plush, apparel, board
                                games, and more.
                            </li>
                        </ul>
                    </div>}
                    {lang === "FR" && <div className="features33">
                            <p>À propos de cet article</p>
                            <ul className="firstUl">
                                <li>TAILLE IDÉALE POUR COLLECTION - Mesurant environ 9,5 cm (3,75 pouces) de hauteur, cette figurine en
                                    vinyle miniature complète les autres produits de collection et s'intègre parfaitement dans votre vitrine
                                    ou sur votre bureau.
                                </li>
                                <li>MATÉRIAU EN VINYLE PREMIUM - Fabriqué en vinyle de haute qualité et durable, cette pièce de collection
                                    est conçue pour durer et résister à l'usure quotidienne, garantissant un plaisir durable pour les fans et
                                    les collectionneurs.
                                </li>
                                <li>CADEAU PARFAIT POUR LES FANS DU PARIS SAINT-GERMAIN - Idéal pour les vacances, les anniversaires ou les
                                    occasions spéciales, cette figurine exclusive est un ajout indispensable à toute collection de produits
                                    dérivés du Paris Saint-Germain.
                                </li>
                                <li>ÉLARGISSEZ VOTRE COLLECTION - Ajoutez cette pièce d'exposition unique en vinyle KYLIAN MBAPPÉ à votre
                                    assortiment croissant de figurines Funko Pop! et recherchez d'autres articles de collection rares et
                                    exclusifs pour obtenir un ensemble complet.
                                </li>
                                <li>LEADING POP CULTURE BRAND - Faites confiance à l'expertise de Funko, le principal créateur de produits
                                    dérivés de la culture pop, qui comprend des figurines en vinyle, des jouets d'action, des peluches, des
                                    vêtements, des jeux de société et bien plus encore.
                                </li>
                            </ul>
                        </div>}
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        {lang === "EN" && <div>
                            <h2 className="h2ts">Funko 39828 POP Vinyl: Football - Kylian Mbappe (PSG) Collectible Figure,
                                Multicolour</h2>
                            <p className="design">Designed and sold by <span>Reis O’Brien</span></p>
                            <p className="price">€ 2.00 <span>€ 9,99</span></p>
                            <p className="vat">incl. VAT</p>
                            <p className="color"><span>Theme: </span>Tv</p>
                            <p className="color"><span>Brand: </span>Funko</p>
                            <p className="color"><span>Colour: </span>Multicolour</p>
                            <p className="color"><span>Style: </span>Pop. vinyl</p>
                            <p className="color"><span>Material: </span>Vinyl</p>
                            <p className="color"><span>Product dimensions: </span>9L x 7.5W x 9H centimetres</p>
                            <p className="color"><span>Cartoon character: </span>Kylian Mbappé (PSG)</p>
                            <p className="color"><span>Special feature: </span>Collectible</p>
                            <p className="color"><span>Age range (description): </span>Not appropriate for children under
                                the age of 3</p>
                        </div>}

                        {lang === "FR" && <div>
                                <h2 className="h2ts">Funko 39828 POP Vinyl : Football - Figurine de collection Kylian Mbappé (PSG), Multicolore</h2>
                                <p className="design">Conçu et vendu par <span>Reis O'Brien</span></p>
                                <p className="price">€ 2,00<span>€ 9,99</span></p>
                                <p className="vat">Incl. la TVA</p>
                                <p className="color"><span>Thème : </span>Tv</p>
                                <p className="color"><span>Marque : </span>Funko</p>
                                <p className="color"><span>Couleur : </span>Multicolore</p>
                                <p className="color"><span>Style : </span>Pop. vinyl</p>
                                <p className="color"><span>Matériau : </span>Vinyle</p>
                                <p className="color"><span>Dimensions du produit : </span>9L x 7,5l x 9H centimètres</p>
                                <p className="color"><span>Personnage de dessin animé : </span>Kylian Mbappé (PSG)</p>
                                <p className="color"><span>Fonction spéciale : </span>Collection</p>
                                <p className="color"><span>Tranche d'âge (description) : </span>Ne convient pas aux enfants de moins de 3 ans</p>
                            </div>
                        }
                        <a className="btnts mbappe228" href={href}>
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            {lang === "EN" && <p>Buy this Item</p>}
                            {lang === "FR" && <p>Acheter</p>}
                        </a>
                        {lang === "EN" && <div className="features221">
                            <p>About this item</p>
                            <ul className="firstUl">
                                <li>IDEAL COLLECTIBLE SIZE - At approximately 3.75 inches (9.5 cm) tall, this vinyl mini
                                    figurine complements other collectable merchandise and fits perfectly in your
                                    display
                                    case or on your desk.
                                </li>
                                <li>PREMIUM VINYL MATERIAL - Made from high-quality, durable vinyl, this collectible is
                                    built to last and withstand daily wear, ensuring long-lasting enjoyment for fans and
                                    collectors alike.
                                </li>
                                <li>PERFECT GIFT FOR PARIS SAINT-GERMAIN FANS - Ideal for holidays, birthdays, or
                                    special
                                    occasions and as a present this exclusive figurine is a must-have addition to any
                                    Paris
                                    Saint-Germain merchandise collection
                                </li>
                                <li>EXPAND YOUR COLLECTION - Add this unique KYLIAN MBAPPÉ vinyl display piece to your
                                    growing assortment of Funko Pop! figures, and seek out other rare and exclusive
                                    collectible items for a complete set
                                </li>
                                <li>LEADING POP CULTURE BRAND - Trust in the expertise of Funko, the premier creator of
                                    pop
                                    culture merchandise that includes vinyl figures, action toys, plush, apparel, board
                                    games, and more.
                                </li>
                            </ul>
                        </div>}
                        {lang === "FR" && <div className="features221">
                            <p>À propos de cet article</p>
                            <ul className="firstUl">
                                <li>TAILLE IDÉALE POUR COLLECTION - Mesurant environ 9,5 cm (3,75 pouces) de hauteur, cette figurine en
                                    vinyle miniature complète les autres produits de collection et s'intègre parfaitement dans votre vitrine
                                    ou sur votre bureau.
                                </li>
                                <li>MATÉRIAU EN VINYLE PREMIUM - Fabriqué en vinyle de haute qualité et durable, cette pièce de collection
                                    est conçue pour durer et résister à l'usure quotidienne, garantissant un plaisir durable pour les fans et
                                    les collectionneurs.
                                </li>
                                <li>CADEAU PARFAIT POUR LES FANS DU PARIS SAINT-GERMAIN - Idéal pour les vacances, les anniversaires ou les
                                    occasions spéciales, cette figurine exclusive est un ajout indispensable à toute collection de produits
                                    dérivés du Paris Saint-Germain.
                                </li>
                                <li>ÉLARGISSEZ VOTRE COLLECTION - Ajoutez cette pièce d'exposition unique en vinyle KYLIAN MBAPPÉ à votre
                                    assortiment croissant de figurines Funko Pop! et recherchez d'autres articles de collection rares et
                                    exclusifs pour obtenir un ensemble complet.
                                </li>
                                <li>LEADING POP CULTURE BRAND - Faites confiance à l'expertise de Funko, le principal créateur de produits
                                    dérivés de la culture pop, qui comprend des figurines en vinyle, des jouets d'action, des peluches, des
                                    vêtements, des jeux de société et bien plus encore.
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
                                    <div className="progressBar1Mbappe">
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
                                    <div className="progressBar2Mbappe">
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
                                    <div className="progressBar3Mbappe">
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
                                    <div className="progressBar4Mbappe">
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
                                    <div className="progressBar5Mbappe">
                                    </div>
                                </div>
                            </div>
                            {lang === "EN" && <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 154 reviews</p>}
                            {lang === "FR" && <p id="readReviews" onClick={() => setShowReviews(true)}>+ Lire les 154 Commentaires</p>}
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

export default Mbappe;