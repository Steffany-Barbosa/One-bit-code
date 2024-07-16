//Valor do input (text vazio)
const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "Olá Mundo";

  console.log(input.value);
  console.log(input.getAttribute("value"));
});

//Type - button
document.getElementById("type").addEventListener("click", function () {
  //input.type = input.type !== "radio" ? "radio" : "text";
  input.setAttribute("type", "radio");

  //  !== -> significa diferente
  // no caso se ele for diferente de radio, transforma ele tem text
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digite Algo...";
});

document.getElementById("desable").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled);
});

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  console.log("O valor do atributo something-else é: " + data);
  input.dataset.somethingElse = "Algum outro Valor";
  console.log(
    "O valor do atributo something-else agora é: " + input.dataset.somethingElse
  );
});
