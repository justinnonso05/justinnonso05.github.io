function show() {
  document.getElementById('menu').classList.add('active')
  document.getElementById('bars').classList.add('active')
};
document.getElementById("times").onclick = function() {
  document.getElementById('menu').classList.remove('active')
  document.getElementById('bars').classList.remove('active')
};

window.onscroll = () => {
  document.querySelector('#to-top').style.display = "block";
  document.querySelector('#header').style.boxshadow = "0px 0px 1px 1px rgba(156, 151, 151, 0.479)";
};
// const body = document.querySelector('.body');
// body.addEventListener('click', () => {
//   menu.classList.remove('active'); 
// });

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

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

document.querySelector("form").addEventListener("submit", function(event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});
// window.addEventListener('load', function() {
//   var aboutContainer = document.querySelector('.about').offsetHeight;
//   var image = document.querySelector('.image');
//   image.style.height = aboutContainer + 'px';
// });