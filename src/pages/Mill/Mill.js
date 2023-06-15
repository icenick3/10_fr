import React, {useRef, useState} from 'react';
import './Mill.css'

import {mill} from "../../conponents/ImageMbappe/ImageMbappe";

import ReviewsMill from "../../conponents/ReviewsMill/Reviews";
import CarouselBoxTShirt from "../../conponents/CarouselBoxTShirt/CarouselBoxTShirt";

const Mill = ({date, date2, small, setSmall, setShowReviews, phone, lang, href}) => {

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
            <div className="imgBlockPillow">
                <img src="https://i.pinimg.com/originals/80/eb/c1/80ebc1f2b62bcfedcc84f1fb0e4da6bb.jpg" alt=""/>
            </div>
            <div className="informationBlock">
                {lang === "EN" && <h2 className="h2ts">COOL KNIGHT Herb Grinder Electric Spice Grinder</h2>}
                {lang === "EN" && <p className="design">Designed and sold by <span>Coolknight</span></p>}
                {lang === "EN" && <p className="price">€ 2.00 <span>€ 19.00</span> <span id="vat">incl. VAT</span></p>}
                {lang === "FR" && <h2 className="h2ts">COOL KNIGHT Broyeur d'herbes électrique Moulin à épices</h2>}
                {lang === "FR" && <p className="design">Conçu et vendu par <span>Coolknight</span></p>}
                {lang === "FR" &&
                    <p className="price">€ 2,00 <span>€ 19,00</span> <span id="vat">Incl. la TVA</span></p>}
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
            <div className="TShirt">
                <div className="imgContainer">
                    <div className="mobileHeader">
                        {lang === "EN" && <h2 className="h2ts">COOL KNIGHT Herb Grinder Electric Spice Grinder [Large Capacity/High
                            Rotating Speed /Electric]--Electric Grinder for Spices and Herbs (Wood grain 2)</h2>}
                        {lang === "EN" && <p className="design">Designed and sold by <span>Coolknight</span></p>}
                        {lang === "EN" &&
                            <p className="price">€ 2.00 <span>€ 19.00</span> <span id="vat">incl. VAT</span></p>}
                        {lang === "FR" &&
                            <h2 className="h2ts">COOL KNIGHT Broyeur d'herbes électrique Moulin à épices [Grande
                                capacité/Grande vitesse de rotation/Électrique] - Broyeur électrique pour épices et
                                herbes (Aspect bois 2)</h2>}
                        {lang === "FR" && <p className="design">Conçu et vendu par <span>Coolknight</span></p>}
                        {lang === "FR" &&
                            <p className="price">€ 2,00 <span>€ 19,00</span> <span id="vat">Incl. la TVA</span></p>}
                    </div>
                    <div className="imgCarouselMill">
                        <CarouselBoxTShirt element={mill}/>
                    </div>
                    {lang === "EN" && <div className="features">
                        <h2>About this item</h2>
                        <ul className="firstUl">
                            <li>Large-capacity, fast grinder for herbs : Spice grinder can quickly complete grinding
                                120g of herbs or spices within 5 to 10 seconds; Its visual-lid design allows you to
                                control the coarse or fine grinding state with one hand only; It takes 3 to 5 seconds
                                for coarse grinding, and 8 to15 seconds for fine grinding only.
                            </li>
                            <li>Powerful multi-function grinder : Suitable for grinding herbs, spices, pollen, coffee
                                beans, etc., meeting all your needs on grinding, and solving other problems like slow
                                grinding, low capacity, long grinding time, inability to control coarseness, etc. It
                                saves you a lot of time for doing other meaningful things.


                            </li>
                            <li>One-button operation and safety design : Its design includes a simple push-down-power
                                operation, and the lid is used as a switch; Just a gentle press, the grinder will start
                                grinding, and only stop till you lift your hand from the lid. You can also keep pressing
                                the lid within different time length so as to control the coarse, medium and fine
                                grinding state. In addition, it makes the grinder safer, since the blade will only start
                                to rotate when the lid is on the cup and pressed down.


                            </li>
                            <li>Material and technology : The sharp blade of the electric grinder is made of high
                                quality 304 stainless steel,The motor is designed with copper wire for durability.;
                                Unique shape of the blade allows grinding in all 360-degree directions. And it runs at a
                                speed of 30,000 rotations per minute, which enables the grinder to complete its work
                                quickly.


                            </li>
                            <li>Easy to clean and detachable power cord A complimentary brush is included in the
                                package, which can be used to clean the stainless steel grinder easily. The power cord
                                is detachable, so you can store it with ease and save space..Safer to use :Spice grinder
                                with automatic power off protection.when the motor is shorted, overheated, or the outer
                                lid is open,the electric grinder will automatically powers off.
                            </li>
                        </ul>
                    </div>}
                    {lang === "FR" && <div className="features">
                        <h2>À propos de cet article</h2>
                        <ul className="firstUl">
                            <li>Grande capacité, broyeur rapide pour les herbes : Le broyeur à épices peut rapidement
                                broyer 120 g d'herbes ou d'épices en 5 à 10 secondes ; Sa conception avec couvercle
                                transparent vous permet de contrôler l'état de broyage grossier ou fin d'une seule main ;
                                Il faut 3 à 5 secondes pour un broyage grossier et 8 à 15 secondes pour un broyage fin
                                seulement.
                            </li>
                            <li>Broyeur polyvalent puissant : Convient pour broyer des herbes, des épices, du pollen,
                                des grains de café, etc., répondant à tous vos besoins en matière de broyage et résolvant
                                d'autres problèmes tels que le broyage lent, la faible capacité, le long temps de broyage,
                                l'incapacité à contrôler la grosseur, etc. Il vous fait gagner beaucoup de temps pour
                                faire d'autres choses significatives.
                            </li>
                            <li>Commande à bouton unique et conception de sécurité : Sa conception comprend une
                                simple pression pour allumer le broyeur, et le couvercle sert d'interrupteur ; Il suffit
                                d'une pression douce, le broyeur commencera à broyer et s'arrêtera uniquement lorsque
                                vous retirerez votre main du couvercle. Vous pouvez également maintenir la pression sur
                                le couvercle pendant différentes durées pour contrôler l'état de broyage grossier,
                                moyen et fin. De plus, cela rend le broyeur plus sûr, car la lame ne se mettra en marche
                                que lorsque le couvercle est en place sur la tasse et enfoncé.
                            </li>
                            <li>Matériau et technologie : La lame tranchante du broyeur électrique est en acier
                                inoxydable de haute qualité 304. Le moteur est conçu avec un fil de cuivre pour une
                                durabilité accrue ; La forme unique de la lame permet un broyage dans toutes les
                                directions à 360 degrés. Et il fonctionne à une vitesse de 30 000 rotations par minute,
                                ce qui permet au broyeur de terminer son travail rapidement.
                            </li>
                            <li>Facile à nettoyer et cordon d'alimentation amovible : Une brosse de nettoyage est
                                incluse dans le paquet, ce qui permet de nettoyer facilement le broyeur en acier
                                inoxydable. Le cordon d'alimentation est amovible, vous pouvez donc le ranger
                                facilement et gagner de l'espace. Plus sûr à utiliser : Le broyeur à épices est doté
                                d'une protection automatique contre les surtensions, la surchauffe ou l'ouverture du
                                couvercle externe, le broyeur électrique s'éteindra automatiquement.
                            </li>
                        </ul>
                    </div>}
                </div>
                <div className="descriptionTShirt">
                    <div className="informContainer">
                        {lang === "EN" && <div>
                            <h2 className="h2ts">COOL KNIGHT Herb Grinder Electric Spice Grinder [Large Capacity/High
                                Rotating Speed /Electric]--Electric Grinder for Spices and Herbs (Wood grain 2)
                            </h2>
                            <p className="design">Designed and sold by <span>Coolknight</span></p>
                            <p className="price">€ 2.00 <span>€ 19,00</span></p>
                            <p className="vat">incl. VAT</p>
                            <p className="color"><span>Brand: </span>Coolknight</p>
                            <p className="color"><span>Operation mode: </span>Automatic</p>
                            <p className="color"><span>Dishwasher safe?: </span>Yes</p>
                            <p className="color"><span>Material: </span>Stainless Steel Wood Copper</p>
                            <p className="color"><span>Colour: </span>Wood Grain 2</p>
                        </div>}
                        {lang === "FR" && <div>
                            <h2 className="h2ts">COOL KNIGHT Herb Grinder Electric Spice Grinder [Grande capacité / Haute
                                vitesse de rotation / Électrique] - Broyeur électrique pour épices et herbes (Grain de bois 2)
                            </h2>
                            <p className="design">Conçu et vendu par <span>Coolknight</span></p>
                            <p className="price">€ 2,00<span>€ 19,00</span></p>
                            <p className="vat">Incl. la TVA</p>
                            <p className="color"><span>Marque :</span> Coolknight</p>
                            <p className="color"><span>Mode de fonctionnement :</span> Automatique</p>
                            <p className="color"><span>Compatible avec le lave-vaisselle :</span> Oui</p>
                            <p className="color"><span>Matériau :</span> Acier inoxydable, bois, cuivre</p>
                            <p className="color"><span>Couleur :</span> Grain de bois 2</p>
                        </div>}
                        <a className="btnts mill228" href={href}>
                            <img src="https://i.pinimg.com/originals/57/80/8c/57808c79cf14cd363f7ec7a83e5d9018.png"
                                 alt=""/>
                            {lang === "EN" && <p>Buy this Item</p>}
                            {lang === "FR" && <p>Acheter</p>}
                        </a>
                        {lang === "EN" && <div className="features221">
                            <p>About this item</p>
                            <ul className="firstUl">
                                <li>Large-capacity, fast grinder for herbs : Spice grinder can quickly complete grinding
                                    120g of herbs or spices within 5 to 10 seconds; Its visual-lid design allows you to
                                    control the coarse or fine grinding state with one hand only; It takes 3 to 5
                                    seconds
                                    for coarse grinding, and 8 to15 seconds for fine grinding only.
                                </li>
                                <li>Powerful multi-function grinder : Suitable for grinding herbs, spices, pollen,
                                    coffee
                                    beans, etc., meeting all your needs on grinding, and solving other problems like
                                    slow
                                    grinding, low capacity, long grinding time, inability to control coarseness, etc. It
                                    saves you a lot of time for doing other meaningful things.


                                </li>
                                <li>One-button operation and safety design : Its design includes a simple
                                    push-down-power
                                    operation, and the lid is used as a switch; Just a gentle press, the grinder will
                                    start
                                    grinding, and only stop till you lift your hand from the lid. You can also keep
                                    pressing
                                    the lid within different time length so as to control the coarse, medium and fine
                                    grinding state. In addition, it makes the grinder safer, since the blade will only
                                    start
                                    to rotate when the lid is on the cup and pressed down.


                                </li>
                                <li>Material and technology : The sharp blade of the electric grinder is made of high
                                    quality 304 stainless steel,The motor is designed with copper wire for durability.;
                                    Unique shape of the blade allows grinding in all 360-degree directions. And it runs
                                    at a
                                    speed of 30,000 rotations per minute, which enables the grinder to complete its work
                                    quickly.


                                </li>
                                <li>Easy to clean and detachable power cord A complimentary brush is included in the
                                    package, which can be used to clean the stainless steel grinder easily. The power
                                    cord
                                    is detachable, so you can store it with ease and save space..Safer to use :Spice
                                    grinder
                                    with automatic power off protection.when the motor is shorted, overheated, or the
                                    outer
                                    lid is open,the electric grinder will automatically powers off.
                                </li>
                            </ul>
                        </div>}
                        {lang === "FR" && <div className="features221">
                            <h2>À propos de cet article</h2>
                            <ul className="firstUl">
                                <li>Grande capacité, broyeur rapide pour les herbes : Le broyeur à épices peut rapidement
                                    broyer 120 g d'herbes ou d'épices en 5 à 10 secondes ; Sa conception avec couvercle
                                    transparent vous permet de contrôler l'état de broyage grossier ou fin d'une seule main ;
                                    Il faut 3 à 5 secondes pour un broyage grossier et 8 à 15 secondes pour un broyage fin
                                    seulement.
                                </li>
                                <li>Broyeur polyvalent puissant : Convient pour broyer des herbes, des épices, du pollen,
                                    des grains de café, etc., répondant à tous vos besoins en matière de broyage et résolvant
                                    d'autres problèmes tels que le broyage lent, la faible capacité, le long temps de broyage,
                                    l'incapacité à contrôler la grosseur, etc. Il vous fait gagner beaucoup de temps pour
                                    faire d'autres choses significatives.
                                </li>
                                <li>Commande à bouton unique et conception de sécurité : Sa conception comprend une
                                    simple pression pour allumer le broyeur, et le couvercle sert d'interrupteur ; Il suffit
                                    d'une pression douce, le broyeur commencera à broyer et s'arrêtera uniquement lorsque
                                    vous retirerez votre main du couvercle. Vous pouvez également maintenir la pression sur
                                    le couvercle pendant différentes durées pour contrôler l'état de broyage grossier,
                                    moyen et fin. De plus, cela rend le broyeur plus sûr, car la lame ne se mettra en marche
                                    que lorsque le couvercle est en place sur la tasse et enfoncé.
                                </li>
                                <li>Matériau et technologie : La lame tranchante du broyeur électrique est en acier
                                    inoxydable de haute qualité 304. Le moteur est conçu avec un fil de cuivre pour une
                                    durabilité accrue ; La forme unique de la lame permet un broyage dans toutes les
                                    directions à 360 degrés. Et il fonctionne à une vitesse de 30 000 rotations par minute,
                                    ce qui permet au broyeur de terminer son travail rapidement.
                                </li>
                                <li>Facile à nettoyer et cordon d'alimentation amovible : Une brosse de nettoyage est
                                    incluse dans le paquet, ce qui permet de nettoyer facilement le broyeur en acier
                                    inoxydable. Le cordon d'alimentation est amovible, vous pouvez donc le ranger
                                    facilement et gagner de l'espace. Plus sûr à utiliser : Le broyeur à épices est doté
                                    d'une protection automatique contre les surtensions, la surchauffe ou l'ouverture du
                                    couvercle externe, le broyeur électrique s'éteindra automatiquement.
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
                                <div className="barMill">
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
                                <div className="barMill">
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
                                <div className="barMill">
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
                                <div className="barMill">
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
                                <div className="barMill">
                                    <div className="progressBar5">
                                    </div>
                                </div>
                            </div>
                            {lang === "EN" &&
                                <p id="readReviews" onClick={() => setShowReviews(true)}>+ Read all 66 reviews</p>}
                            {lang === "FR" &&
                                <p id="readReviews" onClick={() => setShowReviews(true)}>+ Lire les 66 Commentaires</p>}
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

export default Mill;