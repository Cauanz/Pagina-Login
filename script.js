const buttonToggle = document.querySelector('.themeToggle');
const icon = document.querySelector('ion-icon');
const button = document.querySelector('#entrar-button');
const footer = document.querySelector('footer');
const container = document.querySelector('#principal');

const googleLogo = document.getElementById('google-logo');
const facebookLogo = document.getElementById('facebook-logo');
const twitterLogo = document.getElementById('twitter-logo');
const Link = document.querySelector('a');


buttonToggle.addEventListener('click', () => {
   document.body.classList.toggle('bodyBlack');
   button.classList.toggle('textBlack');
   button.classList.toggle('buttonBlack');
   footer.classList.toggle('textBlack');
   container.classList.toggle('containerBlack');
   googleLogo.classList.toggle('logoGoogleBlack');
   facebookLogo.classList.toggle('logoFacebookBlack');
   twitterLogo.classList.toggle('logoTwitterBlack');
   Link.classList.toggle('linkBlack');
   icon.name = icon.name === 'moon-outline' ? 'sunny-outline' : 'moon-outline';
});