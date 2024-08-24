// Lista de  (simulando los archivos en la carpeta post)
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

// Función para inicializar la página
function init() {
    loadAllPosts();
    
    // Vincular la función de búsqueda al botón
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', searchPosts);
    
    // Añadir funcionalidad de búsqueda al presionar Enter en el campo de búsqueda
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchPosts();
        }
    });
}d
// Cargar todos los posts al iniciar la página
window.onload = loadAllPosts;
