export const Header = () => {
    return (
        <header>
            <div>
                <div className="header-gauche">
                <h1><img src="./img/Logowebsite.png" alt="Gravilight" /></h1>
                <div className="header-texte"> 
                    <p className="p-un">Venez découvrir l’incroyable vie <br />
                    d’Isaac Newton et ses découvertes</p>
                    <p className="p-deux">Comment cet homme du XVIIeme siècle a-t-il <br /> révolutionné la science ? <br /> Quel impact a-t-il eu sur notre société actuelle ?</p>
                </div>
                <div className="buttonheader">
                    <a href="#" className="headerlinkboutton">
                        <div><img src="./img/souris.png" alt="" /></div>
                        Et si vous regardiez <br /> plus loin que la pomme ?
                        </a>
                        </div>
                </div>
                <div className="header-droite"></div>
            </div>
        </header>
    );
}

{/* <h1>
<img src="./img/Logowebsite.png" alt="Gravilight" />
</h1> */}