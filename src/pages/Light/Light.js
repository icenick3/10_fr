import React, {useRef, useState} from 'react';
import './Light.css'

import {
    blackLight, blueLight, brownLight, grayLight, greenLight, orangeLight, redLight,
} from "../../conponents/ImageMbappe/ImageMbappe";
import ReviewsLight from "../../conponents/ReviewsLight/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Light = ({date, date2, setSmall, small, setShowReviews, phone, lang, href}) => {

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
                    // window.document.body.scrollIntoView({behavior: 'auto', block: 'start'});
                } else {

                }
            }, 450)


        }
    }

    return small ? (
        <div className="smallPageZippo" onClick={() => setSmall(false)}>
            <div className="imgBlock">
                <img src="https://i.pinimg.com/originals/00/a8/91/00a891197914de1a68522fcd991c2c02.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                {lang === "EN" && <h2 className="h2ts">Blukar Flashlight Rechargeable</h2>}
                {lang === "EN" && <p className="design">Designed and sold by <span>Yanko Design</span></p>}
                {lang === "EN" && <p className="price">€ 2.00 <span>€ 11.00</span> <span id="vat">incl. VAT</span></p>}
                {lang === "FR" && <h2 className="h2ts">Lampe de poche rechargeable Blukar</h2>}
                {lang === "FR" && <p className="design">Conçu et vendu par <span>Yanko Design</span></p>}
                {lang === "FR" && <p className="price">€ 2,00 <span>€ 11,00</span> <span id="vat">Incl. la TVA</span></p>}
                <div className="buttons22">
                    <a className="btnts1" onClick={() => setSmall(false)}>
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
            <div className="Light">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        {lang === "EN" && <h2 className="h2ts">Blukar Flashlight Rechargeable</h2>}
                        {lang === "EN" && <p className="design">Designed and sold by <span>Yanko Design</span></p>}
                        {lang === "EN" &&
                            <p className="price">€ 2.00 <span>€ 11.00</span> <span id="vat">incl. VAT</span></p>}
                        {lang === "FR" && <h2 className="h2ts">Lampe de poche rechargeable Blukar</h2>}
                        {lang === "FR" && <p className="design">Conçu et vendu par <span>Yanko Design</span></p>}
                        {lang === "FR" &&
                            <p className="price">€ 2,00 <span>€ 11,00</span> <span id="vat">Incl. la TVA</span></p>}
                    </div>
                    <div className="imgCarousel">
                        {color === 'Black' && <CarouselBoxTShirt element={blackLight}/>}
                        {color === 'Blue' && <CarouselBoxTShirt element={blueLight}/>}
                        {color === 'Brown' && <CarouselBoxTShirt element={brownLight}/>}
                        {color === 'Red' && <CarouselBoxTShirt element={redLight}/>}
                        {color === 'Green' && <CarouselBoxTShirt element={greenLight}/>}
                        {color === 'Orange' && <CarouselBoxTShirt element={orangeLight}/>}
                        {color === 'Gray' && <CarouselBoxTShirt element={grayLight}/>}
                    </div>
                    {lang === "EN" && <div className="features">
                        <h2>
                            About this item
                        </h2>
                        <ul className="firstUl">
                            <li>Super Bright flashlight - With stable performance and low power consumption, it can
                                provide a uniform high-brightness beam and a wider range of illumination to meet your
                                daily needs.
                            </li>
                            <li>4 Lighting Modes & Zoomable - One button control of 4 lighting modes:
                                High/Low/Strobe/SOS. The zoomable design of the flashlight adjusts the focus as needed,
                                giving you the freedom to choose a spotlight or floodlight for long distances or larger
                                illuminated areas.
                            </li>
                            <li>USB Rechargeable - Built-in 1800mAh can work up to 16 hours in normal use. You can
                                charge
                                this flashlight directly via the included USB cable.
                            </li>
                            <li>Durable and Portable - The flashlight shell is made of high quality aluminum alloy with
                                excellent hardness, wear resistance and drop resistance. The pocket is designed for easy
                                portability and can fit in your handbag, backpack or survival kit.
                            </li>
                            <li>Multiple Uses - The kit includes: 1*Rechargeable Flashlight, 1*USB Cable. The
                                lightweight
                                and practical LED flashlight can be widely used for daily lighting, power outages,
                                emergencies, etc. It can also be used for outdoor sports such as dog walking, camping,
                                hiking, fishing, running.
                            </li>
                        </ul>
                    </div>}
                    {lang === "FR" && <div className="features">
                        <h2>
                            À propos de cet article
                        </h2>
                        <ul className="firstUl">
                            <li>Lampe de poche super brillante - Avec des performances stables et une faible
                                consommation d'énergie, elle peut fournir un faisceau uniforme à haute luminosité et une
                                plus large gamme d'éclairage pour répondre à vos besoins quotidiens.
                            </li>
                            <li>4 modes d'éclairage et zoom - Contrôle à un bouton de 4 modes d'éclairage :
                                Haut/Bas/Stroboscope/SOS. La conception zoomable de la lampe de poche ajuste la mise au
                                point selon les besoins, vous donnant la liberté de choisir un projecteur ou un
                                éclairage de zone pour les longues distances ou les zones plus grandes éclairées.
                            </li>
                            <li>Rechargeable via USB - Batterie intégrée de 1800mAh pouvant fonctionner jusqu'à 16
                                heures en utilisation normale. Vous pouvez charger cette lampe de poche directement via
                                le câble USB inclus.
                            </li>
                            <li>Durable et portable - Le boîtier de la lampe de poche est en alliage d'aluminium de
                                haute qualité avec une excellente dureté, une résistance à l'usure et aux chocs. La
                                poche est conçue pour une portabilité facile et peut être rangée dans votre sac à main,
                                votre sac à dos ou votre trousse de survie.
                            </li>
                            <li>Utilisations multiples - Le kit comprend : 1*lampe de poche rechargeable, 1*câble USB.
                                La lampe de poche LED légère et pratique peut être largement utilisée pour l'éclairage
                                quotidien, les pannes de courant, les urgences, etc. Elle peut également être utilisée
                                pour les activités de plein air telles que la promenade des chiens, le camping, la
                                randonnée, la pêche, la course à pied.
                            </li>
                        </ul>
                    </div>}
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">

                        {lang === "EN" && <h2 className="h2ts">Blukar Flashlight Rechargeable</h2>}
                        {lang === "EN" && <p className="design">Designed and sold by <span>Yanko Design</span></p>}
                        {lang === "EN" && <p className="price">€ 2.00 <span>€ 11.00</span></p>}
                        {lang === "EN" && <p className="vat">incl. VAT</p>}
                        {lang === "FR" && <h2 className="h2ts">Lampe de poche rechargeable Blukar</h2>}
                        {lang === "FR" && <p className="design">Conçu et vendu par <span>Yanko Design</span></p>}
                        {lang === "FR" && <p className="price">€ 2,00 <span>€ 11,00</span></p>}
                        {lang === "FR" && <p className="vat">Incl. la TVA</p>}
                        {lang === "EN" && <p className="color"><span>Color</span>{color}</p>}
                        {lang === "FR" && <p className="color"><span>Couleur</span>
                            {color === 'Black' ? "Noir" : ''}
                            {color === 'Blue' ? "Bleu" : ''}
                            {color === 'Brown' ? "Marron" : ''}
                            {color === 'Red' ? "Rouge" : ''}
                            {color === 'Green' ? "Vert" : ''}
                            {color === 'Orange' ? "Orange" : ''}
                            {color === 'Gray' ? "Gri" : ''}
                        </p>}
                        <div className="colors">
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
                            <div className="brown" onClick={() => colorOnclick('Brown')}>
                                {color === 'Brown' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="red" onClick={() => colorOnclick('Red')}>
                                {color === 'Red' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="green" onClick={() => colorOnclick('Green')}>
                                {color === 'Green' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="orange" onClick={() => colorOnclick('Orange')}>
                                {color === 'Orange' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="gray" onClick={() => colorOnclick('Gray')}>
                                {color === 'Gray' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>

                        </div>
                        <a className="btnts light2288" href={href}>
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            {lang === "EN" && <p>Buy this Item</p>}
                            {lang === "FR" && <p>Acheter</p>}
                        </a>
                        {lang === "EN" && <div className="features221">
                            <h2>
                                About this item
                            </h2>
                            <ul className="firstUl">
                                <li>Super Bright flashlight - With stable performance and low power consumption, it can
                                    provide a uniform high-brightness beam and a wider range of illumination to meet
                                    your
                                    daily needs.
                                </li>
                                <li>4 Lighting Modes & Zoomable - One button control of 4 lighting modes:
                                    High/Low/Strobe/SOS. The zoomable design of the flashlight adjusts the focus as
                                    needed,
                                    giving you the freedom to choose a spotlight or floodlight for long distances or
                                    larger
                                    illuminated areas.
                                </li>
                                <li>USB Rechargeable - Built-in 1800mAh can work up to 16 hours in normal use. You can
                                    charge
                                    this flashlight directly via the included USB cable.
                                </li>
                                <li>Durable and Portable - The flashlight shell is made of high quality aluminum alloy
                                    with
                                    excellent hardness, wear resistance and drop resistance. The pocket is designed for
                                    easy
                                    portability and can fit in your handbag, backpack or survival kit.
                                </li>
                                <li>Multiple Uses - The kit includes: 1*Rechargeable Flashlight, 1*USB Cable. The
                                    lightweight
                                    and practical LED flashlight can be widely used for daily lighting, power outages,
                                    emergencies, etc. It can also be used for outdoor sports such as dog walking,
                                    camping,
                                    hiking, fishing, running.
                                </li>
                            </ul>
                        </div>}
                        {lang === "FR" && <div className="features221">
                            <h2>
                                À propos de cet article
                            </h2>
                            <ul className="firstUl">
                                <li>Lampe de poche super brillante - Avec des performances stables et une faible
                                    consommation d'énergie, elle peut fournir un faisceau uniforme à haute luminosité et une
                                    plus large gamme d'éclairage pour répondre à vos besoins quotidiens.
                                </li>
                                <li>4 modes d'éclairage et zoom - Contrôle à un bouton de 4 modes d'éclairage :
                                    Haut/Bas/Stroboscope/SOS. La conception zoomable de la lampe de poche ajuste la mise au
                                    point selon les besoins, vous donnant la liberté de choisir un projecteur ou un
                                    éclairage de zone pour les longues distances ou les zones plus grandes éclairées.
                                </li>
                                <li>Rechargeable via USB - Batterie intégrée de 1800mAh pouvant fonctionner jusqu'à 16
                                    heures en utilisation normale. Vous pouvez charger cette lampe de poche directement via
                                    le câble USB inclus.
                                </li>
                                <li>Durable et portable - Le boîtier de la lampe de poche est en alliage d'aluminium de
                                    haute qualité avec une excellente dureté, une résistance à l'usure et aux chocs. La
                                    poche est conçue pour une portabilité facile et peut être rangée dans votre sac à main,
                                    votre sac à dos ou votre trousse de survie.
                                </li>
                                <li>Utilisations multiples - Le kit comprend : 1*lampe de poche rechargeable, 1*câble USB.
                                    La lampe de poche LED légère et pratique peut être largement utilisée pour l'éclairage
                                    quotidien, les pannes de courant, les urgences, etc. Elle peut également être utilisée
                                    pour les activités de plein air telles que la promenade des chiens, le camping, la
                                    randonnée, la pêche, la course à pied.
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
                            {lang === "EN" && <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 93 reviews</p>}
                            {lang === "FR" && <p id="readReviews" onClick={() => setShowReviews(true)}>+ Lire les 93 Commentaires</p>}
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

export default Light;