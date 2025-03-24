import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

export const FormReservationTicket = ({ setShowSummary, setSummaryData }) => {
      const { t } = useTranslation();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [quantities, setQuantities] = useState({ adulte: 0, etudiant: 0, enfant: 0 });

  const maxReservations = 10;

  // valeur des jours de la semaine et des horaires
  const jourdelasemaine = [t('ReserForm.LUN'), t('ReserForm.MAR'), t('ReserForm.MEC'), t('ReserForm.JEU'), t('ReserForm.VEN'), t('ReserForm.SAM'), t('ReserForm.DIM')];
  const horaires = ["10h","11h", "12h","13h", "14h","15h", "16h","17h", "18h"];

  // tableau des tarifs
  const prix = [
    { id: "adulte", label: t('ReserForm.Adulte'),labeldetail: `(> 26 ${t('ReserForm.ans')})`, price: 10 },
    { id: "etudiant", label: t('ReserForm.Etudiant'),labeldetail: `(18 - 25 ${t('ReserForm.ans')})`, price: 5 },
    { id: "enfant", label: t('ReserForm.Enfant'),labeldetail: `(< 18  ${t('ReserForm.ans')})`, price: 0 }
  ];
  // Fonctions pour gérer le calendrier en prenant la date actuelle
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayIndex = (year, month) => new Date(year, month, 1).getDay();

  // variable qui permet de changer le mois
  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const firstDayIndex = (getFirstDayIndex(currentDate.getFullYear(), currentDate.getMonth()) + 6) % 7;
// variable qui permet de selectionner la date
  const handleDateClick = (day) => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  const handleTimeClick = (time) => setSelectedTime(time);

  // fonction pour changer le mois en fonction du bouton cliqué
  const changeMonth = (step) => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + step));
  };

  // fonction pour changer la quantité de billets et la calculé avec le reduce
  const handleQuantityChange = (id, value) => {
    const total = Object.values({ ...quantities, [id]: value }).reduce((sum, num) => sum + num, 0);
    if (total <= maxReservations) {
      setQuantities({ ...quantities, [id]: value });
    }
  };
// fonction pour valider le formulaire 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDate && selectedTime && Object.values(quantities).some((q) => q > 0)) {
      setShowSummary(true); // Afficher la div panier-resume
      setSummaryData({
        selectedDate,
        selectedTime,
        quantities,
        prix
      });
    } else {
      alert(t('ReserForm.alertformbillet'));
    }
  };
  // fonction pour annuler le formulaire 
  const resetForm = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setQuantities({ adulte: 0, etudiant: 0, enfant: 0 });
    setShowSummary(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Date</h2>

      {/* Calendrier */}
      <div className="calendar-container">
        <div className="calendar-header">
          <button type="button" onClick={() => changeMonth(-1)}>{"<"}</button>
          <h3>{currentDate.toLocaleString(t('ReserForm.locale'), { month: "long", year: "numeric" }).toUpperCase()}</h3>
          <button type="button" onClick={() => changeMonth(1)}>{">"}</button>
        </div>
        <div className="calendar-grid">
          {jourdelasemaine.map((day) => (
            <div key={day} className="calendar-day-header">{day}</div>
          ))}
          {/* // tableau des jours vides */}
          {Array(firstDayIndex).fill(null).map((_, i) => (
            <div key={`empty-${i}`} className="calendar-empty"></div>
          ))}
          {/* // tableau des jours du mois */}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
            <div
              key={day}
              className={`calendar-day ${selectedDate && selectedDate.getDate() === day ? "selected" : ""}`}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Sélection de l'horaire */}
      <h2>{t('ReserForm.Horaires')}</h2>
      <div className="time-selection">
        {horaires.map((time) => (
          <button
            key={time}
            type="button"
            className={`time-button ${selectedTime === time ? "selected" : ""}`}
            onClick={() => handleTimeClick(time)}
          >
            {time}
          </button>
        ))}
      </div>
      {/* Tarifs */}
      <h2>{t('ReserForm.Tarifs')}</h2>
      {prix.map(({ id, label,labeldetail, price }) => (
        <div key={id} className="tarif-box">
          <div className="tarif-info">
            <p>{label}</p>
            <span>{labeldetail}</span>
          </div>
          <div className="tarif-price">
                <p className="p_prix">{t('ReserForm.Tarifs')}</p>
                <span>{price.toFixed(2)}€</span>
            </div>
          <div className="tarif-quantity">
              <label htmlFor={`quantitebillet-${id}`}>{t('ReserForm.Quantite')}</label>
              <select name="quantitebillet" id={`quantitebillet-${id}`}
                value={quantities[id]}
                onChange={(e) => handleQuantityChange(id, parseInt(e.target.value, 10))}
              >
                {Array.from({ length: maxReservations + 1 }, (_, i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
          </div>
        </div>
      ))}

      <div className="boutton-container-reservationForm">
          <button type="button" className="cancel-button" onClick={resetForm}>{t('ReserForm.annuler')}</button>
          <button type="submit" className="submit-button">{t('ReserForm.confirmer')}</button>
      </div>
    </form>
  );
};