import React from 'react';
import './PreFooter.css'

const PreFooter = ({lang}) => {
    return (
        <div >
            {lang === "EN" && <div className="PreFooter">
                <div className="block">
                    <img src="https://i.pinimg.com/originals/63/06/6c/63066cf9f5da890227291580c4852cb2.png" alt=""/>
                    <h2>Worldwide Shipping</h2>
                    <p>Available as Standard or Express delivery</p>
                </div>
                <div className="block">
                    <img src="https://i.pinimg.com/originals/ee/66/08/ee6608f7b33aec0961b99e7eae4efdca.png" alt=""/>
                    <h2>Secure Payments</h2>
                    <p>100% Secure payment with 256-bit SSL Encryption</p>
                </div>
                <div className="block">
                    <img src="https://i.pinimg.com/originals/0b/6d/2d/0b6d2da929eeadc87fed46d75031765e.png" alt=""/>
                    <h2>Free Return</h2>
                    <p>Exchange or money back guarantee for all orders</p>
                </div>
                <div className="block">
                    <img src="https://i.pinimg.com/originals/ad/15/45/ad15450777ccfbd17148e927ddf6e354.png" alt=""/>
                    <h2>Local Support</h2>
                    <p>24/7 Dedicated support</p>
                </div>
            </div>}
            {lang === "FR" &&

                <div className="PreFooter">
                    <div className="block">
                        <img src="https://i.pinimg.com/originals/63/06/6c/63066cf9f5da890227291580c4852cb2.png" alt=""/>
                        <h2>Livraison mondiale</h2>
                        <p>Disponible en livraison standard ou express</p>
                    </div>
                    <div className="block">
                        <img src="https://i.pinimg.com/originals/ee/66/08/ee6608f7b33aec0961b99e7eae4efdca.png" alt=""/>
                        <h2>Paiements sécurisés</h2>
                        <p>Paiement 100% sécurisé avec cryptage SSL 256 bits</p>
                    </div>
                    <div className="block">
                        <img src="https://i.pinimg.com/originals/0b/6d/2d/0b6d2da929eeadc87fed46d75031765e.png" alt=""/>
                        <h2>Retour gratuit</h2>
                        <p>Échange ou remboursement garanti pour toutes les commandes</p>
                    </div>
                    <div className="block">
                        <img src="https://i.pinimg.com/originals/ad/15/45/ad15450777ccfbd17148e927ddf6e354.png" alt=""/>
                        <h2>Assistance locale</h2>
                        <p>Assistance dédiée 24h/24 et 7j/7</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default PreFooter;