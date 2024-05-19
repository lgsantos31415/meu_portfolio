let sobremim = document.querySelector("header > span:nth-child(1)");
let circle = document.querySelector("header > div:nth-child(2)");
let conhecimento = document.querySelector("header > span:nth-child(3)");

let section1 = document.getElementById("portfolio");
let section2 = document.getElementById("sobre");
let section3 = document.getElementById("conhecimento");

circle.onclick = () => section1.scrollIntoView({ behavior: "smooth" });

sobremim.onclick = () => section2.scrollIntoView({ behavior: "smooth" });

conhecimento.onclick = () => section3.scrollIntoView({ behavior: "smooth" });
