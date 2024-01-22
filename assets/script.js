// Selecionando os elementos do DOM
let display = document.querySelector(".display");
let input = document.querySelectorAll(".input");
let clear = document.querySelector(".clear");
let deletar_digito = document.querySelector(".deletar-digito");
let igual = document.querySelector(".igual");

// Função para atualizar o valor do display
function atualizarDisplay(valor) {
  if (display.value === "0") {
    display.value = valor;
  } else {
    display.value += valor;
  }
}

// Adicionar classe de blink quando o valor é "0" (ou seja animação lá do css é ativa aqui)
if (display.value === "0") {
    display.classList.add("blink");
  } else {
    display.classList.remove("blink");
}

// Adicionando listener de evento para cada botão
input.forEach((inputs) => {
  inputs.addEventListener("click", () => {
    atualizarDisplay(inputs.value);

    display.classList.remove("blink")
  });
});

// Limpar o display (Apagar todos os Números atuais na calculadora)
clear.addEventListener("click", () => {
  display.value = "";
});

// Deletar o último dígito do display (deletar individualmente cada digito)
deletar_digito.addEventListener("click", () => {
  display.value = display.value.toString().slice(0, -1);

  display.classList.remove("blink")
});

// Calcular e exibir o resultado
igual.addEventListener("click", () => {
  display.value = eval(display.value);

  display.classList.remove("blink")
});