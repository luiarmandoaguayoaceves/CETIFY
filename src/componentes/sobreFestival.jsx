import React from "react";

function SobreFestival(){
    return(
        <section className="contenedor sobre-festival">
        <div className="imagen">
                <img 
                src='../img/imagen_vocalista.jpg' 
                alt="imagen vocalista" />
        </div>
        <div className="contenido-festival">
            <h2>Rock & EDM Festival</h2>
            <p className="fecha">Julio 2022, Guadalajara, México</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita nulla dignissimos repellendus corporis excepturi enim eum? Tenetur rerum excepturi natus dicta ullam sit, fuga asperiores maxime distinctio rem doloremque?</p>
        </div>
    </section>
    );
}

export default SobreFestival;