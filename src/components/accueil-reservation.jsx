import { useTranslation } from 'react-i18next';
export const AccueilReservation = () => {
          const { t } = useTranslation();
  return (
    <section className="section-reservation">
      <h5>{t('Reservplace')}</h5>
      <div className="offres-container">
        {/* Offre Étudiante */}
        <div className="offre offre-etudiante">
          <div className="offre-contenu">
            <h6>{t('offreEtudiante')}</h6>
            <p>{t('offreetuddetail')}
            </p>
          </div>
          <a href="#" className="btn-reserver">{t('reservernow')}</a>
        </div>

        {/* Offre Famille */}
        <div className="offre offre-famille">
          <div className="offre-contenu">
            <h6>{t('offreFamille')}</h6>
            <p>{t('offrefamilledetail')}</p>
          </div>
          <a href="#" className="btn-reserver">{t('reservernow')}</a>
        </div>
        <img src="./img/accueil/doigt-gauche.png" alt="" className="doigt-gauche" />
        <img src="./img/accueil/doigt-droite.png" alt="" className="doigt-droite" />
      </div>
    </section>
  );
};
