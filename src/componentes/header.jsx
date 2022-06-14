import React from "react";

function Header(){
    return(
        <header class="header">
        <div class="contenedor contenido-header">
            <a href="index.html"><h1>CETIFY</h1></a>

            <nav class="navegacion-principal">
                <a  href="#lineup">Line Up</a>
                <a href="#galeria">Galería</a>
                <a href="#boletos">Boletos</a>
            </nav>
        </div>
    </header>
    );
}
export default Header;