import { useTranslation } from 'react-i18next';
import { FormReservationTicket } from './Formreservation';

export const Reservationcompo = () => {
    const { t } = useTranslation();
    return (
        <>
            <header className="header-reservation" id='header-website'>
            </header>
            <div className='divdeh1'>
                <h1 className='reservh1'>RÉSERVATION</h1>
            </div>
            <section className='reservationsection'>
                <div className='divparentreservation'>
                <div className='divform'>
                        <FormReservationTicket />
                    </div>
                    <div className='div-droitereserv'>
                        <div className='divpanier'>
                            <h2>PANIER</h2>
                            <div className='divpetiteaffiche'>
                                <img src="./img/accueil/affiche_newton.png" alt="" />
                                <p>GRAVILIGHT</p>
                            </div>
                            <p>Réservation en ligne, e-billet par mail</p>
                            <p>Pour toute question, contactez le 3311</p>
                        </div>
                        <div className='divpanierinfo'>
                            <p>Pour les réservations de groupe (plus de 10 personnes), merci de nous envoyer un mail au moins 2 jours avant votre venue avec la liste complète des personnes (nom, prénom et date de naissance).</p>
                        </div>
                        <div className='panier-resume'>
                            <h3>VOTRE RÉSERVATION</h3>
                            <p className='resumep'><span>1 x</span> <span>Jeune Adulte</span> <span>8,00 €</span></p>
                            <p className='resumep'><span>1 x</span> <span>Jeune Adulte</span> <span>8,00 €</span></p>
                            <div className='panierligne'></div>
                            <p className='totalp'><span>SOUS-TOTAL</span> <span>13,00 €</span></p>
                            <button type='submit' className='resume-button'>Valider</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};