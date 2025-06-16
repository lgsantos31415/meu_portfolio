const nao = document.getElementById("nao");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

nao.onclick = () => {
  const randX = getRandom(12, 88);
  const randY = getRandom(12, 88);

  console.log(randX, randY);

  nao.style.left = `${randX}%`;
  nao.style.top = `${randY}%`;
};

sim.onclick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=554988743324&text=Claro+que+te+desculpo+meu+amor%2C+voc%C3%AA+%C3%A9+minha+vida%2C+meu+tudo%2C+nosso+amor+vale+mais+que+ouro%21&type=phone_number&app_absent=0",
    "_blank"
  );
};
