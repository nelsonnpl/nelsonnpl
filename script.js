

function openModal(persona) {
    var modal = document.getElementById('myModal');
    var textContent = document.getElementById('textContent');
var img = document.getElementById('imgJS');
    
    switch(persona) {
        case 'persona1':
            img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLEn5Pet3QpQpzPz1XgG-oyecgsRd0tjpyQ&s"
            textContent.innerHTML = `
                <h2>Ignacio Poladura de Armas</h2>
                <p>Ignacio Poladura de Armas es un destacado ejecutivo y profesional en el sector del turismo en España. Actualmente, es el Director General de Viajes Insular, una de las principales empresas de distribución de productos turísticos en Canarias. Poladura asumió este cargo después de seis años en la empresa, donde previamente se desempeñó como adjunto a la dirección general y director comercial y de marketing​ (Europa Press)​​ (Hosteltur)​.
                <br>
                <br>
                Además de su rol en Viajes Insular, Ignacio Poladura ha sido nombrado recientemente presidente de la Asociación Canaria de Agencias de Viajes y Turoperadores (ACAVyT). Este nombramiento refleja su amplia experiencia y conocimiento del sector, así como su compromiso con el desarrollo y la defensa de los intereses profesionales de las agencias de viajes en Canarias​ (La Voz de Lanzarote)​​ (Tourinews)​.
                <br>
                <br>
                En cuanto a su formación académica, Poladura es licenciado en Administración y Dirección de Empresas por la Universidad de Las Palmas de Gran Canaria. También ha realizado diversos estudios de posgrado, incluyendo programas en la UOC y el IE Business School. Su carrera profesional incluye experiencia en multinacionales como Deloitte y Lastminute.com, lo que le ha proporcionado una perspectiva global y habilidades en digitalización y marketing turístico​ (Europa Press)​​ (Hosteltur)​.</p>

                <div class="submodal">
                    <p>Haz click <a href="data/transcriptions/transcription_ignacio_poladura_de_armas.pdf" download><em>aquí</em></a> para descargar la entrevista en formato PDF.</p>
                </div>
            `;
            break;
        case 'persona2':
            img.src="https://media.licdn.com/dms/image/C4E03AQGIY_9JWbL8dQ/profile-displayphoto-shrink_800_800/0/1639268459091?e=1726704000&v=beta&t=BYg9B4MR90QeCTIl7tVbMqKHl3SIxjLVRihk5YI5HFs"
            textContent.innerHTML = `
                <h2>Juan Andrés Melián Suárez</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum justo eget pharetra sodales.</p>
                   
                <div class="submodal">
                    <p>Haz click <a href="data/transcriptions/transcription_ignacio_poladura_de_armas.pdf" download><em>aquí</em></a> para descargar la entrevista en formato PDF.</p>
                </div>
            `;
            break;
        case 'persona3':
            img.src="https://www.atlanticohoy.com/uploads/s1/27/38/92/6/agusti-n-manrique-de-lara2.jpeg"
            textContent.innerHTML = `
                <h2>Agustín Manrique de Lara Benítez de Lugo</h2>
                <p>Agustín Manrique de Lara Benítez de Lugo es una figura destacada en el ámbito empresarial de Canarias. Actualmente, es presidente del Círculo de Empresarios de Gran Canaria y ha sido presidente de la Confederación Canaria de Empresarios (CCE) desde junio de 2013. En julio de 2020, fue elegido nuevamente presidente del Círculo de Empresarios de Gran Canaria.​ (CCElpa)​​ (CirculoEmpresariosGC)​​ (CirculoEmpresariosGC)​.</p>

                   <div class="submodal">
                    <p>Haz click <a href="data/transcriptions/transcription_ignacio_poladura_de_armas.pdf" download><em>aquí</em></a> para descargar la entrevista en formato PDF.</p>
                </div>
            `;
            break;
        case 'persona4':
            img.src="https://estaticos-cdn.prensaiberica.es/clip/daf9c0dd-fb02-444b-ab50-b8aed7b54ae3_alta-libre-aspect-ratio_default_0_x791y416.jpg"
            textContent.innerHTML = `
                <h2>José María Mañaricua</h2>
                <p>José María Mañaricua es el presidente de la Federación de Empresarios de Hostelería y Turismo de Las Palmas (FEHT), cargo que ha ocupado desde 2017. Fue reelegido en 2021 para un nuevo mandato de cuatro años, destacándose por su gestión y compromiso con el sector turístico en tiempos difíciles. Mañaricua también es presidente de la Asociación de Hoteleros, integrada en la FEHT. Ha sido un firme defensor de la industria turística en Canarias, negando la existencia de turismofobia en la región y subrayando la importancia de la sostenibilidad en el sector​ (FEHT)​​ (Europa Press)​​ (Tourinews)​​ (Atlántico Hoy)​​​.</p>

                   <div class="submodal">
                    <p>Haz click <a href="data/transcriptions/transcription_ignacio_poladura_de_armas.pdf" download><em>aquí</em></a> para descargar la entrevista en formato PDF.</p>
                </div>
            `;
            break;
        case 'persona5':
            img.src="https://ondafuerteventura.es/wp-content/uploads/2022/09/gerente-696x673.jpg"
            textContent.innerHTML = `
                <h2>José Manuel Sanabria Díaz</h2>
                <pJosé Manuel Sanabria Díaz es el actual viceconsejero de Turismo del Gobierno de Canarias, nombrado el 4 de septiembre de 2023. Es licenciado en Derecho por la Universidad de Las Palmas de Gran Canaria (ULPGC) y tiene un doctorado en Turismo, Economía y Gestión de la misma universidad. Ha ejercido como abogado desde 1993 y cuenta con una amplia formación en turismo, siendo técnico en empresas y actividades turísticas y poseedor de un máster internacional en Turismo. También ha sido profesor asociado de Derecho Público en la ULPGC.
<br>
<br>
En su carrera pública, Sanabria ha sido gerente de la Mancomunidad de Municipios de Medianías de Gran Canaria desde 2001 y gerente del Patronato de Turismo de Fuerteventura entre 2022 y 2023. Su experiencia en la gestión pública y en el sector turístico lo ha llevado a desempeñar un papel clave en la promoción y desarrollo del turismo en Canarias​ (Europa Press)​.
</p>

   <div class="submodal">
                    <p>Haz click <a href="data/transcriptions/transcription_ignacio_poladura_de_armas.pdf" download><em>aquí</em></a> para descargar la entrevista en formato PDF.</p>
                </div>
            `;
            break;
        case 'persona6':
            img.src="https://estaticos-cdn.prensaiberica.es/clip/f1db22c9-63dd-4df5-9016-3287d0203f18_16-9-aspect-ratio_default_1254384.jpg"
            textContent.innerHTML = `
                <h2>Nicolás Villalobos Mestres</h2>
                <p>Nicolás Villalobos Mestres es el Director General de beCordial Hotels & Resorts, una cadena hotelera destacada en Canarias. Con formación en Derecho y Administración y Gestión de Empresas por la Universidad Pontificia Comillas, comenzó su carrera en el bufete Uría Menéndez y luego trabajó en BBVA como analista de Corporate Finance. Posteriormente, se trasladó a Alemania, donde se unió a Thomas Cook como Gerente de Participaciones y Contratador para destinos de larga distancia​ (Maspalomas Turismo)​​ (Futurismo Canarias)​.

                <br>
                <br>

Desde noviembre de 2002, Villalobos dirige beCordial Hotels & Resorts, gestionando una amplia gama de establecimientos que incluyen hoteles de lujo, viviendas vacacionales y hoteles boutique. Bajo su liderazgo, la cadena ha enfatizado la flexibilidad y la adaptación a diversas demandas del mercado, especialmente durante la pandemia​ (Tourinews)​​ (Cordial)​. Además, es representante de la Federación de Empresarios de Hostelería y Turismo de Las Palmas (FEHT) y participa activamente en foros turísticos como el International Tourism Forum Maspalomas Costa Canaria​ (Maspalomas Turismo)​​ (Futurismo Canarias)​.

Villalobos también promueve altos estándares de calidad medioambiental y responsabilidad social, involucrándose en iniciativas de patrocinio deportivo, culturales y sociales​ (Futurismo Canarias)​​ (Cordial)​.</p>

   <div class="submodal">
                    <p>Haz click <a href="data/transcriptions/transcription_ignacio_poladura_de_armas.pdf" download><em>aquí</em></a> para descargar la entrevista en formato PDF.</p>
                </div>
            `;
            break;
        default:
            textContent.innerHTML = `<p>Persona no encontrada.</p>`;
    }

    modal.style.display = "block";
}

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// script.js
document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
});
