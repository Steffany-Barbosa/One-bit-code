let distanceInLY = prompt("Digite a distância em anos luz");

let ChosenOption = prompt(
  "Para qual unidade deseja converter?\n1. Parce(pc)\n2.Unidade Astronômica(AU)\n3.Quilômetros(Km)\n\n(Digite o número da opção desejada.)"
);

let chosenUnity;

let convertedDistance;

switch (ChosenOption) {
  case 1:
    chosenUnity = "Parcec";
    convertedDistance = distanceInLY * 0.306601;
    break;

  case 2:
    break;

  case 3:
    break;

  default:
    break;
}
