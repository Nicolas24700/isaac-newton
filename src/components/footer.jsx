import { useTranslation } from 'react-i18next';

export const Footer = () => {
          const { t } = useTranslation();
    return (
        <footer>
            <div className="container">
                <div className="mention">
                    <p>@2025</p>
                    <a href="">{t('MentionsLegales')}</a>
                </div>
                <div className="Concept">
                    <p><strong>{t('concept')}</strong></p>
                    <a href="/concept">Teaser</a>
                </div>
                <div className="expo3D">
                    <p><strong>{t('expo3D')}</strong></p>
                    <a href="">Immersion</a>
                </div>
                <div className="Contact">
                    <p><a href=""><strong>{t('Contact')}</strong></a></p>
                    <a href="">{t('agencesite')}</a>
                </div>
            </div>
            <div className="HDP">
            <a href="#"><img src="./img/accueil/HDP.png" alt={t('HDP')} /></a>
            </div>
        </footer>
    );
  };