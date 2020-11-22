const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const description = document.querySelector(".info h3");
const uwu = document.querySelector(".uwu img");
const buttons = document.querySelector(".buttons");
const invite = document.querySelector(".invite button");


container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /30;
    let yAxis = (window.innerHeight / 2 - e.pageY) /30;
    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    card.style.transition = "0.1s ease";

    title.style.transform = "translateZ(75px)";
    description.style.transform = "translateZ(50px)";
    uwu.style.transform = "translateZ(50px)";
    buttons.style.transform = "translateZ(50px)";
    invite.style.transform = "translateZ(80px)";
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    uwu.style.transform = "translateZ(0px)";
    buttons.style.transform = "translateZ(0px)";
    invite.style.transform = "translateZ(0px)";
});
