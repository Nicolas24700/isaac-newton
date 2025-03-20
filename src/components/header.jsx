import { useTranslation } from 'react-i18next';
export const Header = () => {
    const { t } = useTranslation();
    return (
        <header className="header-accueil" id='header-website'>
            <div className="header-box">
                <div className="header-gauche">
                    <img src="./img/accueil/planetes.png" alt="" className="planetesdeh1" />
                    <h1>Isaac <br /> newt<img src="./img/accueil/pomme.png" alt="pomme remplaçant la lettre o" />n</h1>
                    <p className="psoush1">{t('headerSubtitle')}</p>
                </div>
                <div className="header-droite">
                    <img src="./img/accueil/Newton.png" alt="Newton" />
                </div>
            </div>
        </header>
    );
}
