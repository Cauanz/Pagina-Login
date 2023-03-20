localStorage.setItem("username", "fulano");
localStorage.setItem("password", "senha123");


function login(){

   const user = document.getElementById('emailtxt').value;
   const password = document.getElementById('senhatxt').value;

   if (loginValid) {
      window.location.href = "http://www.google.com.br";
   }
}