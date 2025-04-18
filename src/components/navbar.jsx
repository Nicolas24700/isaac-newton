import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

export const Navbar = ({changeLanguage}) => {
    const location = useLocation();
    const { t } = useTranslation();
    const cookies = new Cookies(null, { path: '/' });
    const navigate = useNavigate();

    const toggleMenu = () => {
        const navUl = document.querySelector('nav ul');
        const langSwitch = document.querySelector('.lang-switch');
        navUl.classList.toggle('show');
        langSwitch.classList.toggle('show');
    };

    const handleClick = (e) => {
        e.preventDefault();
        fetch('https://isaac-newton.alwaysdata.net/api/auth', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include'
        })
        .then((res) => res.json())
        .then((data) => {
            navigate('/home');
            console.log(data);
        })            
        .catch((err) => {
            console.log(err)
          })
    }

    return (
        <nav>
         <a href="#header-website" className="skip-link">Aller au contenu</a>
            <div className="nav-header">
                <a href="/home" className="logo_navbar">
                    <img src="./img/accueil/LogoNavbar.png" alt="Lien vers la page d'accueil" />
                </a>
                <button className="menu-toggle" aria-label="Menu" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            <ul>
                <li><a href="/home" className={location.pathname === '/home' ? 'active' : ''}>{t('accueil')}</a></li>
                <li><a href="/concept" className={location.pathname === '/concept' ? 'active' : ''}>{t('Concept')}</a></li>
                <li><a href="/exposition" className={location.pathname === '/exposition' ? 'active' : ''} >{t('Exposition')}</a></li>
                <li><a href="/reservation" className={location.pathname === '/reservation' ? 'active' : ''} >{t('Réservation')}</a></li>
                <li><a href="/contact" className={location.pathname === '/contact' ? 'active' : ''} >Contact</a></li>
                {typeof cookies.get("account_id") !== 'undefined' ? 
                (<>
                    <li><a href="/profile" className={location.pathname === '/profile' ? 'active' : ''}>{t('profil')}</a></li>
                    <li><a href="" onClick={handleClick}>Sign out</a></li>
                </>
                ) : <li><a href="/signin" className={location.pathname === '/signin' ? 'active' : ''}>{t('connexion')}</a></li>
                }
            </ul>
            <div className="lang-switch">
                <button onClick={() => changeLanguage('fr')}>
                    <img aria-label='langue Française' src="./img/accueil/drapeau_france.png" alt="FR" />
                </button>
                <button onClick={() => changeLanguage('en')}>
                    <img aria-label='English language' src="./img/accueil/drapeau_anglais.png" alt="EN" />
                </button>
            </div>
        </nav>
    );
};