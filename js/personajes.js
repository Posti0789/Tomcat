// Información de los personajes
const personajes = [
    {
        nombre: "Hunter",
        imagen: "https://preview.redd.it/a-bloodborne-inspired-hunter-would-be-stellar-v0-5g1fnghij1qd1.jpeg?width=640&crop=smart&auto=webp&s=b4768d8f961bdf1239535f40f895d19502bedf26",
        descripcion: "El cazador es el protagonista del juego. Su misión es eliminar monstruos y descubrir los secretos oscuros de Yharnam."
    },
    {
        nombre: "Gehrman",
        imagen: "https://pm1.aminoapps.com/6479/6e7ec36ea5aceb0214bafa21d1d0e8ff09e4c025_00.jpg",
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
        imagen: "https://static.wikia.nocookie.net/bloodborne/images/b/bc/Image-char01.jpg/revision/latest/scale-to-width-down/1200?cb=20150330182034",
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
