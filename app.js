const card = document.querySelector(".card");
const container = document.querySelector(".container");
// const title = document.querySelector('.title');
// const uwu = document.querySelector('.uwu img');
// const buttons = document.querySelector('.buttons');
// const title = document.querySelector('.invite');

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /30;
    let yAxis = (window.innerHeight / 2 - e.pageY) /30;
    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = '0.1s ease';
});

//Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
