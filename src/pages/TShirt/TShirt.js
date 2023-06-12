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
import ProductCarousel from "../../conponents/ProductCarousel/ProductCarousel";

const TShirt = ({date, date2, setSmall, small, setShowReviews, setShowGuide, phone, lang}) => {


    const [color, setColor] = useState('Purple')
    const [side, setSide] = useState('Front')
    const [size, setSize] = useState('S')



    const frontRef = useRef()
    const backRef = useRef()

    const mainRef = useRef()

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
            if (element.current) {
                if (element.current.innerText === size) {
                    element.current.id = 'selected'
                } else {
                    element.current.id = ''
                }
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

    const takeID = () => {
        if (mainRef.current) {
            mainRef.current.id = "TShirtContainer";
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
        <div  className="smallPage" onClick={() => setSmall(false)}>
            <div className="imgBlock">
                <img className="imgTs" src="https://i.pinimg.com/originals/3b/95/d1/3b95d115ce669fb16ea0815816356d5a.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                {lang === "EN" && <h2 className="h2ts">Russian War Ship Classic T-Shirt</h2>}
                {lang === "EN" && <p className="design">Designed and sold by <span>GoyetteKaylee</span></p>}
                {lang === "EN" && <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>}
                {lang === "FR" && <h2 className="h2ts">T-shirt classique du navire de guerre russe</h2>}
                {lang === "FR" && <p className="design">Conçu et vendu par <span>GoyetteKaylee</span></p>}
                {lang === "FR" && <p className="price">€ 2,00 <span>€18,01</span> <span id="vat">Incl. la TVA</span></p>}
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
        <div ref={mainRef} className="TShirtContainer">
             <img id="backToSmall"
                  src="https://i.pinimg.com/originals/2f/fd/9f/2ffd9f807df3dfa6efd0f722be6e7fca.png" alt=""
                  onClick={() => takeID()}/>
            <div className="TShirt">
                <div className="mobileHeader">
                    {lang === "EN" && <h2 className="h2ts">Russian War Ship Classic T-Shirt</h2>}
                    {lang === "EN" && <p className="design">Designed and sold by <span>GoyetteKaylee</span></p>}
                    {lang === "EN" && <p className="price">€ 2.00 <span>€18.01</span> <span id="vat">incl. VAT</span></p>}
                    {lang === "FR" && <h2 className="h2ts">T-shirt classique du navire de guerre russe</h2>}
                    {lang === "FR" && <p className="design">Conçu et vendu par <span>GoyetteKaylee</span></p>}
                    {lang === "FR" && <p className="price">€ 2,00 <span>€18,01</span> <span id="vat">Incl. la TVA</span></p>}
                </div>
                <div className="imgContainer">
                    <div className="imageContTS">

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
                        {color === 'Kiwi' && side === 'Front' && <CarouselBoxTShirt element={frontKiwiImages}/>}
                        {color === 'Kiwi' && side === 'Back' && <CarouselBoxTShirt element={backKiwiImages}/>}
                        {color === 'Green' && side === 'Front' && <CarouselBoxTShirt element={frontGreenImages}/>}
                        {color === 'Green' && side === 'Back' && <CarouselBoxTShirt element={backGreenImages}/>}
                        {color === 'Light Pink' && side === 'Front' &&
                            <CarouselBoxTShirt element={frontLightPinkImages}/>}
                        {color === 'Light Pink' && side === 'Back' &&
                            <CarouselBoxTShirt element={backLightPinkImages}/>}
                        {color === 'Purple' && side === 'Front' && <CarouselBoxTShirt element={frontPurpleImages}/>}
                        {color === 'Purple' && side === 'Back' && <CarouselBoxTShirt element={backPurpleImages}/>}
                        {color === 'Gold' && side === 'Front' && <CarouselBoxTShirt element={frontGoldImages}/>}
                        {color === 'Gold' && side === 'Back' && <CarouselBoxTShirt element={backGoldImages}/>}
                        {color === 'Dark Red' && side === 'Front' && <CarouselBoxTShirt element={frontDarkRedImages}/>}
                        {color === 'Dark Red' && side === 'Back' && <CarouselBoxTShirt element={backDarkRedImages}/>}
                    </div>
                    {lang === "EN" && <div className="features">
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
                    </div>}
                    {lang === "FR" && <div className="features">
                        <h2>Caractéristiques</h2>
                        <ul>
                            <li>Le t-shirt standard et traditionnel pour un usage quotidien</li>
                            <li>Coupe classique, généreuse et ample</li>
                            <li>Le modèle masculin mesure 6'0" / 183 cm et porte la taille Medium</li>
                            <li>Le modèle féminin mesure 5'8" / 173 cm et porte la taille Small</li>
                            <li>Tissu lourd de 5,3 oz / 180 g/m², les couleurs unies sont en 100% coton pré-rétréci, le gris chiné est en 90% coton/10% polyester, le gris denim chiné est en 50% coton/50% polyester</li>
                            <li>Ourlets doubles et bande de cou pour une durabilité accrue</li>
                        </ul>
                    </div>}
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        {lang === "EN" && <h2 className="h2ts">Russian War Ship Classic T-Shirt</h2>}
                        {lang === "EN" && <p className="design">Designed and sold by <span>GoyetteKaylee</span></p>}
                        {lang === "EN" && <p className="price">€ 2.00 <span>€18.01</span></p>}
                        {lang === "EN" && <p className="vat">incl. VAT</p>}
                        {lang === "FR" && <h2 className="h2ts">T-shirt classique du navire de guerre russe</h2>}
                        {lang === "FR" && <p className="design">Conçu et vendu par <span>GoyetteKaylee</span></p>}
                        {lang === "FR" && <p className="price">€ 2,00 <span>€18,01</span></p>}
                        {lang === "FR" && <p className="vat">Incl. la TVA</p>}
                        {lang === "EN" && <p className="color"><span>Color</span>{color}</p>}
                        {lang === "FR" && <p className="color"><span>Couleur</span>
                            {color === 'Heather Grey' ? "Gris chiné" : ''}
                            {color === 'Black' ? "Noir" : ''}
                            {color === 'Blue' ? "Bleu" : ''}
                            {color === 'Creme' ? "Crème" : ''}
                            {color === 'Red' ? "Rouge" : ''}
                            {color === 'Kiwi' ? "Kiwi" : ''}
                            {color === 'Green' ? "Vert" : ''}
                            {color === 'Light Pink' ? "Rose clair" : ''}
                            {color === 'Purple' ? "Violet" : ''}
                            {color === 'Gold' ? "Or" : ''}
                            {color === 'Dark Red' ? "Rouge foncé" : ''}
                        </p>}
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
                        {lang === "EN" && <p className="size">Size</p>}
                        {lang === "FR" && <p className="size">Taille</p>}
                        <div className="sizes">
                            <div ref={sizeRefs[0]} className="S" onClick={() => sizeOnclick("S")}>S</div>
                            <div ref={sizeRefs[1]} className="M" onClick={() => sizeOnclick("M")}>M</div>
                            <div ref={sizeRefs[2]} className="M" onClick={() => sizeOnclick("L")}>L</div>
                            <div ref={sizeRefs[3]} className="M" onClick={() => sizeOnclick("XL")}>XL</div>
                            <div ref={sizeRefs[4]} className="M" onClick={() => sizeOnclick("2XL")}>2XL</div>
                            <div ref={sizeRefs[5]} className="XXXL" onClick={() => sizeOnclick("3XL")}>3XL</div>
                        </div>

                        <div className="guide" onClick={() => setShowGuide(true)}>
                            <img src="https://i.pinimg.com/originals/1a/d2/ab/1ad2ab029e9f76112f2dbb683e5c35eb.png"
                                 alt=""/>
                            {lang === "EN" && <p>View size guide</p>}
                            {lang === "FR" && <p>Voir le guide des tailles</p>}
                        </div>

                        {lang === "EN" && <p className="printLoc">Print Location</p>}
                        {lang === "FR" && <p className="printLoc">Emplacement de l'impression</p>}
                        <div className="location">
                            {lang === "EN" && <div ref={frontRef} className="selected" onClick={() => sideOnclick("Front")}>Front</div>}
                            {lang === "FR" && <div ref={frontRef} className="selected" onClick={() => sideOnclick("Front")}>Devant</div>}
                            {lang === "EN" && <div ref={backRef} className="back" onClick={() => sideOnclick("Back")}>Back</div>}
                            {lang === "FR" && <div ref={backRef} className="back" onClick={() => sideOnclick("Back")}>Derrière</div>}
                        </div>
                        <a className="btnts" href="">
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            {lang === "EN" && <p>Buy this Item</p>}
                            {lang === "FR" && <p>Acheter</p>}
                        </a>
                        {lang === "EN" && <div className="features221">
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
                        </div>}
                        {lang === "FR" && <div className="features221">
                            <h2>Caractéristiques</h2>
                            <ul>
                                <li>Le t-shirt standard et traditionnel pour un usage quotidien</li>
                                <li>Coupe classique, généreuse et ample</li>
                                <li>Le modèle masculin mesure 6'0" / 183 cm et porte la taille Medium</li>
                                <li>Le modèle féminin mesure 5'8" / 173 cm et porte la taille Small</li>
                                <li>Tissu lourd de 5,3 oz / 180 g/m², les couleurs unies sont en 100% coton pré-rétréci, le gris chiné est en 90% coton/10% polyester, le gris denim chiné est en 50% coton/50% polyester</li>
                                <li>Ourlets doubles et bande de cou pour une durabilité accrue</li>
                            </ul>
                        </div>}
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/72/13/a1/7213a16165e9ba30d33be8c953faae28.png"
                                 alt="FranceFlag"/>
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
                        <div className="delivery">
                            <img src="https://i.pinimg.com/originals/35/96/f5/3596f54bbd8a9bbe7a0219847da373c0.png"
                                 alt="return"/>
                            {lang === "EN" && <div>
                                <p className="devTitle">Returns are free and easy</p>
                                <p className="devP">Exchange or money back guarantee for all orders.</p>
                            </div>}
                            {lang === "FR" && <div>
                                <p className="devTitle">Les retours sont gratuits et faciles</p>
                                <p className="devP">Échange ou remboursement garanti pour toutes les commandes.</p>
                            </div>}
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
                            {lang === "EN" && <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 122 reviews</p>}
                            {lang === "FR" && <p id="readReviews" onClick={() => setShowReviews(true)}>+ Lire les 122 Commentaires</p>}
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

export default TShirt;