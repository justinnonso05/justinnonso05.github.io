function show() {
  document.getElementById('menu').classList.toggle('active')
  document.getElementById('bars').classList.toggle('active')
  document.getElementById('times').classList.toggle('active')
}
window.onscroll = () => {
  document.querySelector('button.top').style.display = "block";
}
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