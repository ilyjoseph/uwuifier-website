const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const command = document.querySelector(".commands");
const home = document.querySelector(".home");


container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /30;
    let yAxis = (window.innerHeight / 2 - e.pageY) /30;
    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    card.style.transition = "0.1s ease";

    title.style.transform = "translateZ(40px)";
    command.style.transform = "translateZ(35px)";
    home.style.transform = "translateZ(30px)";
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ(0px)";
    command.style.transform = "translateZ(0px)";
    home.style.transform = "translateZ(0px)";
});