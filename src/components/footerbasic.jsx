import { useTranslation } from 'react-i18next';

export const Footerbasic = () => {
          const { t } = useTranslation();
    return (
        <footer className='footerbasic'>
            <div className="containerbasic">
                <div className="mentionbasic">
                    <p>@2025</p>
                    <a href="/mentionslegales">{t('MentionsLegales')}</a>
                </div>
                <div className="Conceptbasic">
                    <p><strong>{t('concept')}</strong></p>
                    <a href="/concept">Teaser</a>
                </div>
                <div className="expo3Dbasic">
                    <p><strong>{t('expo3D')}</strong></p>
                    <a href="/exposition">Immersion</a>
                </div>
                <div className="Contactbasic">
                    <p><a href="/contact"><strong>{t('Contact')}</strong></a></p>
                    <a href="https://wavycom.missie.butmmi.o2switch.site/" target='blank'>{t('agencesite')}</a>
                </div>
            </div>
            <div className="HDPbasic">
            <a href="#"><img src="./img/accueil/HDP.png" alt={t('HDP')} /></a>
            </div>
        </footer>
    );
  };