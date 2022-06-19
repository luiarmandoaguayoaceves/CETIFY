import React from "react";


function LineUp(props) {
    return (
        <section id="lineup" class="lineup">
        <h3>Line Up</h3>

        <p class="dia">Viernes 21</p>
        <div class="escenarios-contenedor contenedor">
            <div class="escenario rock bg-amarillo">
                <p class="nombre-escenario">Escenario Rock</p>

                <ul class="calendario">
                    <li>
                        24:00 | <span>Metallica</span>
                        <a class="info_concierto" href="concierto.html" >Ir</a>
                    </li>
                    <li>
                        22:00 | <span>Pearl Jam</span>
                        <a class="info_concierto" href="concierto.html" >Ir</a>
                    </li>
                    <li>
                        20:00 | <span>KoRn</span>
                        <a class="info_concierto" href="concierto.html" >Ir</a>
                    </li>
                    <li>
                        19:00 | <span>Muse</span>
                        <a class="info_concierto" href="concierto.html" >Ir</a>
                    </li>
                    <li>
                        18:00 | <span>Breaking Benjamin</span>
                        <a class="info_concierto" href="concierto.html" >Ir</a>
                    </li>
                    <li>
                        17:00 | <span>30 Seconds to Mars</span>
                        <a class="info_concierto" href="concierto.html" >Ir</a>
                    </li>
                </ul>
            </div> 

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


        <p class="dia">Sábado 22</p>
        <div class="escenarios-contenedor contenedor">
            <div class="escenario rock bg-verde">
                <p class="nombre-escenario">Escenario Rock</p>

                <ul class="calendario">
                    <li>
                        24:00 | <span>Red Hot Chili Peppers</span>
                        <a class="info_concierto" href="concierto.html" >Ir</a>
                    </li>
                    <li>
                        22:00 | <span>The Killers</span>
                        <a class="info_concierto" href="concierto.html" >Ir</a>
                    </li>
                    <li>
                        20:00 | <span>Deftones</span>
                        <a class="info_concierto" href="concierto.html" >Ir</a>
                    </li>
                    <li>
                        19:00 | <span>Limp Bizkit</span>
                        <a class="info_concierto" href="concierto.html" >Ir</a>
                    </li>
                    
                    <li>
                        18:00 | <span>Papa Roach</span>
                        <a class="info_concierto" href="concierto.html" >Ir</a>
                    </li>
                    <li>
                        17:00 | <span>Lamb of God</span>
                        <a class="info_concierto" href="concierto.html" >Ir</a>
                    </li>
                </ul>
            </div> 

            <div class="escenario edm bg-amarillo">
                <p class="nombre-escenario">Escenario EDM</p>

                <ul class="calendario">
                    <li>
                        24:00 | <span>Paul Van Dyk</span>
                        <a class="reproductor" href="musica.html" >play</a>
                    </li>
                    <li>
                        22:00 | <span>Armin Van Buuren</span>
                        <a class="reproductor" href="musica.html" >play</a>
                    </li>
                    <li>
                        20:00 | <span>Above & Beyond</span>
                        <a class="reproductor" href="musica.html" >play</a>
                    </li>
                    <li>
                        19:00 | <span>Eric Prdyz</span>
                        <a class="reproductor" href="musica.html" >play</a>
                    </li>

                    <li>
                        18:00 | <span>Ferry Corsten</span>
                        <a class="reproductor" href="musica.html" >play</a>
                    </li>
                    <li>
                        17:00 | <span>Vini Vici</span>
                        <a class="reproductor" href="musica.html" >play</a>
                    </li>
                </ul>
            </div>
        </div>

    </section>
    );
}

export default LineUp;