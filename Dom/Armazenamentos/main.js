//Adicionando eventos ao button Guardar
document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});
// sessionStorage é um objeto, logo recebe caracteristicas.
// Adicionando evento ao button ler do session storage
document.getElementById("readSesssion").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert("A informação salva é: " + info);
});

//Local Storage
document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  localStorage.setItem("text", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const text = localStorage.getItem("text");
  alert("A informação salva é: " + text);
});

/*Cookies
 cookieName = value; (assim consigo passar outras informações)
 expires = UTCStringDate; path =  /
*/
//button 01
document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  const cookie = "info=" + input.value + ";";
  const expiration = "expires" + new Date(2024, 17, 1) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input = "";
});

// button 02
document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  const cookie = "text=" + input.value + ";";
  const expiration = "expires" + new Date(2024, 17, 1) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input = "";
});
