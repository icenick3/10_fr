import React, {useRef, useState} from 'react';
import './Flag.css'
import { flag} from "../../conponents/ImageMbappe/ImageMbappe";
import ReviewsFlag from "../../conponents/ReviewsFlag/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Flag = ({date, date2, small, setSmall, setShowReviews, phone, lang, href}) => {

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
            <div className="imgBlockFlag">
                <img className="imgTs" src="https://i.pinimg.com/originals/44/5e/00/445e0069b5185b3fdf05e33f1339a3d3.gif" alt=""/>
            </div>
            <div className="informationBlock">
                {lang === "EN" && <h2 className="h2ts">France Flag</h2>}
                {lang === "EN" && <p className="design">Designed and sold by <span>I LOVE FANCY DRESS</span></p>}
                {lang === "EN" && <p className="price">€ 2.00 <span>€ 6.00</span> <span id="vat">incl. VAT</span></p>}
                {lang === "FR" && <h2 className="h2ts">Drapeau de la France</h2>}
                {lang === "FR" && <p className="design">Conçu et vendu par <span>I LOVE FANCY DRESS</span></p>}
                {lang === "FR" && <p className="price">€ 2,00 <span>€ 6,00</span> <span id="vat">Incl. la TVA</span></p>}
                <div className="buttons22">
                    <a className="btnts1" onClick={()=> setSmall(false)}>
                        <img src="https://i.pinimg.com/originals/9e/63/21/9e6321883f018a4613fa5d8960a161d2.png"
                             alt=""/>
                        {lang === "EN" && <p>More Details</p>}
                        {lang === "FR" && <p>Plus de détails</p>}
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
                        {lang === "EN" && <h2 className="h2ts">France Flag Fancy Dress Decoration</h2>}
                        {lang === "EN" && <p className="design">Designed and sold by <span>I LOVE FANCY DRESS</span></p>}
                        {lang === "EN" && <p className="price">€ 2.00 <span>€ 6.00</span> <span id="vat">incl. VAT</span></p>}
                        {lang === "FR" && <h2 className="h2ts">Décoration de déguisement fantaisie avec le drapeau de la France</h2>}
                        {lang === "FR" && <p className="design">Conçu et vendu par <span>I LOVE FANCY DRESS</span></p>}
                        {lang === "FR" && <p className="price">€ 2,00 <span>€ 6,00</span> <span id="vat">Incl. la TVA</span></p>}
                    </div>
                    <div className="imgCarouselPillow">
                        <CarouselBoxTShirt element={flag}/>
                    </div>
                    {lang === "EN" && <div className="features">
                        <h2>About this item</h2>
                        <ul className="firstUl">
                            <li>FRANCE FLAG - Embrace the comradery with this traditional French Flag
                            </li>
                            <li>HANG IT UP - French flag with grommets (Eyelets) to attach to poles etc

                            </li>
                            <li>CAPTURE THE MOMENT - Take photos to relive and share the memories with friends and
                                family all celebrating and watching the game

                            </li>
                            <li>CELEBRATION - Show your support during national celebrations and sporting events
                            </li>
                        </ul>
                    </div>}
                    {lang === "FR" && <div className="features">
                        <h2>À propos de cet article</h2>
                        <ul className="firstUl">
                            <li>DRAPEAU DE LA FRANCE - Embrassez la camaraderie avec ce drapeau français traditionnel.
                            </li>
                            <li>ACCROCHEZ-LE - Drapeau français avec des œillets pour l'attacher à des poteaux, etc.

                            </li>
                            <li>CAPTUREZ LE MOMENT - Prenez des photos pour revivre et partager les souvenirs avec vos amis et
                                votre famille, tous réunis et regardant le match.

                            </li>
                            <li>CELEBRATION - Montrez votre soutien lors des célébrations nationales et des événements sportifs.
                            </li>
                        </ul>
                    </div>}
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        {lang === "EN" && <div>
                            <h2 className="h2ts">France Flag Fancy Dress Decoration - Pack of 1 - French Large Flag with
                                Grommets Approx 5ft x 3ft - Football, Rugby - Sporting Events, Street Parties, Festivals
                                and Celebrations</h2>
                            <p className="design">Designed and sold by <span>I LOVE FANCY DRESS</span></p>
                            <p className="price">€ 2.00 <span>€ 6,00</span></p>
                            <p className="vat">incl. VAT</p>
                            <p className="color"><span>Brand: </span>I LOVE FANCY DRESS</p>
                            <p className="color"><span>Colour: </span>Multicolor</p>
                            <p className="color"><span>Material:</span>Polyester</p>
                        </div>}
                        {lang === "FR" && <div>
                            <h2 className="h2ts">Décoration de déguisement de drapeau de la France - Lot de 1 - Grand drapeau français avec
                                des œillets d'environ 5 pieds x 3 pieds - Football, Rugby - Événements sportifs, fêtes de rue, festivals
                                et célébrations</h2>
                            <p className="design">Conçu et vendu par <span>I LOVE FANCY DRESS</span></p>
                            <p className="price">€ 2,00<span>€ 6,00</span></p>
                            <p className="vat">Incl. la TVA</p>
                            <p className="color"><span>Marque : </span>I LOVE FANCY DRESS</p>
                            <p className="color"><span>Couleur : </span>Multi-couleur</p>
                            <p className="color"><span>Matériau :</span> Polyester</p>
                        </div>}

                        <a className="btnts flag228" href={href}>
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            {lang === "EN" && <p>Buy this Item</p>}
                            {lang === "FR" && <p>Acheter</p>}
                        </a>
                        {lang === "EN" && <div className="features221">
                            <p>About this item</p>
                            <ul className="firstUl">
                                <li>FRANCE FLAG - Embrace the comradery with this traditional French Flag
                                </li>
                                <li>HANG IT UP - French flag with grommets (Eyelets) to attach to poles etc

                                </li>
                                <li>CAPTURE THE MOMENT - Take photos to relive and share the memories with friends and
                                    family all celebrating and watching the game

                                </li>
                                <li>CELEBRATION - Show your support during national celebrations and sporting events
                                </li>
                            </ul>
                        </div>}
                        {lang === "FR" && <div className="features221">
                            <h2>À propos de cet article</h2>
                            <ul className="firstUl">
                                <li>DRAPEAU DE LA FRANCE - Embrassez la camaraderie avec ce drapeau français traditionnel.
                                </li>
                                <li>ACCROCHEZ-LE - Drapeau français avec des œillets pour l'attacher à des poteaux, etc.

                                </li>
                                <li>CAPTUREZ LE MOMENT - Prenez des photos pour revivre et partager les souvenirs avec vos amis et
                                    votre famille, tous réunis et regardant le match.

                                </li>
                                <li>CELEBRATION - Montrez votre soutien lors des célébrations nationales et des événements sportifs.
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
                                <div className="barFlag">
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
                                <div className="barFlag">
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
                                <div className="barFlag">
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
                                <div className="barFlag">
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
                                <div className="barFlag">
                                    <div className="progressBar5">
                                    </div>
                                </div>
                            </div>
                            {lang === "EN" &&
                                <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 98 reviews</p>}
                            {lang === "FR" &&
                                <p id="readReviews" onClick={() => setShowReviews(true)}>+ Lire les 98 Commentaires</p>}
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
export default Flag;