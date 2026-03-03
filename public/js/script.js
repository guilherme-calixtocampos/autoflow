const btnHamburguer = document.querySelector('#btnHamburguer')
const menu = document.querySelector('#menuHamburguer')

btnHamburguer.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

const btnNovoCliente = document.getElementById("btnNovoCliente");
const modal = document.getElementById("modalCliente");
const fecharCliente = document.getElementById("fecharModalCliente");

btnNovoCliente.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

fecharCliente.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});


// Modal Usuário


