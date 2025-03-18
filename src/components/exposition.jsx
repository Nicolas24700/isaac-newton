import { useTranslation } from 'react-i18next';

export const Exposition = () => {
      const { t } = useTranslation();
  return (
      <section className="section3">
        <img className="fond-section-expo" src="./img/accueil/paper-fond-expo.png" alt="" />
        <h3><img src="./img/accueil/titre-exposition.png" alt={t('titleexposition')} /></h3>
        <p>{t('expodetail')}</p>
        <div className="allcards">
          <div className="cards-horizontale">
            <div className="cards1">
              <img src="./img/accueil/letelescope.jpg" alt="Le Telescope" />
              <div className="cards3-text">
                <p>{t('letelescope')}</p>
              </div>
            </div>
          </div>
          <div className="cards-verticale">
            <div className="Cards2">
              <img src="./img/accueil/leprisme.jpg" alt="Le Prisme" />
              <div className="cards1-text">
                <p>{t('prisme')}</p>
              </div>
            </div>
            <div className="Cards3">
              <img src="./img/accueil/pendule_newton.jpg" alt="Le pendule d'issac newton" />
              <div className="cards1-text">
                <p>{t('pendulenewton')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};