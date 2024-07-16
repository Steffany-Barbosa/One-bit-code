function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe o valor da base do tringulo: "));
  const altura = parseFloat(prompt("Informe o valor da altura do tringulo: "));
  return (base * altura) / 2;
}
function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe o valor da base do retângulo: "));
  const altura = parseFloat(prompt("Informe o valor da altura do retângulo: "));
  return base * altura;
}
function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe a área do quadrado: "));
  return lado * lado;
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("Informe o valor da base maior: "));
  const baseMenor = parseFloat(prompt("Informe o valor da base menor: "));
  const altura = parseFloat(prompt("Informe a altura do trapézio: "));
  return ((baseMaior + baseMenor) * altura) / 2;
}
function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do circulo: "));
  return 3.14 * raio * raio; // (considere pi = 3.14)
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n\n" +
      "1.Calcular área do triângulo\n" +
      "2.Calcular área do retângulogulo\n" +
      "3.Calcular área do quadrado\n" +
      "4.Calcular área do trapézio\n" +
      "5.Calcular área do circulo\n" +
      "6.Sair\n"
  );
}

function executar() {
  let opcao = " ";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        alert("Encerrando . . . ");
        break;
      default:
        alert("Opção Inválida!");
        break;
    }

    if (resultado) {
      alert("Resultado " + resultado);
    }
  } while (opcao !== "6");
}

executar();
