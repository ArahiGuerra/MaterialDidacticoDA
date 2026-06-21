const cards = document.querySelectorAll(".card");
const toggleAudioBtn = document.getElementById("toggleAudio");

let audioActivo = true;
let tarjetaActual = null;

// Botón para activar/desactivar sonido
toggleAudioBtn.addEventListener("click", () => {

    audioActivo = !audioActivo;

    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        video.muted = !audioActivo;
    });

    toggleAudioBtn.textContent = audioActivo
        ? "🔊 Sonido activado"
        : "🔇 Sonido desactivado";
});

cards.forEach(card => {

    card.addEventListener("click", () => {

        const video = card.querySelector("video");

        // Si la tarjeta NO está volteada
        if (!card.classList.contains("flipped")) {

            // Cerrar la tarjeta anterior
            if (tarjetaActual && tarjetaActual !== card) {

                const videoAnterior = tarjetaActual.querySelector("video");

                videoAnterior.pause();
                videoAnterior.currentTime = 0;

                tarjetaActual.classList.remove("flipped");
            }

            tarjetaActual = card;

            card.classList.add("flipped");

            setTimeout(() => {

                video.currentTime = 0;
                video.muted = !audioActivo;

                video.play().catch(() => {});

            }, 400);

        } else {

            video.pause();
            video.currentTime = 0;

            card.classList.remove("flipped");

            if (tarjetaActual === card) {
                tarjetaActual = null;
            }
        }
    });
});
