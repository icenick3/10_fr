import React from 'react';
import './ReturnPolicy.css'

const ReturnPolicy = ({setReturn, returnPol, lang}) => {
    return (
        <div className={returnPol ? "returnPolicy show404" : "returnPolicy"} onClick={() => setReturn(false)}>


                <div className={returnPol ? "returnBlock show404" : "returnBlock"} onClick={(e) => e.stopPropagation()}>
                    <img className="closeGuide"
                         src="https://i.pinimg.com/originals/52/e3/86/52e38681b082f94f2917624bb56edf42.png" alt=""
                         onClick={() => setReturn(false)}/>
                    <h1>Politique de retour</h1>
                    <p>
                        Les produits peuvent être retournés dans les 30 jours suivant la livraison pour un REMBOURSEMENT
                        COMPLET.
                        <br/><br/>
                        Les articles doivent être reçus dans leur état d'origine - non utilisés et dans leur emballage
                        d'origine.
                        <br/><br/>
                        Pour effectuer votre retour, nous avons besoin de votre reçu ou d'une preuve d'achat. Veuillez
                        l'inclure dans votre colis lors du retour de votre article.
                        <br/><br/>
                        Nous traitons tous les retours dans un délai d'une semaine à compter de la réception de vos
                        articles et nous vous enverrons un e-mail avec les détails de votre retour traité.
                        <br/><br/>
                        Veuillez nous contacter via notre page de contact si vous pensez que votre produit est endommagé
                        ou défectueux. L'acheteur est responsable des frais d'expédition pour le retour de l'article.
                        <br/><br/>
                        Les frais d'expédition ne sont pas remboursables.
                        <br/><br/>
                        Si 30 jours se sont écoulés depuis la réception de votre commande, nous ne pouvons
                        malheureusement pas vous offrir de retour ou d'échange.
                    </p>
                    <h2>Pour commencer un retour, veuillez nous envoyer un message via la page de contact avec les
                        informations suivantes :</h2>
                    <p>
                        Nom complet
                        <br/>
                        Numéro de commande
                        <br/>
                        Demande de retour
                    </p>
                    <h2>Remboursements</h2>
                    <p>
                        Une fois votre retour reçu et inspecté, nous vous enverrons un e-mail pour vous informer que
                        nous avons bien reçu votre article retourné. Nous vous informerons également de l'approbation ou
                        du rejet de votre remboursement. Si vous êtes approuvé, alors votre remboursement sera traité et
                        un crédit sera automatiquement appliqué à votre carte de crédit ou à votre mode de paiement
                        original, dans un certain délai.
                        <br/><br/>
                        Remboursements tardifs ou manquants (le cas échéant)
                        Si vous n'avez pas encore reçu de remboursement, vérifiez d'abord votre compte bancaire.
                        Ensuite, contactez votre société de carte de crédit, il peut y avoir un délai avant que votre
                        remboursement ne soit officiellement visible. Ensuite, contactez votre banque. Il y a souvent un
                        délai de traitement avant qu'un remboursement ne soit affiché. Si vous avez suivi toutes ces
                        étapes et que vous n'avez toujours pas reçu votre remboursement, veuillez nous contacter via
                        notre page de contact.
                    </p>
                </div>


        </div>
    );
};

export default ReturnPolicy;