let saldo = parseFloat(prompt("Informe a quantidade inicial: "));
let opcao = "3";

do {
  opcao = prompt(
    "Saldo disponível: R$ " +
      saldo +
      "\n1.Adicionar Dinheiro" +
      "\n2. Fazer Retirada" +
      "\n3. Sair"
  );
  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado: "));
      break;
    case "2":
      saldo -= parseFloat(prompt("Informe o valor a ser retirado: "));
      break;
    case "3":
      alert("Saindo");
      break;

    default:
      alert("Encerrando o programa");
  }
} while (opcao !== "3");
