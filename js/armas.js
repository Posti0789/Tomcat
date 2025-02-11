document.addEventListener("DOMContentLoaded", function() {
    const armasContainer = document.getElementById("armas-container");

    // Lista completa de armas
    const armas = [
        { "nombre": "Bastón Enroscado", "imagen": "https://static.wikia.nocookie.net/bloodborne/images/a/ac/Bast%C3%B3n_enroscado.jpg/revision/latest?cb=20190115173218&path-prefix=es", "descripcion": "Un bastón elegante que se transforma en un látigo filoso." },
        { "nombre": "Chikage", "imagen": "https://static.wikia.nocookie.net/bloodborne/images/d/d9/Chikage.jpg/revision/latest?cb=20190114224934&path-prefix=es", "descripcion": "Una katana que usa la propia sangre del portador para potenciar sus ataques." },
        { "nombre": "Cuchilla Dentada", "imagen": "https://static.wikia.nocookie.net/bloodborne/images/e/e2/Cuchilla_dentada.jpg/revision/latest?cb=20241217015850&path-prefix=es", "descripcion": "El arma icónica del cazador, versátil y letal contra bestias." },
        { "nombre": "Espada Sagrada de Ludwig", "imagen": "https://m.media-amazon.com/images/I/818UGRM5zyL._AC_UF894,1000_QL80_.jpg", "descripcion": "Una gran espada sagrada usada por Ludwig, el primer cazador de la Iglesia." },
        { "nombre": "Estacador", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJpCBzKQsC9BrZOVGBZ9aOqmAUbhlCZgjlA&s", "descripcion": "Un puño de hierro con un mecanismo de estaca explosiva." },
        { "nombre": "Garra de Bestia", "imagen": "https://pm1.aminoapps.com/6420/e4ae9d13ac35eb935b2008656e0ad0126c1c2796_hq.jpg", "descripcion": "Un arma de garras que potencia el salvajismo del usuario." },
        { "nombre": "Hacha de Cazador", "imagen": "https://pm1.aminoapps.com/6413/d93a39ab47ad31bf83d017cd42ca3b55354a846b_128.jpg", "descripcion": "Un arma de gran poder que puede extenderse para mayor alcance." },
        { "nombre": "Hoja de Entierro", "imagen": "https://pm1.aminoapps.com/6389/16d9b7fa091763b71f6e0f390ed538fbcf370cc7_00.jpg", "descripcion": "La guadaña usada por Gehrman, capaz de cortar el velo entre la vida y la muerte." },
        { "nombre": "Hoja de Piedad", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3NYsUxoTiJQCuL9uozrIjO4hibpZkYQXDA&s", "descripcion": "Dos cuchillas forjadas con fragmentos de un Gran Uno, ideales para el combate ágil." },
        { "nombre": "Lanza Dentada", "imagen": "https://static.wikia.nocookie.net/bloodborne/images/6/6e/Lanza_dentada.jpg/revision/latest?cb=20190115165334&path-prefix=es", "descripcion": "Una lanza afilada con propiedades similares a la Cuchilla Dentada." },
        { "nombre": "Lanza Fusil", "imagen": "https://static.wikia.nocookie.net/bloodborne/images/b/b8/Lanza_fusil.jpg/revision/latest?cb=20190115165905&path-prefix=es", "descripcion": "Una lanza con la capacidad de disparar balas de plata." },
        { "nombre": "Martillo Eclesiástico", "imagen": "https://static.wikia.nocookie.net/bloodborne/images/f/fc/Martillo_eclesi%C3%A1stico.png/revision/latest?cb=20150926222711&path-prefix=es", "descripcion": "Un arma santa que alterna entre espada y martillo gigante." },
        { "nombre": "Reiterpallasch", "imagen": "https://pm1.aminoapps.com/6436/d77d32f6ea17e320b50befb9bdca5e3b33cc4606_128.jpg", "descripcion": "Una espada de la Cainhurst que combina esgrima con fuego de mosquete." },
        { "nombre": "Rueda de Logarius", "imagen": "https://pbs.twimg.com/media/FaXVsk_XkAAxsvK.jpg", "descripcion": "Un arma macabra bendecida con el poder de los Vilesangre." },
        { "nombre": "Tonitrus", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzw8ocgDeaTJjeCwqsaAKd6Trcpbf5vuKj6w&s", "descripcion": "Un mazo que canaliza el poder del relámpago arcano." },
        { "nombre": "Cañón", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFmAOD2rtu8K_fo1iujdpwwSjjOCn-keBqA&s", "descripcion": "Un cañón de mano que dispara proyectiles devastadores." },
        { "nombre": "Evelyn", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROa7c9CnMHj3ad9CCBK-_sQoPGwEaHMAOy6Q&s", "descripcion": "Una pistola refinada usada por los Vilesangre." },
        { "nombre": "Fusil de Ludwig", "imagen": "https://preview.redd.it/qsiehygrch781.jpg?auto=webp&s=bbf223af5677f53563d5515ca6dd872441c19f67", "descripcion": "Un fusil largo con gran capacidad de daño a distancia." },
        { "nombre": "Pistola de Cazador", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeN2dA_DOnmBcLj46WWi55mqEgUdvHlICI_w&s", "descripcion": "Una pistola estándar usada por los cazadores." },
        { "nombre": "Pistola de Repetición", "imagen": "https://static.wikia.nocookie.net/bloodborne/images/8/8b/Pistola_de_repetici%C3%B3n.jpg/revision/latest?cb=20241217021839&path-prefix=es", "descripcion": "Una pistola doble que dispara dos balas a la vez." },
        { "nombre": "Rociador de Llamas", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwKWk3MHFI1o2IL5ACQDz7Up4u6p8ShR7aA&s", "descripcion": "Un arma que emite un chorro de fuego continuo." },
        { "nombre": "Romero", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCYnJTZSBYAhG418qQeMhjyaahuNKmjdR3cg&s", "descripcion": "Un rociador arcano que libera vapores sagrados." },
        
    ];

    // Cargar armas en la página
    armas.forEach(arma => {
        const armaElemento = document.createElement("div");
        armaElemento.classList.add("arma");

        armaElemento.innerHTML = `
            <img src="${arma.imagen}" alt="${arma.nombre}">
            <h3>${arma.nombre}</h3>
            <p>${arma.descripcion}</p>
        `;

        armasContainer.appendChild(armaElemento);

        // Easter Egg Mejorado 
        if (arma.nombre === "Rueda de Logarius") {
            armaElemento.addEventListener("click", () => activarEasterEgg());
        }
    });
});


function activarEasterEgg() {
    document.body.style.background = "url('https://static1.srcdn.com/wordpress/wp-content/uploads/2019/01/Orphan-of-Kos-Bloodborne.jpeg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    
    const mensaje = document.createElement("div");
    mensaje.classList.add("mensaje-easter-egg");
    mensaje.innerHTML = "¡Juras Lealtad a los Vilesangre!";
    document.body.appendChild(mensaje);

    setTimeout(() => {
        document.body.style.background = "url('../images/bloodborne-bg.jpg') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        mensaje.remove();
    }, 10000);
}
