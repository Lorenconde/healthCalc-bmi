// Seleção dos elementos

const form = document.querySelector("#form");
const resultado = document.querySelector("#resultado");

const pesoInput = document.querySelector("#peso");
const alturaInput = document.querySelector("#altura");

// Função cálculo IMC

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

// Função classificação IMC

function classificarIMC(imc) {

  if (imc < 18.5) return "Abaixo do peso";

  if (imc < 25) return "Peso normal";

  if (imc < 30) return "Sobrepeso";

  if (imc < 35) return "Obesidade grau I";

  if (imc < 40) return "Obesidade grau II";

  return "Obesidade grau III";
}

// Evento submit

form.addEventListener("submit", function (event) {

  event.preventDefault();

  // Corrige vírgula brasileira

  const peso = Number(
    pesoInput.value.replace(",", ".")
  );

  const altura = Number(
    alturaInput.value.replace(",", ".")
  );

  // Validação

  if (!peso || !altura) {

    resultado.innerHTML =
      "⚠️ Preencha os campos corretamente.";

    return;
  }

  // Cálculo

  const imc = calcularIMC(peso, altura);

  const classificacao =
    classificarIMC(imc);

  // Resultado

  resultado.innerHTML = `
    Seu IMC é <strong>${imc.toFixed(2)}</strong>
    <br>
    Classificação:
    <strong>${classificacao}</strong>
  `;
});