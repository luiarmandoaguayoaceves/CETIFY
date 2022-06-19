import React from "react";
import img from '../../src/img//imagen_vocalista.jpg'

function Video(){
    return(
        <div class="video">
        <div class="overlay">
            <div class="contenedor contenido-video">
                <h2>Nombre artista</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi? Aspernatur esse odit excepturi
                    molestiae repellat adipisci quas ullam cum quasi cumque dolor similique, voluptate, officia quo
                    explicabo nemo ratione!</p>
            </div>
        </div>
        <picture>
            <img 
            loading="lazy" 
            width="200" 
            height="300" 
            src={img} 
            alt="imagen vocalista"/>
        </picture>
    </div>
    );
}
export default Video;