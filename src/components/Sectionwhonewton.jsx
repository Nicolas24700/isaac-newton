export const Sectionwhonewton = () => {
    return (
    <section className="section-gif">
        <img className="fond-section-gif" src="./img/Paper-top.png" alt="" />
        <div className="container-gif">
            <div className="image-gif">
                <img src="./img/tableau-contour.png" alt="" />
                <video src="./gif/gif_newton.mp4" alt="" className="inner-video" autoPlay loop muted></video>
                <img src="./gif/your-gif.gif" alt="" className="inner-gif" />
            </div>
            <div class="text-gif">
                <h2>QUI EST ISAAC NEWTON ? </h2>
                <p>Isaac Newton n'est pas qu'un simple <strong>scientifique</strong> du passé. C'est l'homme qui a révolutionné notre façon de comprendre le monde. <br /><br />
                Un jour, assis sous un pommier, une pomme tombe... et là, une question change tout : Pourquoi tombe-t-elle toujours vers le sol ? <br /><br /> 
                De cette simple observation, il découvre la <strong>gravitation universelle</strong>, une loi qui explique le mouvement des planètes, la chute des objets, et même les voyages spatiaux d'aujourd'hui.Mais Newton, c'est aussi la <strong>lumière</strong>, les couleurs, le <strong>mouvement</strong>... et un héritage qui façonne encore notre monde moderne.</p>
            </div>
        </div>
        <img className="fond-sectionBottom-gif" src="./img/Paper-bottom.png" alt="" />
    </section>
    );
}