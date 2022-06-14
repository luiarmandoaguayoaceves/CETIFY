import React from "react";


function LineUp(props) {
    return (
        <section id="lineup" className="lineup">
            <h3>Line Up</h3>

            <p className="dia">{props.dia}</p>
            <div className="escenarios-contenedor contenedor">
                <div className="escenario rock bg-amarillo">
                    <p className="nombre-escenario">Escenario {props.genero}</p>
                    <ul className="calendario">
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
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default LineUp;