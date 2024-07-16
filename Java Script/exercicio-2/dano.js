const atacante = prompt("Qual o nome do personagem atacante");
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"));

const defesa = prompt("Qual o nome do personagem de defesa?");
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"));
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"));
const possuiEscudo = prompt("Ele possui Escudo? (Sim/Não)");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defesa);
alert(
  atacante +
    "\nPoder de ataque: " +
    poderDeAtaque +
    "\n\n" +
    defesa +
    "\nPontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    poderDeDefesa +
    "\nPossui escudo: " +
    possuiEscudo
);
