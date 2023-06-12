import React, {useState} from 'react';
import './Footer.css'

const Footer = ({setReturn, setShiping, setAbout, setContactUs, setFaq, lang}) => {

    const [active, setActive] = useState(false)

    const onsubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        setActive(true)
        setTimeout(()=>{
            setActive(false)
        }, 5000)
    }

    return (
        <div id="blackFooter">
            {lang === "EN" && <div id="mainBlackFooter">
                <div id="FEFooter">
                    <h2>About ArtEmporium</h2>
                    <br/>
                    <p>
                        ArtEmporium , your ultimate smart living store. Discover cutting-edge technology and
                        innovative solutions to elevate your lifestyle. From smart home devices to sustainable living
                        essentials, we bring you the future of living, today.
                    </p>
                    <br/>
                    <p>support@art.emporium</p>
                    <br/>
                    <p>7 Rue du Passeur d'Étoiles, 95800 Cergy, France</p>
                    <br/>
                    <p>Cell: +33757901675</p>
                </div>
                <div id="SEFooter">
                    <h2>Quick Links</h2>
                    <ul>
                        <li onClick={() => setAbout(true)}>About Us</li>
                        <li onClick={() => setContactUs(true)}>Contact Us</li>
                        <li onClick={() => setFaq(true)}>FAQ's</li>
                        <li onClick={() => setReturn(true)}>Return Policy</li>
                        <li onClick={() => setShiping(true)}>Shipping Information</li>
                    </ul>
                </div>
                <div id="TEFooter">
                    <h2>Stay in the Know!</h2>
                    <p>Subscribe to Our Newsletter</p>
                    <form onSubmit={onsubmit}>
                        <input type="email" placeholder={"Your email"}/>
                        {active && <p>Thank you for subscribing to our store</p>}
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>}
            {lang === "FR" &&

                <div id="mainBlackFooter">
                    <div id="FEFooter">
                        <h2>À propos d'ArtEmporium</h2>
                        <br/>
                        <p>
                            ArtEmporium, votre magasin intelligent ultime. Découvrez des technologies de pointe et des solutions innovantes pour améliorer votre style de vie. Des appareils domotiques aux produits essentiels pour une vie durable, nous vous apportons le futur de la vie, aujourd'hui.
                        </p>
                        <br/>
                        <p>support@art.emporium</p>
                        <br/>
                        <p>7 Rue du Passeur d'Étoiles, 95800 Cergy, France</p>
                        <br/>
                        <p>Tél : +33757901675</p>
                    </div>
                    <div id="SEFooter">
                        <h2>Liens Rapides</h2>
                        <ul>
                            <li onClick={() => setAbout(true)}>À Propos de Nous</li>
                            <li onClick={() => setContactUs(true)}>Contactez-nous</li>
                            <li onClick={() => setFaq(true)}>FAQ</li>
                            <li onClick={() => setReturn(true)}>Politique de retour</li>
                            <li onClick={() => setShiping(true)}>Informations sur la livraison</li>
                        </ul>
                    </div>
                    <div id="TEFooter">
                        <h2>Restez Informé !</h2>
                        <p>Inscrivez-vous à notre newsletter</p>
                        <form onSubmit={onsubmit}>
                            <input type="email" placeholder={"Votre adresse e-mail"}/>
                            {active && <p>Merci de vous être abonné à notre magasin</p>}
                            <button>S'abonner</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};

export default Footer;