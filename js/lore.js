document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".title");
    let konamiCode = [];
    const secretCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

    // Detectar el código Konami
    document.addEventListener("keydown", function(event) {
        konamiCode.push(event.key);
        if (konamiCode.length > secretCode.length) konamiCode.shift();

        if (JSON.stringify(konamiCode) === JSON.stringify(secretCode)) {
            activarEasterEgg();
        }
    });

    function activarEasterEgg() {
        // Guardamos estilos originales para resetear después
        let originalBackground = document.body.style.background;
        let originalAnimation = document.body.style.animation;

        // Cambio de fondo
        document.body.style.background = "url('https://preview.redd.it/1uxr9obkngkd1.jpeg?auto=webp&s=2769c3f80073a26aed30170f3629af22bb7e6b48') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";

        // Pantalla temblando
        document.body.style.animation = "shake 0.5s infinite alternate";

        // Mensaje oculto
        let hiddenMessage = document.createElement("div");
        hiddenMessage.innerHTML = "👁️ Los Grandes te observan...";
        hiddenMessage.style.position = "fixed";
        hiddenMessage.style.top = "50%";
        hiddenMessage.style.left = "50%";
        hiddenMessage.style.transform = "translate(-50%, -50%)";
        hiddenMessage.style.fontSize = "36px";
        hiddenMessage.style.color = "#c0392b";
        hiddenMessage.style.fontFamily = "'Uncial Antiqua', serif";
        hiddenMessage.style.opacity = "0";
        hiddenMessage.style.transition = "opacity 5s ease-in-out";
        document.body.appendChild(hiddenMessage);

        setTimeout(() => {
            hiddenMessage.style.opacity = "1";
        }, 1000);

        // Reset a los 10 segundos
        setTimeout(() => {
            document.body.style.background = originalBackground;
            document.body.style.animation = originalAnimation;
            hiddenMessage.remove();
        }, 10000);
    }
});
