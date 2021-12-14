const body = document.querySelector('body');
const navigation = document.querySelector('.toggle');

  navigation.addEventListener('click', function() {
  body.classList.toggle('open-menu');
 });

const menuLink = document.querySelectorAll('.menu-link');

menuLink.forEach(e => e.addEventListener("click", function(){
    body.classList.remove('open-menu');
}));

