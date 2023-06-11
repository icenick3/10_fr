import React, {useState} from 'react';
import './Footer.css'

const Footer = ({setReturn, setShiping, setAbout, setContactUs, setFaq}) => {

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
            <div id="mainBlackFooter">
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
                        <li onClick={()=> setAbout(true)}>About Us</li>
                        <li onClick={()=> setContactUs(true)}>Contact Us</li>
                        <li onClick={()=> setFaq(true)}>FAQ's</li>
                        <li onClick={()=> setReturn(true)}>Return Policy</li>
                        <li onClick={()=> setShiping(true)}>Shipping Information</li>
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
            </div>
        </div>
    );
};

export default Footer;