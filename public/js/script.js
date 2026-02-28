const btnHamburguer = document.querySelector('#btnHamburguer')
const menu = document.querySelector('#menuHamburguer')

btnHamburguer.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

const btnNovoCliente = document.getElementById("btnNovoCliente");
const modal = document.getElementById("modalCliente");
const fechar = document.getElementById("fecharModal");

btnNovoCliente.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

fechar.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});