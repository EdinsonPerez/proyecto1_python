// Supongamos que tienes un array de productos (puedes agregar más)
const productos = [
    { nombre: "Guitarra Modelo A", precio: 799.99, imagen: "guitarra1.jpg" },
    { nombre: "Guitarra Modelo B", precio: 899.99, imagen: "guitarra2.jpg" },
    // Agrega más productos aquí
];

const main = document.querySelector("main");

function mostrarProductos() {
    main.innerHTML = "";
    productos.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");

        const imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre; // Agregar un atributo alt a las imágenes
        productoDiv.appendChild(imagen);

        const nombre = document.createElement("h2");
        nombre.textContent = producto.nombre;
        productoDiv.appendChild(nombre);

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio.toFixed(2)}`;
        productoDiv.appendChild(precio);

        main.appendChild(productoDiv);
    });
}

// URL de la API de GuitarList
const apiUrl = 'https://api.guitarlistapp.com/guitars';

// Realizar una solicitud GET a la API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Aquí puedes manejar los datos obtenidos de la API
    console.log(data);
  })
  .catch(error => {
    console.error('Error al obtener datos de la API:', error);
  });


mostrarProductos();
