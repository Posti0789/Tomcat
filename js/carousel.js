let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(step) {
    slides[currentIndex].classList.remove("active");

    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    slides[currentIndex].classList.add("active");
}

// Botones de navegación
document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
document.querySelector(".next").addEventListener("click", () => changeSlide(1));

// Cambio automático cada 5 segundos
setInterval(() => changeSlide(1), 5000);


document.getElementById("easter-egg").addEventListener("click", () => {
    let mensaje = document.getElementById("mensaje-secreto");
    mensaje.style.display = "block"; // Lo mostramos
    mensaje.style.animation = "fadeInMessage 1.5s ease-in-out forwards, bloodFlicker 0.8s infinite alternate";
    
    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
        mensaje.style.display = "none";
    }, 5000);
});


document.addEventListener("mousemove", (e) => {
    let ojo = document.getElementById("ojo");
    ojo.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
});

document.getElementById("ojo").addEventListener("click", () => {
    document.body.style.filter = "invert(1) contrast(1.5)";
    setTimeout(() => {
        document.body.style.filter = "none";
    }, 1000);
});
