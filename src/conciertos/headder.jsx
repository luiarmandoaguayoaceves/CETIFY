import React from "react";

function Header (){
    return(
        <header class="header">
        <div class="contenedor contenido-header">
            <a href="index.html">
                <h1>CETIFY</h1>
            </a>

            <nav class="navegacion-principal">
                <a href="#eventos">Eventos</a>
                <a href="#albumes">Albumes</a>
            </nav>
        </div>
    </header>
    );
}
export default Header;