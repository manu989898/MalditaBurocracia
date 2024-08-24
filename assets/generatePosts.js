const posts = [
    {
        title: "Cómo renovar tu DNI",
        description: "Guía paso a paso para renovar tu Documento Nacional de Identidad sin complicaciones...",
        link: "post/RenovarDni.html"
    },
    {
        title: "Cómo pedir cita en la ITV",
        description: "Guía paso a paso para solicitar una cita en la Inspección Técnica de Vehículos...",
        link: "post/itv.html"
    },
    {
        title: "Cómo sacar el pasaporte",
        description: "Guía paso a paso para tramitar tu pasaporte de forma rápida y sencilla...",
        link: "post/pasaport.html"
    },
    {
        title: "Cómo pagar una multa",
        description: "Guía paso a paso para abonar una multa de tráfico de forma segura...",
        link: "/post/multaTrafico.html"
    },
    {
        title: "Cómo registrarse en el sistema Cl@ve",
        description: "Guía paso a paso para crear tu cuenta en Cl@ve, la plataforma de identificación electrónica...",
        link: "/post/clave.html"
    }
];

// Función para generar las cartas de los posts
function generatePostCards() {
    const postList = document.getElementById('postList');

    posts.forEach((post, index) => {
        const postCard = document.createElement('div');
        postCard.className = 'post';

        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <a href="${post.link}">Leer más</a>
            <div class="like-container">
                <button class="like-button" data-post-index="${index}">Me gusta</button>
                <span class="like-count" id="like-count-${index}">0</span> me gusta
            </div>
        `;

        postList.appendChild(postCard);
    });

    // Añade el evento para manejar los clics en los botones de "Me gusta"
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-post-index');
            const likeCountSpan = document.getElementById(`like-count-${index}`);
            let currentCount = parseInt(likeCountSpan.textContent, 10);
            currentCount++;
            likeCountSpan.textContent = currentCount;

            // Aquí podrías añadir código para guardar el conteo en localStorage o enviarlo a un servidor
        });
    });
}

document.addEventListener('DOMContentLoaded', generatePostCards);
