import React, { useState } from "react";

export const FormReservationTicket = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [quantities, setQuantities] = useState({ adulte: 0, jeune: 0, enfant: 0 });

  const maxReservations = 10;

  // valeur des jours de la semaine et des horaires
  const daysOfWeek = ["LUN", "MAR", "MEC", "JEU", "VEN", "SAM", "DIM"];
  const availableTimes = ["8h", "10h", "12h", "14h", "16h", "18h", "20h"];

  // tableau des tarifs
  const pricing = [
    { id: "adulte", label: "Adulte",labeldetail: "(> 26 ans)", price: 15 },
    { id: "jeune", label: "Jeune Adulte",labeldetail: "(18 - 25 ans)", price: 8 },
    { id: "enfant", label: "Enfant",labeldetail: "(< 18 ans)", price: 5 }
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
// fonction pour valider le formulaire (test si une date, une heure et au moins un billet sont sélectionnés)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDate && selectedTime && Object.values(quantities).some((q) => q > 0)) {
      alert(`RDV : ${selectedDate.toLocaleDateString("fr-FR")} à ${selectedTime}\nTotal billets : ${Object.values(quantities).reduce((a, b) => a + b, 0)}`);
    } else {
      alert("Veuillez choisir une date, une heure et au moins un billet !");
    }
  };
  // fonction pour annuler le formulaire 
  const resetForm = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setQuantities({ adulte: 0, jeune: 0, enfant: 0 });
  };


  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Date</h2>

      {/* Calendrier */}
      <div className="calendar-container">
        <div className="calendar-header">
          <button type="button" onClick={() => changeMonth(-1)}>{"<"}</button>
          <h3>{currentDate.toLocaleString("fr-FR", { month: "long", year: "numeric" }).toUpperCase()}</h3>
          <button type="button" onClick={() => changeMonth(1)}>{">"}</button>
        </div>
        <div className="calendar-grid">
          {daysOfWeek.map((day) => (
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
      <h2>Horaires</h2>
      <div className="time-selection">
        {availableTimes.map((time) => (
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
      <h2>Tarifs</h2>
      {pricing.map(({ id, label,labeldetail, price }) => (
        <div key={id} className="tarif-box">
          <div className="tarif-info">
            <p>{label}</p>
            <span>{labeldetail}</span>
          </div>
          <div className="tarif-price">
                <p className="p_prix">Prix</p>
                <span>{price.toFixed(2)}€</span>
            </div>
          <div className="tarif-quantity">
              <label htmlFor={`quantitebillet-${id}`}>Quantité</label>
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

      {/* Résumé */}
      {selectedDate && selectedTime && (
        <p className="selected-text">
          RDV sélectionné : {selectedDate.toLocaleDateString("fr-FR")} à {selectedTime}
        </p>
      )}

      <div className="boutton-container-reservationForm">
          <button type="button" className="cancel-button" onClick={resetForm}>Annuler</button>
          <button type="submit" className="submit-button">Confirmer</button>
      </div>
    </form>
  );
};