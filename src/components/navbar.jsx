export const Navbar = () => {
    const toggleMenu = () => {
        const navUl = document.querySelector('nav ul');
        const langSwitch = document.querySelector('.lang-switch');
        navUl.classList.toggle('show');
        langSwitch.classList.toggle('show');
    };


    // permet de voir si le boutton fonctionne
    const changeLanguage = (lang) => {
        alert("Langue changée en : " + lang);
    };
    return (
        <nav>
            <div className="nav-header">
                <a href="index.html" className="logo_navbar">
                    <img src="./img/LogoNavbar.png" alt="Lien vers la page d'accueil" />
                </a>
                <button className="menu-toggle" aria-label="Menu" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            <ul>
                <li><a href="#" className="active">Accueil</a></li>
                <li><a href="#">Concept</a></li>
                <li><a href="#">Exposition</a></li>
                <li><a href="#">Réservation</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="lang-switch">
                <button onClick={() => changeLanguage('fr')}>
                    <img src="./img/drapeau_france.png" alt="FR" />
                </button>
                <button onClick={() => changeLanguage('en')}>
                    <img src="./img/drapeau_anglais.png" alt="EN" />
                </button>
            </div>
        </nav>
    );
};