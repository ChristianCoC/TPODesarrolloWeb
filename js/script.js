document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const loadMoreButton = document.getElementById("load-more");
    let currentPage = 3; // Comenzar en la página 3

    // Función para cargar imágenes desde la API
    function loadImages() {
        const apiUrl = `https://picsum.photos/v2/list?page=${currentPage}&limit=9`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                data.forEach(image => {
                    const img = document.createElement("img");
                    img.src = image.download_url;
                    img.alt = image.author;
                    gallery.appendChild(img);
                });
                currentPage++;
            })
            .catch(error => {
                console.error("Error al cargar imágenes:", error);
            });
    }

    // Cargar las primeras imágenes al cargar la página
    loadImages();

    // Agregar un evento al botón de "Cargar Más"
    loadMoreButton.addEventListener("click", loadImages);
});
// Modal
document.getElementById("openModal").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
});
window.addEventListener("click", function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
// Carrousel de tarjetas
const prevBoton = document.getElementById('prevBoton');
const nextBoton = document.getElementById('nextBoton');
const cardContainer = document.querySelector('.carousel');

prevBoton.addEventListener('click', () => {
  cardContainer.scrollBy(-300, 0); // Desplaza hacia la izquierda
});

nextBoton.addEventListener('click', () => {
  cardContainer.scrollBy(300, 0); // Desplaza hacia la derecha
});