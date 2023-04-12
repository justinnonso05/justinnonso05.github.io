function show() {
  document.getElementById('menu').classList.toggle('active')
  document.getElementById('bars').classList.toggle('active')
  document.getElementById('times').classList.toggle('active')
}

const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu a');

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    document.getElementById('bars').classList.toggle('active');
    document.getElementById('times').classList.toggle('active');
    //times.classList.remove('active');
    //bars.classList.add('show')
  });
});

