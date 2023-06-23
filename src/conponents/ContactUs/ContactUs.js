import React, {useState} from 'react';
import './ContactUs.css'

const ContactUs = ({setContactUs, contact, lang}) => {

    const [active, setActive] = useState(false)

    const onsubmit = (e) => {
        e.preventDefault()
        setActive(true)
        e.target.reset()
        setTimeout(() => {
            setContactUs(false)
            setActive(false)
        }, 2000)
    }
    return (
        <div className={contact ? "returnPolicy3 show404" : "returnPolicy3"} onClick={() => setContactUs(false)}>


                <div className={contact ? "returnBlock3 show404" : "returnBlock3"} onClick={(e) => e.stopPropagation()}>
                    <img className="closeGuide"
                         src="https://i.pinimg.com/originals/52/e3/86/52e38681b082f94f2917624bb56edf42.png" alt=""
                         onClick={() => setContactUs(false)}/>
                    <h1>Contactez-nous</h1>
                    {active && <p>
                        Merci de nous contacter. Nous vous répondrons dès que possible.
                    </p>}
                    <form onSubmit={onsubmit}>
                        <div>
                            <input type="text" placeholder="Nom" required/>
                            <input type="email" placeholder="Email" required/>
                        </div>
                        <input className="phone" type="text" placeholder="Téléphone" required/>
                        <textarea cols="30" rows="10" placeholder="Message" required></textarea>
                        <button>Envoyer</button>
                    </form>
                </div>

        </div>
    );
};

export default ContactUs;