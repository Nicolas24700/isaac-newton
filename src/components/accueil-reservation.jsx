// export const AccueilReservation = () => {
//         return (
//             <section className="section4">
//                 <img src="" alt="" />
//                 <h5>Réservez votre place ici !</h5>
//                 <div>
//                     <div className="offreone">
//                         <div>
//                             <p>Offre étudiante</p>
//                             <p>Tarif spécial pour les étudiants ! Plongez dans l'univers de Newton à un prix réduit et découvrez la science autrement.Une sortie idéale entre les cours et les révisions !</p>
//                         </div>
//                         <a href="">Réserver maintenant</a>
//                     </div>
//                     <div className="offretwo">
//                         <div>
//                             <p>Offre Famille</p>
//                             <p>Profitez d'un moment de découverte en famille ! Entrée gratuite pour les enfants de moins de 6 ans, accompagnés d'un adulte.</p>
//                         </div>
//                         <a href="">Réserver maintenant</a>
//                     </div>
//                 </div>
//             </section>
//         );
//       };

export const AccueilReservation = () => {
  return (
    <section className="section-reservation">
      <h5>Réservez votre place ici !</h5>
      <div className="offres-container">
        {/* Offre Étudiante */}
        <div className="offre offre-etudiante">
          <div className="offre-contenu">
            <h6>Offre étudiante</h6>
            <p>
              Tarif spécial pour les étudiants ! Plongez dans l'univers de Newton à un prix réduit et découvrez la science autrement.
              Une sortie idéale entre les cours et les révisions !
            </p>
          </div>
          <a href="#" className="btn-reserver">Réserver maintenant</a>
        </div>

        {/* Offre Famille */}
        <div className="offre offre-famille">
          <div className="offre-contenu">
            <h6>Offre Famille</h6>
            <p>
              Profitez d'un moment de découverte en famille ! Entrée gratuite pour les enfants de moins de 6 ans, accompagnés d'un adulte.
            </p>
          </div>
          <a href="#" className="btn-reserver">Réserver maintenant</a>
        </div>
      </div>
    </section>
  );
};
