let pilotName = prompt("Qual o seu nome, piloto? ");
let velocity = 0;
let newVelocity = prompt("A que velocidade gostaria de acelerar? ");
let confirmV = confirm("Estamos acelerando para " + newVelocity + "Km/s");

if (confirmV) {
  velocity = newVelocity;
}

if (velocity <= 0) {
  alert("Nave está parada, considere, partir e aumentar a velocidade.");
} else if (velocity < 40) {
  alert("Você está devagar, podemos acelerar mais.");
} else if (velocity < 80) {
  alert("Parece uma boa velocidade para manter.");
} else if (velocity < 100) {
  alert("Velocidade alta, condidere diminuir.");
} else {
  alert("Velocidade perigosa, controle automático forçado.");
}

alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "Km/s.");
