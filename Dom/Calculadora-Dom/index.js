const main = document.querySelector("main"); //usando p/ trocar o tema
const root = document.querySelector(":root"); //colocar igual no css
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

/* Impedir que o usuário aperte ou clique em nº 
ou letras que não estão na calculadora. */
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

//funcionando os botões, quando clicados.
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    //function anonima
    const value = charKeyBtn.dataset.value;
    input.value += value;
    //associar o valor do botão ao input
  });
});

document.getElementById("clear").addEventListener("click", function () {
  input.value = " ";
  input.focus(); //coloca o cursor, onde digita fica piscando
}); //button Clear

input.addEventListener("keydown", function (ev) {
  // evento de quando aperta tecla.
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    //ev.key --- tecla que o usuário digitou
    input.value += ev.key;
    // se o usuário digitar o que está dentro do array vai aparecer
    return; //colocando a tecla digitada no input
  }
  if (ev.key === "Backspace") {
    //apagar
    input.value = input.value.slice(0, -1);
    /* se o ev.key for exatamente igual ao backspace, apague
    Vai apagar da 1º posição no caso o zero, até o penúltimo nº */
  }
  if (ev.key === "Enter") {
    //fazendo funcionar a tecla enter
    calculate(); //chamando o enter p/ fazer o calculo.
  }
});

document.getElementById("equal").addEventListener("click", calculate); //resultado =

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

//button Copy
document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget; //quem acionou o botão
    if (button.innerText === "Copy") {
      button.innerText = "Copied!"; //avisa que o texto foi copiado
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value); // valor do input de resultado
    } else {
      button.innerText = "Copy"; //volta p/ texto padrão, volta ao normal.
      button.classList.remove("success");
    }
  });

//trocando tema, usando variaveis do CSS
document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9"); //fundo branco
    root.style.setProperty("--border-color", "#aaa"); //borda
    root.style.setProperty("--font-color", "#212529"); // font preta
    root.style.setProperty("--primary-color", "#26834a"); //cor das teclas verdes
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529"); //fundo preto
    root.style.setProperty("--border-color", "#666"); //borda
    root.style.setProperty("--font-color", "#f1f5f9"); //font branca
    root.style.setProperty("--primary-color", "#4dff91"); // cor das teclas verdes
    main.dataset.theme = "dark";
  }
});
