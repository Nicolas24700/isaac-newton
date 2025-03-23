import React, { useState } from 'react';
import { FormReservationTicket } from '../components/Formreservation';
import { useTranslation } from 'react-i18next';

export const Reservationcompo = () => {
    const { t } = useTranslation();
    // État pour afficher ou masquer le résumé de la réservation
    const [showSummary, setShowSummary] = useState(false);
    // État pour stocker les données de la réservation
    const [summaryData, setSummaryData] = useState({
        selectedDate: null,
        selectedTime: null,
        quantities: { adulte: 0, jeune: 0, enfant: 0 },
        prix: []
    });
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    // État pour afficher le message de confirmation
const [successMessage, setSuccessMessage] = useState('');


// fonction qui gere la confirmation de la réservation
    const handleConfirm = (e) => {
        e.preventDefault(); // Empêcher le rechargement de la page afin de garder les données du formulaire
        // on recupère les données de la réservation
        const { selectedDate, selectedTime, quantities } = summaryData;
        const { firstName, lastName, email } = formData;
    
        //si les champs ne sont pas remplis, on affiche une alerte
        if (!selectedDate || !selectedTime || !firstName || !lastName || !email) {
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
    
    // Message de succés
    setSuccessMessage(`
        ${t('ReserForm.succes')}
        📅 Date : ${selectedDate.toLocaleDateString("fr-FR")} à ${selectedTime}  
        ${t('ReserForm.totalbillet')}${Object.values(quantities).reduce((a, b) => a + b, 0)}  
        ${t('ReserForm.name')}${firstName} ${lastName}  
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
            quantities: { adulte: 0, jeune: 0, enfant: 0 },
            prix: []
        });
        setFormData({
            firstName: '',
            lastName: '',
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
                                <img src="./img/accueil/affiche_newton.png" alt="" />
                                <p>GRAVILIGHT</p>
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
                            <form>
                                <div>
                                    <label htmlFor="firstName">{t('prenom')}</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName">{t('nom')}</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
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