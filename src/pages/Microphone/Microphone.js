import React, {useRef, useState} from 'react';
import './Microphone.css'

import {
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

const Microphone = ({date2, date, small, setSmall, setShowReviews, phone, lang, href}) => {
    const [color, setColor] = useState('Rose gold')


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
                <img className="imgTs3"
                     src="https://i.pinimg.com/originals/50/63/2c/50632cf3b63c0eaceab2b09df710ff38.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                {lang === "EN" && <h2 className="h2ts">Ankuka Karaoke Wireless Microphone</h2>}
                {lang === "EN" && <p className="design">Designed and sold by <span>Ankuka Store</span></p>}
                {lang === "EN" && <p className="price">€ 2.00 <span>€ 14.00</span> <span id="vat">incl. VAT</span></p>}
                {lang === "FR" && <h2 className="h2ts">Microphone sans fil Ankuka Karaoke</h2>}
                {lang === "FR" && <p className="design">Conçu et vendu par <span>Ankuka Store</span></p>}
                {lang === "FR" &&
                    <p className="price">€ 2,00 <span>€ 14,00</span> <span id="vat">Incl. la TVA</span></p>}
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
            <div className="Micro">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        {lang === "EN" &&
                            <h2 className="h2ts">Ankuka Karaoke Wireless Microphone, Bluetooth Dancing LED Lights
                                Handheld
                                Portable Speaker Karaoke Machine, Home KTV Player with Record Function, Compatible with
                                Android & iOS Devices</h2>}
                        {lang === "EN" && <p className="design">Designed and sold by <span>Ankuka Store</span></p>}
                        {lang === "EN" &&
                            <p className="price">€ 2.00 <span>€ 14.00</span> <span id="vat">incl. VAT</span></p>}
                        {lang === "FR" &&
                            <h2 className="h2ts">Microphone sans fil Ankuka Karaoke, haut-parleur portable avec lumières
                                LED dansantes, machine de karaoké, lecteur KTV domestique avec fonction
                                d'enregistrement, compatible avec les appareils Android et iOS.</h2>}
                        {lang === "FR" && <p className="design">Conçu et vendu par <span>Ankuka Store</span></p>}
                        {lang === "FR" &&
                            <p className="price">€ 2,00 <span>€ 14,00</span> <span id="vat">Incl. la TVA</span></p>}
                    </div>
                    <div className="imgCarContainerZippo">
                        {color === 'Rose gold' && <CarouselBoxTShirt element={microRose}/>}
                        {color === 'Blue' && <CarouselBoxTShirt element={microBlue}/>}
                        {color === 'Silver' && <CarouselBoxTShirt element={microSilver}/>}
                        {color === 'Red' && <CarouselBoxTShirt element={microRed}/>}
                        {color === 'Gold' && <CarouselBoxTShirt element={microGold}/>}
                        {color === 'Light Green' && <CarouselBoxTShirt element={microLightGreen}/>}
                        {color === 'Purple' && <CarouselBoxTShirt element={microPurple}/>}
                    </div>
                    {lang === "EN" && <div className="features">
                        <h2>
                            About this item
                        </h2>
                        <ul className="firstUl">
                            <li>4-IN-1 KARAOKE BLUETOOTH MICROPHONE: This portable wireless kids microphones can be used
                                as a microphone, Bluetooth speaker, loudspeaker and recorder. Using this handheld home
                                karaoke mic singing or record your wonderful voice at any time/where.
                            </li>
                            <li>QUALITY AUDIO SOUND: Equipped with professional audio processor and tuning system, three
                                layers pop filter, creating a stunning KTV live-sound environment and wonderful echo
                                reverberation. It's also a microphone speaker with 4 magic sounds: children's voice,
                                female voice, male voice, old male voice. So fun!
                            </li>
                            <li>LONG USING TIME: Long lasting and playing time up to 8 hours after full charged. This is
                                a brilliant Bluetooth microphone for kids, parties, family evenings and special festival
                                occasions.*Please use a DC 5V-1A plug adapter for charging.
                            </li>
                            <li>EASY CONNECTION AND WIDELY COMPATIBLE: Conveniently Bluetooth connections. This singing
                                microphone can easily connect to all Bluetooth devices like Andriod/smartphone/PC, and
                                YouTube, Smule etc. apps. It's super easy to use for kids or adults.
                            </li>
                            <li>IDEAL CHRISTMAS GIFT: This purple Bluetooth wireless microphone shows glowing dancing
                                led lights along with your voice and music volume, make you feel at the center of the
                                disco club. Not only kids but also adults will love it and enjoy lots of fun! If any
                                problem, please contact us immediately, and we'll sort it out for you.
                            </li>
                        </ul>
                    </div>}
                    {lang === "FR" && <div className="features">
                        <h2>
                            À propos de cet article
                        </h2>
                        <ul className="firstUl">
                            <li>4-EN-1 MICROPHONE BLUETOOTH KARAOKE : Ce microphone sans fil portable pour enfants peut être utilisé
                                comme microphone, haut-parleur Bluetooth, haut-parleur et enregistreur. Utilisez ce micro karaoké
                                à main pour chanter ou enregistrer votre magnifique voix à tout moment, n'importe où.
                            </li>
                            <li>QUALITÉ AUDIO SONORE : Équipé d'un processeur audio professionnel et d'un système d'accord, d'un
                                filtre anti-pop à trois couches, créant un environnement sonore KTV époustouflant et une
                                magnifique réverbération d'écho. C'est aussi un microphone haut-parleur avec 4 sons magiques :
                                voix d'enfant, voix féminine, voix masculine, voix d'homme âgé. Trop amusant !
                            </li>
                            <li>LONGUE DURÉE D'UTILISATION : Durée de lecture longue et pouvant aller jusqu'à 8 heures après une
                                charge complète. Il s'agit d'un brillant microphone Bluetooth pour enfants, fêtes, soirées
                                en famille et occasions spéciales de festivals. * Veuillez utiliser un adaptateur secteur DC 5V-1A pour la charge.
                            </li>
                            <li>CONNEXION FACILE ET LARGE COMPATIBILITÉ : Connexions Bluetooth pratiques. Ce microphone de chant
                                peut se connecter facilement à tous les appareils Bluetooth tels que Andriod/smartphone/PC, et
                                les applications YouTube, Smule, etc. Il est super facile à utiliser pour les enfants ou les adultes.
                            </li>
                            <li>CADEAU DE NOËL IDÉAL : Ce microphone Bluetooth sans fil violet affiche des lumières LED dansantes
                                qui s'illuminent en fonction de votre voix et du volume de la musique, vous faisant vous sentir
                                au centre du club disco. Non seulement les enfants, mais aussi les adultes l'adoreront et s'amuseront beaucoup ! Si vous rencontrez le moindre problème, veuillez nous contacter immédiatement et nous nous en occuperons pour vous.
                            </li>
                        </ul>
                    </div>}
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        {lang === "EN" && <p className="color11"><span>Color</span>{color}</p>}
                        {lang === "FR" && <p className="color11"><span>Couleur</span>
                            {color === 'Rose gold' ? "Or rose" : ''}
                            {color === 'Blue' ? "Bleu" : ''}
                            {color === 'Silver' ? "Argenté" : ''}
                            {color === 'Red' ? "Rouge" : ''}
                            {color === 'Gold' ? "Or" : ''}
                            {color === 'Light Green' ? "Vert clair" : ''}
                            {color === 'Purple' ? "Violet" : ''}
                        </p>}
                        <div className="colors122">
                            <div className="roseGold" onClick={() => colorOnclick('Rose gold')}>
                                {color === 'Rose gold' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="blue" onClick={() => colorOnclick('Blue')}>
                                {color === 'Blue' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="silver" onClick={() => colorOnclick('Silver')}>
                                {color === 'Silver' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="red" onClick={() => colorOnclick('Red')}>
                                {color === 'Red' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="golde" onClick={() => colorOnclick('Gold')}>
                                {color === 'Gold' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="greene" onClick={() => colorOnclick('Light Green')}>
                                {color === 'Light Green' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="purple1" onClick={() => colorOnclick('Purple')}>
                                {color === 'Purple' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>

                        </div>
                        {lang === "EN" && <div>
                            <h2 className="h2ts">Ankuka Karaoke Wireless Microphone, Bluetooth Dancing LED Lights Handheld
                                Portable Speaker Karaoke Machine, Home KTV Player with Record Function, Compatible with
                                Android & iOS Devices</h2>
                            <p className="design">Designed and sold by <span>Ankuka Store</span></p>
                            <p className="price">€ 2.00 <span>€ 14,00</span></p>
                            <p className="vat">incl. VAT</p>
                            <p className="color"><span>Brand: </span>Ankuka</p>
                            <p className="color"><span>Connectivity technology: </span>Bluetooth, USB</p>
                            <p className="color"><span>Connector type	:</span>USB</p>
                        </div>}
                        {lang === "FR" && <div>
                            <h2 className="h2ts">Microphone sans fil Ankuka Karaoke, haut-parleur portable avec lumières LED dansantes
                                machine de karaoké, lecteur KTV domestique avec fonction d'enregistrement, compatible avec
                                les appareils Android et iOS</h2>
                            <p className="design">Conçu et vendu par <span>Ankuka Store</span></p>
                            <p className="price">2,00 € <span>€ 14,00</span></p>
                            <p className="vat">Incl. la TVA</p>
                            <p className="color"><span>Marque : </span>Ankuka</p>
                            <p className="color"><span>Technologie de connectivité : </span>Bluetooth, USB</p>
                            <p className="color"><span>Type de connecteur :</span> USB</p>
                        </div>}
                        {lang === "EN" && <p className="color22"><span>Color</span>{color}</p>}
                        {lang === "FR" && <p className="color22"><span>Couleur</span>
                            {color === 'Rose gold' ? "Or rose" : ''}
                            {color === 'Blue' ? "Bleu" : ''}
                            {color === 'Silver' ? "Argenté" : ''}
                            {color === 'Red' ? "Rouge" : ''}
                            {color === 'Gold' ? "Or" : ''}
                            {color === 'Light Green' ? "Vert clair" : ''}
                            {color === 'Purple' ? "Violet" : ''}
                        </p>}
                        <div className="colors">
                            <div className="roseGold" onClick={() => colorOnclick('Rose gold')}>
                                {color === 'Rose gold' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="blue" onClick={() => colorOnclick('Blue')}>
                                {color === 'Blue' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="silver" onClick={() => colorOnclick('Silver')}>
                                {color === 'Silver' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>}
                            </div>
                            <div className="red" onClick={() => colorOnclick('Red')}>
                                {color === 'Red' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="golde" onClick={() => colorOnclick('Gold')}>
                                {color === 'Gold' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="greene" onClick={() => colorOnclick('Light Green')}>
                                {color === 'Light Green' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>
                            <div className="purple1" onClick={() => colorOnclick('Purple')}>
                                {color === 'Purple' && <img
                                    src="https://i.pinimg.com/originals/35/f8/85/35f8858073049cb7c5be9b064e19b9d8.png"
                                    alt=""/>
                                }                            </div>

                        </div>
                        <a className="btnts micro228" href={href}>
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
                                <li>4-IN-1 KARAOKE BLUETOOTH MICROPHONE: This portable wireless kids microphones can be
                                    used
                                    as a microphone, Bluetooth speaker, loudspeaker and recorder. Using this handheld
                                    home
                                    karaoke mic singing or record your wonderful voice at any time/where.
                                </li>
                                <li>QUALITY AUDIO SOUND: Equipped with professional audio processor and tuning system,
                                    three
                                    layers pop filter, creating a stunning KTV live-sound environment and wonderful echo
                                    reverberation. It's also a microphone speaker with 4 magic sounds: children's voice,
                                    female voice, male voice, old male voice. So fun!
                                </li>
                                <li>LONG USING TIME: Long lasting and playing time up to 8 hours after full charged.
                                    This is
                                    a brilliant Bluetooth microphone for kids, parties, family evenings and special
                                    festival
                                    occasions.*Please use a DC 5V-1A plug adapter for charging.
                                </li>
                                <li>EASY CONNECTION AND WIDELY COMPATIBLE: Conveniently Bluetooth connections. This
                                    singing
                                    microphone can easily connect to all Bluetooth devices like Andriod/smartphone/PC,
                                    and
                                    YouTube, Smule etc. apps. It's super easy to use for kids or adults.
                                </li>
                                <li>IDEAL CHRISTMAS GIFT: This purple Bluetooth wireless microphone shows glowing
                                    dancing
                                    led lights along with your voice and music volume, make you feel at the center of
                                    the
                                    disco club. Not only kids but also adults will love it and enjoy lots of fun! If any
                                    problem, please contact us immediately, and we'll sort it out for you.
                                </li>
                            </ul>
                        </div>}
                        {lang === "FR" && <div className="features221">
                            <h2>
                                À propos de cet article
                            </h2>
                            <ul className="firstUl">
                                <li>4-EN-1 MICROPHONE BLUETOOTH KARAOKE : Ce microphone sans fil portable pour enfants peut être utilisé
                                    comme microphone, haut-parleur Bluetooth, haut-parleur et enregistreur. Utilisez ce micro karaoké
                                    à main pour chanter ou enregistrer votre magnifique voix à tout moment, n'importe où.
                                </li>
                                <li>QUALITÉ AUDIO SONORE : Équipé d'un processeur audio professionnel et d'un système d'accord, d'un
                                    filtre anti-pop à trois couches, créant un environnement sonore KTV époustouflant et une
                                    magnifique réverbération d'écho. C'est aussi un microphone haut-parleur avec 4 sons magiques :
                                    voix d'enfant, voix féminine, voix masculine, voix d'homme âgé. Trop amusant !
                                </li>
                                <li>LONGUE DURÉE D'UTILISATION : Durée de lecture longue et pouvant aller jusqu'à 8 heures après une
                                    charge complète. Il s'agit d'un brillant microphone Bluetooth pour enfants, fêtes, soirées
                                    en famille et occasions spéciales de festivals. * Veuillez utiliser un adaptateur secteur DC 5V-1A pour la charge.
                                </li>
                                <li>CONNEXION FACILE ET LARGE COMPATIBILITÉ : Connexions Bluetooth pratiques. Ce microphone de chant
                                    peut se connecter facilement à tous les appareils Bluetooth tels que Andriod/smartphone/PC, et
                                    les applications YouTube, Smule, etc. Il est super facile à utiliser pour les enfants ou les adultes.
                                </li>
                                <li>CADEAU DE NOËL IDÉAL : Ce microphone Bluetooth sans fil violet affiche des lumières LED dansantes
                                    qui s'illuminent en fonction de votre voix et du volume de la musique, vous faisant vous sentir
                                    au centre du club disco. Non seulement les enfants, mais aussi les adultes l'adoreront et s'amuseront beaucoup ! Si vous rencontrez le moindre problème, veuillez nous contacter immédiatement et nous nous en occuperons pour vous.
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
                            {lang === "EN" &&
                                <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 52 reviews</p>}
                            {lang === "FR" &&
                                <p id="readReviews" onClick={() => setShowReviews(true)}>+ Lire les 52 Commentaires</p>}
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

export default Microphone;