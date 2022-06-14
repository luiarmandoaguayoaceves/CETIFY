import React from "react";

function Escenario() {
    return (
        <section id="lineup" class="lineup">
            <div class="escenarios-contenedor contenedor">
                <div class="escenario edm bg-verde">
                    <p class="nombre-escenario">Escenario EDM</p>

                    <ul class="calendario">
                        <li>
                            24:00 | <span>Deadmau5</span>
                            <a class="reproductor" href="musica.html" >play</a>
                        </li>
                        <li>
                            22:00 | <span>Tïesto</span>
                            <a class="reproductor" href="musica.html" >play</a>
                        </li>
                        <li>
                            20:00 | <span>Hardwell</span>
                            <a class="reproductor" href="musica.html" >play</a>
                        </li>
                        <li>
                            19:00 | <span>Dash Berlin</span>
                            <a class="reproductor" href="musica.html" >play</a>
                        </li>

                        <li>
                            18:00 | <span>Fedde Legrand</span>
                            <a class="reproductor" href="musica.html" >play</a>
                        </li>
                        <li>
                            17:00 | <span>Audien</span>
                            <a class="reproductor" href="musica.html" >play</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Escenario