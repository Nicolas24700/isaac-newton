// export const Exposition = () => {
//     return (
//     <section className="section-expo">
//         {/* <img className="fond-section-expo" src="./img/paper-fond-expo.png" alt="" />
//         <h3><img src="./img/titre-exposition.png" alt="L'exposition" /></h3>
//         <p> Découvrez une exposition unique où chaque œuvre raconte une histoire. Laissez-vous surprendre par une expérience immersive et inspirante.Ne manquez pas cette invitation à l'émerveillement ! </p> */}
//         <div className="allCards">
//             <div className="verticalCard">
//                 <div className="card3">
//                     <div className="titleCard three"></div>
//                 </div>
//             </div>
//             <div className="horizontalCards">
//                 <div className="card1">
//                     <div className="titleCard one"></div>
//                 </div>
//                 <div className="card2">
//                     <div className="titleCard two"></div>
//                 </div>
//             </div>
//         </div>
//     </section>
//     );
// }

export const Exposition = () => {
  return (
      <section className="section3">
        <img className="fond-section-expo" src="./img/paper-fond-expo.png" alt="" />
        <h3><img src="./img/titre-exposition.png" alt="L'exposition" /></h3>
        <p> Découvrez une exposition unique où chaque œuvre raconte une histoire. Laissez-vous surprendre par une expérience immersive et inspirante.Ne manquez pas cette invitation à l'émerveillement ! </p>
        <div className="allcards">
          <div className="cards-horizontale">
            <div className="cards1">
              <img src="./img/letelescope.jpg" alt="Le Telescope" />
              <div className="cards3-text">
                <p>Le Telescope</p>
              </div>
            </div>
          </div>
          <div className="cards-verticale">
            <div className="Cards2">
              <img src="./img/leprisme.jpg" alt="Le Prisme" />
              <div className="cards1-text">
                <p>Le Prisme</p>
              </div>
            </div>
            <div className="Cards3">
              <img src="./img/pendule_newton.jpg" alt="Le pendule d'issac newton" />
              <div className="cards1-text">
                <p>Le pendule d'issac newton</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};