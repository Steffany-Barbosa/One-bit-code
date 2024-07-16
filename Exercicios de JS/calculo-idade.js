alert("Brincando com as idades");
let nameMV = prompt("Informe o nome da pessoa mais velha: ");
let idadeMV = prompt("Informe a idade da pessoa mais velha: ");

let nameMN = prompt("Informe o nome da pessoa mais nova:");
let idadeMN = prompt("Informe a idade da pessoa mais nova:");

let idadeDiference = idadeMV - idadeMN;

alert(
  "A pessoa mais velha é: " +
    nameMV +
    " com " +
    idadeMV +
    " anos." +
    "\n\nA pessoa mais nova é: " +
    nameMN +
    " com " +
    idadeMN +
    " anos." +
    "\n\nA diferença de idade é de: " +
    idadeDiference +
    " anos."
);
