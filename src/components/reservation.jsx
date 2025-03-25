import React, { useState } from 'react';
import { FormReservationTicket } from '../components/Formreservation';
import { useTranslation } from 'react-i18next';
import Cookies from 'universal-cookie';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const Reservationcompo = () => {
    const { t } = useTranslation();
    const cookies = new Cookies(null, { path: '/' });
    useEffect(() => {
        gsap.fromTo('.reservationsection', 
            { y: 500 }, 
            { y: 0, duration: 1.5, scrollTrigger: {
                trigger: '.reservationsection',
                toggleActions: 'play none none  reset'
            }}
        );
        gsap.fromTo('.divdeh1', 
            { y: 500}, 
            { y: 0, duration: 1.5, scrollTrigger: {
                trigger: '.reservationsection',
                toggleActions: 'play none none reset'
            }}
        );
    }, []);


    // État pour afficher ou masquer le résumé de la réservation
    const [showSummary, setShowSummary] = useState(false);
    // État pour stocker les données de la réservation
    const [summaryData, setSummaryData] = useState({
        selectedDate: null,
        selectedTime: null,
        quantities: { adulte: 0, etudiant: 0, enfant: 0 },
        prix: []
    });
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: ''
    });

    // État pour afficher le message de confirmation
const [successMessage, setSuccessMessage] = useState('');

if (typeof cookies.get("account_id") !== 'undefined') {
    useEffect(() => {
        fetch(`https://isaac-newton.alwaysdata.net/api/accounts/${cookies.get('account_id')}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include'
        })
        .then((res) => res.json())
        .then(data => {
            setFormData({
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email
            })
        })            
        .catch((err) => {
            console.log(err);
          })
    },[]);
}


// fonction qui gere la confirmation de la réservation
    const handleConfirm = (e) => {
        e.preventDefault(); // Empêcher le rechargement de la page afin de garder les données du formulaire
        // on recupère les données de la réservation
        const { selectedDate, selectedTime, quantities } = summaryData;
        const { first_name, last_name, email } = formData;
    
        //si les champs ne sont pas remplis, on affiche une alerte
        if (!selectedDate || !selectedTime || !first_name || !last_name || !email) {
            alert(t('ReserForm.alertvide'));
            return;
        }
         // Vérifier si l'email est valide (contient un @ et un domaine valide)
         // variable emailRegex trouvé sur un forum
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert(t('ReserForm.alertmail'));
            return;
        }

        const formatDateISO = (date) => {
            const isoString = date.toISOString();
            const formattedDate = isoString.split("T")[0];
            return formattedDate;
        };

        const reservationDetails = new FormData(document.querySelector("#personal-info"));
        if (typeof cookies.get("account_id") !== 'undefined') {
            reservationDetails.append("account_id", cookies.get("account_id"));
        }
        reservationDetails.append("date", formatDateISO(summaryData.selectedDate));
        reservationDetails.append("time_slot", summaryData.selectedTime);
        reservationDetails.append("tickets[1]", summaryData.quantities.etudiant)
        reservationDetails.append("tickets[2]", summaryData.quantities.enfant)
        reservationDetails.append("tickets[3]", summaryData.quantities.adulte)

        // Requete API pour inserer une reservation
        fetch('https://isaac-newton.alwaysdata.net/api/reservations', {
            method: "POST",
            credentials: 'include',
            body: reservationDetails
        })
        .then((res) => res.json())           
        .catch((err) => {
            console.log(err)
        })
    
        // Message de succés
        setSuccessMessage(`
            ${t('ReserForm.succes')}
            📅 Date : ${selectedDate.toLocaleDateString("fr-FR")} à ${selectedTime}  
            ${t('ReserForm.totalbillet')}${Object.values(quantities).reduce((a, b) => a + b, 0)}  
            ${t('ReserForm.name')}${first_name} ${last_name}  
            📧 Email : ${email}  
            ${t('ReserForm.mailconfirm')}
        `);

        // Supprime le message de succès après 5 secondes
        setTimeout(() => {
            setSuccessMessage("");
        }, 5000);



        // Réinitialiser l'état après confirmation
        setShowSummary(false);
        setSummaryData({
            selectedDate: null,
            selectedTime: null,
            quantities: { adulte: 0, etudiant: 0, enfant: 0 },
            prix: []
        });
        setFormData({
            first_name: '',
            last_name: '',
            email: ''
        });
    };
    
// fonction qui gère les changements dans les champs du formulaire
    const handleInputChange = (e) => {
        // si l'utilisateur tape dans un champ, on met à jour l'état
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    return (
        <>
            <header className="header-reservation" id='header-website'>
            </header>
            <div className='divdeh1'>
                <h1 className='reservh1'>{t('Réservation')}</h1>

            </div>
            <section className='reservationsection'>
                <div className='divparentreservation'>
                    <div className='divform'>
                    
                        <FormReservationTicket setShowSummary={setShowSummary} setSummaryData={setSummaryData} />
                    </div>
                    <div className='div-droitereserv'>
                        <div className='divpanier'>
                            <h2>{t('ReserForm.panier')}</h2>
                            <div className='divpetiteaffiche'>
                                <img src="./img/accueil/affiche_newton.jpeg" alt="" />
                                <p>{t('headerSubtitle')}</p>
                            </div>
                            <p>{t('ReserForm.panierinfo1')}</p>
                            <p>{t('ReserForm.panierinfo2')}</p>
                        </div>
                        <div className='divpanierinfo'>
                            <p>{t('ReserForm.panierparagraphe')}</p>
                        </div>
                        <div className='panier-resume' style={{ visibility: showSummary ? 'visible' : 'hidden' }}>
                            <h3>{t('ReserForm.tareservation')}</h3>
                            {summaryData.selectedDate && summaryData.selectedTime && (
                                <p className="selected-text">
                                    {t('ReserForm.jourchoice')}{summaryData.selectedDate.toLocaleDateString("fr-FR")} à {summaryData.selectedTime}
                                </p>
                            )}
                            {/* // Affiche les éléments sélectionnés et le total  */}
                            {Object.entries(summaryData.quantities).map(([key, value]) => {
                                const pricingItem = summaryData.prix.find(p => p.id === key);
                                return (
                                    value > 0 && pricingItem && (
                                        <p key={key} className="resumep">
                                            <span>{value} x</span> <span>{pricingItem.label}</span> <span>{(pricingItem.price * value).toFixed(2)} €</span>
                                        </p>
                                    )
                                );
                            })}
                            <div className='panierligne'></div>
                            <p className="totalp">
                                <span>{t('ReserForm.SOUS-TOTAL')}</span> <span>{Object.entries(summaryData.quantities).reduce((total, [key, value]) => {
                                    // Calculer le total en multipliant la quantité par le prix de chaque élément
                                    const pricingItem = summaryData.prix.find(p => p.id === key);
                                    return pricingItem ? total + (pricingItem.price * value) : total;
                                }, 0).toFixed(2)} €</span>
                            </p>
                            <form id="personal-info">
                                <div>
                                    <label htmlFor="first_name">{t('prenom')}</label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last_name">{t('nom')}</label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <button type="submit" onClick={handleConfirm} className="resume-button">{t('ReserForm.valider')}</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
                {successMessage && (
    <div className="success-overlay">
        <div className="success-message">
            {/* // Afficher le message de succès en séparant chaque ligne en le transformant en p */}
            {successMessage.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    </div>
)}

            </section>
        </>
    );
};