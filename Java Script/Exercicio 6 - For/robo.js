const numero = parseFloat(
  prompt(
    "Olá, sou o Robô da Tabuada!\n" +
      "Informe o número que você deseja calcular: "
  )
);

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += "->" + numero + " * " + fator + " = " + numero * fator + "\n";
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado);
