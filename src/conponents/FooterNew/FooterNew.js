import React, {useState} from 'react';
import './Footer.css'

const FooterNew = ({setReturn, setShiping, setAbout, setContactUs, setFaq, lang}) => {

    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)

    const onclick = (act, setAct) => {
        if (act) {
            setAct(false)
        } else {
            setAct(true)
        }
    }
    return (
        <div id="footerNew">
            <div className="divF" onClick={() => onclick(active1, setActive1)}>
                <p>Information</p>
                <img className="fImg" src="https://i.pinimg.com/originals/7a/aa/23/7aaa237f13b2b88470387d8078a5d274.png"
                     alt=""/>
            </div>
            <div className="list">
                <ul>
                    <li onClick={() => setAbout(true)}>
                        Privacy Policy
                    </li>
                    {/*<li onClick={() => setContactUs(true)}>Contactez-nous</li>*/}
                    <li onClick={() => setFaq(true)}>Terms of Service</li>
                    {/*<li onClick={() => setReturn(true)}>Politique de retour</li>*/}
                    <li onClick={() => setShiping(true)}>Payment Policy</li>
                </ul>
            </div>
            <div className="divF" onClick={() => onclick(active2, setActive2)}>
                <p>Besoin d’aide ?</p>
                <img className="fImg" src="https://i.pinimg.com/originals/7a/aa/23/7aaa237f13b2b88470387d8078a5d274.png"
                     alt=""/>
            </div>
            {active2 && <div className="list">
                <ul>
                    <li>support@orchestra</li>
                    <li>49 Dalberg Rd, London SW2 1AJ, Great Britain</li>
                    <li>Cell: +447909777249</li>
                </ul>
            </div>}
            <img className="topCom" src="https://i.pinimg.com/originals/0e/c1/79/0ec179f542547e29c643ed8be6458d6c.png"
                 alt=""/>
            <div className="InputBox">
                <input className="emailInput" type="email" name="email"
                       data-placeholder="Je m'inscris à la newsletter" placeholder="Je m'inscris à la newsletter"/>
                <input className="emailSubmit" type="submit" value="OK"/>
            </div>
            <img className="topCom2" src="https://i.pinimg.com/originals/93/dd/a1/93dda1292068308e8dc68d71147e73c1.png"
                 alt=""/>
            <div className="flexLogo">
                <img src="https://i.pinimg.com/originals/50/2c/e6/502ce68f6e36982982cc66898a21bc51.png" alt=""/>
                <img src="https://i.pinimg.com/originals/01/a2/8f/01a28f94712e8ac574f1d229c349ad65.jpg" alt=""/>
            </div>
            <h1 className="h1Footer"></h1>

            <p className="pFooter">Ce site ne fait pas partie du site Web de Facebook ou de Facebook Inc. et n'est pas
                approuvé par Facebook. FACEBOOK est une marque déposée de FACEBOOK, Inc. Facebook fournit une plateforme
                pour diffuser de la publicité, mais les opinions et/ou points de vue exprimés sur ce site ne
                représentent pas Facebook, Inc. Les opinions et/ou points de vue exprimés sur nos plateformes de médias
                sociaux, y compris, mais sans s'y limiter, nos blogs et pages Facebook, représentent les pensées des
                blogueurs individuels et des communautés en ligne, et non nécessairement ceux de notre site Web ou de
                ses partenaires commerciaux, affiliés, ou de leurs dirigeants, employés, personnel ou membres du conseil
                d'administration respectifs. Les opinions et points de vue exprimés sur ces pages ne reflètent pas les
                opinions du site sur lequel ils sont publiés, des autres sites affiliés au site, du personnel chargé de
                la maintenance du site ou de tout membre du site. Les opinions ou points de vue exprimés sur les
                plateformes de médias sociaux de ce site ne représentent pas Facebook, Inc. Bien que notre site Web
                fasse des efforts raisonnables pour surveiller et/ou modérer le contenu publié sur ses plateformes de
                médias sociaux, nous ne modérons pas tous les commentaires et ne pouvons pas toujours répondre en temps
                opportun aux demandes en ligne. Tous les nouveaux clients sont inscrits à un tirage au sort pour le
                produit de la campagne publié. Si vous êtes l'heureux gagnant, vous serez contacté directement par
                e-mail. Cette offre spéciale comprend un essai de trois jours à un service affilié, après quoi les frais
                d'abonnement de trente-trois euros tous les quatorze jours seront automatiquement déduits de votre carte
                de crédit. Si, pour quelque raison que ce soit, vous n'êtes pas satisfait du service, vous pouvez
                annuler votre compte dans les trois jours. Le service sera renouvelé tous les trente jours jusqu'à
                annulation. Cette campagne expirera le trente et unième décembre de cette année. Si vous souhaitez
                participer sans vous inscrire à un essai de trois jours sur Toolsandtoys, veuillez envoyer un
                e-mail.</p>
        </div>
    );
};

export default FooterNew;