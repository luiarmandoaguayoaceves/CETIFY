import React from "react";

function Evento() {
    return (
        <li>
            {props.hora} | <span>{props.evento}</span>
            <a class="info_concierto" href="concierto.html" >Ir</a>
        </li>
    );
}