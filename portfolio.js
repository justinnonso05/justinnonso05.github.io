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
};

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
const toggleSwitch = document.querySelector('.toggle-switch');
const darkModeStylesheet = document.querySelector('#dark-mode-stylesheet');
const isDarkMode = localStorage.getItem('isDarkMode');

// Set the default style based on the initial state of the toggle switch
if (isDarkMode === 'true') {
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    darkModeStylesheet.setAttribute('href', 'dark-mode.css');
    localStorage.setItem('isDarkMode', 'true');
    //document.body.style.backgroundColor = "rgb(5, 0, 15)"
  } else {
    darkModeStylesheet.setAttribute('href', 'light-mode.css');
    localStorage.setItem('isDarkMode', 'false');
    //document.body.style.backgroundColor = "rgb(227, 224, 231)"
  }
});

// Apply the appropriate style on page load
if (toggleSwitch.checked) {
  darkModeStylesheet.setAttribute('href', 'dark-mode.css');
  document.querySelector('.content-hidden').style.display = "block";
} else {
  darkModeStylesheet.setAttribute('href', 'light-mode.css');
  document.querySelector('.content-hidden').style.display = "block";
}

window.addEventListener('load', function() {
  var options = document.getElementById('optionSelect');
  options.selectedIndex = 0; 
});
      