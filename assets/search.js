// Usamos un IIFE (Immediately Invoked Function Expression) para evitar contaminar el espacio global
(function() {
    // Lista de posts (simulando los archivos en la carpeta post)
    const posts = [
        { title: "Cómo renovar tu DNI", url: "post/RenovarDni.html" },
        { title: "Cómo pedir cita en la ITV", url: "post/itv.html" },
        { title: "Cómo sacar el pasaporte", url: "post/pasaport.html" },
        { title: "Cómo pagar una multa", url: "post/multaTrafico.html" },
        { title: "Cómo registrarse en el sistema Cl@ve", url: "post/clave.html" }
    ];

    // Función para cargar todos los posts
    function loadAllPosts() {
        const postList = document.getElementById('postList');
        postList.innerHTML = '';
        posts.forEach(post => {
            const postElement = createPostElement(post);
            postList.appendChild(postElement);
        });
    }

    // Función para crear un elemento de post
    function createPostElement(post) {
        const article = document.createElement('article');
        article.className = 'post';
        article.innerHTML = `
            <h3>${post.title}</h3>
            <p>Guía paso a paso para ${post.title.toLowerCase()}...</p>
            <a href="${post.url}">Leer más</a>
        `;
        return article;
    }

    // Función de búsqueda
    function searchPosts() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const filteredPosts = posts.filter(post => 
            post.title.toLowerCase().includes(searchTerm)
        );
        
        const postList = document.getElementById('postList');
        postList.innerHTML = '';
        
        if (filteredPosts.length === 0) {
            postList.innerHTML = '<p>No se encontraron resultados.</p>';
        } else {
            filteredPosts.forEach(post => {
                const postElement = createPostElement(post);
                postList.appendChild(postElement);
            });
        }
    }
     // Función para manejar el clic en "Me ha ayudado"
    function handleHelpfulClick(event) {
        if (event.target.classList.contains('helpful-button')) {
            const postId = parseInt(event.target.getAttribute('data-post-id'));
            const post = posts.find(p => p.id === postId);
            if (post) {
                post.helpfulCount++;
                const countSpan = event.target.nextElementSibling;
                countSpan.textContent = post.helpfulCount;
                
                // Aquí podrías añadir código para guardar el conteo en localStorage o enviarlo a un servidor
            }
        }
    }
    // Función para inicializar la página
    function init() {
        loadAllPosts();
        
        // Vincular la función de búsqueda al botón
        const searchButton = document.getElementById('searchButton');
        if (searchButton) {
            searchButton.addEventListener('click', searchPosts);
        }
        
        // Añadir funcionalidad de búsqueda al presionar Enter en el campo de búsqueda
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchPosts();
                }
            });
        }
    }

    // Inicializar la página cuando se carga el DOM
    document.addEventListener('DOMContentLoaded', init);
})();