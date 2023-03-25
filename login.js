const loginButton = document.getElementById('entrar-button');

loginButton.addEventListener('click', (event) => {
   event.preventDefault();

   const username = document.getElementById('emailtxt').value;
   const password = document.getElementById('senhatxt').value;
   login(username, password)
});



function login(username, password){
   
   const users = [
      { username: 'cauan.zelazo@gmail.com', password: '1234'},
      { username: 'user2', password: 'password2'},
      { username: 'user3', password: 'password3'},
   ];

   const user = users.find((user) => {
      return user.username === username && user.password === password;
   });

   if(username === user.username && password === user.password){
      window.location.href = "pagina.html";
   } else {
      alert('Usuário ou senha inválidos');
   }
}

