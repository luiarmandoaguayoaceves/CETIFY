import React from "react";

function ContenedorPrincipal() {
    return (
        <div className="video">
            <div className="overlay">
                <div className="contenedor contenido-video">
                    <h2>Rock & EDM Festival</h2>
                    <p>Julio 2022, Guadalajara, México.</p>
                    <p>Luis Armando Aguayo Aceves, 20110407</p>
                    <p>Gisel Carpinteiro Aguirre, 20110353.</p>
                    <p>David Alejandro Gonzalez Quezada, 20110407.</p>
                </div>
            </div>
            <video autoPlay muted loop>
                <source 
                src="video/concierto.webm" 
                type="video/webm" />
            </video>
        </div>
    );
}

export default ContenedorPrincipal;