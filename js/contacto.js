document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contacto-form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
        
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }
        
        alert("¡Mensaje enviado con éxito, cazador!");
        form.reset();
    });
});
