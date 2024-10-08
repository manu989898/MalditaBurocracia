// Usamos un IIFE (Immediately Invoked Function Expression) para evitar contaminar el espacio global
(function() {
    // Lista de posts con contador de "Me ha ayudado"
    let posts = [
        { id: 1, title: "Cómo renovar tu DNI", url: "post/RenovarDni.html", helpfulCount: 0 },
        { id: 2, title: "Cómo pedir cita en la ITV", url: "post/itv.html", helpfulCount: 0 },
        { id: 3, title: "Cómo sacar el pasaporte", url: "post/pasaport.html", helpfulCount: 0 },
        { id: 4, title: "Cómo pagar una multa", url: "post/multaTrafico.html", helpfulCount: 0 },
        { id: 5, title: "Cómo registrarse en el sistema Cl@ve", url: "post/clave.html", helpfulCount: 0 }
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