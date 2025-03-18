import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export const Navbar = ({changeLanguage}) => {
    const location = useLocation();
    const { t } = useTranslation();

    const toggleMenu = () => {
        const navUl = document.querySelector('nav ul');
        const langSwitch = document.querySelector('.lang-switch');
        navUl.classList.toggle('show');
        langSwitch.classList.toggle('show');
    };

    return (
        <nav>
            <div className="nav-header">
                <a href="/home" className="logo_navbar">
                    <img src="./img/accueil/LogoNavbar.png" alt="Lien vers la page d'accueil" />
                </a>
                <button className="menu-toggle" aria-label="Menu" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            <ul>
                <li><a href="/home" className={location.pathname === '/home' ? 'active' : ''}>{t('Accueil')}</a></li>
                <li><a href="/concept" className={location.pathname === '/concept' ? 'active' : ''}>{t('Concept')}</a></li>
                <li><a href="#" >{t('Exposition')}</a></li>
                <li><a href="#">{t('Réservation')}</a></li>
                <li><a href="#">{t('Contact')}</a></li>
            </ul>
            <div className="lang-switch">
                <button onClick={() => changeLanguage('fr')}>
                    <img src="./img/accueil/drapeau_france.png" alt="FR" />
                </button>
                <button onClick={() => changeLanguage('en')}>
                    <img src="./img/accueil/drapeau_anglais.png" alt="EN" />
                </button>
            </div>
        </nav>
    );
};