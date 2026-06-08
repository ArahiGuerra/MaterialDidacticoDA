const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const video = card.querySelector("video");

        if(!card.classList.contains("flipped")){

            card.classList.add("flipped");

            setTimeout(() => {
                video.currentTime = 0;
                video.play();
            }, 400);

        }else{

            video.pause();
            video.currentTime = 0;

            card.classList.remove("flipped");
        }
    });
});