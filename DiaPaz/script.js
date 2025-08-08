// Objeto con preguntas y respuestas
const respuestas = {
    "Hola": "¡Hola! ¿Tienes alguna duda?",
    "hola": "¡Hola! ¿Tienes alguna duda?",
    "¿Cómo te llamas?": "Soy el chatbot, y estoy aquí para ayudarte a aprender sobre la paz y la democracia.",
    "¿Cuántos años tienes?": "No tengo edad, ¡soy solo un chatbot!",
    "¿De dónde eres?": "Soy un programa, así que no tengo un lugar específico, pero estoy aquí para ayudarte donde sea que estés.",
    "¿Puedo hacer cualquier pregunta?": "Claro, puedes preguntarme lo que quieras. Si no sé la respuesta, ¡te ayudaré a buscarla!",
    "¿Qué te gusta hacer?": "Me gusta ayudar a las personas a aprender cosas nuevas, como sobre la democracia y la paz.",
    "¿Tienes amigos?": "¡Sí! Tengo a todos los que interactúan conmigo. Cada conversación es una nueva amistad.",
    "¿Puedes contarme un chiste?": "¡Claro! ¿Por qué el libro de matemáticas se deprimió? Porque tenía demasiados problemas.",
    "¿Sabes cantar?": "No puedo cantar, pero puedo ayudarte a encontrar canciones para escuchar.",
    "¿Qué significa paz?": "La paz es cuando las personas viven juntas sin pelear y se respetan mutuamente.",
    "¿Cuál es tu comida favorita?": "¡No como! Pero, si pudiera, creo que me gustaría una pizza con mucho queso.",
    "¿Te gustan los animales?": "¡Sí! Los animales son increíbles. Algunos de ellos también nos enseñan sobre la paz y la armonía.",
    "¿Por qué es importante escuchar a los demás?": "Escuchar es importante porque así entendemos las ideas y sentimientos de otras personas. Nos ayuda a ser más amables y respetuosos.",
    "¿Qué es la amistad?": "La amistad es una relación especial donde las personas se cuidan y se apoyan mutuamente.",
    "¿Por qué es bueno ser amable?": "Ser amable ayuda a que todos se sientan felices y respetados. La amabilidad puede hacer que el mundo sea mejor.",
    "¿Qué es un robot?": "Un robot es una máquina que puede hacer tareas automáticamente. Yo soy un tipo de robot, pero de software, no de metal.",
    "¿Tienes familia?": "No tengo familia, pero siempre estoy aquí para ayudar a todos como una gran comunidad.",
    "¿Qué significa respeto?": "El respeto es tratar a los demás como te gustaría que te trataran a ti, con amabilidad y consideración.",
    "¿Puedo preguntarte algo de matemáticas?": "Claro, ¡puedes preguntarme sobre matemáticas! Intentaré ayudarte con lo que sé.",
    "¿Qué significa igualdad?": "La igualdad significa tratar a todas las personas con el mismo respeto y darles las mismas oportunidades, sin importar su raza, género o religión.",
    "¿Qué es la democracia?": "La democracia es un sistema de gobierno donde todos los ciudadanos tienen derecho a votar y elegir a sus líderes.",
    "¿Por qué es importante la paz?": "La paz es fundamental porque nos permite vivir en armonía, respetándonos unos a otros y construyendo un mundo mejor para todos.",
       "¿Por qué debemos luchar por la paz?": "Debemos luchar por la paz porque solo en paz podemos vivir juntos sin violencia, creando un ambiente donde todas las personas puedan prosperar.",
    "¿Qué significa democracia para ti?": "La democracia es un sistema de gobierno en el que los ciudadanos tienen voz y voto, asegurando que todos tengan una participación activa en el proceso político.",
    "¿Cómo podemos fomentar la paz en la sociedad?": "Podemos fomentar la paz educando a las personas sobre el respeto mutuo, la tolerancia y la importancia de resolver conflictos sin violencia.",
    "¿Es la democracia la mejor forma de gobierno?": "La democracia permite la participación de todos en la toma de decisiones, lo cual puede generar una sociedad más equitativa y libre. Aunque no es perfecta, es ampliamente considerada una de las mejores formas de gobierno.",
    "¿La paz es solo la ausencia de guerra?": "La paz no solo es la ausencia de guerra, sino también la creación de una sociedad justa, donde las personas se respeten mutuamente y los derechos humanos sean protegidos.",
    "¿Qué significa justicia en una democracia?": "La justicia en una democracia significa que todas las personas tienen igualdad ante la ley y que los derechos de todos son protegidos por las instituciones del estado.",
    "¿Qué importancia tiene el voto en una democracia?": "El voto es fundamental en una democracia porque permite que los ciudadanos elijan a sus representantes y participen activamente en la toma de decisiones que afectan su vida.",
    "¿Cómo afecta la falta de paz a una comunidad?": "La falta de paz puede causar división, inseguridad y sufrimiento. Las comunidades sin paz enfrentan violencia, discriminación y una falta de desarrollo social y económico.",
    "¿Qué es un derecho humano?": "Un derecho humano es una libertad fundamental que todas las personas tienen por el simple hecho de ser humanas, como el derecho a la vida, a la libertad y a la educación.",
    "¿Qué significa reconciliación después de un conflicto?": "La reconciliación significa sanar las heridas del pasado, promover el entendimiento y el perdón, y construir relaciones basadas en la confianza para lograr una paz duradera."
    
};

// Mostrar las opciones rápidas al abrir el chat
function mostrarOpcionesRapidas() {
    const quickOptions = document.getElementById("quickOptions");
    const opciones = [
        "Hola", "¿Cómo te llamas?", "¿Qué significa paz?", "¿Qué es la democracia?", "¿Puedes contarme un chiste?"
    ];
    quickOptions.innerHTML = "";
    opciones.forEach(opcion => {
        const button = document.createElement("button");
        button.innerText = opcion;
        button.onclick = () => enviarMensaje(opcion);
        quickOptions.appendChild(button);
    });
}

// Mostrar mensaje del chatbot
function mostrarMensajeBot(mensaje) {
    const chatbox = document.getElementById("chatbotMessages");
    const mensajeDiv = document.createElement("div");
    mensajeDiv.classList.add("bot");
    mensajeDiv.innerText = mensaje;
    chatbox.appendChild(mensajeDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Enviar mensaje del usuario
function enviarMensaje(mensaje) {
    const chatbox = document.getElementById("chatbotMessages");
    const mensajeDiv = document.createElement("div");
    mensajeDiv.classList.add("user");
    mensajeDiv.innerText = mensaje;
    chatbox.appendChild(mensajeDiv);

    setTimeout(() => {
        const respuesta = respuestas[mensaje] || "Lo siento, no entiendo esa pregunta.";
        mostrarMensajeBot(respuesta);
    }, 500);
}

// Manejar el envío desde el campo de texto y el botón de "Enviar"
document.getElementById("sendBtn").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value.trim(); // Obtener lo que el usuario escribe
    if (userInput) {
        enviarMensaje(userInput); // Enviar el mensaje
        document.getElementById("userInput").value = ""; // Limpiar el campo de texto
    } else {
        alert("Por favor, escribe algo antes de enviar.");
    }
});

// Manejo del modal
const openChatBtn = document.getElementById("openChatBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("chatModal");

openChatBtn.addEventListener("click", () => {
    modal.classList.add("show");
    mostrarOpcionesRapidas(); // Mostrar las opciones rápidas al abrir el chat
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});
// Obtener el botón y el icono
const playSongBtn = document.getElementById("playSongBtn");
const playPauseIcon = document.getElementById("playPauseIcon");
const songAudio = document.getElementById("songAudio");

// Función para reproducir/pausar la canción
playSongBtn.addEventListener("click", function() {
    if (songAudio.paused) {
        // Si la canción está pausada, reproducirla
        songAudio.play();
        playPauseIcon.classList.remove("fa-play");
        playPauseIcon.classList.add("fa-pause");
        playSongBtn.innerHTML = '<i class="fa fa-pause"></i> Pausar Canción';  // Cambiar texto a "Pausar"
    } else {
        // Si la canción está sonando, pausarla
        songAudio.pause();
        playPauseIcon.classList.remove("fa-pause");
        playPauseIcon.classList.add("fa-play");
        playSongBtn.innerHTML = '<i class="fa fa-play"></i> Reproducir Canción';  // Cambiar texto a "Reproducir"
    }
});
