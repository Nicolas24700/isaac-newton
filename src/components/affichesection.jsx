import { useTranslation } from 'react-i18next';

export const Affichesection = () => {
        const { t } = useTranslation();
    return (
        <section className="section4">
            <div>
                <div className="affiche-gauche">
                    <img src="./img/accueil/affiche_newton.png" alt="affiche-gauche" />
                </div>
                <div>
                    <h4>{t('h4affiche')}</h4>
                    <p>
                    {t('textlinkaffichepart1')} <br /><br />
                        <a href="/reservation">{t('textlinkaffichemiddle')}</a>{t('textlinkaffichepart2')}
                    </p>
                </div>
            </div>
        </section>
    );
  };