alert("Bem vindo, a seguir pediremos que nos informe alguns dados");
let name = prompt("Qual o seu nome? ");
let age = prompt("Informe a sua idade: ");
let ageConfirmation = confirm("Você tem " + age + " anos.");

alert(
  "Nome: " + name + "\nIdade: " + age + "\nIdade confirmada: " + ageConfirmation
);
