// Información de los personajes
const personajes = [
    {
        nombre: "Hunter",
        imagen: "https://static.wikia.nocookie.net/p__/images/5/59/Bloodborne.jpeg/revision/latest?cb=20240922184003&path-prefix=protagonist",
        descripcion: "El cazador es el protagonista del juego. Su misión es eliminar monstruos y descubrir los secretos oscuros de Yharnam."
    },
    {
        nombre: "Gehrman",
        imagen: "https://static.wikia.nocookie.net/bloodborne/images/a/a0/Gehrman.jpg/revision/latest?cb=20241205172333&path-prefix=es",
        descripcion: "Gehrman es el primer cazador y el maestro de la escuela de los cazadores. Con una historia trágica, él es una figura clave en el juego."
    },
    {
        nombre: "Eileen the Crow",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dptIlbP-m7ATGR5PDlJ7JELkUKUxTiK2iw&s",
        descripcion: "Eileen the Crow es una cazadora legendaria conocida por su habilidad en combate y su lucha contra los cazadores traidores."
    },
    {
        nombre: "Doll",
        imagen: "https://i.namu.wiki/i/KOsnDaZ6TwT1wwzG6azXZ2EcU9gN9GSdmgg9cTvH8Ep_io8i-0zVvnkgGtG7jovSxbv2Nmwv85ywTEgF1idaBg.webp",
        descripcion: "La muñeca es una figura clave en el sueño del cazador, ofreciendo consuelo y guía mientras el protagonista busca su propósito."
    },
    {
        nombre: "Josefska",
        imagen: "https://static.wikia.nocookie.net/vsbattles/images/d/d5/Imposter_iosefka.png/revision/latest?cb=20160828024535",
        descripcion: "Josefska es una científica que juega un papel importante en el laboratorio en la ciudad, conocida por sus investigaciones controvertidas."
    },
    {
        nombre: "Alfred",
        imagen: "https://i.namu.wiki/i/jdcCG34Pn0GufEC60wOcGNCrh5V-TwPIfBfvMTLs_IYPXnTVxRbT4LPXuubHt6cM0k_TFman2uh-sL88po-luA.webp",
        descripcion: "Alfred es un cazador y miembro de la iglesia que busca vengar a su maestro. Es conocido por su habilidad en combate con armas de fuego."
    },
    {
        nombre: "Patches",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSQJvCw1JFJxwyLiVt5Q7HobQBE8ZDP-Xtpy-OYD72CdRDRhQ6hA2OjduNYTcGLwZdiA&usqp=CAU",
        descripcion: "Patches es un pícaro que aparece en varias ubicaciones. Es conocido por sus trampas y traiciones durante la historia del juego."
    },
    {
        nombre: "Simon",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzebYaelalq3YjsZGAsvWbufXEkN3uSM5rDOJh-Nyfbqvqs3cQGGK_z6VZ0T2s6rJPqUQ&usqp=CAU",
        descripcion: "Simon es un cazador que se dedica a la lucha contra los enemigos de Yharnam. Tiene una historia de sacrificios y valentía."
    }
];

// Cargar y mostrar los personajes en la página
const container = document.getElementById('personajes-container');
personajes.forEach(personaje => {
    const card = document.createElement('div');
    card.classList.add('personaje-card');

    // Crear contenido para la tarjeta
    card.innerHTML = `
        <img src="${personaje.imagen}" alt="${personaje.nombre}">
        <h3>${personaje.nombre}</h3>
        <p>${personaje.descripcion}</p>
    `;
    
    // Agregar la tarjeta al contenedor
    container.appendChild(card);
});
