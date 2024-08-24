// Lista de posts (simulando los archivos en la carpeta post)
const posts = [
    { title: "Cómo renovar tu DNI", url: "post/renovar-dni.html" },
    { title: "Cómo pedir cita en la ITV", url: "post/cita-itv.html" },
    { title: "Cómo sacar el pasaporte", url: "post/sacar-pasaporte.html" },
    { title: "Cómo pagar una multa", url: "post/pagar-multa.html" },
    { title: "Cómo registrarse en el sistema Cl@ve", url: "post/registro-clave.html" }
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

// Cargar todos los posts al iniciar la página
window.onload = loadAllPosts;
